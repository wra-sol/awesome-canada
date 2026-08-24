/**
 * Minimal GitHub REST / git-data client for the maintenance worker.
 * Auth: fine-grained PAT with Contents:RW (+ Pull requests:RW for research).
 */

const API = 'https://api.github.com';

function gh(env) {
  const h = {
    Authorization: `Bearer ${env.GH_TOKEN}`,
    Accept: 'application/vnd.github.raw+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'awesome-canada-maintenance-worker',
  };
  return async (path, opts = {}) => {
    const res = await fetch(`${API}${path}`, {
      ...opts,
      headers: { ...h, ...(opts.headers || {}), ...(opts.body ? { 'Content-Type': 'application/json' } : {}) },
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`GitHub ${opts.method || 'GET'} ${path} -> ${res.status}: ${text.slice(0, 300)}`);
    }
    return res;
  };
}

export async function getRawFile(env, path, ref = 'master') {
  // Public repo: raw reads work unauthenticated (lets smoke tests run pre-token).
  if (!env.GH_TOKEN) {
    const res = await fetch(`https://raw.githubusercontent.com/${env.GH_REPO}/${ref}/${encodePath(path)}`);
    if (!res.ok) throw new Error(`raw ${path} -> ${res.status}`);
    return res.text();
  }
  const res = await gh(env)(`/repos/${env.GH_REPO}/contents/${encodePath(path)}?ref=${ref}`);
  return res.text();
}

export async function getJsonFile(env, path, ref = 'master') {
  return JSON.parse(await getRawFile(env, path, ref));
}

function encodePath(p) {
  return p.split('/').map(encodeURIComponent).join('/');
}

async function blob(env, content) {
  const res = await gh(env)(`/repos/${env.GH_REPO}/git/blobs`, {
    method: 'POST',
    body: JSON.stringify({ content: btoa(unescape(encodeURIComponent(content))), encoding: 'base64' }),
  });
  return (await res.json()).sha;
}

/**
 * Commit several files in ONE commit on `branch`.
 * files: [{ path, content }]
 */
export async function commitFiles(env, branch, message, files) {
  const g = gh(env);
  const refRes = await g(`/repos/${env.GH_REPO}/git/ref/heads/${encodeURIComponent(branch)}`);
  const baseSha = (await refRes.json()).object.sha;

  const baseTreeRes = await g(`/repos/${env.GH_REPO}/git/commits/${baseSha}`);
  const baseTree = (await baseTreeRes.json()).tree.sha;

  const tree = [];
  for (const f of files) {
    tree.push({ path: f.path, mode: '100644', type: 'blob', sha: await blob(env, f.content) });
  }
  const treeRes = await g(`/repos/${env.GH_REPO}/git/trees`, {
    method: 'POST',
    body: JSON.stringify({ base_tree: baseTree, tree }),
  });
  const newTree = (await treeRes.json()).sha;

  const commitRes = await g(`/repos/${env.GH_REPO}/git/commits`, {
    method: 'POST',
    body: JSON.stringify({ message, tree: newTree, parents: [baseSha] }),
  });
  const commitSha = (await commitRes.json()).sha;

  await g(`/repos/${env.GH_REPO}/git/refs/heads/${encodeURIComponent(branch)}`, {
    method: 'PATCH',
    body: JSON.stringify({ sha: commitSha }),
  });
  return commitSha;
}

export async function listPullRequests(env, head, state = 'open') {
  const res = await gh(env)(`/repos/${env.GH_REPO}/pulls?head=${encodeURIComponent(`${env.GH_REPO.split('/')[0]}:${head}`)}&state=${state}`);
  return res.json();
}

export async function createPullRequest(env, head, base, title, body) {
  const res = await gh(env)(`/repos/${env.GH_REPO}/pulls`, {
    method: 'POST',
    body: JSON.stringify({ title, head, base, body }),
  });
  return res.json();
}

export async function updatePullRequest(env, prNumber, { title, body }) {
  const res = await gh(env)(`/repos/${env.GH_REPO}/pulls/${prNumber}`, {
    method: 'PATCH',
    body: JSON.stringify({ title, body }),
  });
  return res.json();
}

export async function deleteBranch(env, branch) {
  try {
    await gh(env)(`/repos/${env.GH_REPO}/git/refs/heads/${encodeURIComponent(branch)}`, { method: 'DELETE' });
  } catch { /* already gone */ }
}

export async function branchExists(env, branch) {
  try {
    await gh(env)(`/repos/${env.GH_REPO}/git/ref/heads/${encodeURIComponent(branch)}`);
    return true;
  } catch {
    return false;
  }
}
