## 🚀 Temporary Deployment Guide (Vercel)

> **⚠️ Notice:** Automated deployments via GitHub Actions are currently paused due to an erroneous account flag by GitHub. Until support lifts the restriction, this site is being manually deployed to **Vercel** via the CLI.

### Prerequisites
Before deploying, ensure you have the following installed locally:
* [Hugo](https://gohugo.io/installation/) (Extended version recommended)
* [Vercel CLI](https://vercel.com/docs/cli) (`npm i -g vercel`)

### Manual Deployment Steps

1. **Build the site locally:**
   Run the Hugo build command from the root of the repository to generate the static files in the `public` directory.
   ```bash
   hugo --minify
   ```

2. **Deploy to Vercel:**
    Navigate into the generated `public` folder and push directly to production.
    ```bash
    cd public
    vercel --prod
    ```

### DNS Configuration (Cloudflare)
The custom domain for this project is managed via Cloudflare. Update A and CNAME records when migrating back to github pages.