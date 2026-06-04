---
name: Midscene.js
slug: midscene
homepage: https://midscenejs.com
repo: https://github.com/web-infra-dev/midscene
license: Unknown
category: coding-devtools
subCategory: browser-automation
tags:
  - Automation
  - Browser Automation
  - Framework
  - Multimodal
  - SDK
description: 一个使用视觉语言模型驱动的跨平台 UI 自动化框架，用截图为主的纯视觉定位与操作来编写自动化脚本。
author: web-infra-dev
ossDate: '2024-07-23T04:03:50Z'
featured: false
status: tracked
---

Midscene.js 是一个以视觉语言模型为核心的跨平台 UI 自动化框架，通过截图驱动的纯视觉定位替代脆弱的 DOM 选择器。开发者可以用自然语言或轻量脚本描述自动化目标与步骤，显著提升自动化脚本的健壮性。项目提供 JavaScript SDK、YAML 脚本接口、Puppeteer/Playwright 集成、Bridge Mode 桌面浏览器控制，以及零代码的 Chrome 扩展和移动 playground，覆盖从原型到生产的完整链路。

## 核心特性

- **基于视觉语言模型的元素定位**，用视觉理解替代 CSS 和 XPath 选择器，使自动化脚本对 UI 变更更具韧性
- **统一的多平台支持**，覆盖 Web、Android 和 iOS，通过单一的 JavaScript SDK 和一致的脚本格式操作
- **内置回放与可视化调试工具**，透明地复现、检查和排查自动化流程
- **缓存机制与 MCP 集成**，支持高效回放和上层 AI 智能体的编排调度
- **零代码 Chrome 扩展和移动 playground**，无需编写脚本即可快速原型验证

## 使用场景

- 端到端 UI 测试，视觉理解消除了选择器测试套件的维护负担
- 自动化运营任务，如表单填写、演示流程和跨平台 RPA 场景
- 自然语言驱动的自动化，通过纯文本或简洁脚本表达复杂交互
- AI 智能体编排，视觉理解使智能体无需 API 即可与任何应用交互

## 技术特点

- 优先采用纯视觉路径，DOM 模式作为可选方案用于数据抽取
- 支持 Qwen-VL、UI-TARS 等多种视觉语言模型，在 token 成本与跨平台健壮性之间取得平衡
- 支持自托管并提供开放的 SDK 生态，团队可在本地或云端部署
