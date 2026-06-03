---
name: Stagehand
slug: stagehand
homepage: https://stagehand.dev
repo: https://github.com/browserbase/stagehand
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - AI Agent
  - MCP
  - Utility
description: 创新的 AI 浏览器自动化框架，将代码与自然语言结合，实现生产环境下灵活可靠的自动化。
author: BrowserBase
ossDate: '2024-03-24T19:19:44.000Z'
featured: true
status: tracked
---

Stagehand 是一个创新的 AI 浏览器自动化框架，专为生产环境下的自动化任务设计。

## 背景

现有的浏览器自动化工具通常有两种模式：一种是需要开发者编写底层代码（如 Selenium、Playwright、Puppeteer），另一种是高层 AI agent，虽然易用但在生产环境下不够可控。Stagehand 结合了两者优势，让开发者可以灵活选择用代码还是自然语言来描述自动化流程。

## 核心能力

- **代码与自然语言混合编排**：可根据页面熟悉度选择 Playwright 代码或 AI 指令。
- **AI 驱动页面导航**：在不熟悉页面时，利用 AI 自动探索和操作。
- **动作预览与缓存**：支持预览 AI 动作，重复操作可缓存，节省时间和 token。
- **一行代码集成 SOTA 模型**：可用一行代码将 OpenAI、Anthropic 等最新电脑使用模型集成到浏览器自动化流程。

## 应用场景

- 自动化复杂网页操作
- 智能表单填写与数据采集
- 跨平台自动化测试
- 结合 AI 实现智能化办公流程
