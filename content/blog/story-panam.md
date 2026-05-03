---
title: "The story (and tech) behind Panam"
date: 2026-05-03
tags: ["web-development", "serverless", "architecture"]
---

A couple of years back, I wanted to have something that I could use to track my investments and my net worth (not that it matters much, since I am not that rich :)). I had been using the Groww app to track my mutual fund investments as that allowed tracking of funds which I had not invested through Groww as well. But what about my EPF, NPS, or FD, or for that matter, anything other than mutual funds?

I researched a bit (mostly on Reddit) and realized people were using these two options:
- IND Money app.
- Google Spreadsheets.

I did not like the idea of the IND Money app (or any other such app) as that would mean exposing all my financial information to a third party. It might be safe, but I am not sure I am comfortable with that idea.

The issue with Google Spreadsheets was that although it solves the data privacy problem (although Google can always see my data, but I can't go and build my own Google Spreadsheet :( ), in the world of shiny apps, it just didn't look good. Sure, you can add charts and whatnot, but you can't help but feel that it looks like a spreadsheet. 

So I decided to build my own app. I had no idea how I would do it, but I was determined. Also, it was a great way to learn some frontend development. 

### What I wanted

My requirements for the app were simple:
- It should be possible to add various types of investments: stocks, mutual funds, EPF, NPS, FDs, etc.
- I should be able to view my investments in a good-looking dashboard.
- No one else should be able to access my data.
- Not building it for mass usage - just for myself.
- It should not cost me anything to host and run.

### How I built it

The last point in the previous section was the crucial one that decided how I would build this. I knew that there were free tiers for different cloud providers and they should be enough for an app that only I would be using. But I was afraid of the [horror stories](https://amnic.com/blogs/cloud-cost-horror-stories) of people getting billed thousands of dollars after they forgot to turn off a service or something similar. Although there are ways to prevent that, I just didn't want to take that risk or have that headache of keeping track of the billing.

That's when I thought of using Google Sheets as my database. It's free, similar to how many people track their investments, and eliminates any worries about privacy.

But what about the backend? I didn't want to maintain a server, and that's when I learned about Google Apps Script. It is a serverless platform that allows you to run scripts in the cloud. It can be triggered by various events, including HTTP requests, and can access Google services like Sheets, Docs, Gmail, etc. It seemed like the perfect fit for my needs.

From what I could find out, I couldn't find anyone who had built an entire frontend using Apps Script; people usually use it to automate some tasks on top of Google services. But I figured out that it was possible to create React-based frontends using a single, fully inlined `index.html` bundle combined with Google Apps Script's `HtmlService`.

### The Architecture

To make a complex Single-Page Application (SPA) built with React, TypeScript, and SCSS run completely serverless within the Google ecosystem, I had to solve one major limitation: Google Apps Script cannot host separate static assets (like `.js` or `.css` files) via relative URL paths. Everything served to the browser must come from standard HTML templates (`.html` files).

Here is the technical layout of how Panam overcomes this limitation:

```text
[ React TypeScript App ]
          │
          │ (Parcel Bundler: inlines all TSX, SCSS, Assets)
          ▼
[ dist/index.html (Fully Inlined) ]   [ Backend Code (main.js, helper.js, etc.) ]
          │                                            │
          └───────────────────┬────────────────────────┘
                              ▼ (clasp push)
                 [ Google Apps Script Project ]
                              │
                              ▼ (HtmlService)
                   [ Browser Web App UI ]
                              │
                              ▼ (google.script.run)
                      [ Google Sheets DB ]            
```

#### 1. Single-File Bundling with Parcel
Instead of complex Webpack configurations, I chose Parcel as the web app bundler. When Parcel builds `src/index.html`, it automatically inlines all stylesheets (compiled from SCSS), imported TSX files, SVGs, and assets directly into a single `index.html` file in the `dist/` directory. This results in a self-contained `.html` file containing the entire compiled application.

#### 2. Serving the Frontend via Apps Script
Inside `main.js`, the standard Apps Script `doGet` function reads `index.html` and returns it using Google's `HtmlService`:

```javascript
function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .setFaviconUrl(faviconUrl)
      .setTitle("Panam")
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
```

#### 3. Google Sheets as the Database
Because I wanted absolute privacy, all the financial data lives in a personal Google Sheet. The React client calls backend script functions asynchronously using the built-in `google.script.run` API.
- `fetchData()`: Scans the spreadsheet, structures the data from all sheets into a JSON payload, and sends it to the React app.
- `addInstrument()` & `deleteInstrument()`: Updates `_instrument` and `_column` metadata sheets, and dynamically inserts/deletes sheet tabs representing investment categories (e.g., stocks, FDs, mutual funds).
- `updateInstrumentTransactions()`: Automatically appends user-entered transaction rows, calculates running formulas (e.g., auto-updating IDs or formulas referencing previous cells).

---

### Key Highlights

- **Fully Automated Crons:** Uses Google Apps Script triggers to schedule daily and monthly cron jobs.
  - **Daily Tracker:** Appends the portfolio value daily to the `+dailytracker` sheet, enabling a beautiful historical growth graph in the UI.
  - **Monthly Summaries:** Automatically drafts and sends a polished HTML performance report (along with a detailed PDF attachment) on the past month's mutual fund growth and asset allocation directly to the user's inbox.
- **Calculators:** Integrates custom logic for tracking Redemption (what happens to invested amounts when units are sold) and Cost-Per-Day analysis (tracking value/cost depletion of different products over time).
- **AI Portfolio Analyst:** Panam features a custom floating chatbot component. The backend fetches the user's structured portfolio data, serializes it, and injects it directly into the system instructions for Gemini API (secured using standard Apps Script `PropertiesService` to keep the API key private).

By combining Google Apps Script with a modern React UI via Parcel, I was able to build a zero-cost, private, beautiful, and AI-enabled investment dashboard. The best part? I have absolute control over my data and not a single rupee is spent on hosting or maintenance! 

Check out the repo for Panam here: [Github](https://github.com/akshayxml/panam)