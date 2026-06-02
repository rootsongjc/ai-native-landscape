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
description: 一个使用视觉语言模型驱动的跨平台 UI 自动化框架，用截图为主的纯视觉定位与操作来编写自动化脚本。
logo: ''
author: web-infra-dev
ossDate: '2024-07-23T04:03:50Z'
featured: false
status: tracked
---

## 简介

Midscene.js 是一个以视觉语言模型为核心的跨平台 UI 自动化框架，通过截图驱动的纯视觉定位替代脆弱的 DOM 选择器。开发者可以用自然语言或轻量脚本描述自动化目标与步骤，显著提升自动化脚本的健壮性。项目提供 JavaScript SDK、YAML 脚本接口、Puppeteer/Playwright 集成、Bridge Mode 桌面浏览器控制，以及零代码的 Chrome 扩展和移动 playground，覆盖从原型到生产的完整链路。

## 主要特性

基于视觉语言模型的元素定位用视觉理解替代 CSS 和 XPath 选择器，使自动化脚本对 UI 变更更具韧性。统一的多平台支持覆盖 Web、Android 和 iOS，通过单一的 JavaScript SDK 和一致的脚本格式即可操作。内置回放与可视化调试工具让团队能够透明地复现、检查和排查自动化流程。缓存机制与 MCP 集成支持高效回放和上层 AI 智能体的编排调度。

## 使用场景

Midscene 适用于端到端 UI 测试、自动化运营（如表单填写、演示流程）、以及需要视觉理解的跨平台 RPA 场景。对于希望通过自然语言或简洁脚本表达复杂交互、降低传统选择器自动化维护成本的团队尤其有价值。

## 技术特点

架构上优先采用纯视觉路径，DOM 模式作为可选方案用于数据抽取。支持 Qwen-VL、UI-TARS 等多种视觉语言模型，在 token 成本与跨平台健壮性之间取得平衡。框架支持自托管并提供开放的 SDK 生态，团队可在本地或云端部署并与现有测试基础设施无缝集成。
