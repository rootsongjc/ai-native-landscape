---
name: OpenHuman
slug: openhuman
homepage: https://tinyhumans.ai/openhuman
repo: https://github.com/tinyhumansai/openhuman
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - AI Agent
  - Assistant
  - Automation
  - Connector
  - Memory
description: OpenHuman 是一款开源的个人 AI 超级智能助手，注重隐私保护，界面简洁且功能强大，支持 118+ 第三方服务集成、本地记忆树、Obsidian 知识库及原生语音交互。
author: senamakel
ossDate: '2025-04-01'
featured: false
status: tracked
---

## 详细介绍

OpenHuman 是一个开源的智能体助手，旨在将 AI 深度融入用户的日常工作与生活。它采用桌面端优先的设计理念，提供简洁直观的 UI 界面，用户无需终端操作或复杂配置即可在几分钟内完成设置并开始使用。OpenHuman 核心特点是本地优先的隐私架构，所有工作流数据均保存在用户设备上并加密存储，确保数据主权。

OpenHuman 通过 Memory Tree（记忆树）和 Obsidian Wiki 构建本地知识库，自动将用户连接的所有数据源压缩为 Markdown 文件，形成层级化的摘要树，存储在本地 SQLite 数据库中。同时支持可选的 agentmemory 后端，与 Claude Code、Cursor、Codex 等编码智能体共享持久化存储。

## 主要特性

- **118+ 第三方服务集成**：支持 Gmail、Notion、GitHub、Slack、Stripe、Calendar、Drive、Linear、Jira 等服务的一键 OAuth 连接，所有连接以类型化工具形式暴露给智能体，每 20 分钟自动拉取最新数据到记忆树。
- **Memory Tree + Obsidian Wiki**：本地优先的知识库，将所有数据源规范化为不超过 3k token 的 Markdown 块，评分后折叠为层级摘要树，同步生成 Obsidian 兼容的 `.md` 文件。
- **TokenJuice 智能压缩**：所有工具调用、抓取结果、邮件正文和搜索负载在发送到 LLM 前经过 token 压缩层处理，成本和延迟降低高达 80%，完整保留 CJK、emoji 等多字节文本。
- **内置模型路由**：自动将每个任务分派到合适的 LLM（推理、快速或视觉模型），统一订阅管理。
- **原生语音支持**：STT 输入、ElevenLabs TTS 输出、桌面吉祥物唇形同步、可加入 Google Meet 作为真实参与者。
- **全栈内置工具**：网页搜索、网页抓取、完整编码工具集（文件系统、Git、Lint、测试、Grep）默认集成，支持 Ollama 本地推理。

## 使用场景

- **个人知识管理**：通过自动同步邮箱、日历、代码仓库、文档等数据，构建个人知识图谱，实现跨数据源的上下文回忆。
- **开发辅助**：内置文件系统、Git、代码搜索等编码工具，结合上下文感知，提供高效的代码编写与调试体验。
- **团队协作**：通过 Slack、Linear、Jira 等集成实现智能化的项目跟踪与消息处理。
- **会议参与**：AI 智能体可加入 Google Meet 作为真实参与者，支持语音交互和实时响应。

## 技术特点

- 基于 Tauri + CEF 构建的跨平台桌面应用，支持 macOS、Linux 和 Windows。
- 前端使用 TypeScript + React，后端核心使用 Rust 实现。
- 本地 SQLite 存储，数据加密，完全离线可用。
- 支持可选的 Ollama 本地推理，保护敏感数据的隐私性。
- 模块化工具架构，每个第三方连接以类型化工具形式暴露，便于扩展。
