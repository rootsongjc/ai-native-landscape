---
name: OpenSpace
slug: openspace
homepage: https://open-space.cloud/
repo: https://github.com/HKUDS/OpenSpace
license: MIT
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - Agent Skills
  - Skill Hub
  - Skill Evolution
  - Tool Registry
description: >-
  Quality-first skill hub for AI agents — browse, import, reuse, evolve, and share skills across Claude Code, Codex, Cursor, OpenClaw, and nanobot, delivered as an MCP server and judged by real task outcomes.
author: HKUDS
ossDate: '2026-03-24T08:01:49Z'
featured: false
status: tracked
---

## Overview

OpenSpace is a quality-first Skill Hub that plugs into AI agents as a shared place to browse, import, reuse, and share skills. Rather than letting skills pile up with no signal on whether they actually work, OpenSpace records real task outcomes to evolve skills that deliver, retire ones that fail, and distill experience into leaner prompts. It can be deployed inside an organization's own infrastructure so every skill an agent learns becomes a compounding internal asset.

## Key Features

- One skill hub across agents — Claude Code, Codex, Cursor, OpenClaw, and nanobot share a common place to browse, import, and reuse skills instead of rebuilding them per tool.
- Quality layer built on real tasks — every skill is judged by actual task results, with end-to-end quality records and evidence-driven evolution.
- Self-hostable skill platform — deploy inside your own infrastructure so workflows stay internal and data never leaves.
- Skill evolution engine that improves working skills through controlled changes and retires failing ones, so agents get better run over run and spend fewer tokens.
- MCP delivery with multiple transports — standalone SSE, streamable HTTP, and stdio, so remote hosts can connect over HTTP and avoid stdio-bound timeouts.
- Sharing with context — skills are shared with lineage, version history, and proof they held up in real tasks, not uploaded blindly.

## Use Cases

- Building an internal, organization-owned skill library that agents reuse across projects.
- Letting agents stop repeating failing skills by feeding real task outcomes back into selection.
- Sharing vetted skills across a team with quality evidence and lineage.
- Browsing and pulling public skill packages from a hierarchical hub.

## Technical Details

- Python 3.12+ package installed via `pip install -e .`, with an `openspace` CLI and a dashboard / TUI experience.
- Exposes skills to agents as an MCP server supporting SSE, streamable HTTP, and stdio transports.
- v2 adds package-based skill browsing, skill quality summaries, and task-trace upload as quality evidence.
- Lexical recall plus semantic reranking power package and skill search.
- MIT-licensed, maintained by HKUDS (Hong Kong University Data Science lab).
