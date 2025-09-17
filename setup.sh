#!/bin/bash

echo "🚀 Starting Wallet-UI setup..."

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 2: Install Crypto SDK
echo "🔗 Installing Crypto SDK..."
npm install crypto-sdk

# Step 3: Run unit tests
echo "🧪 Running tests..."
npm run test

# Step 4: Build project
echo "🏗️ Building project..."
npm run build

# Step 5: Create new branch
echo "🌿 Creating new branch..."
git checkout -b docs/full-readme-update

# Step 6: Add README.md
echo "📝 Staging README.md..."
git add README.md

# Step 7: Commit changes
echo "✅ Committing changes..."
git commit -m "docs(readme): complete rewrite with full feature list and Crypto SDK integration"

# Step 8: Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin docs/full-readme-update

echo "🎉 Setup complete! Now go to GitHub and create a Pull Request."
