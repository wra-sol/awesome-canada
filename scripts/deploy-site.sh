#!/bin/bash
# Deploy Awesome Canada site to GitHub Pages (gh-pages branch)
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
SITE_DIR="${REPO_ROOT}/site"
BUILD_DIR="/tmp/awesome-canada-site-build"

echo "🚀 Deploying Awesome Canada site to GitHub Pages..."

# Verify site was built
if [ ! -d "${SITE_DIR}" ]; then
    echo "❌ site/ directory not found. Run: node scripts/build-site.js"
    exit 1
fi

if [ ! -f "${SITE_DIR}/data/resources.json" ]; then
    echo "❌ site/data/resources.json not found. Run: node scripts/build-site.js"
    exit 1
fi

# Copy site to temp build directory
rm -rf "${BUILD_DIR}"
mkdir -p "${BUILD_DIR}"
cp -r "${SITE_DIR}"/* "${BUILD_DIR}/"

# Get current git info for commit message
COMMIT_MSG="Deploy site — $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
if command -v git &> /dev/null && [ -d "${REPO_ROOT}/.git" ]; then
    SHORT_SHA=$(cd "${REPO_ROOT}" && git rev-parse --short HEAD 2>/dev/null || echo "unknown")
    COMMIT_MSG="Deploy site from ${SHORT_SHA} — $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
fi

# Switch to gh-pages branch (create if needed)
cd "${REPO_ROOT}"
git checkout -B gh-pages

# Remove old files and copy new ones
git rm -rf . > /dev/null 2>&1 || true
cp -r "${BUILD_DIR}"/* .

# Add .nojekyll if missing
[ -f ".nojekyll" ] || touch .nojekyll

# Commit and push
git add -A
git commit -m "${COMMIT_MSG}" || echo "No changes to commit"
git push origin gh-pages --force-with-lease

echo "✅ Site deployed to gh-pages branch"
echo "🌐 Enable GitHub Pages in repo settings: source = gh-pages branch"
