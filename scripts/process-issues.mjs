#!/usr/bin/env node
/**
 * Process GitHub issues for awesome-canada.
 *
 * Submissions (label: submission):
 *   - Verify URL resolves
 *   - Check for duplicates in resources.json
 *   - Validate against quality bar
 *   - Accept: add to resources.json, commit, close issue with comment
 *   - Decline: comment explaining why, close issue
 *
 * Broken links (label: broken-link):
 *   - Test URL (HEAD request)
 *   - If working: comment "Link works now", close issue
 *   - If broken: try to find replacement URL
 *     - If found: update URL, commit, close issue
 *     - If not found: remove from resources.json, commit, close issue
 *
 * Usage: node scripts/process-issues.mjs
 * Requires: GITHUB_TOKEN env var with repo scope
 */

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

const REPO = 'wra-sol/awesome-canada';
let TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
if (!TOKEN) {
  try {
    const envFile = readFileSync('/data/.hermes/.env', 'utf8');
    const match = envFile.match(/^GITHUB_TOKEN=(.+)$/m);
    if (match) TOKEN = match[1].trim();
  } catch { /* ignore */ }
}
if (!TOKEN) {
  console.error('Error: GITHUB_TOKEN or GH_TOKEN env var required');
  process.exit(1);
}

const HEADERS = {
  Authorization: `token ${TOKEN}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
};

/* ─── Helpers ─── */

async function ghApi(path) {
  const res = await fetch(`https://api.github.com/repos/${REPO}${path}`, { headers: HEADERS });
  if (!res.ok) throw new Error(`GitHub API ${path}: ${res.status} ${await res.text()}`);
  return res.json();
}

async function ghPost(path, body) {
  const res = await fetch(`https://api.github.com/repos/${REPO}${path}`, {
    method: 'POST',
    headers: { ...HEADERS, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GitHub POST ${path}: ${res.status} ${await res.text()}`);
  return res.json();
}

async function ghPatch(path, body) {
  const res = await fetch(`https://api.github.com/repos/${REPO}${path}`, {
    method: 'PATCH',
    headers: { ...HEADERS, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GitHub PATCH ${path}: ${res.status} ${await res.text()}`);
  return res.json();
}

function loadResources() {
  const raw = readFileSync(join(ROOT, 'data/resources.json'), 'utf8');
  return JSON.parse(raw);
}

function saveResources(data) {
  writeFileSync(join(ROOT, 'data/resources.json'), JSON.stringify(data, null, 2) + '\n');
}

function findResourceByUrl(resources, url) {
  return resources.find(r => r.url === url);
}

function findResourceByName(resources, name) {
  return resources.find(r => r.name.toLowerCase() === name.toLowerCase());
}

async function testUrl(url, timeout = 15000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
      redirect: 'follow',
      headers: { 'User-Agent': 'awesome-canada-bot/1.0' },
    });
    clearTimeout(timer);
    return { ok: res.ok, status: res.status, redirected: res.redirected, finalUrl: res.url };
  } catch (err) {
    clearTimeout(timer);
    return { ok: false, status: 0, error: err.message };
  }
}

async function tryFindReplacement(originalUrl) {
  // Try common redirects: http -> https, www removal/addition, domain migrations
  const candidates = [];
  if (originalUrl.startsWith('http://')) {
    candidates.push(originalUrl.replace('http://', 'https://'));
  }
  const urlObj = new URL(originalUrl);
  if (urlObj.hostname.startsWith('www.')) {
    const alt = new URL(originalUrl);
    alt.hostname = alt.hostname.replace('www.', '');
    candidates.push(alt.toString());
  } else {
    const alt = new URL(originalUrl);
    alt.hostname = 'www.' + alt.hostname;
    candidates.push(alt.toString());
  }
  // Try Archive.org for last known good URL
  try {
    const wayback = await fetch(`https://archive.org/wayback/available?url=${encodeURIComponent(originalUrl)}`);
    const wb = await wayback.json();
    if (wb.archived_snapshots?.closest?.url) {
      candidates.push(wb.archived_snapshots.closest.url);
    }
  } catch { /* ignore */ }

  for (const candidate of candidates) {
    const result = await testUrl(candidate);
    if (result.ok) {
      // Don't return wayback URLs as replacements
      if (!candidate.includes('web.archive.org')) {
        return candidate;
      }
    }
  }
  return null;
}

function gitPull() {
  execSync('git pull origin master', { cwd: ROOT, stdio: 'inherit' });
}

function gitCommitAndPush(message) {
  execSync('git add -A', { cwd: ROOT });
  try {
    execSync(`git commit -m ${JSON.stringify(message)}`, { cwd: ROOT });
  } catch {
    console.log('  Nothing to commit');
    return false;
  }
  execSync('git push origin master', { cwd: ROOT, stdio: 'inherit' });
  return true;
}

/* ─── Process Submissions ─── */

async function processSubmission(issue) {
  console.log(`\n📝 Issue #${issue.number}: ${issue.title}`);

  // Parse issue body (GitHub issue forms generate markdown with ### headers)
  const body = issue.body || '';
  const fields = {};
  const sections = body.split(/### /);
  for (const section of sections) {
    const lines = section.trim().split('\n');
    const key = lines[0]?.trim();
    const value = lines.slice(1).join('\n').trim();
    if (key && value) fields[key] = value;
  }

  const url = fields['URL'] || fields['url'];
  const name = fields['Resource Name'] || fields['name'];
  const level = fields['Government Level'] || fields['level'];
  const jurisdiction = fields['Jurisdiction'] || fields['jurisdiction'];
  const category = fields['Category'] || fields['category'];
  const description = fields['Description'] || fields['description'];
  const tags = (fields['Tags'] || fields['tags'] || '').split(',').map(t => t.trim()).filter(Boolean);

  if (!url || !name) {
    console.log('  ⚠️ Missing URL or name. Skipping.');
    await declineIssue(issue.number, 'Thanks for the submission! We need at least a resource name and URL to review it. Please edit the issue with the missing details.');
    return;
  }

  const resources = loadResources();

  // Check duplicate
  if (findResourceByUrl(resources, url)) {
    console.log('  ❌ Duplicate URL');
    await declineIssue(issue.number, `Thanks for the suggestion! This URL is already in the directory. You can find it here: ${url}`);
    return;
  }
  if (findResourceByName(resources, name)) {
    console.log('  ❌ Duplicate name');
    await declineIssue(issue.number, `Thanks for the suggestion! A resource with this name is already in the directory.`);
    return;
  }

  // Test URL
  console.log(`  🌐 Testing ${url}...`);
  const urlTest = await testUrl(url);
  if (!urlTest.ok) {
    console.log(`  ❌ URL unreachable (${urlTest.status || urlTest.error})`);
    await declineIssue(issue.number, `We couldn't reach this URL (${urlTest.status || urlTest.error}). It may be temporarily down, or the link may have changed. Please verify and re-submit.`);
    return;
  }
  console.log(`  ✅ URL reachable (${urlTest.status})`);

  // Validate quality bar
  const descLower = (description || '').toLowerCase();
  const isHomepage = !url.includes('/');
  const hasDataFormat = ['csv', 'geojson', 'gtfs', 'api', 'shapefile', 'json', 'xml', 'pdf', 'zip', 'dataset', 'download'].some(t => descLower.includes(t));

  if (isHomepage && !hasDataFormat) {
    console.log('  ❌ Appears to be a broad homepage with no clear data/tool');
    await declineIssue(issue.number, `Thanks for the submission! This appears to be a broad homepage rather than a specific dataset or tool. We prioritize actionable resources — pages where visitors can download data, use an API, or interact with a map. If there's a specific dataset or tool on this site, please submit that direct URL.`);
    return;
  }

  // Accept: build entry
  const entry = {
    name,
    level: level || 'Municipal',
    jurisdiction: jurisdiction || 'Canada',
    category: category || 'open-data',
    type: tags.find(t => ['Dataset', 'API', 'Map', 'Portal', 'Tool', 'Feed'].includes(t)) || 'Dataset',
    description: description || `${name} — Canadian government data source.`,
    url,
    tags: tags.length ? tags : [jurisdiction?.toLowerCase() || 'canada', category || 'open-data'],
    dateAdded: new Date().toISOString().split('T')[0],
  };

  resources.push(entry);
  saveResources(resources);
  console.log(`  ✅ Added: ${name}`);

  const commitMsg = `data: add ${jurisdiction || 'Canada'} — ${name}`;
  const pushed = gitCommitAndPush(commitMsg);

  if (pushed) {
    await acceptIssue(issue.number, `✅ **Accepted!** This resource has been added to the directory.\n\n- **Name:** ${name}\n- **URL:** ${url}\n- **Category:** ${entry.category}\n- **Level:** ${entry.level}\n\nThanks for contributing to Awesome Canada!`);
  } else {
    await commentIssue(issue.number, `✅ This resource looks good and will be added to the directory on the next update.\n\n- **Name:** ${name}\n- **URL:** ${url}\n\nThanks for contributing!`);
  }
}

/* ─── Process Broken Links ─── */

async function processBrokenLink(issue) {
  console.log(`\n🔗 Issue #${issue.number}: ${issue.title}`);

  const body = issue.body || '';
  const fields = {};
  const sections = body.split(/### /);
  for (const section of sections) {
    const lines = section.trim().split('\n');
    const key = lines[0]?.trim();
    const value = lines.slice(1).join('\n').trim();
    if (key && value) fields[key] = value;
  }

  const resourceName = fields['Resource Name'] || fields['resource_name'];
  const currentUrl = fields['Current URL in Directory'] || fields['current_url'];
  const newUrl = fields['New URL (if known)'] || fields['new_url'];
  const issueType = fields['What happened?'] || fields['issue_type'];

  if (!currentUrl) {
    console.log('  ⚠️ Missing current URL. Skipping.');
    return;
  }

  const resources = loadResources();
  const resource = findResourceByUrl(resources, currentUrl);

  if (!resource) {
    console.log('  ⚠️ Resource not found in directory. May have been removed already.');
    await closeIssue(issue.number, `This resource doesn't appear to be in the current directory. It may have already been removed or updated. If it's still listed on the site, please re-report with the exact URL shown in the directory.`);
    return;
  }

  console.log(`  🌐 Testing ${currentUrl}...`);
  const urlTest = await testUrl(currentUrl);

  if (urlTest.ok) {
    console.log(`  ✅ URL works now (${urlTest.status})`);
    await closeIssue(issue.number, `Thanks for the report! We tested this link and it appears to be working now (${urlTest.status}). It may have been temporarily down. If it's still broken for you, please re-open this issue with details about your location/browser.`);
    return;
  }

  console.log(`  ❌ URL broken (${urlTest.status || urlTest.error})`);

  // Try replacement
  let replacement = newUrl || null;
  if (!replacement) {
    console.log('  🔍 Searching for replacement...');
    replacement = await tryFindReplacement(currentUrl);
  }

  if (replacement) {
    console.log(`  ✅ Replacement found: ${replacement}`);
    resource.url = replacement;
    saveResources(resources);
    const commitMsg = `fix: update URL for ${resource.name}`;
    gitCommitAndPush(commitMsg);
    await closeIssue(issue.number, `✅ **Fixed!** We found an updated URL for this resource and have replaced it in the directory.\n\n- **Old:** ${currentUrl}\n- **New:** ${replacement}\n\nThanks for the report!`);
  } else {
    console.log(`  🗑️ No replacement found. Removing resource.`);
    const idx = resources.indexOf(resource);
    if (idx > -1) resources.splice(idx, 1);
    saveResources(resources);
    const commitMsg = `fix: remove broken link — ${resource.name}`;
    gitCommitAndPush(commitMsg);
    await closeIssue(issue.number, `🗑️ **Removed.** We couldn't find a working replacement for this resource, so we've removed it from the directory to keep the list clean.\n\n- **URL:** ${currentUrl}\n- **Issue:** ${issueType || 'Unreachable'}\n\nIf you find a new URL for this resource, please submit it via the [Submit a Link](/submit.html) form. Thanks for keeping the directory accurate!`);
  }
}

/* ─── Issue actions ─── */

async function declineIssue(number, reason) {
  await commentIssue(number, reason);
  await closeIssue(number, null);
}

async function acceptIssue(number, message) {
  await commentIssue(number, message);
  await closeIssue(number, null);
  // Remove submission label, add accepted label
  await ghPost(`/issues/${number}/labels`, { labels: ['accepted'] });
}

async function commentIssue(number, body) {
  if (!body) return;
  await ghPost(`/issues/${number}/comments`, { body });
}

async function closeIssue(number, comment) {
  if (comment) await commentIssue(number, comment);
  await ghPatch(`/issues/${number}`, { state: 'closed' });
}

/* ─── Main ─── */

async function main() {
  console.log('🤖 awesome-canada issue processor');
  console.log(`   Repo: ${REPO}`);

  gitPull();

  // Fetch open issues
  const issues = await ghApi('/issues?state=open&per_page=50');
  console.log(`\n📋 Found ${issues.length} open issues`);

  const submissions = issues.filter(i => i.labels.some(l => l.name === 'submission'));
  const brokenLinks = issues.filter(i => i.labels.some(l => l.name === 'broken-link') || i.title.toLowerCase().includes('[broken]'));

  console.log(`   Submissions: ${submissions.length}`);
  console.log(`   Broken links: ${brokenLinks.length}`);

  for (const issue of submissions) {
    try {
      await processSubmission(issue);
    } catch (err) {
      console.error(`  ❌ Error processing #${issue.number}: ${err.message}`);
    }
  }

  for (const issue of brokenLinks) {
    try {
      await processBrokenLink(issue);
    } catch (err) {
      console.error(`  ❌ Error processing #${issue.number}: ${err.message}`);
    }
  }

  console.log('\n✅ Done');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
