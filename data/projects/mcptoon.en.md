---
name: mcptoon
slug: mcptoon
homepage: https://activeing123.github.io/mcptoon/
repo: https://github.com/activeing123/mcptoon
license: Apache-2.0
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - CLI
  - Token Optimization
  - Agent Skills
description: A zero-dependency Python CLI that unifies local MCP server configs across every AI client and serves them all as a single stdio MCP server, keeping tool schemas and skill files out of the context window.
author: activeing123
ossDate: '2026-07-27'
featured: false
status: tracked
---

## Overview

mcptoon is a 189 KB, Python-standard-library-only CLI that acts as a steward for the MCP tools and agent skills installed on a machine. It discovers MCP servers across agent clients, keeps one canonical config that syncs out to Claude Desktop/Code, Cursor, Codex, and opencode, and can expose every configured server as a single stdio MCP server. Its core value is token cost: tool manifests ship tool names only, and JSON schemas are fetched on demand instead of injected into every turn.

## Key Features

- Name-only tool manifest: listing 255 tools across 50 servers costs 581 tokens instead of 71,929 (−99.2%, tiktoken `cl100k_base`), with schemas fetched only when actually needed
- Skill catalog management alongside MCP servers — 371 skills measuring 926,232 tokens natively are represented by a 39-token resident pointer set, with offline BM25 shortlisting resolving the right skill in ~501 tokens
- One source of truth for MCP config synced to every agent client; adding a tool or skill later goes live immediately without agent restarts
- `mcptoon serve` aggregates all configured MCP servers behind one stdio endpoint an agent can call
- `mcptoon bench` measures what the local tool and skill catalogs actually cost in tokens, with optional tiktoken-verified "measured" mode versus estimates
- Skill views distributed as links (junctions on Windows) so one edit at the source is live everywhere, with archive-not-delete safety rules

## Use Cases

- Developers juggling MCP configs across Claude Desktop, Claude Code, Cursor, Codex, and opencode who want one synchronized configuration
- Agents whose context windows are flooded by hundreds of tool schemas loaded before every session
- Finding the right agent skill in a large catalog without reading every `SKILL.md` into context
- Reproducing token-cost claims locally — `mcptoon demo --quick` boots the official "everything" reference server and prints the token math in about 30 seconds

## Technical Details

- Pure Python standard library, CI-enforced zero runtime dependencies, 189 KB wheel; Windows, macOS, and Linux are first-class targets and releases publish to PyPI via GitHub Actions
- Manifest tiers trade detail for tokens: Compact (names only) at 99.2% savings, Slim at 88.5%, Toon result compression at ~34%, with JSON as the baseline format
- Skill resolution runs BM25 ranking offline with no LLM call and no tokens; `--k 5` returns a shortlist against queries like "make a PDF"
- Skill sync de-duplicates roots by real path so junctioned folders are not counted multiple times, and `remove` moves skills into a dated archive rather than deleting
- Ships a Claude Code plugin (`/plugin marketplace add activeing123/mcptoon`) that auto-installs the CLI via SessionStart hook, wires the stdio bridge through `.mcp.json`, and teaches the agent when to compress
- Listed in the official MCP Registry with a `server.json` published automatically per release, and packaged in numtide/llm-agents.nix with an auto-bump bot
