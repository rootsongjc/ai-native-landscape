---
name: DeepSeek Harness
slug: deepseek-harness
homepage: https://deepseek.com/harness
repo: https://github.com/deepseek-ai/deepseek-harness
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - LLM
  - Plugin
  - DeepSeek
description: Open-source agent harness from DeepSeek AI built on an "everything is a plugin" architecture powered by Cordis.
author: deepseek-ai
ossDate: '2026-08-13T11:56:32Z'
featured: false
status: tracked
---

## Overview

DeepSeek Harness (`dsh`) is an open-source agent harness developed by DeepSeek AI. It adopts an architecture where everything is a plugin, built on top of the Cordis framework whose design is described in "A Programming Paradigm for Spatiotemporal Composability". The harness ships with a Web UI and is currently in developer preview with rapid iteration.

## Key Features

- "Everything is a plugin" architecture for maximal extensibility.
- Built on Cordis, a framework for spatiotemporal composability.
- Web UI launched via `npx @deepseek-ai/dsh web` with no complex setup.
- Plugin discoverability through the `dsh-plugin` GitHub topic ecosystem.

## Use Cases

- Run a local agent harness with a built-in Web UI.
- Extend agent capabilities by installing or authoring plugins.
- Build composable agent applications on a plugin-based runtime.

## Technical Details

- 22,600+ GitHub stars.
- MIT licensed; developed by DeepSeek AI.
- Node.js-based, installable from npm as `@deepseek-ai/dsh`.
- Developer preview status — compatibility-breaking changes expected.
