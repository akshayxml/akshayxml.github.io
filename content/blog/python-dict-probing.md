---
title: "The Maths behind Python Dictionary probing"
date: 2026-04-17
draft: false
tags: ["python", "data-structures", "algorithms"]
---

Last month, my college friend [Adarsh](https://www.linkedin.com/in/adarsh-d/) invited me to speak about Python dictionary internals for the monthly [Python Deep Dive Series](https://trivandrumpython.github.io/events/deep-dive-python-dictionary-internals/). He was organising this series in collaboration with the [Trivandrum Python Community](https://trivandrumpython.github.io/). I happily accepted the offer and this turned out to be an excellent learning opportunity for me as well.

It was fascinating to learn about the different trade-offs that were made in the design of Python dictionaries. One particular thing that impressed me was the use of pseudo-random probing sequence to resolve hash collisions. I will be diving deeper into just this aspect of Python dictionaries in this blog post. By the way, if you would like to listen to the entire talk, you can find the recording here: [Youtube Live Stream](https://www.youtube.com/watch?v=WGodjzWGzis).

## The Equation

Python uses a particular formula to resolve collisions. It's not just a simple linear probing or quadratic probing. It's a pseudo-random probing sequence. The formula is as follows:
```python
i = (5 * i) + 1 + perturb
perturb >>= 5
```

You can find the actual code [here](https://github.com/python/cpython/blob/main/Objects/dictobject.c).

Here `i` will initially be equal to the first index where the key gets mapped, and `perturb` is initially set to the hash itself.

This equation is essentially a [Linear congruential generator](https://en.wikipedia.org/wiki/Linear_congruential_generator). The Wikipedia definition is 

`A linear congruential generator (LCG) is an algorithm that yields a sequence of pseudo-randomized numbers calculated with a discontinuous piecewise linear equation.`

Now there are a lot of fancy words in there. Lets break it down
- Pseudo-randomized: It looks random, but it’s actually a predictable loop. If you start with the same "seed" number, you get the exact same list every time.
- Discontinuous: This means the numbers "jump." Instead of going smoothly from 1 to 2 to 3, the math makes the results hop all over the place (like 5, then 22, then 2).
- Piecewise Linear: This is just a fancy way of saying the machine uses a straight-line math formula (`y = mx + c`), but the "Wrap Around" step chops that line into pieces so it stays within a certain range. 

So to put it in simple terms, it's a `formula that generates a sequence of numbers that looks random but is actually predictable.`

Let's have a deeper look at each part of the equation separately.

## The Multiplier (5 * i)

This is the part that ensures that we don't have [linear probing](https://en.wikipedia.org/wiki/Linear_probing). If we had linear probing, we would just be incrementing `i` by 1 in each step. This would lead to clustering of keys in the hash table. By multiplying `i` by 5, we are ensuring that we are jumping around the hash table in a pseudo-random manner.

But why choose 5 as the multiplier, and not 3 or 7 or any other number for that matter?

Since we are randomly jumping around a table of size `2^k` (Python hash tables are always powers of 2), we want to make sure that we visit every slot in the table before we repeat. If the sequence enters into a loop before all slots are visited, then we would have a lot of wasted space in the hash table. 

As mentioned earlier the sequence is called a linear congruential generator. And according to the Hull-Dobell theorem, a linear congruential generator `X(n+1) = (a * X(n) + c) mod m` will visit every slot in the table if and only if the following conditions are met:

1. `c` and `m` are relatively prime (their greatest common divisor is 1).
2. `a - 1` is divisible by all prime factors of `m`.
3. If `m` is divisible by 4, then `a - 1` must be divisible by 4.

Let's plug Python's numbers into this theorem:

- `m` is the size of the hash table, which is always a power of 2. Let's say `m = 2^k`. It's only prime factor is 2.
- `c` is 1, which is relatively prime to `m` (power of 2). (point 1 is satisfied)
- `a`: We need `a - 1` to be divisible by 2 and 4. (for point 2 and 3 to be satisfied)

If we want the smallest possible value for `a` that satisfies this condition, we need `a - 1` to be divisible by 4. Therefore `a = 5` is the smallest possible value for `a`.

## The Addition (+1)

This addition is basically to prevent the sequence from getting stuck at 0. If we didn't have this addition, the sequence would be `i = (5 * i + perturb) % m`. A thing to note here is that although `perturb` is initialised with the hash value, it gets right shifted in each step of probing and eventually becomes 0. This would mean that if `i` was also 0, it would always be 0. Having a `+1` ensures that this doesn't happen.

## The Variable (+perturb)

The main issues in open addressing are [primary clustering](https://en.wikipedia.org/wiki/Primary_clustering) and [secondary clustering](https://xlinux.nist.gov/dads/HTML/secondaryClustering.html). [The Multiplier](#the-multiplier-5--i) takes care of primary clustering. The Variable takes care of secondary clustering.

Secondary clustering happens when multiple keys hash to the same initial index. In this case, the probing sequence for all these keys would be the same, leading to a lot of collisions. The `perturb` takes care of this by adding a pseudo-random value to the probing sequence, ensuring that each key has a different probing sequence. And this randomness depends on the hash of the key itself. So this makes sure that each key that hashes to the same index follows a different probing sequence.

## The Right Shift (>>= 5)

In each step of probing, the `perturb` gets right shifted by 5 bits. There are couple of reasons for doing this:

1. We want the higher bits of the hash to influence the probing sequence. This is because the lower bits of the hash are more likely to be the same for different keys, since if the keys are colliding, they are likely to have the same lower bits (as Python uses bitwise & operation on hash value and table size to get the index).
2. We do want `perturb` to eventually become 0, allowing our equation to become a Linear Congruential Generator with `c=1` that follows the Hull-Dobell theorem and visit every slot in the table. 

But why right shift by 5 bits, and not by 3 or 7 or any other number for that matter? 

Now this is where I will just be lazy and direct you to the actual [source code](https://github.com/python/cpython/blob/main/Objects/dictobject.c) and copy-paste from the comment there:

```c
/*
 * Selecting a good value for PERTURB_SHIFT is a balancing act.  You want it
 * small so that the high bits of the hash code continue to affect the probe
 * sequence across iterations; but you want it large so that in really bad cases
 * the high-order hash bits have an effect on early iterations.  5 was "the
 * best" in minimizing total collisions across experiments Tim Peters ran (on
 * both normal and pathological cases), but 4 and 6 weren't significantly worse.
 */
```

## A Note on Modern Python (3.6+)

It is worth noting that the explanation above describes the probing mechanism as if it operates directly on the hash table storing the keys and values. This was the case in older versions of Python.

Since Python 3.6, dictionaries use a more compact layout. They consist of two arrays:
1. A **dense array** that stores the entries (hash, key, value) in insertion order.
2. A **sparse array** of indices.

The probing sequence formula `i = (5 * i) + 1 + perturb` is still used today, but it is used to find a bucket in the sparse array of indices, rather than the entry table itself. This separation is what allows Python dictionaries to be extremely memory-efficient while preserving insertion order!

There are a lot of interesting comments in the [source code](https://github.com/python/cpython/blob/main/Objects/dictobject.c) that explain the design decisions. I would highly recommend checking it out.