#!/usr/bin/env bash
set -e

echo "🔨 Building production bundle with Vite..."
npm run build

echo "🚀 Deploying 'dist' directory to 'gh-pages' branch..."
TEMP_DIR=$(mktemp -d /tmp/gh-pages-deploy.XXXXXX)

git worktree add -B gh-pages "$TEMP_DIR"
cp -r dist/* "$TEMP_DIR/"
cd "$TEMP_DIR"

git add -A
if git diff --staged --quiet; then
  echo "No changes to deploy."
else
  git commit -m "Deploy production build to gh-pages"
  git push origin gh-pages --force
  echo "✅ Successfully deployed to origin/gh-pages!"
fi

cd - > /dev/null
git worktree remove "$TEMP_DIR" --force
rm -rf "$TEMP_DIR"

echo "🎉 Done! Make sure GitHub Pages is set to deploy from branch 'gh-pages' / (root)."
