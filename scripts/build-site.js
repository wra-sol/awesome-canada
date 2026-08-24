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
const { KINDS, classify } = require('./kinds');

const SITE_DIR = path.join(__dirname, '..', 'site');
const DATA_FILE = path.join(__dirname, '..', 'data', 'resources.json');
const SITE_DATA_FILE = path.join(SITE_DIR, 'data', 'resources.json');
const NOJEKYLL_FILE = path.join(SITE_DIR, '.nojekyll');
const BASE_URL = 'https://awesome-canada.ca';

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
  <link rel="icon" type="image/svg+xml" href="../favicon.svg?v=2">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Awesome Canada">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${BASE_URL}${canonicalPath}">
  <meta property="og:image" content="${BASE_URL}/og-image.png?v=2">
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
          <svg class="brand-mark" viewBox="0 0 88 100" aria-hidden="true" focusable="false">
            <g stroke="currentColor" stroke-width="2.2" fill="currentColor" stroke-linecap="round">
        <line x1="43.8" y1="0.0" x2="43.8" y2="19.1"/>
        <line x1="27.9" y1="14.2" x2="43.8" y2="19.1"/>
        <line x1="27.9" y1="14.2" x2="43.8" y2="34.9"/>
        <line x1="27.9" y1="14.2" x2="31.8" y2="39.5"/>
        <line x1="59.7" y1="14.2" x2="43.8" y2="19.1"/>
        <line x1="59.7" y1="14.2" x2="43.8" y2="34.9"/>
        <line x1="59.7" y1="14.2" x2="55.8" y2="39.4"/>
        <line x1="43.8" y1="19.1" x2="43.8" y2="34.9"/>
        <line x1="17.7" y1="28.0" x2="31.8" y2="39.5"/>
        <line x1="17.7" y1="28.0" x2="20.7" y2="45.3"/>
        <line x1="69.9" y1="28.0" x2="55.8" y2="39.4"/>
        <line x1="69.9" y1="28.0" x2="66.9" y2="45.3"/>
        <line x1="0.4" y1="30.2" x2="20.7" y2="45.3"/>
        <line x1="0.4" y1="30.2" x2="5.3" y2="45.6"/>
        <line x1="87.1" y1="30.2" x2="66.9" y2="45.3"/>
        <line x1="87.1" y1="30.2" x2="82.2" y2="45.6"/>
        <line x1="43.8" y1="34.9" x2="31.8" y2="39.5"/>
        <line x1="43.8" y1="34.9" x2="55.8" y2="39.4"/>
        <line x1="43.8" y1="34.9" x2="31.9" y2="55.0"/>
        <line x1="43.8" y1="34.9" x2="55.7" y2="55.0"/>
        <line x1="43.8" y1="34.9" x2="43.8" y2="63.1"/>
        <line x1="31.8" y1="39.5" x2="20.7" y2="45.3"/>
        <line x1="55.8" y1="39.4" x2="66.9" y2="45.3"/>
        <line x1="20.7" y1="45.3" x2="0.0" y2="50.9"/>
        <line x1="20.7" y1="45.3" x2="31.9" y2="55.0"/>
        <line x1="20.7" y1="45.3" x2="20.7" y2="65.4"/>
        <line x1="66.9" y1="45.3" x2="87.5" y2="50.9"/>
        <line x1="66.9" y1="45.3" x2="55.7" y2="55.0"/>
        <line x1="66.9" y1="45.3" x2="66.8" y2="65.4"/>
        <line x1="5.3" y1="45.6" x2="0.0" y2="50.9"/>
        <line x1="82.2" y1="45.6" x2="87.5" y2="50.9"/>
        <line x1="87.5" y1="50.9" x2="66.8" y2="65.4"/>
        <line x1="0.0" y1="50.9" x2="20.7" y2="65.4"/>
        <line x1="31.9" y1="55.0" x2="43.8" y2="63.1"/>
        <line x1="31.9" y1="55.0" x2="37.0" y2="70.3"/>
        <line x1="31.9" y1="55.0" x2="19.5" y2="75.9"/>
        <line x1="55.7" y1="55.0" x2="43.8" y2="63.1"/>
        <line x1="55.7" y1="55.0" x2="50.6" y2="70.3"/>
        <line x1="55.7" y1="55.0" x2="68.1" y2="75.9"/>
        <line x1="43.8" y1="63.1" x2="37.0" y2="70.3"/>
        <line x1="43.8" y1="63.1" x2="50.6" y2="70.3"/>
        <line x1="43.8" y1="63.1" x2="43.8" y2="86.5"/>
        <line x1="20.7" y1="65.4" x2="19.5" y2="75.9"/>
        <line x1="66.8" y1="65.4" x2="68.1" y2="75.9"/>
        <line x1="37.0" y1="70.3" x2="19.5" y2="75.9"/>
        <line x1="37.0" y1="70.3" x2="43.8" y2="86.5"/>
        <line x1="50.6" y1="70.3" x2="68.1" y2="75.9"/>
        <line x1="50.6" y1="70.3" x2="43.8" y2="86.5"/>
        <line x1="43.8" y1="86.5" x2="43.8" y2="92.9"/>
        <line x1="43.8" y1="92.9" x2="43.8" y2="100.0"/>
        <circle cx="43.8" cy="0.0" r="1.8"/>
        <circle cx="27.9" cy="14.2" r="1.8"/>
        <circle cx="59.7" cy="14.2" r="1.8"/>
        <circle cx="43.8" cy="19.1" r="1.8"/>
        <circle cx="17.7" cy="28.0" r="1.8"/>
        <circle cx="69.9" cy="28.0" r="1.8"/>
        <circle cx="0.4" cy="30.2" r="1.8"/>
        <circle cx="87.1" cy="30.2" r="1.8"/>
        <circle cx="43.8" cy="34.9" r="1.8"/>
        <circle cx="31.8" cy="39.5" r="1.8"/>
        <circle cx="55.8" cy="39.4" r="1.8"/>
        <circle cx="20.7" cy="45.3" r="1.8"/>
        <circle cx="66.9" cy="45.3" r="1.8"/>
        <circle cx="5.3" cy="45.6" r="1.8"/>
        <circle cx="82.2" cy="45.6" r="1.8"/>
        <circle cx="87.5" cy="50.9" r="1.8"/>
        <circle cx="0.0" cy="50.9" r="1.8"/>
        <circle cx="31.9" cy="55.0" r="1.8"/>
        <circle cx="55.7" cy="55.0" r="1.8"/>
        <circle cx="43.8" cy="63.1" r="1.8"/>
        <circle cx="20.7" cy="65.4" r="1.8"/>
        <circle cx="66.8" cy="65.4" r="1.8"/>
        <circle cx="37.0" cy="70.3" r="1.8"/>
        <circle cx="50.6" cy="70.3" r="1.8"/>
        <circle cx="19.5" cy="75.9" r="1.8"/>
        <circle cx="68.1" cy="75.9" r="1.8"/>
        <circle cx="43.8" cy="86.5" r="1.8"/>
        <circle cx="43.8" cy="92.9" r="1.8"/>
        <circle cx="43.8" cy="100.0" r="1.8"/>
      </g>
          </svg>
          <span class="brand-text">
            <span class="site-title">Awesome Canada</span>
            <span class="site-subtitle">Official Canadian tools, maps &amp; open data — curated and link-checked</span>
          </span>
        </a>
        <nav class="site-nav" aria-label="Main">
          <a href="../">Directory</a>
          <a href="../browse/" aria-current="page">Browse</a>
          <a href="../submit.html">Submit a link</a>
          <a href="../report.html">Report a broken link</a>
        </nav>
      </div>
    </div>
  </header>
  <main class="container browse-page">
${body}
  </main>
  <footer class="site-footer">
    <div class="container">
      <p class="footer-tagline">Every entry links to an official government or public-interest source, and links are checked daily.</p>
      <nav class="footer-links" aria-label="Footer">
        <a href="../">Search the directory</a>
        <a href="../browse/">Browse by category</a>
        <a href="../submit.html">Submit a link</a>
        <a href="../report.html">Report a broken link</a>
        <a href="https://github.com/wra-sol/awesome-canada">GitHub</a>
        <a href="../data/resources.json">Data (JSON)</a>
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

function buildLlmsTxt(resources) {
  const today = new Date().toISOString().split('T')[0];
  const byCategory = new Map(CATEGORIES.map(c => [c.id, []]));
  for (const r of resources) {
    (byCategory.get(r.category) || byCategory.get('open-data'))?.push(r);
  }

  const entryLine = r => {
    const bits = [
      r.jurisdiction,
      r.level,
      r.type,
      (r.tags || []).slice(0, 4).join(', '),
    ].filter(Boolean).join(' · ');
    const desc = (r.description || '').replace(/\s+/g, ' ').trim();
    return `- [${r.name}](${r.url}) — ${bits} — ${desc}`;
  };

  // llms.txt — curated index (llmstxt.org format)
  const sections = CATEGORIES
    .filter(c => (byCategory.get(c.id) || []).length > 0)
    .map(c => {
      const items = byCategory.get(c.id);
      return `- [${c.title}](https://awesome-canada.ca/browse/${c.id}.html): ${items.length} resources`;
    })
    .join('\n');

  const llms = `# Awesome Canada

> A curated, link-checked directory of ${resources.length} official Canadian government resources: open data portals, interactive maps, calculators, registries and civic tools from federal, provincial, territorial and municipal governments.

Every entry links to an official government or public-interest source and is checked daily by automated link-rot tooling. Entries carry a jurisdiction (e.g. Canada, Ontario, Toronto), level of government, format, category and tags. The directory is maintained in the open at github.com/wra-sol/awesome-canada.

## Catalog

- [Full catalog as JSON](https://awesome-canada.ca/data/resources.json): every entry as structured JSON — name, url, jurisdiction, level, category, type, description, tags, dateAdded
- [Full catalog as plain text](https://awesome-canada.ca/llms-full.txt): the same catalog in LLM-friendly markdown, grouped by category

## Browse by category

${sections}

## Site

- [Directory](https://awesome-canada.ca/): searchable, filterable directory with likes and trending rankings
- [Browse](https://awesome-canada.ca/browse/): static pages per category
- [Submit a link](https://awesome-canada.ca/submit.html): suggest an official Canadian government resource
- [Report a broken link](https://awesome-canada.ca/report.html)

Generated ${today}.
`;
  fs.writeFileSync(path.join(SITE_DIR, 'llms.txt'), llms);

  // llms-full.txt — the whole catalog, grouped by category
  const fullSections = CATEGORIES
    .filter(c => (byCategory.get(c.id) || []).length > 0)
    .map(c => {
      const items = byCategory.get(c.id);
      return `## ${c.title} (${items.length})\n\n${items.map(entryLine).join('\n')}`;
    })
    .join('\n\n');

  const full = `# Awesome Canada — full catalog (${resources.length} resources)

Official Canadian government resources, verified daily. Format per entry:
- [Name](url) — jurisdiction · level · format · tags — description

Generated ${today} from data/resources.json.

${fullSections}
`;
  fs.writeFileSync(path.join(SITE_DIR, 'llms-full.txt'), full);
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
    // Ensure every entry ships with a kind, deriving it for entries added
    // without one so the site's Format facet stays complete.
    r.kind = classify(r);
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
    categories: categoryTitles,
    kinds: KINDS
  }, null, 2));
  console.log('✅ Wrote site/data/meta.json');

  // Generate crawlable browse pages + sitemap
  const urls = buildBrowsePages(resources);
  buildSitemap(urls);
  buildLlmsTxt(resources);
  console.log(`✅ Generated ${urls.length - 1} browse pages + sitemap.xml + llms.txt + llms-full.txt`);

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
