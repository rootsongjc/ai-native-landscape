---
name: Vibium
slug: vibium
homepage: https://vibium.com/
repo: https://github.com/vibiumdev/vibium
license: Apache-2.0
category: coding-devtools
subCategory: mcp-tools
tags:
  - Browser Automation
  - CLI
  - Dev Tools
  - MCP
description: Vibium 提供浏览器自动化能力，供 AI 智能体与人类使用，支持 CLI、MCP 与客户端库。
author: VibiumDev
ossDate: '2026-02-13T00:00:00Z'
featured: false
status: tracked
---

## 详细介绍

Vibium 为 AI 智能体与开发者提供轻量的浏览器自动化能力，支持 CLI 命令、MCP 服务以及 JS/TS 与 Python 客户端库。安装后可自动下载并管理用于测试与自动化的浏览器，简化 agent 的浏览器交互能力。

## 主要特性

- 支持 CLI 操作（如 `vibium navigate`, `vibium click`, `vibium screenshot`）。
- 提供 MCP 接口，方便智能体以结构化工具方式调用浏览器功能。
- JS/TS 与 Python 客户端，支持同步与异步 API。
- 单文件轻量二进制，约 10MB 左右，便于分发与部署。

## 使用场景

- 智能体自动化浏览网页、表单填写与数据采集。
- 测试与爬虫场景的浏览器驱动替代方案。
- 将浏览器能力作为 skill 注入 agent 平台用于工具调用。

## 技术特点

- 基于 WebDriver BiDi 与自定义 proxy 实现可靠的浏览器控制。
- 支持跨平台二进制与客户端库（Go / JS / Python）。
- 自动管理浏览器下载与缓存，降低部署复杂度。
