---
name: Browser Harness
slug: browser-harness
homepage: https://browser-use.com
repo: https://github.com/browser-use/browser-harness
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Automation
  - Tool
description: >-
  Browser Harness is a minimal self-healing browser harness built on CDP that gives LLMs complete freedom to complete
  any browser task, with agents able to write missing functions at runtime.
logo: ''
author: Browser Use
ossDate: '2026-04-17T01:56:15Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Overview

Browser Harness is an open-source, minimal browser harness from the Browser Use team, built directly on the Chrome DevTools Protocol (CDP) to give LLM agents complete browser control. Its core philosophy is "self-healing" — when an agent encounters a missing capability during a browser task (e.g., file upload), it can edit the harness code in real time and add the required function without human intervention. The entire implementation is approximately 592 lines of Python, including installation guides, daily usage instructions, the runtime entry point, helper functions, and the CDP daemon.

## Key Features

- Self-healing: Agents can directly edit helpers.py at runtime to add missing functions, achieving true self-repair.
- Minimal design: Approximately 592 lines of Python with no framework dependencies — one WebSocket straight to Chrome.
- Native CDP: Built directly on Chrome DevTools Protocol with no intermediate abstraction layers.
- Remote browsers: Supports remote browser instances via cloud.browser-use.com, with a free tier offering 3 concurrent browsers.
- Skill system: Provides domain-skills and interaction-skills directories with pre-built skills for common browser tasks.

## Use Cases

- Enabling AI coding agents like Claude Code and Codex to directly control browsers for GitHub operations, form filling, data scraping, and more.
- Using remote browsers in sub-agent or deployment scenarios for headless browser automation.
- Serving as a teaching and research case study for minimal LLM-browser deep integration.
- Automating web testing and end-to-end verification by leveraging agent intelligence over traditional scripts.

## Technical Highlights

- Uses a CDP WebSocket connection with daemon.py + admin.py implementing the daemon and bridge in approximately 361 lines.
- run.py serves as the entry point at just 36 lines, while helpers.py at approximately 195 lines provides initial tool calls that agents can freely extend.
- Provides install.md for first-time setup and SKILL.md for daily usage — agents can read and execute directly.
- Seamlessly integrates with Claude Code, Codex, and other CLI agents through a simple prompt.
