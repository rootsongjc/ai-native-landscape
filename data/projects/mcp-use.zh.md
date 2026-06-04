---
name: MCP Use
slug: mcp-use
homepage: https://mcp-use.com
repo: https://github.com/mcp-use/mcp-use
license: MIT
category: coding-devtools
subCategory: mcp-tools
tags:
  - AI Agent
  - Dev Tools
  - MCP
description: 最简单的与 MCP 服务器交互并创建自定义代理的方式，支持连接任何 LLM 到 MCP 服务器。
author: mcp-use
ossDate: '2025-03-28T10:06:31.000Z'
featured: false
status: tracked
---

MCP-Use 是一个全栈 MCP 框架，用于构建适用于 ChatGPT、Claude 和其他 AI 代理的 MCP 服务器和 MCP 应用。它提供了 TypeScript 和 Python 双语言 SDK，让开发者能够以极少的样板代码创建、预览和部署 MCP 服务器。

## MCP 服务器开发

- 仅需几行代码即可创建 MCP 服务器，支持 Python 和 TypeScript SDK
- 内置工具和资源的自动发现机制，无需手动注册
- 开箱即支持 `stdio` 和 `streamable-http` 两种传输方式
- 通过官方 Model Context Protocol 规范的一致性测试验证

## MCP 应用和组件

- 构建可在 Claude、ChatGPT 和任何 MCP 客户端中运行的交互式组件——一次编写，处处运行
- 基于 React 的组件系统，支持明暗主题切换和加载状态管理
- 组件从 `resources/` 目录自动发现，无需手动配置
- 提供丰富的开箱即用模板：图表构建器、图表绘制器、幻灯片、地图探索器等

## MCP 代理和客户端

- 基于 LangChain 的完整 MCP Agent 实现，支持 OpenAI、Anthropic、Groq 和本地模型
- MCPClient 支持无需 LLM 的直接工具调用——以编程方式连接任意 MCP 服务器
- 动态服务器选择：代理可根据任务从可用服务器池中自动选择最合适的 MCP 服务器
- 多服务器支持：在单个代理中同时使用多个 MCP 服务器

## 检查器和开发工具

- 基于 Web 的 Inspector，支持 MCP 服务器的交互式测试和调试
- 使用 `server.listen()` 时自动包含，可通过 `/inspector` 端点访问
- 在线版本 inspector.mcp-use.com 可测试托管的 MCP 服务器
- CLI 工具支持热重载和一键部署到生产环境

## 跨语言支持

- **Python SDK**（`pip install mcp-use`）：完整的服务器和代理实现，集成 Pydantic 验证
- **TypeScript SDK**（`npm install mcp-use`）：包含服务器、应用、代理和客户端的完整框架
- **CLI 工具**：`create-mcp-use-app` 脚手架工具、`@mcp-use/cli` 构建和部署工具
- 两种 SDK 均遵循各自语言的习惯模式，保持一致的 API 设计
