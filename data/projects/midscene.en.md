---
name: Midscene.js
slug: midscene
homepage: https://midscenejs.com
repo: https://github.com/web-infra-dev/midscene
license: Unknown
category: models-modalities
subCategory: multimodal
tags:
  - Automation
  - Browser Automation
  - Framework
  - Multimodal
  - SDK
description: >-
  A vision-language-model driven, cross-platform UI automation framework that uses screenshots for visual localization
  and interaction.
logo: ''
author: web-infra-dev
ossDate: '2024-07-23T04:03:50Z'
featured: false
status: tracked
---

## Detailed Introduction

Midscene.js is a cross-platform UI automation framework driven by vision-language models. It emphasizes screenshot-first visual localization and interactions so developers can describe automation goals and steps in natural language or lightweight scripts. The project offers a JavaScript SDK and YAML scripting, integrates with Puppeteer/Playwright, and provides a Bridge Mode for desktop browser control plus zero-code Chrome extension and mobile playgrounds.

## Main Features

- Vision-language model based element localization and interaction, reducing DOM dependence.
- Multi-platform support for Web, Android, and iOS with a unified JS SDK and script format.
- Built-in replay and visual debugging tools to reproduce and inspect automation flows.
- Caching for efficient replays and MCP integration to enable higher-level orchestration by agents.

## Use Cases

Midscene is suited for end-to-end UI testing, automation for operational tasks (e.g., form filling, demo flows), cross-platform demo scripting, and RPA scenarios that require visual understanding. It is particularly useful for teams that want to express complex interactions with natural language or concise scripts, reducing maintenance overhead.

## Technical Features

The project prioritizes a pure-vision path (DOM mode remains optional for data extraction) and supports multiple vision-language models (e.g., Qwen-VL, UI-TARS) to reduce token costs and improve cross-platform robustness. The architecture supports self-hosting and an open SDK ecosystem so teams can deploy locally or in the cloud and integrate with existing test frameworks.
