# landscape-search

Install the [AI Native Landscape](https://landscape.jimmysong.io) search skill for your AI coding tools. One command, zero dependencies.

## What It Does

Adds a natural language search instruction to your AI coding tool (Claude Code, Cursor, Copilot, Codex, Cline, Aider). Once installed, you can ask your AI assistant:

- "Find me an MCP-compatible agent framework"
- "帮我找一个支持 RAG 的向量数据库"
- "What's a good open-source alternative to Vercel AI SDK?"

Your AI tool will fetch the live project catalog (600+ curated open-source AI projects) and return ranked results.

## Install

```bash
npx landscape-search
```

This launches an interactive prompt to pick which tools to install for.

### Non-interactive

```bash
# Install for all supported tools
npx landscape-search --all

# Install for specific tools
npx landscape-search -t cursor -t copilot

# Overwrite existing files
npx landscape-search --all --force
```

## Supported Tools

| Tool | Install Location |
| ---- | --------------- |
| Claude Code | `~/.claude/skills/landscape-search/SKILL.md` |
| OpenAI Codex | `AGENTS.md` (project root) |
| Cursor | `.cursorrules` (project root) |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Cline | `.clinerules` (project root) |
| Aider | `CONVENTIONS.md` (project root) |

## How It Works

The skill is a pure markdown instruction that tells your AI tool to:

1. Fetch `https://landscape.jimmysong.io/exports/projects.json`
2. Match your keywords against project tags, names, categories, and descriptions
3. Return the top 5–10 results with links to detail pages

No API keys needed. No local data files. Works offline after the initial fetch.

## Reinstall / Update

Running `npx landscape-search` again is safe — it updates in-place without duplicating content.

## License

[Apache-2.0](./LICENSE)
