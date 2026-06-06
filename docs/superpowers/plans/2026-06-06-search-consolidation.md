# Search Consolidation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Merge two duplicated search modal components into one unified component with sessionStorage caching, and visually distinguish global search from context filters on list/category pages.

**Architecture:** Replace `SearchModalGlobal.astro` by extending `SearchModal.astro` to support both prop-based (homepage) and async-loaded (other pages) data. Add sessionStorage cache so non-homepage pages get instant search after first load. Change filter inputs on LandscapeIndex and CategoryPage to use funnel icon + filter-specific placeholder.

**Tech Stack:** Astro components, vanilla JS, sessionStorage API, existing CSS custom properties

---

### Task 1: Add filter i18n strings

**Files:**
- Modify: `src/lib/landscape.mjs` (zh block ~line 77, en block ~line 360)

- [ ] **Step 1: Add zh filter strings after `searchModalHint`**

In `src/lib/landscape.mjs`, after the zh `searchModalHint` line, add:

```js
    filterPlaceholder: '筛选当前列表...',
    clearFilter: '清除筛选',
```

- [ ] **Step 2: Add en filter strings after `searchModalHint`**

In `src/lib/landscape.mjs`, after the en `searchModalHint` line, add:

```js
    filterPlaceholder: 'Filter current list...',
    clearFilter: 'Clear filters',
```

- [ ] **Step 3: Verify build passes**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add src/lib/landscape.mjs
git commit -m "feat: add filter i18n strings for search consolidation"
```

---

### Task 2: Unify SearchModal component

**Files:**
- Modify: `src/components/SearchModal.astro` (script section only)

This is the core change. The current component uses `define:vars` to receive a pre-built `searchIndex` array. We extend it to also work without props — loading from `/exports/projects.json` with sessionStorage cache.

The existing `esc()` function sanitizes all content before DOM insertion. The data source is our curated project dataset (not user input), and the search results are rendered through the same `esc()` escape function that already exists in the codebase.

- [ ] **Step 1: Replace the `<script define:vars={{ searchIndex, lang }}>` block**

Replace lines 33-133 (the entire script block) with the following. This preserves the existing HTML structure, CSS, open/close logic, and search matching — only the data loading changes:

```html
<script define:vars={{ searchIndex, lang }}>
(() => {
  const modal = document.getElementById('search-modal');
  const input = document.getElementById('search-modal-input');
  const resultsEl = document.getElementById('search-modal-results');
  const emptyEl = document.getElementById('search-modal-empty');
  const hintEl = document.getElementById('search-modal-hint');
  if (!modal || !input) return;

  const CACHE_KEY = 'landscape-search-index';
  let index = searchIndex && searchIndex.length > 0 ? searchIndex : null;
  let loaded = !!index;
  let loading = false;

  async function ensureIndex() {
    if (loaded) return;
    if (loading) return;
    loading = true;

    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        index = JSON.parse(cached);
        loaded = true;
        loading = false;
        return;
      }
    } catch (_) {}

    try {
      const res = await fetch('/exports/projects.json');
      const data = await res.json();
      const langCode = lang === 'zh' ? 'zh' : 'en';
      index = data.map(p => ({
        slug: p.slug,
        name: p.name,
        repoSlug: p.repoSlug,
        statusKey: p.status,
        categoryKey: p.category,
        subCategoryKey: p.subCategory,
        tags: p.tags || [],
        description: (langCode === 'zh' ? p.description?.zh : p.description?.en) || '',
      }));
      try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(index)); } catch (_) {}
      loaded = true;
    } catch (e) {
      console.warn('Failed to load search index:', e);
    }
    loading = false;
  }

  let currentResults = [];

  function open() {
    if (!modal.hidden) return;
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => input.focus());
    if (!loaded) ensureIndex();
  }

  function close() {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    input.value = '';
    resultsEl.innerHTML = '';
    currentResults = [];
    emptyEl.hidden = true;
    hintEl.hidden = false;
  }

  document.addEventListener('open-search-modal', open);

  modal.querySelector('[data-search-modal-close]')?.addEventListener('click', close);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      close();
      return;
    }
    if (e.key === 'Enter' && currentResults[0]) {
      e.preventDefault();
      window.location.href = projectHref(currentResults[0]);
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) close();
  });

  function search(query) {
    if (!query || !index) {
      currentResults = [];
      resultsEl.innerHTML = '';
      emptyEl.hidden = true;
      hintEl.hidden = !loaded;
      return;
    }
    const q = query.toLowerCase();
    const results = index.filter(p => {
      const name = (p.name || '').toLowerCase();
      const desc = (p.description || '').toLowerCase();
      const tags = (p.tags || []).join(' ').toLowerCase();
      const cat = (p.categoryKey || '').toLowerCase();
      return name.includes(q) || desc.includes(q) || tags.includes(q) || cat.includes(q);
    }).slice(0, 20);
    currentResults = results;

    if (results.length === 0) {
      resultsEl.innerHTML = '';
      emptyEl.hidden = false;
      hintEl.hidden = true;
      return;
    }

    emptyEl.hidden = true;
    hintEl.hidden = true;

    resultsEl.innerHTML = results.map(p => {
      const href = projectHref(p);
      const tags = (p.tags || []).slice(0, 3);
      const meta = [p.categoryKey, p.subCategoryKey].filter(Boolean).join(' / ');
      return `<a class="search-modal__result" href="${href}">
        <span class="search-modal__result-main">
          <span class="search-modal__result-name">${esc(p.name)}</span>
          ${meta ? `<span class="search-modal__result-category">${esc(meta)}</span>` : ''}
        </span>
        <span class="search-modal__result-desc">${esc(p.description?.substring(0, 150) || '')}</span>
        ${tags.length ? `<span class="search-modal__result-tags">${tags.map(tag => `<span>${esc(tag)}</span>`).join('')}</span>` : ''}
      </a>`;
    }).join('');
  }

  function projectHref(project) {
    const prefix = lang === 'zh' ? '/zh/projects/' : '/projects/';
    return prefix + project.slug + '/';
  }

  function esc(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  input.addEventListener('input', () => search(input.value.trim()));
})();
</script>
```

Key differences from original:
- Variable renamed `searchIndex` → `index`, initialized from prop or `null`
- New `ensureIndex()` function: checks sessionStorage cache → fetches from network → stores cache
- `search()` guards with `!index` check — gracefully handles async loading state
- All HTML structure, CSS, modal open/close, and result rendering remain identical

- [ ] **Step 2: Verify build passes**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/components/SearchModal.astro
git commit -m "refactor: unify SearchModal with async loading and sessionStorage cache"
```

---

### Task 3: Delete SearchModalGlobal and update BaseLayout

**Files:**
- Modify: `src/layouts/BaseLayout.astro:3` (import) and line 633 (component)
- Delete: `src/components/SearchModalGlobal.astro`

- [ ] **Step 1: Update BaseLayout import (line 3)**

Change:
```js
import SearchModalGlobal from '../components/SearchModalGlobal.astro';
```
To:
```js
import SearchModal from '../components/SearchModal.astro';
```

- [ ] **Step 2: Update BaseLayout component (line 633)**

Change:
```astro
{!isHomePage && <SearchModalGlobal lang={lang} />}
```
To:
```astro
{!isHomePage && <SearchModal lang={lang} />}
```

No `searchIndex` prop is passed, so the unified component will use async mode with sessionStorage cache.

- [ ] **Step 3: Delete SearchModalGlobal.astro**

```bash
rm src/components/SearchModalGlobal.astro
```

- [ ] **Step 4: Verify build and no stale references**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds

Run: `grep -r "SearchModalGlobal" src/`
Expected: No output

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "refactor: delete SearchModalGlobal, use unified SearchModal in BaseLayout"
```

---

### Task 4: Update LandscapeIndex filter visual style

**Files:**
- Modify: `src/components/LandscapeIndex.astro:83-111`

- [ ] **Step 1: Update the search panel toolbar**

Find the toolbar section (lines 87-109):
```astro
      <div class="toolbar toolbar--search-simple" aria-label="Search controls">
        <label class="search-field">
          <span>{copy.search}</span>
          <input data-search-input type="search" placeholder={copy.searchPlaceholder} />
        </label>
        ...
```

Replace the entire `<div class="toolbar toolbar--search-simple">` block with:

```astro
      <div class="toolbar toolbar--search-simple" aria-label="Filter controls">
        <label class="search-field search-field--filter">
          <svg class="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
          </svg>
          <input data-search-input type="search" placeholder={copy.filterPlaceholder} />
        </label>
        <label>
          <span>{copy.category}</span>
          <select data-search-category>
            <option value="">{copy.allCategories}</option>
            {categories.map((category) => <option value={category.key}>{categoryName(category, lang)}</option>)}
          </select>
        </label>
        <label>
          <span>{copy.status}</span>
          <select data-search-status>
            <option value="">{copy.allStatus}</option>
            <option value="tracked">{statusLabel('tracked', lang)}</option>
            <option value="unavailable">{statusLabel('unavailable', lang)}</option>
            <option value="archived">{statusLabel('archived', lang)}</option>
            <option value="inactive">{statusLabel('inactive', lang)}</option>
          </select>
        </label>
        <span class="filter-count" data-filter-count></span>
      </div>
```

Changes: label class → `search-field--filter`, search icon → funnel SVG, `<span>{copy.search}</span>` removed, placeholder → `copy.filterPlaceholder`, added `<span class="filter-count">`.

- [ ] **Step 2: Add filter CSS to the component's `<style>` block**

Append these rules inside the existing `<style>` tag:

```css
.filter-icon {
  width: 16px;
  height: 16px;
  color: var(--muted);
  flex-shrink: 0;
}
.search-field--filter {
  display: flex;
  align-items: center;
  gap: 8px;
}
.search-field--filter input {
  flex: 1;
  min-width: 0;
}
.filter-count {
  font-size: 0.78rem;
  color: var(--muted);
  white-space: nowrap;
  padding: 0 4px;
}
.filter-count:empty {
  display: none;
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add src/components/LandscapeIndex.astro
git commit -m "style: update LandscapeIndex search to filter visual with funnel icon"
```

---

### Task 5: Update CategoryPage filter visual style

**Files:**
- Modify: `src/components/CategoryPage.astro:74-79`

- [ ] **Step 1: Update the category toolbar search field**

Find the search field (lines 75-79):
```astro
      <div class="category-toolbar__search">
        <label class="search-field">
          <span>{copy.search}</span>
          <input data-filter-search type="search" placeholder={copy.searchPlaceholder} />
        </label>
      </div>
```

Replace with:

```astro
      <div class="category-toolbar__search">
        <label class="search-field search-field--filter">
          <svg class="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
          </svg>
          <input data-filter-search type="search" placeholder={copy.filterPlaceholder} />
        </label>
      </div>
```

- [ ] **Step 2: Add filter CSS to the component's `<style>` block**

Append these rules inside the existing `<style>` tag:

```css
.filter-icon {
  width: 16px;
  height: 16px;
  color: var(--muted);
  flex-shrink: 0;
}
.search-field--filter {
  display: flex;
  align-items: center;
  gap: 8px;
}
.search-field--filter input {
  flex: 1;
  min-width: 0;
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add src/components/CategoryPage.astro
git commit -m "style: update CategoryPage search to filter visual with funnel icon"
```

---

### Task 6: Final verification

**Files:** None (verification only)

- [ ] **Step 1: Run full build**

Run: `npm run build`
Expected: Clean build, no errors

- [ ] **Step 2: Verify no stale references**

Run: `grep -r "SearchModalGlobal" src/`
Expected: No output

Run: `grep -n "filterPlaceholder\|clearFilter" src/lib/landscape.mjs`
Expected: 4 matches (zh + en for each key)

Run: `grep -n "sessionStorage\|CACHE_KEY\|ensureIndex" src/components/SearchModal.astro`
Expected: All three appear

Run: `grep -n "search-field--filter\|filter-icon\|filterPlaceholder" src/components/LandscapeIndex.astro src/components/CategoryPage.astro`
Expected: Both files contain these patterns
