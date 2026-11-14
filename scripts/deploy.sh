#!/usr/bin/env bash
set -e

# Pick native git binary if /usr/local/bin/git is x86
if [ -x "/usr/bin/git" ]; then
  GIT_CMD="/usr/bin/git"
else
  GIT_CMD="git"
fi

echo "🔨 Building production bundle with Vite..."
npm run build

echo "🚀 Deploying 'dist' directory to 'gh-pages' branch..."
TEMP_DIR=$(mktemp -d /tmp/gh-pages-deploy.XXXXXX)

$GIT_CMD worktree add -B gh-pages "$TEMP_DIR"
cp -r dist/* "$TEMP_DIR/"
cd "$TEMP_DIR"

$GIT_CMD add -A
if $GIT_CMD diff --staged --quiet; then
  echo "No new changes to deploy."
else
  $GIT_CMD commit -m "Deploy production build to gh-pages"
  $GIT_CMD push origin gh-pages --force
  echo "✅ Successfully deployed to origin/gh-pages!"
fi

cd - > /dev/null
$GIT_CMD worktree remove "$TEMP_DIR" --force
rm -rf "$TEMP_DIR"

echo "🎉 Done! Make sure GitHub Pages is set to deploy from branch 'gh-pages' / (root)."
