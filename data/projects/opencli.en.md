---
name: OpenCLI
slug: opencli
homepage: https://opencli.info/
repo: https://github.com/jackwener/OpenCLI
license: Apache-2.0
category: coding-devtools
subCategory: browser-automation
tags:
  - Browser Automation
  - CLI
  - AI Agents
  - Playwright
description: >-
  A browser automation CLI for AI agents that converts websites into deterministic CLI commands and lets agents operate
  any website through your logged-in Chrome via a bridge extension, with reusable site adapters.
author: jackwener
ossDate: '2026-03-14'
featured: false
status: tracked
---

## Overview

OpenCLI turns websites and browser sessions into deterministic interfaces for humans and AI agents. It is a general-purpose browser automation CLI that connects to your real, logged-in Chrome through a Browser Bridge extension plus a local daemon, so commands run with your existing sessions — no site adapter required for arbitrary pages. Built-in adapters add reusable commands for sites like Bilibili, Zhihu, Xiaohongshu, Reddit, HackerNews, and Twitter/X, and an authoring workflow lets you write new adapters end-to-end.

## Key Features

- One surface, three uses: run built-in site adapters, let AI agents operate any website through `opencli browser` primitives, or author new adapters with the `opencli-adapter-author` skill
- Agent command contract: JSON on stdout (`{"ok": true, "data": ...}` or `{"ok": false, "error": {code, message, hint}}`), logs on stderr, nonzero exit on failure
- Works with your logged-in browser — no headless browser or separate automation profile
- Built-in adapters for Bilibili, Zhihu, Xiaohongshu, Reddit, HackerNews, Twitter/X, and more
- Skills for AI agents (`opencli-browser` for Claude Code, Cursor, etc.) covering navigate, click, type/fill, extract, and inspect
- Multi-profile support: list connected Chrome profiles and assign local aliases
- OpenCLIApp desktop bundles the runtime with a tray UI for setup, diagnostics, updates, and login keepalive

## Use Cases

- Giving AI agents reliable, deterministic commands against websites instead of fragile screenshot-driven automation
- Reading and acting on sites behind logins (social platforms, internal tools) using your existing sessions
- Building reusable site adapters for repeated workflows like search, listing, and extraction
- Humans running quick site queries (`opencli hackernews top --limit 5`) without opening a browser

## Technical Details

- Node.js CLI (>= 20.18.1, npm `@jackwener/opencli`) that drives Chrome/Chromium through a lightweight Browser Bridge extension plus a local daemon that auto-starts on demand
- Deterministic output contract for agents: commands default to JSON `{ok, data}`/`{ok, error}` on stdout with structured error codes, messages, and hints; browser follow modes stream JSON Lines
- Adapter system: built-in site adapters plus an authoring pipeline (`opencli browser` primitives + `opencli-adapter-author` skill + `adapter init|check|test`) that guides from first recon through field decoding to tested code
- Page scoping via `--session` isolates browser operations; native Chrome calls bypass sessions; profiles map Chrome contextIds to local aliases with an explicit choice when multiple are connected
- `opencli doctor` verifies the setup; `state --diagnostics` and `network --static` replace older analyze/discover flows
