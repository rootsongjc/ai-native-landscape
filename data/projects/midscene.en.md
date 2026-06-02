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

## Overview

Midscene.js is a cross-platform UI automation framework driven by vision-language models that uses screenshots as the primary means of element localization and interaction. It enables developers to describe automation goals and steps in natural language or lightweight scripts, reducing reliance on fragile DOM selectors. The project provides a JavaScript SDK, YAML scripting, integrations with Puppeteer and Playwright, a Bridge Mode for desktop browsers, and zero-code Chrome extension and mobile playgrounds for rapid prototyping.

## Key Features

Vision-language model based element localization replaces brittle CSS and XPath selectors with visual understanding, making automation more resilient to UI changes. Unified multi-platform support covers Web, Android, and iOS through a single JavaScript SDK and consistent scripting format. Built-in replay and visual debugging tools allow teams to reproduce, inspect, and troubleshoot automation flows with full transparency. Caching mechanisms and MCP integration enable efficient replays and higher-level orchestration by AI agents.

## Use Cases

Midscene is ideal for end-to-end UI testing, automated operational tasks such as form filling and demo flows, and cross-platform RPA scenarios requiring visual understanding. Teams benefit most when they want to express complex interactions through natural language or concise scripts, significantly reducing the maintenance overhead of traditional selector-based automation.

## Technical Details

The architecture prioritizes a pure-vision approach with DOM mode available as an option for data extraction tasks. It supports multiple vision-language models including Qwen-VL and UI-TARS, balancing token costs against cross-platform robustness. The framework is designed for self-hosting with an open SDK ecosystem, allowing teams to deploy locally or in the cloud and integrate seamlessly with existing test infrastructure.
