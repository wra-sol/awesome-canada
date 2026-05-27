# GitHub Pages Site Plan: Awesome Canada Directory

**Goal:** A fast, searchable, filterable directory website for awesome-canada resources, deployed to GitHub Pages.

**Status:** Planning  
**Stack:** Static HTML/JS/CSS (no build framework — vanilla for longevity)  
**Data Source:** `data/resources.json` (source of truth)  
**Deploy Target:** GitHub Pages via `gh-pages` branch  
**Schedule:** Hourly builds until stable, then daily enhancements

---

## Phase 1: MVP (Hourly until stable)

### 1.1 Site Structure

```
site/
├── index.html          # Main page: search + filters + table
├── css/
│   └── styles.css      # All styles, responsive, dark mode
├── js/
│   └── app.js          # Client-side search, filter, sort
├── data/
│   └── resources.json  # Copied from ../data/resources.json at build time
└── .nojekyll           # Disable Jekyll processing
```

### 1.2 Features

**Search:**
- Real-time text search across name, description, tags
- Debounced input (300ms)
- Highlight matching terms

**Filters:**
- Category (multi-select checkboxes, grouped by function)
- Region/Jurisdiction (multi-select, grouped by province/city)
- Level (Federal, Provincial, Municipal, Regional, Agency, Crown Corp)
- Type (dropdown: Open Data Portal, GTFS Feed, Zoning Map, etc.)

**Sort:**
- Name (A–Z / Z–A)
- Jurisdiction (grouped by region)
- Category (alphabetical)
- Date added (newest first — requires adding `dateAdded` to schema)

**Display:**
- Card grid (default): 3-col desktop, 2-col tablet, 1-col mobile
- Compact table view toggle
- Each card: name, jurisdiction badge, category badge, description, tags, external link icon
- Click card → opens resource URL in new tab

**Pagination:**
- 24 cards per page (clean 3-column grid)
- Page numbers + prev/next
- URL query params for filter state (shareable links)

**Responsive:**
- Filters collapse into hamburger menu on mobile
- Search bar sticky top
- Cards stack vertically

### 1.3 Design

- **Colors:** Match the playbook (charcoal `#1A1A1A`, warm white `#FAFAF8`, amber `#D4A24A`)
- **Fonts:** Inter (Google Fonts CDN), IBM Plex Mono for numbers
- **Cards:** border `1px solid rgba(26,26,26,0.08)`, radius `8px`, padding `16px`
- **Badges:** jurisdiction (slate bg), category (amber bg), level (subtle outline)
- **Dark mode:** CSS `prefers-color-scheme` + manual toggle

### 1.4 Build Process

```bash
# Build script: scripts/build-site.js
node scripts/build-site.js
# 1. Reads data/resources.json
# 2. Copies to site/data/resources.json
# 3. Generates index.html with inlined CSS/JS references
# 4. Ensures .nojekyll exists
# 5. Outputs to site/ directory
```

### 1.5 Deploy Process

```bash
# Deploy script: scripts/deploy-site.sh
# 1. Build the site
# 2. Switch to gh-pages branch (orphan if needed)
# 3. Copy site/ contents to root
# 4. Commit with timestamp
# 5. Push to origin/gh-pages
```

### 1.6 GitHub Pages Config

- Source: `gh-pages` branch, root folder
- Custom domain: optional future enhancement
- Enforce HTTPS: yes

### 1.7 Schema Update

Add `dateAdded` field to resources.json for sort-by-newest:
```json
{
  "name": "...",
  "dateAdded": "2026-05-20",
  ...
}
```

Backfill existing entries with approximate dates from git history.

---

## Phase 2: Daily Enhancements (after stable)

### 2.1 Visual Improvements
- **Map view:** MapLibre GL JS showing all resources with geo coordinates (for mappable resources)
- **Stats dashboard:** Resource counts by category, region, level; daily addition rate
- **Favorites:** localStorage bookmark system
- **Recent additions:** "New this week" banner

### 2.2 Data Features
- **API endpoint:** `site/api/resources.json` for programmatic access
- **RSS feed:** `site/feed.xml` for new resource notifications
- **CSV export:** Download current filtered view as CSV

### 2.3 SEO & Shareability
- Meta tags, Open Graph, Twitter Card
- Shareable filtered URLs with query params
- Structured data (Schema.org Dataset listing)

### 2.4 Performance
- Resource JSON lazy loading (paginated API)
- Service worker for offline browsing
- Image optimization for any icons/illustrations

---

## Phase 3: Future Ideas

- **Submission form:** Simple HTML form that creates a GitHub issue via API
- **Rating system:** 👍 / 👎 per resource (stored in separate JSON, not main data)
- **Related resources:** "You might also like" based on shared tags
- **Changelog page:** History of additions and removals

---

## Success Criteria for "Stable"

- [ ] Site builds successfully every run for 3 consecutive days
- [ ] All 544 resources display correctly
- [ ] Search finds resources by name, description, tags
- [ ] Filters work for all categories and regions
- [ ] Sort works for all sortable columns
- [ ] Mobile layout is usable
- [ ] Dark mode works
- [ ] Page loads in < 2 seconds on 3G
- [ ] No console errors
- [ ] Deploy to gh-pages succeeds every run

Once stable, the cron job switches from hourly builds to daily enhancements.

---

## Implementation Order

1. Create `site/` directory with basic HTML/CSS/JS
2. Create `scripts/build-site.js`
3. Create `scripts/deploy-site.sh`
4. Add `dateAdded` to schema and backfill
5. Test build locally
6. Create `gh-pages` branch and push
7. Configure GitHub Pages in repo settings
8. Create hourly cron job
9. Monitor for 3 days
10. Switch to daily enhancements
