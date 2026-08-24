# Deployment

The site deploys to **Cloudflare Pages** (`awesome-canada.pages.dev`) via
Cloudflare's **git-connected builds**: Cloudflare watches this repository
directly and builds on every push — no GitHub Action in the deploy path.

This matters because pushes made by automation with the default
`GITHUB_TOKEN` (issue processors, scheduled jobs) do **not** trigger other
GitHub Actions workflows, but they *do* reach Cloudflare's webhook. With
git-connected builds, every change to `master` deploys, no matter who or
what pushed it. PRs also get free preview deployments at unique URLs.

## One-time setup (Cloudflare dashboard)

Done once by an account owner — this is an OAuth flow that can't be scripted:

1. Cloudflare dashboard → **Workers & Pages** → project **awesome-canada**
   → **Settings** → **Builds & deployments** → **Connect to Git**
   (for a fresh project: **Create** → **Pages** → **Connect to Git**).
2. Authorize the Cloudflare GitHub App for `wra-sol/awesome-canada`.
3. Build settings:
   - **Production branch:** `master`
   - **Build command:** `node scripts/validate.js && node scripts/build-site.js`
   - **Build output directory:** `site`
   - No framework preset; no environment variables needed.

Node version comes from `.nvmrc` (22). There is no `package.json` — the
build scripts are dependency-free — so the install step is a no-op.

Putting `validate.js` in the build command means a broken `resources.json`
fails the build and the previous deploy stays live.

## Manual fallback

`.github/workflows/deploy-cloudflare.yml` is kept as a manually triggered
fallback (`workflow_dispatch`) using `wrangler pages deploy` with the
`CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` secrets. Use it only if
the git connection is down; day-to-day deploys are Cloudflare-side.
