---
name: MCP Use
slug: mcp-use
homepage: https://mcp-use.com
repo: https://github.com/mcp-use/mcp-use
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - AI Agent
  - Dev Tools
  - MCP
description: 最简单的与 MCP 服务器交互并创建自定义代理的方式，支持连接任何 LLM 到 MCP 服务器。
logo: ''
author: mcp-use
ossDate: '2025-03-28T10:06:31.000Z'
featured: false
status: tracked
---

MCP-Use 是连接任何 LLM 到任何 MCP 服务器并构建具有工具访问权限的自定义 MCP 代理的开源方式，无需使用闭源或应用程序客户端。

该工具让开发者能够轻松地将任何支持 LangChain 的 LLM 连接到工具，如网页浏览、文件操作等。

## 核心特性

| 特性 | 描述 |
|------|------|
| 🔄 易用性 | 创建第一个支持 MCP 的代理仅需 6 行代码 |
| 🤖 LLM 灵活性 | 适用于任何支持工具调用的 LangChain 支持的 LLM（OpenAI、Anthropic、Groq、LLama 等） |
| 🌐 代码构建器 | 使用交互式代码构建器探索 MCP 功能并生成入门代码 |
| 🔗 HTTP 支持 | 直接连接到运行在特定 HTTP 端口上的 MCP 服务器 |
| ⚙️ 动态服务器选择 | 代理可以从可用池中动态选择最适合给定任务的 MCP 服务器 |
| 🧩 多服务器支持 | 在单个代理中同时使用多个 MCP 服务器 |
| 🛡️ 工具限制 | 限制潜在危险的工具，如文件系统或网络访问 |
| 🔧 自定义代理 | 使用 LangChain 适配器构建自己的代理或创建新适配器 |
