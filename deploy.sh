#!/bin/bash
echo "🚀 Building Hugo site..."
hugo --minify

if [ $? -eq 0 ]; then
  echo "✅ Build succeeded. Deploying to Vercel..."
  cd public
  vercel --prod --yes
  cd ..
  echo "🚀 Pushing code to GitHub..."
  git push
else
  echo "❌ Hugo build failed! Aborting deployment."
  exit 1
fi
