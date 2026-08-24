#!/usr/bin/env node
/**
 * Build script for the Awesome Canada site (Cloudflare Pages).
 * Copies data/resources.json into site/, writes site/data/meta.json
 * (category display names + counts), and generates the crawlable static
 * layer: per-category browse pages, sitemap.xml.
 */

const fs = require('fs');
const path = require('path');
const { CATEGORIES } = require('./categories');

const SITE_DIR = path.join(__dirname, '..', 'site');
const DATA_FILE = path.join(__dirname, '..', 'data', 'resources.json');
const SITE_DATA_FILE = path.join(SITE_DIR, 'data', 'resources.json');
const NOJEKYLL_FILE = path.join(SITE_DIR, '.nojekyll');
const BASE_URL = 'https://awesome-canada.pages.dev';

function escapeHtml(str) {
  return String(str || '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);
}

function browsePageShell({ title, description, canonicalPath, body, jsonLd }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${BASE_URL}${canonicalPath}">
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Awesome Canada">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${BASE_URL}${canonicalPath}">
  <meta property="og:image" content="${BASE_URL}/og-image.png">
${jsonLd ? `  <script type="application/ld+json">${jsonLd}</script>\n` : ''}  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
  <header class="site-header">
    <div class="container">
      <div class="header-top">
        <a href="../" class="brand" aria-label="Awesome Canada home">
          <svg class="brand-mark" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M50 4 57 18 66 13 63 26 76 22 72 34 88 32 83 44 94 50 72 62 77 74 58 68 56 84 52 82 52 96 48 96 48 82 44 84 42 68 23 74 28 62 6 50 17 44 12 32 28 34 24 22 37 26 34 13 43 18 Z"/>
          </svg>
          <span class="brand-text">
            <span class="site-title">Awesome Canada</span>
            <span class="site-subtitle">Official Canadian tools, maps &amp; open data — curated and link-checked</span>
          </span>
        </a>
      </div>
    </div>
  </header>
  <main class="container browse-page">
${body}
  </main>
  <footer class="site-footer">
    <div class="container">
      <nav class="footer-links" aria-label="Footer">
        <a href="../">Search the directory</a>
        <a href="https://github.com/wra-sol/awesome-canada">GitHub</a>
        <a href="../submit.html">Submit a link</a>
      </nav>
    </div>
  </footer>
</body>
</html>
`;
}

function buildBrowsePages(resources) {
  const browseDir = path.join(SITE_DIR, 'browse');
  fs.rmSync(browseDir, { recursive: true, force: true });
  fs.mkdirSync(browseDir, { recursive: true });

  const byCategory = new Map(CATEGORIES.map(c => [c.id, []]));
  resources.forEach(r => {
    if (byCategory.has(r.category)) byCategory.get(r.category).push(r);
  });

  const urls = [`${BASE_URL}/`, `${BASE_URL}/browse/`];

  // Category index
  const indexBody = `    <h1 class="browse-title">Browse by category</h1>
    <p class="browse-intro">All ${resources.length} resources in the directory, grouped by what they help you do. Each page is a plain list — for search and filters, use the <a href="../">main directory</a>.</p>
    <ul class="browse-cat-grid">
${CATEGORIES.map(c => {
    const n = (byCategory.get(c.id) || []).length;
    return `      <li><a href="${c.id}.html">${escapeHtml(c.title)}</a><span class="browse-meta">${n}</span></li>`;
  }).join('\n')}
    </ul>`;

  fs.writeFileSync(path.join(browseDir, 'index.html'), browsePageShell({
    title: 'Browse Canadian Government Resources by Category — Awesome Canada',
    description: `Browse all ${resources.length} curated Canadian government tools, maps and datasets by category: open data, planning, transit, taxes, heritage and more.`,
    canonicalPath: '/browse/',
    body: indexBody
  }));

  // One page per category, entries grouped by level of government
  const LEVEL_ORDER = ['Federal', 'Provincial', 'Regional', 'Municipal', 'Agency', 'Crown Corp'];
  for (const cat of CATEGORIES) {
    const items = (byCategory.get(cat.id) || []).slice()
      .sort((a, b) => a.jurisdiction.localeCompare(b.jurisdiction) || a.name.localeCompare(b.name));
    if (items.length === 0) continue;

    const byLevel = new Map();
    items.forEach(r => {
      if (!byLevel.has(r.level)) byLevel.set(r.level, []);
      byLevel.get(r.level).push(r);
    });

    const sections = LEVEL_ORDER.filter(l => byLevel.has(l)).map(level => `    <section class="browse-section">
      <h2>${escapeHtml(level)}</h2>
      <ul class="browse-list">
${byLevel.get(level).map(r => `        <li><a href="${escapeHtml(r.url)}" rel="noopener">${escapeHtml(r.name)}</a><span class="browse-meta">${escapeHtml(r.jurisdiction)}</span><span class="browse-desc">${escapeHtml(r.description)}</span></li>`).join('\n')}
      </ul>
    </section>`).join('\n');

    const body = `    <h1 class="browse-title">${escapeHtml(cat.title)}</h1>
    <p class="browse-intro">${items.length} curated official resources. <a href="../?cat=${cat.id}">Search and filter these in the directory →</a></p>
${sections}`;

    const jsonLd = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${cat.title} — Canadian government resources`,
      numberOfItems: items.length,
      itemListElement: items.slice(0, 50).map((r, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: r.name,
        url: r.url
      }))
    });

    fs.writeFileSync(path.join(browseDir, `${cat.id}.html`), browsePageShell({
      title: `${cat.title} — Canadian Government Resources | Awesome Canada`,
      description: `${items.length} curated official Canadian resources for ${cat.title.toLowerCase()}: direct links to government tools, maps and datasets at every level of government.`,
      canonicalPath: `/browse/${cat.id}.html`,
      body,
      jsonLd
    }));
    urls.push(`${BASE_URL}/browse/${cat.id}.html`);
  }

  return urls;
}

function buildSitemap(urls) {
  const today = new Date().toISOString().split('T')[0];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(SITE_DIR, 'sitemap.xml'), xml);
}

function main() {
  console.log('🔨 Building Awesome Canada site...\n');

  // Verify data file exists
  if (!fs.existsSync(DATA_FILE)) {
    console.error('❌ data/resources.json not found');
    process.exit(1);
  }

  // Read and validate resources
  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  let resources;
  try {
    resources = JSON.parse(raw);
  } catch (e) {
    console.error('❌ Invalid JSON in data/resources.json:', e.message);
    process.exit(1);
  }

  if (!Array.isArray(resources)) {
    console.error('❌ data/resources.json must be an array');
    process.exit(1);
  }

  // Ensure dateAdded field exists (backfill if missing)
  const now = new Date().toISOString().split('T')[0];
  resources.forEach((r, i) => {
    if (!r.dateAdded) {
      // Use a deterministic pseudo-date based on position to avoid all being "today"
      const pseudoDate = new Date(2024, 0, 1 + (i * 3));
      r.dateAdded = pseudoDate.toISOString().split('T')[0];
    }
  });

  // Ensure site directories exist
  fs.mkdirSync(path.join(SITE_DIR, 'data'), { recursive: true });
  fs.mkdirSync(path.join(SITE_DIR, 'css'), { recursive: true });
  fs.mkdirSync(path.join(SITE_DIR, 'js'), { recursive: true });

  // Write resources.json to site/data/
  fs.writeFileSync(SITE_DATA_FILE, JSON.stringify(resources, null, 2));
  console.log(`✅ Copied ${resources.length} resources to site/data/resources.json`);

  // Write meta.json (category display names for the client + build info)
  const categoryTitles = Object.fromEntries(CATEGORIES.map(c => [c.id, c.title]));
  fs.writeFileSync(path.join(SITE_DIR, 'data', 'meta.json'), JSON.stringify({
    count: resources.length,
    generated: now,
    categories: categoryTitles
  }, null, 2));
  console.log('✅ Wrote site/data/meta.json');

  // Generate crawlable browse pages + sitemap
  const urls = buildBrowsePages(resources);
  buildSitemap(urls);
  console.log(`✅ Generated ${urls.length - 1} browse pages + sitemap.xml`);

  // Create .nojekyll
  fs.writeFileSync(NOJEKYLL_FILE, '');
  console.log('✅ Created .nojekyll');

  // Verify static assets exist
  const required = [
    'index.html',
    'css/styles.css',
    'js/app.js'
  ];
  for (const f of required) {
    const p = path.join(SITE_DIR, f);
    if (!fs.existsSync(p)) {
      console.error(`❌ Missing required file: site/${f}`);
      process.exit(1);
    }
  }
  console.log('✅ All static assets present');

  // Output stats
  const categories = new Set(resources.map(r => r.category));
  const jurisdictions = new Set(resources.map(r => r.jurisdiction));
  const levels = new Set(resources.map(r => r.level));

  console.log('\n📊 Stats:');
  console.log(`  Resources: ${resources.length}`);
  console.log(`  Categories: ${categories.size}`);
  console.log(`  Jurisdictions: ${jurisdictions.size}`);
  console.log(`  Levels: ${levels.size}`);
  console.log('\n🚀 Site built successfully!');
}

main();
