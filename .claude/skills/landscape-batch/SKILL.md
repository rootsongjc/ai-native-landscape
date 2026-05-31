---
name: landscape-batch
description: Bulk import multiple projects to the AI Native Landscape from a JSON file, CSV file, or list of GitHub URLs.
---

# Batch Import Projects

Import multiple projects at once from structured data files or URL lists. Deduplicates, classifies, and generates markdown files for each project.

## When to Use

- User provides a JSON/CSV file of projects to add
- User pastes a list of GitHub URLs
- User says "batch add", "bulk import", "批量添加", "批量导入"
- Importing from an external data source or survey
- After collecting project suggestions from multiple sources

## Steps

### Step 1: Accept Input Source

Supported input formats:

**A) JSON file:**
```json
[
  {
    "url": "https://github.com/org/repo1",
    "category": "agents",
    "subCategory": "agent-frameworks"
  },
  {
    "url": "https://github.com/org/repo2"
  }
]
```

`category` and `subCategory` are optional — auto-classified if omitted.

**B) CSV file:**
```csv
url,category,subCategory
https://github.com/org/repo1,agents,agent-frameworks
https://github.com/org/repo2,,
```

**C) Plain URL list (one per line):**
```
https://github.com/org/repo1
https://github.com/org/repo2
```

**D) Inline URLs in user message:**
```
Add these: github.com/org/repo1, github.com/org/repo2
```

### Step 2: Parse and Normalize Input

1. Read the input source
2. Extract GitHub URLs — normalize to `https://github.com/owner/repo` format
3. Count total projects to process
4. Present summary to user: "Found X projects to import. Proceed?"

### Step 3: Deduplicate Against Existing

Check each URL against existing projects:

```bash
# For each URL
grep -r "github.com/<owner>/<repo>" data/projects/
```

**Dedup report:**
```
Deduplication:
  New: X
  Already exists: Y (skipped)
    - <slug1> (existing)
    - <slug2> (existing)
```

### Step 4: Fetch GitHub Metadata (Batch)

For each new project, fetch repo data:

```bash
gh repo view <owner>/<repo> --json name,description,homepageUrl,licenseInfo,stargazerCount,createdAt,repositoryTopics,owner
```

**Batch optimization:**
- Process 5-10 repos in parallel using background jobs
- Respect rate limits (sleep between batches)
- Track failures for retry

### Step 5: Classify Each Project

For projects without explicit `category`/`subCategory`:
1. Use auto-classification rules from `scripts/lib.mjs` (`TAG_PRIORITY_RULES`, `SUBCATEGORY_RULES`)
2. Match GitHub topics → tags → subcategory → category
3. If confidence is low, flag for manual review

```
Classification:
  Auto-classified: X
  Manual review needed: Y
    - <repo1>: unclear category (topics: X, Y, Z)
    - <repo2>: could fit multiple categories
```

For manual review items, present options to user.

### Step 6: Generate Project Files

For each classified project, create bilingual markdown files following the same format as `landscape-add` skill:

**`data/projects/<slug>.en.md`** and **`data/projects/<slug>.zh.md`**

Each file includes:
- Full frontmatter with all required fields
- Content sections (Overview, Key Features, Use Cases, Technical Details)
- Chinese translation for `.zh.md`

**Template:**
```markdown
---
name: <name>
slug: <slug>
homepage: <url or null>
repo: https://github.com/<owner>/<repo>
license: <SPDX>
category: <key>
subCategory: <key>
tags:
  - <tag1>
  - <tag2>
description: <description>
logo: ''
author: <org>
ossDate: '<date>'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview
...

## Key Features
...

## Use Cases
...

## Technical Details
...
```

### Step 7: Validate All at Once

```bash
npm run validate
```

Fix any validation errors. Common issues:
- Missing required fields
- Invalid category/subCategory pairs
- Duplicate slugs

### Step 8: Build and Verify

```bash
npm run build
```

Verify count:
```bash
# Count before and after
ls data/projects/*.en.md | wc -l
```

### Step 9: Report Summary

```
✅ Batch Import Complete
═══════════════════════
Input: X projects
  Skipped (duplicate): Y
  Skipped (error): Z
  Imported successfully: N

By category:
  agents: +X
  rag-knowledge: +X
  ...
Files created: 2N (N.en.md + N.zh.md)
Validation: PASSED
Build: PASSED
```

## Error Handling

| Error | Fix |
|-------|-----|
| Invalid GitHub URL | Skip, report in summary |
| Repo not found | Skip, report as "repo not found" |
| GitHub API rate limit | Pause, wait, resume batch |
| Classification unclear | Flag for manual review |
| Validation fails | Show errors, fix what's possible, skip rest |
| Partial failure | Continue processing rest, report failures at end |

## Resume Support

If batch is interrupted:
1. Track progress in a temp file: `/tmp/landscape-batch-progress.json`
2. Record which slugs were successfully created
3. On retry, skip already-completed projects
4. Allow: `landscape-batch --resume`
