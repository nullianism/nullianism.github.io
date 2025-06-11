#!/bin/bash

echo "🔍 Checking GitHub Pages deployment status..."

# Get the latest deployment status
STATUS=$(gh api repos/nullianism/nullianism.github.io/pages --jq '.status // "not_built"')
URL=$(gh api repos/nullianism/nullianism.github.io/pages --jq '.html_url // "Not available"')
SOURCE=$(gh api repos/nullianism/nullianism.github.io/pages --jq '.source.branch // "unknown"')

echo ""
echo "📊 Deployment Status: $STATUS"
echo "🌐 Site URL: $URL"
echo "🌿 Source Branch: $SOURCE"

# Check latest workflow run
echo ""
echo "📋 Latest workflow runs:"
gh run list --limit 3

echo ""
echo "✅ Deployment should use GitHub Actions workflow"
echo "   Make sure in repository settings -> Pages -> Source is set to 'GitHub Actions'"
