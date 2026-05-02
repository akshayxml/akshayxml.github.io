## 🚀 Deployment Guide 

This site is built using Hugo and deployed to **Vercel** via the CLI using a single script.

### Prerequisites
Before deploying, ensure you have the following installed locally:
* [Hugo](https://gohugo.io/installation/) (Extended version recommended)
* [Vercel CLI](https://vercel.com/docs/cli) (`npm i -g vercel`)

### Deployment Steps

#### Option A: Automated (Recommended)
To build your site, deploy to Vercel, and push the source code to GitHub in a single command, run the deployment script from the root directory:
```bash
./deploy.sh
```

#### Option B: Manual Steps
If you prefer to run the build and deployment steps manually:

1. **Build the site locally:**
   Run the Hugo build command from the root of the repository to generate the static files in the `public` directory:
   ```bash
   hugo --minify
   ```

2. **Deploy to Vercel:**
   Navigate into the generated `public` folder and push directly to Vercel production:
   ```bash
   cd public
   vercel --prod
   ```

### DNS Configuration (Cloudflare)
The custom domain for this project is managed via Cloudflare. Update DNS A and CNAME records when managing custom routing.