## 🚀 Deployment Guide 

This site is built using Hugo and automatically deployed to **Vercel** whenever changes are pushed to the `main` branch on GitHub.

### Local Development
Before pushing, you can test the site locally:
1. Make sure you have [Hugo](https://gohugo.io/installation/) installed.
2. Run the local development server:
   ```bash
   hugo server
   ```

### Deploying Changes
#### Automated (Recommended)
Simply push your commits to GitHub:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```
Vercel is connected to the GitHub repository and will automatically trigger a build (using the build command defined in `vercel.json`) and deploy the updates to production.

#### Manual
If you want to manually deploy from your local environment (using Vercel CLI):

1. **Option A: Run the deployment script**
   ```bash
   ./deploy.sh
   ```

2. **Option B: Run steps manually**
   * Build the site:
     ```bash
     hugo --minify
     ```
   * Deploy the generated `public` folder to Vercel:
     ```bash
     cd public
     vercel --prod
     ```

### DNS Configuration (Cloudflare)
The custom domain for this project is managed via Cloudflare. It is configured to point to Vercel.