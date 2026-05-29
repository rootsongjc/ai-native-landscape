---
name: Playwright MCP
slug: playwright-mcp
homepage: https://playwright.dev/
repo: https://github.com/microsoft/playwright-mcp
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
description: >-
  Playwright MCP provides a Playwright-based Model Context Protocol (MCP) server that enables LLMs to interact with web
  pages via structured accessibility snapshots.
logo: ''
author: Microsoft
ossDate: '2025-03-21T17:48:36.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Introduction

Playwright MCP is an open-source Model Context Protocol server built on Playwright that exposes browser automation to LLMs using structured accessibility snapshots. It avoids pixel-based approaches and integrates with multiple MCP clients (VS Code, Claude Desktop, Cursor, etc.).

## Key features

- Fast and lightweight: uses accessibility tree instead of pixel input.
- LLM-friendly: operates on structured DOM snapshots, no vision models required.
- Highly configurable via CLI args and JSON configuration (devices, caps, ports, permissions).
- Supports persistent and isolated user profiles, browser extension integration, tracing and verification tools.

## Use cases

- Integrate LLM-driven automation into testing and browser workflows without relying on screenshots.
- Provide reliable web interaction and verification inside IDEs or MCP clients.
- Prototype intelligent agents that manipulate web pages based on DOM-level understanding.

## Technical highlights

- Distributed as an npm package and runnable via npx, suitable for CI, containers and local deployment.
- Rich CLI surface exposes many capabilities (caps, verify, tracing, image responses, etc.).
- Licensed under Apache-2.0 with an active community and many contributors.
