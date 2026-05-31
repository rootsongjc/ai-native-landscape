---
name: OpenHuman
slug: openhuman
homepage: https://tinyhumans.ai/openhuman
repo: https://github.com/tinyhumansai/openhuman
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - AI Agent
  - Assistant
  - Automation
  - Connector
  - Memory
description: >-
  OpenHuman is an open-source personal AI super intelligence assistant focused on privacy, simplicity, and power,
  featuring 118+ third-party integrations, local memory trees, an Obsidian wiki, and native voice interaction.
logo: ''
author: senamakel
ossDate: '2025-04-01'
featured: false
status: tracked
---

## Overview

OpenHuman is an open-source agentic assistant designed to integrate AI deeply into your daily work and life. It takes a desktop-first approach with a clean, intuitive UI — no terminal required, no config-first setup. Install, connect your accounts, and have a working agent in minutes. All workflow data stays on your device, encrypted locally, ensuring full data sovereignty.

OpenHuman builds a local-first knowledge base through Memory Trees and an Obsidian Wiki. It automatically canonicalizes all connected data sources into Markdown chunks, scores them, and folds them into hierarchical summary trees stored in a local SQLite database. An optional agentmemory backend allows sharing persistent storage with coding agents like Claude Code, Cursor, and Codex.

## Key Features

- **118+ Third-Party Integrations with Auto-Fetch**: One-click OAuth for Gmail, Notion, GitHub, Slack, Stripe, Calendar, Drive, Linear, Jira, and more. Every connection is exposed as a typed tool, and data is pulled into the memory tree every 20 minutes automatically.
- **Memory Tree + Obsidian Wiki**: A local-first knowledge base that canonicalizes all data into ≤3k-token Markdown chunks, scores them, and stores them in hierarchical summary trees in SQLite. The same chunks land as `.md` files in an Obsidian-compatible vault.
- **TokenJuice Smart Compression**: Every tool call, scrape result, email body, and search payload passes through a token compression layer before reaching any LLM. Reduces cost and latency by up to 80% while preserving CJK, emoji, and other multi-byte text grapheme-by-grapheme.
- **Built-in Model Routing**: Automatically sends each task to the right LLM (reasoning, fast, or vision) under one subscription.
- **Native Voice Support**: STT input, ElevenLabs TTS output, desktop mascot lip-sync, and the ability to join Google Meets as a real participant.
- **Batteries-Included Tooling**: Web search, web scraper, full coder toolset (filesystem, git, lint, test, grep), and optional local AI via Ollama are wired in by default.

## Use Cases

- **Personal Knowledge Management**: Auto-sync email, calendar, repos, docs, and messages into a personal knowledge graph with cross-source contextual recall.
- **Development Assistance**: Built-in filesystem, Git, and code search tools combined with context awareness provide an efficient coding and debugging experience.
- **Team Collaboration**: Intelligent project tracking and message handling through Slack, Linear, Jira, and other integrations.
- **Meeting Participation**: The AI agent can join Google Meet as a real participant with voice interaction and real-time responses.

## Technical Highlights

- Cross-platform desktop app built with Tauri + CEF, supporting macOS, Linux, and Windows.
- Frontend in TypeScript + React, backend core in Rust.
- Local SQLite storage with encryption, fully offline-capable.
- Optional Ollama local inference for privacy-sensitive workloads.
- Modular tool architecture where each third-party connection is exposed as a typed tool for easy extensibility.
