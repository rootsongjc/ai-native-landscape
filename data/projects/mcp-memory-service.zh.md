---
name: MCP Memory Service
slug: mcp-memory-service
homepage: null
repo: https://github.com/doobidoo/mcp-memory-service
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - Application
  - CLI
  - Dashboard
  - Data
  - MCP
  - Memory
description: 一个为 Claude、VS Code、Cursor 等工具提供自动化项目上下文记忆与检索的本地/混合存储服务。
author: doobidoo
ossDate: '2024-12-26T10:15:44Z'
featured: false
status: unavailable
---

## 简介

MCP Memory Service 是一个为 AI 智能体提供持久化语义记忆的服务器，能够捕获代码、文档、提交历史和其他上下文信息，并通过模型上下文协议（MCP）以可检索的嵌入形式暴露。它使 Claude、VS Code 和 Cursor 等工具能够在新会话中自动注入相关的项目上下文，无需反复解释项目架构和设计决策。

## 主要特性

- 持久化语义记忆，支持文档分块、元数据提取和智能标签，实现跨会话的高相关性检索。
- 多种存储后端，推荐混合模式（本地 SQLite 实现约 5ms 读取 + Cloudflare 云同步），也支持纯 SQLite-vec 和 Cloudflare 存储。
- 团队协作功能，通过 OAuth 2.1 认证和完整的 HTTP API 实现多用户访问控制和记忆共享。
- 内置 Web 仪表盘（端口 8000），用于浏览、管理和调试已存储的记忆。

## 使用场景

- 开发者避免在每次新的编码会话或对话中重复向 LLM 解释项目上下文的开销。
- 团队跨成员和设备共享架构知识、设计决策和提交历史，实现一致的 AI 辅助开发体验。
- RAG 工作流利用文档、日志和会议纪要作为记忆来源，提高回答准确性和上下文相关性。

## 技术特点

- 完全兼容模型上下文协议（MCP），支持标准传输方式，可与 AI 编码助手和智能体框架广泛集成。
- 向量嵌入和语义搜索引擎配合记忆合并与压缩策略，随时间推移控制存储成本。
- 隐私优先的本地化架构，提供可选的云同步、自动化安装脚本、Docker 支持和可扩展的插件系统。
