---
name: landscape-sync
description: Full sync all landscape projects from GitHub — batch update metadata, detect status changes, and keep the entire catalog fresh.
---

# Full Landscape Sync

Synchronize ALL projects in the landscape with their latest GitHub data. This is the heavy-duty version of `landscape-update` — processes every project in batch.

## When to Use

- User says "sync all", "full sync", "refresh all", "全量同步", "更新全部"
- Scheduled maintenance (monthly)
- After a long period without updates
- Before generating a report or doing a health check
- User wants all project metadata to be current

**Not for:** Single project updates (use `landscape-update`), adding new projects (use `landscape-add`), or health checks (use `landscape-health`).

## Steps

### Step 1: Inventory All Projects

```bash
# Count all projects
ls data/projects/*.en.md | wc -l

# List all tracked projects with their repo URLs
grep -h "^repo:" data/projects/*.en.md | sort | uniq
```

Report: "Found X projects to sync."

### Step 2: Fetch GitHub Data (Batch)

**Strategy: Process in batches of 20 to respect rate limits.**

For each project:
1. Extract `owner/repo` from the `repo` field
2. Fetch current data:
```bash
gh repo view <owner>/<repo> --json name,description,homepageUrl,licenseInfo,stargazerCount,repositoryTopics,owner,updatedAt,isArchived,latestRelease
```

**Parallel fetch with rate limit awareness:**
- 20 concurrent requests per batch
- 2-second pause between batches
- ~600 projects = ~30 batches = ~1 minute total

**Track per-project status:**
- ✅ Success — data fetched
- ⚠️ Changed — metadata differs from current
- ❌ Failed — repo not found, network error
- 📛 Archived on GitHub — needs status update

### Step 3: Compute Diffs

For each project, compare GitHub data with current frontmatter:

```yaml
# Fields to check
- name
- description
- license
- homepage
- tags (GitHub topics)
- author (owner)
```

**Diff categories:**
- **No change**: Skip, no update needed
- **Minor change**: description tweak, tag update → auto-apply
- **Major change**: name change, license change → flag for review
- **Status change**: GitHub archived → flag for archival

### Step 4: Present Sync Plan

Show summary before applying:

```
🔄 Sync Plan
═════════════
Total projects: XXX
  No change:         XXX
  Minor updates:      XX
  Major changes:       X (review needed)
  GitHub archived:     X (suggest archive)
  Failed/Not found:    X (investigate)

Minor updates:
  - <slug1>: description changed, +2 tags
  - <slug2>: license MIT → Apache-2.0
  ...

Major changes (review):
  - <slug3>: name "Old" → "New"
  ...

Archived on GitHub:
  - <slug4>: archived on YYYY-MM-DD
  ...

Failed:
  - <slug5>: repo not found
  ...
```

Ask user: "Apply minor updates automatically? Review major changes? [all/review-all/minor-only]"

### Step 5: Apply Updates

**For minor updates** (auto-approved):
1. Update frontmatter in both `.en.md` and `.zh.md`
2. For `description` changes: update English, translate to Chinese

**For major changes** (per-project confirmation):
1. Show old → new for each field
2. User approves or rejects per project
3. Apply approved changes

**For archived repos** (auto-flag):
1. Don't auto-archive — present for confirmation
2. If approved, set `status: archived` + `archiveReason: repo-archived`

**For failed repos** (report only):
1. List in final report
2. Suggest manual investigation or archival

### Step 6: Update Statuses

Projects where `status` should change:

```yaml
# If GitHub isArchived and current status is "tracked"
status: archived
archiveDate: '<YYYY-MM-DD>'
archiveReason: 'repo-archived'
featured: false
```

Apply to both language files.

### Step 7: Validate and Build

```bash
npm run validate
npm run build
```

### Step 8: Generate Sync Report

```
📋 Full Sync Report — YYYY-MM-DD
═════════════════════════════════

Processed: XXX projects
  Updated: XX
  Archived: X
  Failed: X
  Unchanged: XXX

Fields updated:
  description: XX changes
  tags: XX changes
  license: X changes
  homepage: X changes
  name: X changes

Archived projects:
  - <slug> (reason)
  ...

Failed projects:
  - <slug> (error)
  ...

Build: ✅ PASSED
```

Save report to `reports/sync-YYYY-MM-DD.md`.

### Step 9: Follow-up Recommendations

Based on sync results, suggest:
- Run `landscape-health` for detailed activity analysis
- Run `landscape-report` for updated statistics
- Manually review failed projects
- Check if new GitHub topics suggest category reclassification

## Incremental Sync

For faster subsequent syncs:
1. Track last sync date per project
2. Only fetch projects not synced in X days
3. `landscape-sync --incremental` — only process stale entries

## Performance

| Projects | Time | API calls |
|----------|------|-----------|
| 100 | ~30s | 100 |
| 300 | ~90s | 300 |
| 600 | ~3min | 600 |

## Error Handling

| Error | Fix |
|-------|-----|
| GitHub rate limit | Pause batch, resume after reset |
| Network timeout | Retry 3x with backoff, skip on failure |
| Repo deleted/404 | Flag for archival |
| Auth expired | Prompt `gh auth login`, resume |
| Partial completion | Save progress, support `--resume` |
