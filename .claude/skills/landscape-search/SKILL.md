---
name: landscape-search
description: Search the AI Native Landscape for open-source AI projects by natural language description. Find tools, frameworks, agents, runtimes, and infrastructure for AI native systems.
---

# AI Native Landscape Search

Search 600+ curated open-source AI projects by natural language description. Find the right tool, framework, agent runtime, or infrastructure component for your AI native stack.

## When to Use

- User asks to find open-source AI projects, tools, or frameworks
- User describes a need like "vector database for RAG", "AI agent framework", "LLM inference engine"
- User wants to explore what's available in a specific AI domain
- User says "find project", "search landscape", "recommend a tool", "找项目", "搜索全景图"
- User wants alternatives to a commercial AI tool

## Steps

### Step 1: Understand the User's Need

Parse the user's description to extract:
- **Core need**: What problem are they solving? (e.g., "vector search", "model serving", "agent orchestration")
- **Keywords**: Technical terms, product names, or domain concepts
- **Filters**: Language, license preference, category hints
- **Language preference**: Does the user write in Chinese (zh) or English (en)?

### Step 2: Fetch Project Data

Fetch the project catalog:

```bash
curl -s https://landscape.jimmysong.io/data/projects.json
```

This returns a JSON array of 600+ projects. Each project has:

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Project display name |
| `slug` | string | URL-safe identifier |
| `description` | object | `{zh: string, en: string}` bilingual descriptions |
| `repo` | string | GitHub repository URL |
| `homepage` | string \| null | Project website |
| `license` | string | SPDX license identifier |
| `category` | string | Main category key |
| `subCategory` | string | Sub-category key |
| `tags` | string[] | Topic tags |
| `author` | string | Maintainer org |
| `ossDate` | string | Open source date |
| `status` | string | tracked / incubating / graduated / archived |
| `score` | object | Health scores (activity, community, quality, sustainability) |
| `content` | object | `{zh: string, en: string}` detailed markdown descriptions |

### Step 3: Search and Rank

For each project, compute a relevance score by matching the user's keywords against these fields (in priority order):

1. **Tags** (weight 3.0) — exact or partial tag match is the strongest signal
2. **Name** (weight 2.5) — project name contains keywords
3. **Category / SubCategory** (weight 2.0) — domain match
4. **Description** (weight 1.5) — en and zh description text
5. **Author** (weight 0.5) — org name match

**Matching rules:**
- Split the user's query into individual words/terms
- Case-insensitive matching
- Each matching term contributes its field's weight to the project's total score
- Terms that match multiple fields get additive scores

**Category keys for filtering:**
| Key | Domain |
|-----|--------|
| `agents` | Agent Systems (frameworks, orchestration, MCP, coding agents) |
| `rag-knowledge` | Knowledge & Context (vector DBs, retrieval, knowledge graphs) |
| `models-modalities` | Models & Modalities (LLMs, embedding, multimodal) |
| `inference-serving` | Inference & Serving (runtimes, gateways, model serving) |
| `training-optimization` | Training & Optimization (frameworks, fine-tuning, eval) |
| `coding-devtools` | Developer Tooling (SDKs, CLI, IDE tools) |
| `applications-products` | Applications & Products (chatbots, productivity) |
| `platform-infra` | Platform & Infrastructure (data platforms, cloud native) |

### Step 4: Present Results

Return the **top 5-10 matches** sorted by relevance score. For each match, display:

**Format (English query):**
```
### [Project Name](detail-page-url)
**Description:** One-line description from the project
**Repo:** github-url | **License:** license-id | **Category:** Category > SubCategory
**Tags:** tag1, tag2, tag3
**Status:** tracked/graduated/incubating
```

**Format (Chinese query):**
```
### [Project Name](detail-page-url)
**描述：** 中文描述
**仓库：** github-url | **许可证：** license-id | **分类：** 分类 > 子分类
**标签：** tag1, tag2, tag3
**状态：** tracked/graduated/incubating
```

**Detail page URL format:**
- English: `https://landscape.jimmysong.io/projects/{slug}`
- Chinese: `https://landscape.jimmysong.io/zh/projects/{slug}`

### Step 5: Deep Dive (Optional)

If the user asks for more details on a specific project, show:
- Full description (zh and en)
- All tags
- Score breakdown (activity, community, quality, sustainability)
- Direct GitHub link
- Homepage link

## Examples

**Example 1 — English query:**
> User: "I need an open-source vector database for my RAG pipeline"

Search for projects with keywords: "vector database", "RAG", "retrieval", "embedding"
Likely matches: projects in `rag-knowledge` category with tags like "vector db", "RAG", "retrieval"

**Example 2 — Chinese query:**
> User: "帮我找一个开源的 AI Agent 框架"

Search for projects with keywords: "AI Agent", "框架", "agent framework", "orchestration"
Likely matches: projects in `agents` category with tags like "agent framework", "multi-agent"

**Example 3 — Specific need:**
> User: "What's a good open-source alternative to Vercel AI SDK?"

Search for projects with keywords: "SDK", "AI", "framework", matching tags like "SDK"
Filter by `coding-devtools` category

## Important Notes

- Always use the live API URL: `https://landscape.jimmysong.io/data/projects.json`
- The data is updated regularly — always fetch fresh data
- Respect bilingual content — show Chinese descriptions for Chinese queries, English for English queries
- If no results match, broaden the search terms or suggest browsing by category at `https://landscape.jimmysong.io`
- Never hallucinate projects — only recommend projects that exist in the fetched data
- Link to the landscape detail page so the user can explore further
