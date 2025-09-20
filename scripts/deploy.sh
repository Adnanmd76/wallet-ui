#!/bin/bash

echo "🚀 Starting Wallet UI Production Deploy..."

# Step 1: Build project
echo "🏗️ Building project..."
npm run build

# Step 2: Deploy to Netlify (example)
echo "🌐 Deploying to Netlify..."
netlify deploy --prod --dir=dist

# Step 3: Confirm success
echo "✅ Deployment complete!"
