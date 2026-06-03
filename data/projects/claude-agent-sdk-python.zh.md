---
name: Claude Agent SDK for Python
slug: claude-agent-sdk-python
homepage: https://docs.anthropic.com/en/docs/claude-code/sdk/sdk-python
repo: https://github.com/anthropics/claude-agent-sdk-python
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - AI Agent
  - Dev Tools
description: Anthropic 的 Claude Agent Python SDK 提供用于构建可与 Claude Agent 交互的工具与客户端库，适用于工具调用与交互式会话。
author: Anthropic
ossDate: '2025-06-11T21:33:43.000Z'
featured: false
status: tracked
---
Claude Agent SDK for Python 是 Anthropics 提供的官方 Python 工具库，用于与 Claude Agent（Claude Code）进行交互式查询、工具调用与集成。该 SDK 提供异步流式接口、内置的工具/Hook 支持以及在进程内运行的 MCP 服务器示例，方便将自定义工具以安全且高性能的方式暴露给模型。

## 主要特性

- 异步流式 API：`query()` 返回异步迭代器，适合处理流式响应与分块输出。
- 自定义工具与 MCP 支持：提供在进程内注册自定义工具（SDK MCP server）的能力，简化子进程管理与部署复杂度。
- 丰富示例：包含多种示例（quick_start、streaming_mode、hooks 等）方便上手与集成。
- 工程适配：支持 Python 3.10+，同时提供 CLI、测试与发布流水线的配置。

## 使用场景

- 在 Python 应用中构建与 Claude 交互的助手或代理式应用。
- 需要将自定义工具安全地暴露给模型并在同一进程中执行以降低 IPC 开销的场景。
- 研究或实验 Claude Agent 的工具调用能力与流式交互模式。

## 技术特点

- 实现语言：纯 Python，实现了类型定义与示例，100% Python 代码库。
- 部署与依赖：要求 Python 3.10+；提供示例与测试，支持 pip 安装包（见 releases）。
- 文档与资源：官方文档与示例位于 <https://docs.anthropic.com/en/docs/claude-code/sdk/sdk-python>，仓库包含 CHANGELOG 与示例目录以便复现。
