---
name: MCP Servers
slug: mcp-servers
homepage: 'https://modelcontextprotocol.io'
repo: https://github.com/modelcontextprotocol/servers
license: Other
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - Tool Protocol
  - Agent
  - Integration
description: Model Context Protocol 官方参考服务器实现集合，为 AI 智能体提供标准化的工具接口以连接外部系统和数据源。
logo: ''
author: Anthropic
ossDate: '2024-11-19'
featured: true
thumbnail: ''
source: ''
status: tracked
---

## 简介

MCP Servers 是 Model Context Protocol (MCP) 的官方参考服务器实现仓库。MCP 是使 AI 智能体安全连接外部数据源和工具的开放标准。这些服务器提供了流行服务的生产就绪集成，包括文件系统、数据库、GitHub、Slack、Google Drive 等。

## 主要特性

- 20+ 流行服务和工具的参考 MCP 服务器实现
- 文件系统、GitHub、PostgreSQL、Slack、Google Drive、Puppeteer、Brave Search 等服务器
- TypeScript SDK 用于构建自定义 MCP 服务器
- 标准化的工具、资源和提示接口
- 生产就绪的实现，具备完善的错误处理

## 使用场景

- 通过标准化协议连接 AI 智能体到企业数据源
- 为自定义业务系统构建 MCP 兼容的工具服务器
- 使用参考实现快速原型化智能体 - 工具集成
- 跨不同 AI 框架建立可互操作的工具生态

## 技术特点

- 使用官方 MCP SDK 以 TypeScript 构建
- 每个服务器实现 MCP 规范的工具、资源和提示
- 支持 stdio 和 SSE 传输模式，灵活部署
- 作为 MCP 服务器开发模式的权威参考
