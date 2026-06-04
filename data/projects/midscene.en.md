---
name: Midscene.js
slug: midscene
homepage: https://midscenejs.com
repo: https://github.com/web-infra-dev/midscene
license: MIT
category: coding-devtools
subCategory: browser-automation
tags:
  - Automation
  - Browser Automation
  - Framework
  - Multimodal
  - SDK
description: >-
  A vision-language-model driven, cross-platform UI automation framework that uses screenshots for visual localization
  and interaction.
author: web-infra-dev
ossDate: '2024-07-23T04:03:50Z'
featured: false
status: tracked
---

Midscene.js is a cross-platform UI automation framework driven by vision-language models that uses screenshots as the primary means of element localization and interaction. It enables developers to describe automation goals and steps in natural language or lightweight scripts, reducing reliance on fragile DOM selectors. The project provides a JavaScript SDK, YAML scripting, integrations with Puppeteer and Playwright, a Bridge Mode for desktop browsers, and zero-code Chrome extension and mobile playgrounds for rapid prototyping.

## Key Features

- **Vision-language model element localization** that replaces brittle CSS and XPath selectors with visual understanding, making automation more resilient to UI changes
- **Unified multi-platform support** covering Web, Android, and iOS through a single JavaScript SDK and consistent scripting format
- **Built-in replay and visual debugging tools** for reproducing, inspecting, and troubleshooting automation flows with full transparency
- **Caching mechanisms and MCP integration** enabling efficient replays and higher-level orchestration by AI agents
- **Zero-code Chrome extension and mobile playgrounds** for rapid prototyping without writing scripts

## Use Cases

- End-to-end UI testing where visual understanding eliminates the maintenance burden of selector-based test suites
- Automated operational tasks such as form filling, demo flows, and cross-platform RPA scenarios
- Natural language-driven automation where teams express complex interactions through plain text or concise scripts
- AI agent orchestration where visual understanding enables agents to interact with any application without API access

## Technical Highlights

- Prioritizes a pure-vision approach with DOM mode available as an option for data extraction tasks
- Supports multiple vision-language models including Qwen-VL and UI-TARS, balancing token costs against cross-platform robustness
- Designed for self-hosting with an open SDK ecosystem for local or cloud deployment
