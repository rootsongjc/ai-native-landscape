---
name: landscape-report
description: Generate statistics and analytics reports for the AI Native Landscape — category counts, license distribution, activity trends, and growth metrics.
---

# Landscape Report

Generate statistics and analytics about the AI Native Landscape catalog. Understand composition, trends, and coverage gaps.

## When to Use

- User says "report", "statistics", "stats", "analytics", "报告", "统计"
- User wants to understand landscape composition
- User asks "how many projects in X category"
- User wants to identify gaps or biases in coverage
- Before publishing or presenting the landscape

## Steps

### Step 1: Parse All Project Data

Read all project frontmatter from `data/projects/`:

```bash
# Get all frontmatter fields
for f in data/projects/*.en.md; do
  # Extract fields: name, category, subCategory, license, status, ossDate, tags, author
done
```

Or use the built JSON data:
```bash
# If built data exists
cat dist/data/projects.json | jq '.'
```

### Step 2: Generate Statistics

#### 2.1 Overview Statistics

```
📊 AI Native Landscape Report — YYYY-MM-DD
═══════════════════════════════════════════

Total projects: XXX
  Active (tracked): XXX
  Inactive: XXX
  Archived: XXX

Categories: 8
Subcategories: 30+
Unique authors/orgs: XXX
```

#### 2.2 Category Distribution

Count projects per category and subcategory:

```
📂 Category Distribution
─────────────────────────
agents               XXX (XX%) ████████████
  agent-frameworks     XX
  agent-orchestration   XX
rag-knowledge        XXX (XX%) ██████████
  vector-databases      XX
  retrieval-indexing    XX
  ...
models-modalities    XXX (XX%) ████████
inference-serving    XXX (XX%) █████████
training-optimization XXX (XX%) ███████
coding-devtools      XXX (XX%) ██████████
applications-products XXX (XX%) ███████
platform-infra       XXX (XX%) ██████
```

#### 2.3 License Distribution

```
⚖️ License Distribution
─────────────────────────
MIT              XXX (XX%) ██████████████
Apache-2.0       XXX (XX%) ██████████
BSD-3-Clause      XX (XX%) ████
GPL-3.0           XX (XX%) ██
Other             XX (XX%) ███
Unknown            X (XX%) █
```

#### 2.4 Project Age Distribution

Based on `ossDate`:

```
📅 Project Age (by open source date)
─────────────────────────────────────
2025 (this year)    XX new
2024                XX
2023                XX
2022                XX
2021 or earlier     XX
```

#### 2.5 Top Authors

```
👤 Top Authors by Project Count
────────────────────────────────
<org1>              XX projects
<org2>              XX projects
<org3>              XX projects
...
```

#### 2.6 Tag Cloud (Top 20)

```
🏷️ Popular Tags
─────────────────
Agent Framework    XX ██████████████
LLM                XX █████████████
MCP                XX ████████████
RAG                XX ██████████
Vector Database    XX █████████
...
```

#### 2.7 Health Summary (if health check was run)

```
💚 Project Health Summary
──────────────────────────
Healthy    XXX (XX%)
Warning     XX (XX%)
Inactive    XX (XX%)
Dead         X (XX%)
```

### Step 3: Coverage Gap Analysis

Identify underrepresented areas:

```
🔍 Coverage Gaps
─────────────────
Subcategories with < 3 projects:
  - audio-speech (X projects)
  - knowledge-graphs (X projects)
  - safety-guardrails (X projects)

Subcategories with no projects:
  - (none) ✅
```

### Step 4: Trend Analysis (if historical data available)

Compare with previous report:
```
📈 Growth (vs last report)
───────────────────────────
New projects added:    +XX
Projects archived:     -XX
Net change:            +XX
Fastest growing:       agents (+XX)
```

### Step 5: Output Report

**Format options:**
- **Markdown** (default): print to console and save to `reports/stats-YYYY-MM-DD.md`
- **JSON**: structured data for programmatic use
- **Summary**: just the overview stats (one-liner per section)

```bash
# Save report
mkdir -p reports
```

### Step 6: Report to User

Present the report inline. If user wants specific drill-down:

- "show me all projects in agents" → list them
- "what licenses are in inference-serving?" → filter and show
- "compare with last month" → diff if previous report exists

## Subcommands

| Command | Description |
|---------|-------------|
| `landscape-report` | Full report |
| `landscape-report --summary` | Overview only |
| `landscape-report --category <key>` | Single category detail |
| `landscape-report --gaps` | Coverage gap analysis only |
| `landscape-report --format json` | JSON output |
| `landscape-report --save` | Save to reports/ directory |

## Error Handling

| Error | Fix |
|-------|-----|
| No built data | Parse markdown files directly |
| Missing fields | Skip incomplete entries, note in report |
| jq not available | Use grep/awk for parsing |
