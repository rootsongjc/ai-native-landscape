---
name: Playwright MCP
slug: playwright-mcp
homepage: https://playwright.dev/
repo: https://github.com/microsoft/playwright-mcp
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
description: Playwright MCP 提供基于 Playwright 的 Model Context Protocol (MCP) 服务器，使 LLM 能通过可访问性快照与网页交互，适用于多种 MCP 客户端。
logo: ''
author: Microsoft
ossDate: '2025-03-21T17:48:36.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Playwright MCP 是一个开源的 Model Context Protocol 服务器，基于 Playwright 提供浏览器自动化能力。它通过结构化的可访问性快照让 LLM 与网页交互，无需依赖视觉模型或截图流程，适合在多种 MCP 客户端（VS Code、Claude Desktop 等）中使用。

## 主要特性

- 轻量且高性能，使用可访问性树而非像素级输入。
- 无需视觉模型（LLM-friendly），以结构化数据驱动交互。
- 可通过丰富的命令行参数与配置文件进行定制（设备、权限、caps、端口等）。
- 支持持久或隔离用户配置文件、浏览器扩展对接与 tracing/verify 等工具。

## 使用场景

- 将 LLM 集成到浏览器自动化与测试流程，替代截图式交互。
- 在 IDE 或 MCP 客户端中提供可信赖的网页执行与验证能力。
- 研究与产品原型：结合 Playwright 实现基于 DOM 的智能代理交互。

## 技术特点

- 基于 Playwright，提供 Node.js 包与 standalone 运行方式（支持 npx 安装）。
- 丰富的 CLI 参数与 JSON 配置，便于在容器、CI 或本地环境中部署。
- Apache-2.0 许可，社区活跃（大量 stars 与贡献者）。
