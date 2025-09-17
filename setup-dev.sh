#!/bin/bash

echo "🛠️ Setting up Wallet UI Development Environment..."

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 2: Install Crypto SDK
echo "🔗 Installing Crypto SDK..."
npm install crypto-sdk

# Step 3: Start development server
echo "🚀 Starting dev server..."
npm run dev

# Step 4: Run unit tests
echo "🧪 Running tests..."
npm run test

echo "✅ Development setup complete!"