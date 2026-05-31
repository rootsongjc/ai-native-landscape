---
name: Vibium
slug: vibium
homepage: https://vibium.com/
repo: https://github.com/vibiumdev/vibium
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - Browser Automation
  - CLI
  - Dev Tools
  - MCP
description: >-
  Vibium gives AI agents and developers a lightweight browser automation runtime with CLI, MCP server, and client
  libraries.
logo: ''
author: VibiumDev
ossDate: '2026-02-13T00:00:00Z'
featured: false
status: tracked
---

## Overview

Vibium provides browser automation for AI agents and developers via a compact runtime. It ships as a CLI skill, an MCP server, and client libraries for JS/TS and Python, and manages browser downloads automatically to simplify agent-driven web interactions.

## Key Features

- CLI commands (e.g., `vibium navigate`, `vibium click`, `vibium screenshot`).
- MCP server for structured tool usage by agents.
- JS/TS and Python client libraries with sync and async APIs.
- Single ~10MB binary with minimal runtime dependencies.

## Use Cases

- Agent-driven web automation: navigation, form filling, scraping, and screenshots.
- Testing and browser-driven pipelines in CI environments.
- Embedding browser capabilities as a skill or tool in agent platforms.

## Technical Highlights

- Built on WebDriver BiDi and a BiDi proxy for robust browser control.
- Cross-platform binary and language client support (Go/JS/Python).
- Automatic browser download and caching to reduce deployment complexity.
