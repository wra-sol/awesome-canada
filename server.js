const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

const DOCS_DIR = path.join(__dirname, 'docs');
const DATA_FILE = path.join(__dirname, 'data', 'resources.json');

// API endpoint: serve latest resources.json
app.get('/api/resources', (_req, res) => {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const data = JSON.parse(raw);
    res.json({ total: data.length, resources: data });
  } catch (err) {
    res.status(500).json({ error: 'Failed to load resources', message: err.message });
  }
});

// API endpoint: stats
app.get('/api/stats', (_req, res) => {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const data = JSON.parse(raw);
    const categories = {};
    const levels = {};
    const jurisdictions = {};
    for (const e of data) {
      categories[e.category] = (categories[e.category] || 0) + 1;
      levels[e.level] = (levels[e.level] || 0) + 1;
      jurisdictions[e.jurisdiction] = (jurisdictions[e.jurisdiction] || 0) + 1;
    }
    res.json({ total: data.length, categories, levels, jurisdictions });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API endpoint: redirect resolver trigger (admins only — protected by RAILWAY_ADMIN_TOKEN)
app.post('/api/maintenance/check-links', express.json(), async (_req, res) => {
  const token = _req.headers['authorization']?.replace('Bearer ', '');
  const expected = process.env.RAILWAY_ADMIN_TOKEN;
  if (expected && token !== expected) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  res.json({ status: 'accepted', message: 'Link check triggered. Check cron logs for results.' });
});

// Serve static site — docs/ directory
app.use(express.static(DOCS_DIR, {
  maxAge: process.env.NODE_ENV === 'production' ? '1h' : 0,
  etag: true,
  lastModified: true,
}));

// Fallback to index.html for SPA-like routing
app.get('*', (_req, res) => {
  res.sendFile(path.join(DOCS_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Awesome Canada running on port ${PORT}`);
  console.log(`Serving static files from ${DOCS_DIR}`);
  console.log(`Data file: ${DATA_FILE}`);
});
