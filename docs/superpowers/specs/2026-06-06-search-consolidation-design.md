# Search Consolidation Design

**Date:** 2026-06-06
**Status:** Approved
**Scope:** Reduce search component duplication while preserving all 4 UI entry points

## Problem

The site has 4 search entry points using 2 duplicated modal components:

1. **Header nav** — global search modal (`SearchModalGlobal.astro`, async loads 2.5MB JSON)
2. **Homepage hero** — inline search (`SearchModal.astro`, pre-built index)
3. **Landscape index page** — search + filter panel
4. **Category page** — search + filter within category

`SearchModal.astro` and `SearchModalGlobal.astro` share ~90% identical HTML/JS code but differ in data loading. The search/filter inputs on list and category pages visually look like global search, confusing users about scope.

## Decisions

| Decision | Choice |
|----------|--------|
| Entry points | Keep all 4 |
| Search scope | Context-aware: header + homepage = global; list + category = context filter |
| Modal components | Merge into one `SearchModal.astro` |
| Filter visual | Distinguish from search via icon + placeholder + inline style |

## Design

### 1. Unified SearchModal Component

**Delete:** `SearchModalGlobal.astro`

**Modify:** `SearchModal.astro` to support both modes:

- Accept optional `searchIndex` prop (homepage passes pre-built data)
- When no prop provided: async load `/exports/projects.json` with `sessionStorage` cache
- Cache key: `landscape-search-index`
- Cache behavior: per-session, no expiry (data changes rarely, user can refresh)

```
Data loading flow:
  Homepage → searchIndex prop passed → instant search
  Other pages → check sessionStorage → hit: use cache / miss: fetch + cache
```

### 2. Global Search (Header + Homepage)

**Trigger:** Header button click / `⌘K` / homepage hero input

**Behavior:** Modal overlay searching all 640 projects

**Visual:**
- Icon: 🔍 (search)
- Placeholder: "搜索项目名称、标签、分类..." / "Search project names, tags, categories..."
- Keyboard: `⌘K` open, `ESC` close, `Enter` navigate to first result
- Shows up to 20 results

**Files:**
- `BaseLayout.astro` — reference unified `SearchModal`, remove `SearchModalGlobal`
- `LandscapeGrid.astro` — pass `searchIndex` prop to `SearchModal`

### 3. Context Filter (List Page + Category Page)

**Behavior:** Inline input filtering only visible projects on current page (no modal, no navigation)

**Visual changes:**
- Icon: `🔍` → `🔽` (filter funnel)
- Placeholder: "搜索项目..." → "筛选当前列表..." / "Filter current list..."
- Add filter count: "显示 23 / 640 个项目"
- Add "清除筛选 ✕" link when filters are active

**Files:**
- `LandscapeIndex.astro` — update search input visual style
- `CategoryPage.astro` — update search input visual style

### 4. i18n Updates

Add to `src/lib/landscape.mjs`:

```js
filterPlaceholder: {
  en: 'Filter current list...',
  zh: '筛选当前列表...'
},
filterCount: {
  en: (shown, total) => `Showing ${shown} / ${total} projects`,
  zh: (shown, total) => `显示 ${shown} / ${total} 个项目`
},
clearFilter: {
  en: 'Clear filters ✕',
  zh: '清除筛选 ✕'
}
```

### 5. Files Changed

| File | Action | Risk |
|------|--------|------|
| `src/components/SearchModal.astro` | Refactor: add async load + sessionStorage cache | Medium |
| `src/components/SearchModalGlobal.astro` | **Delete** | Low |
| `src/layouts/BaseLayout.astro` | Swap component reference | Low |
| `src/components/LandscapeGrid.astro` | Adjust prop passing to SearchModal | Low |
| `src/components/LandscapeIndex.astro` | Filter visual style update | Low |
| `src/components/CategoryPage.astro` | Filter visual style update | Low |
| `src/lib/landscape.mjs` | Add filter i18n strings | Low |

### 6. What Does NOT Change

- Filter logic on list/category pages (still JS-based DOM filtering)
- Keyboard shortcuts (`⌘K`, `ESC`, `/`, `Enter`)
- Search result ranking (simple `String.includes` matching, up to 20 results)
- Mobile responsive behavior
- Agent skills / MCP server integration
