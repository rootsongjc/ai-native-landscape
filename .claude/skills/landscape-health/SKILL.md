---
name: landscape-health
description: Batch health check all tracked projects — detect inactive repos, stale data, archived GitHub repos, and propose removals.
---

# Landscape Health Check

Scan all tracked projects for signs of abandonment, staleness, or issues. Generate a health report and propose removals. Dead projects are removed from the repository through a pull request; there is no archived or inactive status.

## When to Use

- User says "health check", "check projects", "audit landscape", "检查健康"
- Periodic maintenance (weekly/monthly)
- Before a release or public update
- User wants to know which projects are still active
- After running `landscape-sync` to identify issues

## Steps

### Step 1: Collect All Tracked Projects

```bash
grep -rl "status: tracked" data/projects/*.en.md | sed 's/\.en\.md$//' | xargs -I{} basename {}
```

This gives all active slugs. Count them.

### Step 2: Define Health Indicators

| Indicator | Healthy | Warning | Critical |
|-----------|---------|---------|----------|
| Last commit | < 6 months | 6-12 months | > 12 months |
| GitHub archived | false | — | true |
| Open issues trend | Stable or declining | Slowly growing | Rapidly growing, no response |
| Last release | < 6 months | 6-18 months | > 18 months or never |
| Stars trend | Growing | Flat | Declining significantly |

### Step 3: Batch GitHub Check

For each tracked project, fetch activity data:

```bash
# For a single project
gh repo view <owner>/<repo> --json updatedAt,isArchived,stargazerCount,openIssues,latestRelease

# Batch: process all projects (respect rate limits)
```

**Rate limit strategy:**
- `gh api` supports ~5000 requests/hour (authenticated)
- For 600+ projects, batch in groups of 50
- Sleep 1s between groups to avoid throttling

Collect for each project:
- `updatedAt` — last push date
- `isArchived` — GitHub archive status
- `stargazerCount` — current stars
- `openIssues` — open issue count
- `latestRelease.publishedAt` — last release date (if any)

### Step 4: Compute Health Scores

For each project, calculate:

**Activity score (0-100):**
- Last commit < 3 months: 100
- 3-6 months: 80
- 6-12 months: 50
- 12-18 months: 20
- > 18 months: 0

**Release cadence score (0-100):**
- Release in last 3 months: 100
- 3-6 months: 80
- 6-12 months: 50
- > 12 months: 20
- No releases ever: 40 (may be rolling release)

**Overall health = (activity * 0.6 + release * 0.4)**

### Step 5: Classify Projects

| Classification | Criteria | Suggested action |
|---------------|----------|-----------------|
| **Healthy** | Score ≥ 60 | No action |
| **Warning** | Score 30-59 | Flag for review |
| **Inactive** | Score < 30 | Removal candidate — maintainer decides |
| **Dead** | GitHub archived, repo returns 404, or no commit > 18 months | Propose removal |

### Step 6: Generate Report

Output a structured report:

**Summary:**
```
Landscape Health Report — YYYY-MM-DD
Total tracked: X
  Healthy: X (X%)
  Warning: X (X%)
  Removal candidates (inactive): X
  Proposed removals (dead): X
```

**By category:**
```
Category breakdown:
  agents:             X healthy / X warning / X inactive
  rag-knowledge:      X healthy / X warning / X inactive
  ...
```

**Action items (sorted by urgency):**
```
🔴 Remove (dead):
  - <slug> (repo archived on YYYY-MM-DD)
  - <slug> (no activity since YYYY-MM-DD)

🟡 Review — removal candidate (inactive):
  - <slug> (last commit: YYYY-MM-DD, score: XX)
  - <slug> (last commit: YYYY-MM-DD, score: XX)

🟢 Healthy (sample of highest scoring):
  - <slug> (score: XX)
  - <slug> (score: XX)
```

### Step 7: Apply Suggested Changes (Optional)

If user approves:
1. For "remove" projects → run `landscape-remove`, which deletes both language files and opens a pull request for a maintainer to merge
2. For "removal candidate" projects → change nothing unless the user decides to remove them; then run `landscape-remove` as well
3. Validate and build

Never set a status other than `tracked`, and never push removals to `main` directly.

Ask user: "Open a pull request with the removals? [all/dead-only/review-each/none]"

### Step 8: Save Report

Save the report to project root for reference:

```bash
# Save to reports/ directory
```

File: `reports/health-YYYY-MM-DD.md`

## Single Project Health

When user asks about one project's health:
```bash
landscape-health <slug>
```

Show detailed health breakdown for that project only.

## Continuous Monitoring

For ongoing monitoring, this skill can be scheduled:
- Weekly: quick check (last commit date only)
- Monthly: full health check with scores

## Error Handling

| Error | Fix |
|-------|-----|
| GitHub API rate limit | Process in batches, save progress, resume |
| Repo not found | Propose removal (repo deleted); re-check first, a 404 can be temporary |
| Network timeout | Retry with backoff, skip and flag |
| `gh` not authenticated | Prompt user to run `gh auth login` |
