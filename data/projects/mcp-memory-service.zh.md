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
logo: ''
author: doobidoo
ossDate: '2024-12-26T10:15:44Z'
featured: false
status: tracked
---

## 详细介绍

MCP Memory Service 是一款面向开发者与团队的上下文记忆服务，它通过语义检索与嵌入将项目相关的信息持久化为可检索的“记忆”，并在新会话启动时为智能体注入相关上下文，避免重复说明项目架构与细节。该服务支持本地 SQLite-vec、高性能混合后端（本地 5ms 读取 + Cloudflare 同步）以及多种客户端（Claude、Claude Code、VS Code、Cursor 等）。

## 主要特性

- 持久化记忆：基于向量检索的语义记忆存储，支持文档切片、元数据与智能打标签。
- 多后端：推荐混合后端（本地 SQLite + Cloudflare 同步），也支持 SQLite-vec 与 Cloudflare 等后端。
- 快速检索：本地读取延迟 ~5ms，支持实时上下文注入以加速智能体响应。
- 团队协作：OAuth 2.1 支持与 HTTP API，可用于多用户/团队场景的记忆共享与权限管理。
- 仪表盘与 API：内置 Web 仪表盘（默认 8000 端口）与完整的 HTTP API，方便管理与排查。

## 使用场景

- 开发者在每次与 LLM 或智能体交互时，无需重复解释项目结构或代码背景，节省大量时间。
- 在代码审查、故障复现或架构讨论时，自动注入相关提交历史与设计决策作为上下文参考。
- 团队协作场景下，通过 OAuth 与云同步实现跨设备与跨成员的记忆共享。
- 将文档、日志、会议纪要等作为记忆来源，提升 RAG（检索增强生成）与问题答复的准确性。

## 技术特点

- 兼容 MCP（Model Context Protocol）协议，支持多种 MCP 客户端与传输方式。
- 使用向量嵌入与语义搜索实现高相关性检索，并配套记忆合并/压缩策略以控制存储成本。
- 提供自动化安装脚本、Docker 支持与可扩展的插件/处理器体系，便于嵌入现有开发流程。
- 遵循隐私优先的本地优先设计，默认在本地存储敏感数据，并提供可选的云同步机制。
