#!/usr/bin/env bash
# =============================================================================
# awesome-canada Auto-Maintain Script
# =============================================================================
# Runs weekly to:
#   1. Pull latest from master
#   2. Run validation
#   3. Merge queued resources from new-resources.js (if any)
#   4. Regenerate README.md
#   5. Commit and push if changes made
#   6. Run link-rot check (separate cron job for this)
#
# Usage:
#   ./scripts/auto-maintain.sh                 # dry-run (prints what would happen)
#   ./scripts/auto-maintain.sh --apply          # actually commit & push
#   ./scripts/auto-maintain.sh --force-merge    # merge staging even if no changes
# =============================================================================

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

DRY_RUN=true
FORCE_MERGE=false

for arg in "$@"; do
  case "$arg" in
    --apply) DRY_RUN=false ;;
    --force-merge) FORCE_MERGE=true ;;
  esac
done

echo "📦 awesome-canada Auto-Maintain"
echo "   Repo: $REPO_ROOT"
echo "   Mode: $([ "$DRY_RUN" = true ] && echo 'DRY RUN' || echo 'LIVE')"
echo ""

# 1) Check we're on master and pull latest
echo "🔍 Checking git status..."
if [ -n "$(git status --porcelain)" ]; then
  echo "   ⚠️  Uncommitted changes found. Stashing..."
  git stash --include-untracked
fi

BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$BRANCH" != "master" ]; then
  echo "   ⚠️  Not on master (on $BRANCH). Switching..."
  git checkout master
fi

echo "   Pulling latest..."
git pull origin master --ff-only 2>&1 | sed 's/^/   /'
echo ""

# 2) Run validation
echo "🔎 Running validation..."
if node scripts/validate.js 2>&1; then
  echo "   ✅ Validation passed"
else
  echo "   ❌ Validation failed. Aborting."
  exit 1
fi
echo ""

# 3) Check if new-resources.js has entries to merge
echo "📝 Checking staged resources..."
STAGED_COUNT=$(node -e "const n=require('./scripts/new-resources'); console.log(n.length);" 2>/dev/null || echo "0")
echo "   Staged entries in new-resources.js: $STAGED_COUNT"

if [ "$STAGED_COUNT" -eq 0 ] && [ "$FORCE_MERGE" = false ]; then
  echo "   ✅ No new resources to merge."
else
  echo "   📥 Running migrate.js to merge staged resources..."
  if [ "$DRY_RUN" = true ]; then
    echo "   [DRY-RUN] Would run: node scripts/migrate.js"
  else
    node scripts/migrate.js 2>&1 | sed 's/^/   /'
    echo "   ✅ Migration complete"
  fi
fi
echo ""

# 4) Regenerate README.md
echo "📄 Regenerating README.md..."
if [ "$DRY_RUN" = true ]; then
  echo "   [DRY-RUN] Would run: node scripts/generate-readme.js"
else
  node scripts/generate-readme.js 2>&1 | sed 's/^/   /'
fi
echo ""

# 5) Commit and push if changes
if [ "$DRY_RUN" = false ]; then
  if [ -n "$(git status --porcelain)" ]; then
    echo "📤 Committing changes..."
    git add -A
    TIMESTAMP=$(date -u '+%Y-%m-%d %H:%M UTC')
    git commit -m "Auto-maintain: merge staged resources, regenerate README [$TIMESTAMP]"
    echo "   Pushing to origin..."
    git push origin master 2>&1 | sed 's/^/   /'
    echo "   ✅ Changes pushed successfully"
  else
    echo "   ✅ No changes to commit"
  fi
else
  if [ -n "$(git status --porcelain)" ]; then
    echo "   📝 Changes pending (run with --apply to commit):"
    git status --short 2>&1 | sed 's/^/      /'
  else
    echo "   ✅ No changes pending"
  fi
fi
echo ""

echo "✅ Auto-maintain complete"
