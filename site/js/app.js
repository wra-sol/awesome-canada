/**
 * Awesome Canada Directory — Client-side app
 * Loads resources.json, provides search, filter, sort, pagination.
 */

(function () {
  'use strict';

  const ITEMS_PER_PAGE = 24;
  let allResources = [];
  let filteredResources = [];
  let currentPage = 1;
  let currentView = 'grid';

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
  const filterLevel = document.getElementById('filter-level');
  const filterCategory = document.getElementById('filter-category');
  const filterRegion = document.getElementById('filter-region');
  const resetBtn = document.getElementById('filters-reset');
  const emptyReset = document.getElementById('empty-reset');
  const viewBtns = document.querySelectorAll('.view-btn');

  // Active filters
  const activeFilters = {
    level: new Set(),
    category: new Set(),
    region: new Set(),
    search: ''
  };

  // Load data
  fetch('data/resources.json')
    .then(r => r.json())
    .then(data => {
      allResources = data.map((r, i) => ({ ...r, _id: i }));
      initFilters();
      applyFilters();
    })
    .catch(err => {
      console.error('Failed to load resources:', err);
      gridEl.innerHTML = '<p style="text-align:center;padding:40px;color:var(--color-slate)">Failed to load resources. Please refresh.</p>';
    });

  // Init filter UI
  function initFilters() {
    const levels = countBy(allResources, 'level');
    const categories = countBy(allResources, 'category');
    const regions = countBy(allResources, 'jurisdiction');

    renderCheckboxes(filterLevel, levels, 'level');
    renderCheckboxes(filterCategory, categories, 'category');
    renderCheckboxes(filterRegion, regions, 'region');
  }

  function countBy(arr, key) {
    const counts = {};
    arr.forEach(r => {
      const v = r[key] || 'Unknown';
      counts[v] = (counts[v] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }

  function renderCheckboxes(container, items, filterKey) {
    container.innerHTML = '';
    items.forEach(([value, count]) => {
      const label = document.createElement('label');
      label.innerHTML = `
        <input type="checkbox" value="${escapeHtml(value)}" data-filter="${filterKey}">
        <span>${escapeHtml(value)}</span>
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
    currentPage = 1;
    applyFilters();
  });

  // View toggle
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentView = btn.dataset.view;
      renderResults();
    });
  });

  // Reset
  resetBtn.addEventListener('click', resetAll);
  emptyReset.addEventListener('click', resetAll);

  function resetAll() {
    activeFilters.level.clear();
    activeFilters.category.clear();
    activeFilters.region.clear();
    activeFilters.search = '';
    searchInput.value = '';
    searchClear.classList.remove('visible');
    sortSelect.value = 'name-asc';

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
      // Level
      if (activeFilters.level.size > 0 && !activeFilters.level.has(r.level)) return false;
      // Category
      if (activeFilters.category.size > 0 && !activeFilters.category.has(r.category)) return false;
      // Region
      if (activeFilters.region.size > 0 && !activeFilters.region.has(r.jurisdiction)) return false;
      // Search
      if (activeFilters.search) {
        const q = activeFilters.search;
        const text = `${r.name} ${r.description} ${r.tags?.join(' ') || ''}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });

    // Sort
    const sortVal = sortSelect.value;
    const [field, dir] = sortVal.split('-');
    filteredResources.sort((a, b) => {
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

    statsBar.textContent = `${filteredResources.length} of ${allResources.length} resources`;
    renderResults();
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
      tableEl.style.display = 'table';
      renderTable(pageItems);
    }

    renderPagination(totalPages);
  }

  function renderGrid(items) {
    gridEl.innerHTML = items.map(r => `
      <a class="resource-card" href="${escapeHtml(r.url)}" target="_blank" rel="noopener">
        <div class="card-header">
          <div class="card-title">${highlight(escapeHtml(r.name), activeFilters.search)}</div>
          <span class="card-link-icon">↗</span>
        </div>
        <div class="card-badges">
          <span class="badge badge-level">${escapeHtml(r.level)}</span>
          <span class="badge badge-category">${escapeHtml(r.category)}</span>
          <span class="badge badge-jurisdiction">${escapeHtml(r.jurisdiction)}</span>
        </div>
        <div class="card-description">${highlight(escapeHtml(r.description), activeFilters.search)}</div>
        <div class="card-tags">
          ${(r.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
        </div>
      </a>
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
              <td>${escapeHtml(r.category)}</td>
              <td>${escapeHtml(r.level)}</td>
              <td>${highlight(escapeHtml(r.description), activeFilters.search)}</td>
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

    // Prev
    html += `<button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">← Prev</button>`;

    // First + ellipsis
    if (startPage > 1) {
      html += `<button class="page-btn" data-page="1">1</button>`;
      if (startPage > 2) html += `<span class="page-btn" style="border:none;cursor:default">…</span>`;
    }

    // Pages
    for (let i = startPage; i <= endPage; i++) {
      html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }

    // Last + ellipsis
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) html += `<span class="page-btn" style="border:none;cursor:default">…</span>`;
      html += `<button class="page-btn" data-page="${totalPages}">${totalPages}</button>`;
    }

    // Next
    html += `<button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">Next →</button>`;

    paginationEl.innerHTML = html;

    paginationEl.querySelectorAll('button[data-page]').forEach(btn => {
      btn.addEventListener('click', () => {
        const p = parseInt(btn.dataset.page, 10);
        if (!isNaN(p) && p !== currentPage) {
          currentPage = p;
          renderResults();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });
  }

  // Helpers
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);
  }

  function highlight(text, query) {
    if (!query) return text;
    const re = new RegExp('(' + escapeRegExp(query) + ')', 'gi');
    return text.replace(re, '<mark style="background:rgba(212,162,74,0.25);padding:1px 2px;border-radius:2px">$1</mark>');
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
})();
