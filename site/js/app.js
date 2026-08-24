/**
 * Awesome Canada Directory — Client-side app
 * Loads resources.json + meta.json, provides search, filter, sort, pagination.
 * Filter/search/sort/view state is mirrored into the URL so views are shareable.
 */

(function () {
  'use strict';

  const ITEMS_PER_PAGE = 24;
  const COOLDOWN_KEY = 'ac-like-cooldowns';
  const SEED_KEY = 'ac-shuffle-seed';
  let allResources = [];
  let filteredResources = [];
  let categoryTitles = {};
  let kindTitles = {};
  let currentPage = 1;
  let currentView = 'grid';

  // Likes state
  let likeCounts = {};             // url -> all-time like count (server)
  let cooldowns = readCooldowns(); // url -> epoch ms when re-like allowed
  const topCache = {};             // window -> Promise of [{url, count}]
  let trendingWindow = 'day';      // active trending strip window

  // DOM refs
  const gridEl = document.getElementById('resources-grid');
  const tableEl = document.getElementById('resources-table');
  const paginationEl = document.getElementById('pagination');
  const emptyEl = document.getElementById('empty-state');
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  const sortSelect = document.getElementById('sort-select');
  const statsBar = document.getElementById('resource-count');
  const filtersToggle = document.getElementById('filters-toggle');
  const filtersPanel = document.getElementById('filters-panel');
  const filterKind = document.getElementById('filter-kind');
  const filterLevel = document.getElementById('filter-level');
  const filterCategory = document.getElementById('filter-category');
  const filterRegion = document.getElementById('filter-region');
  const resetBtn = document.getElementById('filters-reset');
  const emptyReset = document.getElementById('empty-reset');
  const viewBtns = document.querySelectorAll('.view-btn');
  const trendingEl = document.getElementById('trending');
  const trendingItemsEl = document.getElementById('trending-items');
  const trendingTabs = document.querySelectorAll('.trending-tab');

  // Active filters
  const activeFilters = {
    kind: new Set(),
    level: new Set(),
    category: new Set(),
    region: new Set(),
    search: ''
  };

  // Load data
  Promise.all([
    fetch('data/resources.json').then(r => r.json()),
    fetch('data/meta.json').then(r => r.json()).catch(() => ({ categories: {} })),
    fetch('api/likes/all').then(r => r.ok ? r.json() : { counts: {} }).catch(() => ({ counts: {} }))
  ])
    .then(([data, meta, likes]) => {
      allResources = data.map((r, i) => ({ ...r, _id: i }));
      categoryTitles = meta.categories || {};
      kindTitles = meta.kinds || {};
      likeCounts = likes.counts || {};
      initFilters();
      initTrending();
      readStateFromUrl();
      applyFilters();
    })
    .catch(err => {
      console.error('Failed to load resources:', err);
      gridEl.innerHTML = '<div class="noscript-note"><p>Could not load the directory data. Please refresh, or <a href="https://github.com/wra-sol/awesome-canada#readme">read the list on GitHub</a>.</p></div>';
    });

  function catLabel(id) {
    return categoryTitles[id] || id;
  }

  function kindLabel(id) {
    return kindTitles[id] || id;
  }

  // ---- URL state ----
  function readStateFromUrl() {
    const p = new URLSearchParams(location.search);
    activeFilters.search = (p.get('q') || '').toLowerCase();
    searchInput.value = p.get('q') || '';
    searchClear.classList.toggle('visible', activeFilters.search.length > 0);

    for (const [param, key] of [['kind', 'kind'], ['level', 'level'], ['cat', 'category'], ['region', 'region']]) {
      (p.get(param) || '').split('|').filter(Boolean).forEach(v => activeFilters[key].add(v));
    }
    document.querySelectorAll('.filter-checkboxes input[type="checkbox"]').forEach(cb => {
      cb.checked = activeFilters[cb.dataset.filter].has(cb.value);
    });

    if (p.get('sort') && [...sortSelect.options].some(o => o.value === p.get('sort'))) {
      sortSelect.value = p.get('sort');
    }
    if (p.get('view') === 'table') setView('table');
    const page = parseInt(p.get('page'), 10);
    if (!isNaN(page) && page > 0) currentPage = page;
  }

  function writeStateToUrl() {
    const p = new URLSearchParams();
    if (activeFilters.search) p.set('q', searchInput.value.trim());
    if (activeFilters.kind.size) p.set('kind', [...activeFilters.kind].join('|'));
    if (activeFilters.level.size) p.set('level', [...activeFilters.level].join('|'));
    if (activeFilters.category.size) p.set('cat', [...activeFilters.category].join('|'));
    if (activeFilters.region.size) p.set('region', [...activeFilters.region].join('|'));
    if (sortSelect.value !== 'random') p.set('sort', sortSelect.value);
    if (currentView !== 'grid') p.set('view', currentView);
    if (currentPage > 1) p.set('page', String(currentPage));
    const qs = p.toString();
    history.replaceState(null, '', qs ? '?' + qs : location.pathname);
  }

  // Init filter UI
  function initFilters() {
    renderCheckboxes(filterKind, countBy(allResources, 'kind'), 'kind', kindLabel);
    renderCheckboxes(filterLevel, countBy(allResources, 'level'), 'level', v => v);
    renderCheckboxes(filterCategory, countBy(allResources, 'category'), 'category', catLabel);
    renderCheckboxes(filterRegion, countBy(allResources, 'jurisdiction'), 'region', v => v);
  }

  function countBy(arr, key) {
    const counts = {};
    arr.forEach(r => {
      const v = r[key] || 'Unknown';
      counts[v] = (counts[v] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }

  function renderCheckboxes(container, items, filterKey, labelFn) {
    container.innerHTML = '';
    items.forEach(([value, count]) => {
      const label = document.createElement('label');
      label.innerHTML = `
        <input type="checkbox" value="${escapeHtml(value)}" data-filter="${filterKey}">
        <span>${escapeHtml(labelFn(value))}</span>
        <span class="filter-count">${count}</span>
      `;
      container.appendChild(label);
    });

    container.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', () => {
        const key = cb.dataset.filter;
        const val = cb.value;
        if (cb.checked) activeFilters[key].add(val);
        else activeFilters[key].delete(val);
        currentPage = 1;
        applyFilters();
      });
    });
  }

  // Search
  let searchTimeout;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      activeFilters.search = searchInput.value.trim().toLowerCase();
      searchClear.classList.toggle('visible', activeFilters.search.length > 0);
      currentPage = 1;
      applyFilters();
    }, 300);
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    activeFilters.search = '';
    searchClear.classList.remove('visible');
    currentPage = 1;
    applyFilters();
  });

  // Sort
  sortSelect.addEventListener('change', () => {
    if (sortSelect.value.startsWith('likes-')) likesSortToken++; // supersede in-flight sorts
    currentPage = 1;
    applyFilters();
  });

  // View toggle
  function setView(view) {
    currentView = view;
    viewBtns.forEach(b => {
      const active = b.dataset.view === view;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', String(active));
    });
  }

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setView(btn.dataset.view);
      renderResults();
      writeStateToUrl();
    });
  });

  // Reset
  resetBtn.addEventListener('click', resetAll);
  emptyReset.addEventListener('click', resetAll);

  function resetAll() {
    activeFilters.kind.clear();
    activeFilters.level.clear();
    activeFilters.category.clear();
    activeFilters.region.clear();
    activeFilters.search = '';
    searchInput.value = '';
    searchClear.classList.remove('visible');
    sortSelect.value = 'random';

    document.querySelectorAll('.filter-checkboxes input[type="checkbox"]').forEach(cb => {
      cb.checked = false;
    });

    currentPage = 1;
    applyFilters();
  }

  // Mobile filter toggle
  filtersToggle.addEventListener('click', () => {
    const isOpen = filtersPanel.classList.toggle('open');
    filtersToggle.setAttribute('aria-expanded', isOpen);
    filtersToggle.querySelector('.filters-toggle-icon').textContent = isOpen ? '▴' : '▾';
  });

  // Apply filters + sort + paginate
  function applyFilters() {
    filteredResources = allResources.filter(r => {
      if (activeFilters.kind.size > 0 && !activeFilters.kind.has(r.kind)) return false;
      if (activeFilters.level.size > 0 && !activeFilters.level.has(r.level)) return false;
      if (activeFilters.category.size > 0 && !activeFilters.category.has(r.category)) return false;
      if (activeFilters.region.size > 0 && !activeFilters.region.has(r.jurisdiction)) return false;
      if (activeFilters.search) {
        const q = activeFilters.search;
        const text = `${r.name} ${r.description} ${r.tags?.join(' ') || ''}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });

    const sortVal = sortSelect.value;
    sortResources(filteredResources, sortVal);

    statsBar.textContent = `${filteredResources.length} of ${allResources.length} resources`;
    renderResults();
    writeStateToUrl();
  }

  function renderResults() {
    const totalPages = Math.max(1, Math.ceil(filteredResources.length / ITEMS_PER_PAGE));
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageItems = filteredResources.slice(start, start + ITEMS_PER_PAGE);

    if (filteredResources.length === 0) {
      gridEl.style.display = 'none';
      tableEl.style.display = 'none';
      paginationEl.style.display = 'none';
      emptyEl.style.display = 'block';
      return;
    }

    emptyEl.style.display = 'none';
    paginationEl.style.display = 'flex';

    if (currentView === 'grid') {
      gridEl.style.display = 'grid';
      tableEl.style.display = 'none';
      renderGrid(pageItems);
    } else {
      gridEl.style.display = 'none';
      tableEl.style.display = 'block';
      renderTable(pageItems);
    }

    renderPagination(totalPages);
  }

  function renderGrid(items) {
    gridEl.innerHTML = items.map(r => `
      <div class="resource-card">
        <a class="card-main-link" href="${escapeHtml(r.url)}" target="_blank" rel="noopener">
          <div class="card-header">
            <div class="card-title">${highlight(escapeHtml(r.name), activeFilters.search)}</div>
            <svg class="card-link-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M6.5 3.5h-3v9h9v-3M9.5 2.5h4v4M13 3 7.5 8.5"/></svg>
          </div>
          <div class="card-badges">
            <span class="badge badge-kind">${escapeHtml(kindLabel(r.kind))}</span>
            <span class="badge badge-level">${escapeHtml(r.level)}</span>
            <span class="badge badge-category">${escapeHtml(catLabel(r.category))}</span>
            <span class="badge badge-jurisdiction">${escapeHtml(r.jurisdiction)}</span>
          </div>
          <div class="card-description">${highlight(escapeHtml(r.description), activeFilters.search)}</div>
        </a>
        <div class="card-footer">
          <div class="card-tags">
            ${(r.tags || []).slice(0, 4).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
          </div>
          <div class="card-actions">
            ${likeBtnHtml(r)}
            <a class="card-report" href="report.html?resource_name=${encodeURIComponent(r.name)}&current_url=${encodeURIComponent(r.url)}" title="Report this link as broken">Report</a>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderTable(items) {
    tableEl.innerHTML = `
      <table class="resources-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Jurisdiction</th>
            <th>Category</th>
            <th>Level</th>
            <th>Description</th>
            <th>Likes</th>
            <th><span class="sr-only">Report</span></th>
          </tr>
        </thead>
        <tbody>
          ${items.map(r => `
            <tr>
              <td class="table-name">
                <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener">
                  ${highlight(escapeHtml(r.name), activeFilters.search)}
                </a>
              </td>
              <td>${escapeHtml(r.jurisdiction)}</td>
              <td>${escapeHtml(catLabel(r.category))}</td>
              <td>${escapeHtml(r.level)}</td>
              <td>${highlight(escapeHtml(r.description), activeFilters.search)}</td>
              <td class="table-likes">${likeBtnHtml(r)}</td>
              <td>
                <a class="table-report" href="report.html?resource_name=${encodeURIComponent(r.name)}&current_url=${encodeURIComponent(r.url)}" title="Report this link as broken">Report</a>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  function renderPagination(totalPages) {
    if (totalPages <= 1) {
      paginationEl.innerHTML = '';
      return;
    }

    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);
    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    let html = '';
    html += `<button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">← Prev</button>`;

    if (startPage > 1) {
      html += `<button class="page-btn" data-page="1">1</button>`;
      if (startPage > 2) html += `<span class="page-ellipsis">…</span>`;
    }

    for (let i = startPage; i <= endPage; i++) {
      html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}" ${i === currentPage ? 'aria-current="page"' : ''}>${i}</button>`;
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) html += `<span class="page-ellipsis">…</span>`;
      html += `<button class="page-btn" data-page="${totalPages}">${totalPages}</button>`;
    }

    html += `<button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">Next →</button>`;

    paginationEl.innerHTML = html;

    paginationEl.querySelectorAll('button[data-page]').forEach(btn => {
      btn.addEventListener('click', () => {
        const p = parseInt(btn.dataset.page, 10);
        if (!isNaN(p) && p !== currentPage) {
          currentPage = p;
          renderResults();
          writeStateToUrl();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });
  }

  // ---- Likes: sorting ----

  // Sort dropdown values: random (default), legacy field sorts, likes-<window>.
  let likesSortToken = 0;
  const topData = {}; // window -> ranked [{url, count}] once loaded

  function ensureTop(win) {
    if (!topCache[win]) {
      topCache[win] = fetch(`api/likes/top?window=${encodeURIComponent(win)}&limit=500`)
        .then(r => (r.ok ? r.json() : { items: [] }))
        .then(d => {
          topData[win] = (d.items || []).map(it => ({ url: it.url, count: it.count }));
          return topData[win];
        })
        .catch(() => []);
    }
    return topCache[win];
  }

  function sortResources(arr, sortVal) {
    if (sortVal === 'random') {
      weightedShuffle(arr);
      return;
    }
    if (sortVal.startsWith('likes-')) {
      const win = sortVal.slice(6);
      if (!topData[win]) {
        const myToken = ++likesSortToken;
        ensureTop(win).then(items => {
          // Re-apply once ranking arrives — only if this sort is still active
          // and no newer likes-sort selection superseded it.
          if (items.length && sortSelect.value === sortVal && likesSortToken === myToken) {
            applyFilters();
          }
        });
      }
      const counts = new Map((topData[win] || []).map(i => [i.url, i.count]));
      arr.sort((a, b) =>
        (counts.get(b.url) || 0) - (counts.get(a.url) || 0) ||
        (a.name || '').localeCompare(b.name || '')
      );
      return;
    }
    const idx = sortVal.lastIndexOf('-');
    const field = sortVal.slice(0, idx);
    const dir = sortVal.slice(idx + 1);
    arr.sort((a, b) => {
      let va = (a[field] || '').toString().toLowerCase();
      let vb = (b[field] || '').toString().toLowerCase();
      if (field === 'date') {
        va = a.dateAdded || '2000-01-01';
        vb = b.dateAdded || '2000-01-01';
      }
      if (va < vb) return dir === 'asc' ? -1 : 1;
      if (va > vb) return dir === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // Weighted-random ordering (Efraimidis–Spirakis): P(first) ∝ weight,
  // weight = 1 + all-time likes. Deterministic per visit seed + weights, so
  // pagination and filtering don't reshuffle; each new visit reshuffles.
  function sessionSeed() {
    let s = sessionStorage.getItem(SEED_KEY);
    if (!s) {
      s = String(crypto.getRandomValues(new Uint32Array(1))[0]);
      sessionStorage.setItem(SEED_KEY, s);
    }
    return s;
  }

  function fnv1a(str) {
    let h = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 0x01000193);
    }
    return h >>> 0;
  }

  function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function weightedShuffle(arr) {
    const seed = sessionSeed();
    const scored = arr.map(r => {
      const w = 1 + (likeCounts[r.url] || 0);
      const u = mulberry32(fnv1a(`${seed}|${r.url}`))();
      return { r, key: Math.pow(u, 1 / w) };
    });
    scored.sort((a, b) => b.key - a.key);
    for (let i = 0; i < arr.length; i++) arr[i] = scored[i].r;
  }

  // ---- Likes: voting ----

  function readCooldowns() {
    try { return JSON.parse(localStorage.getItem(COOLDOWN_KEY) || '{}'); }
    catch { return {}; }
  }

  function saveCooldowns() {
    try { localStorage.setItem(COOLDOWN_KEY, JSON.stringify(cooldowns)); } catch { /* private mode */ }
  }

  function isLiked(url) {
    return Number(cooldowns[url]) > Date.now();
  }

  function fmtCount(n) {
    if (n >= 10000) return `${Math.round(n / 1000)}k`;
    if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
    return String(n);
  }

  const HEART_SVG = '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M8 13.8C4.6 11.4 2 9 2 6.3 2 4.4 3.5 3 5.3 3c1.1 0 2.1.5 2.7 1.4C8.6 3.5 9.6 3 10.7 3 12.5 3 14 4.4 14 6.3c0 2.7-2.6 5.1-6 7.5Z"/></svg>';

  function likeBtnHtml(r) {
    const liked = isLiked(r.url);
    const n = likeCounts[r.url] || 0;
    return `<button type="button" class="like-btn${liked ? ' liked' : ''}" data-url="${escapeHtml(r.url)}"` +
      ` aria-pressed="${liked}" aria-label="Like ${escapeHtml(r.name)}"` +
      ` title="${liked ? 'You liked this — thanks!' : 'Like this resource'}">` +
      `${HEART_SVG}<span class="like-count">${n ? fmtCount(n) : 'Like'}</span></button>`;
  }

  function paintLikeButtons(url, pulse) {
    document.querySelectorAll('.like-btn').forEach(btn => {
      if (btn.dataset.url !== url) return;
      const liked = isLiked(url);
      const n = likeCounts[url] || 0;
      btn.classList.remove('busy');
      btn.classList.toggle('liked', liked);
      btn.setAttribute('aria-pressed', String(liked));
      btn.title = liked ? 'You liked this — thanks!' : 'Like this resource';
      btn.querySelector('.like-count').textContent = n ? fmtCount(n) : 'Like';
      if (pulse) {
        btn.classList.remove('pulse');
        void btn.offsetWidth; // restart animation
        btn.classList.add('pulse');
      }
    });
  }

  let toastEl;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      toastEl.setAttribute('role', 'status');
      toastEl.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(() => toastEl.classList.remove('show'), 4000);
  }

  async function likeResource(btn) {
    const url = btn.dataset.url;
    if (btn.classList.contains('busy')) return;
    if (isLiked(url)) {
      const hrs = Math.max(1, Math.round((cooldowns[url] - Date.now()) / 3600000));
      toast(`You already liked this — again in ~${hrs}h`);
      return;
    }
    btn.classList.add('busy');

    const prev = likeCounts[url] || 0;
    likeCounts[url] = prev + 1; // optimistic
    paintLikeButtons(url);

    try {
      const res = await fetch('api/likes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const d = await res.json().catch(() => ({}));
      if (res.ok && d.ok) {
        likeCounts[url] = d.count;
        cooldowns[url] = d.nextEligibleAt;
        saveCooldowns();
        paintLikeButtons(url, true);
      } else if (d.error === 'cooldown' && d.nextEligibleAt) {
        likeCounts[url] = prev;
        cooldowns[url] = d.nextEligibleAt;
        saveCooldowns();
        paintLikeButtons(url);
        toast('Already counted — you liked this just now');
      } else {
        likeCounts[url] = prev;
        paintLikeButtons(url);
        toast(d.error === 'rate_limited'
          ? 'Too many likes right now — try again in a bit'
          : 'Could not save your like — please try again');
      }
    } catch {
      likeCounts[url] = prev;
      paintLikeButtons(url);
      toast('Could not save your like — check your connection');
    }
  }

  function onResultsClick(e) {
    const btn = e.target.closest('.like-btn');
    if (btn) {
      e.preventDefault();
      likeResource(btn);
      return;
    }
    const tItem = e.target.closest('.trending-item');
    if (tItem) filterToResource(tItem.dataset.url);
  }

  gridEl.addEventListener('click', onResultsClick);
  tableEl.addEventListener('click', onResultsClick);

  function filterToResource(url) {
    const r = allResources.find(x => x.url === url);
    if (!r) return;
    activeFilters.search = r.name.toLowerCase();
    searchInput.value = r.name;
    searchClear.classList.add('visible');
    currentPage = 1;
    applyFilters();
    document.querySelector('.results-header').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ---- Trending strip ----

  function initTrending() {
    trendingEl.hidden = false;
    trendingTabs.forEach(tab => {
      tab.addEventListener('click', () => setTrendingWindow(tab.dataset.window));
    });
    loadTrending();
  }

  function setTrendingWindow(win) {
    if (win === trendingWindow) return;
    trendingWindow = win;
    trendingTabs.forEach(t => {
      const active = t.dataset.window === win;
      t.classList.toggle('active', active);
      t.setAttribute('aria-pressed', String(active));
    });
    loadTrending();
  }

  function loadTrending() {
    trendingItemsEl.innerHTML =
      '<div class="trend-skel"></div><div class="trend-skel"></div><div class="trend-skel"></div>' +
      '<div class="trend-skel"></div><div class="trend-skel"></div><div class="trend-skel"></div>';
    ensureTop(trendingWindow).then(() => {
      if (document.querySelector(`.trending-tab[data-window="${trendingWindow}"]`)?.classList.contains('active')) {
        renderTrending();
      }
    });
  }

  function renderTrending() {
    const items = (topData[trendingWindow] || []).slice(0, 6);
    if (!items.length) {
      const label = { hour: 'in the past hour', day: 'today', month: 'this month', all: 'yet' }[trendingWindow];
      trendingItemsEl.innerHTML =
        `<p class="trending-empty">No likes ${label}. Explore below and heart what you find useful.</p>`;
      return;
    }
    trendingItemsEl.innerHTML = items.map((it, i) => {
      const r = allResources.find(x => x.url === it.url);
      if (!r) return '';
      return `<button type="button" class="trending-item" data-url="${escapeHtml(it.url)}"` +
        ` title="Show ${escapeHtml(r.name)} in the directory">` +
        `<span class="trending-rank">${i + 1}</span>` +
        `<span class="trending-name">${highlight(escapeHtml(r.name), '')}</span>` +
        `<span class="trending-jurisdiction">${escapeHtml(r.jurisdiction)}</span>` +
        `<span class="trending-count">${HEART_SVG}${fmtCount(it.count)}</span></button>`;
    }).join('');
  }

  // Helpers
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);
  }

  function highlight(text, query) {
    if (!query) return text;
    const re = new RegExp('(' + escapeRegExp(query) + ')', 'gi');
    return text.replace(re, '<mark class="hl">$1</mark>');
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
})();
