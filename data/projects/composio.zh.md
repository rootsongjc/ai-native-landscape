---
name: Composio
slug: composio
homepage: https://composio.dev/
repo: https://github.com/composiohq/composio
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
description: 为 AI 客户端与代理提供丰富集成与工具的 SDK 与平台，支持 TypeScript 与 Python SDK，以及用于将 AI 与 500+ 应用连接的 MCP 服务 Rube。
author: Composio
ossDate: '2024-02-23T13:58:27.000Z'
featured: false
status: tracked
---
## 简介

Composio 是一个面向 Agent 与工具调用的 SDK 与平台，提供 TypeScript 与 Python SDK、工具路由（Tool Router）与 Model Context Protocol（MCP）实现。它能把 LLM/Agent 与 500+ 应用（如 Gmail、Slack、Notion 等）连接起来，支持在多种客户端中无缝执行动作。

## 主要特性

- 官方 TypeScript 与 Python SDK，兼容现代包管理器（npm/pnpm、pip、poetry）。
- 集成丰富的工具与 provider，支持 toolkits 与工具发现机制（Tool Router）。
- 支持 MCP 协议与多客户端（包含 Rube 服务），便于将集成迁移到不同 AI 客户端。

## 使用场景

- 在 Agent/LLM 应用中集成外部工具与 API（如邮件、日历、文件管理）。
- 构建支持工具调用的多客户端 Agent 平台或插件（VS Code、桌面客户端等）。
- 将现有服务通过 MCP 接入 AI 工作流，实现自动化与协同操作。

## 技术特点

- 采用 TypeScript/Node 与 Python 多语言 SDK 实现，适配生产环境与浏览器/服务器端。
- 提供 OpenAPI 与规范化文档，便于生成客户端代码与测试。
- MIT 许可证，社区活跃，仓库含大量示例与集成测试。
