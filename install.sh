#!/bin/bash

echo "🎨 Installing Gellish - Premium Gel Polish Website"
echo "=================================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installation complete!"
    echo ""
    echo "🚀 To start the development server, run:"
    echo "   npm run dev"
    echo ""
    echo "🌐 Then open http://localhost:3000 in your browser"
    echo ""
    echo "📚 Check QUICKSTART.md for more information"
else
    echo ""
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi

