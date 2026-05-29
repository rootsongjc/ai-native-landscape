---
name: OpenAI Agents (Python)
slug: openai-agents-python
homepage: https://openai.github.io/openai-agents-python/
repo: https://github.com/openai/openai-agents-python
license: Unknown
category: agents
subCategory: agent-orchestration
tags:
  - AI Agent
  - Dev Tools
  - Utility
description: OpenAI 提供的轻量级 Agents SDK（Python），用于构建多 agent 工作流，支持 handoffs、guardrails、tracing 与 sessions，便于在生产环境中运行可观察且可控的智能代理。
logo: ''
author: OpenAI
ossDate: '2025-03-11T03:42:36.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

OpenAI Agents（Python）是一个轻量但功能强大的框架，用于构建多 agent 的工作流。它是 provider-agnostic 的，支持 OpenAI 的 API 以及 100+ 种 LLM。SDK 提供内置的追踪（tracing）、会话（sessions）、handoffs 与 guardrails，以便在生产环境中安全、可观察地运行代理。

## 主要特性

- Agents：配置了指令、工具、guardrails 与 handoffs 的 LLM 实例
- Handoffs：在代理间安全转移控制的工具调用机制
- Guardrails：输入/输出校验与安全策略
- Tracing：自动记录运行轨迹，便于调试与分析
- Sessions：自动会话管理，支持持久化存储（如 SQLite）

## 使用场景

- 构建对话式代理与多 agent 协作系统
- 在生产中运行可审计的 agent 工作流并收集运行跟踪
- 将复杂任务拆分给多个专责 agent 并在 agent 间进行 handoff

## 技术特点

- 使用 Python 实现，兼容主流 LLM 提供者与模型
- 丰富的示例和 MkDocs 文档以帮助快速上手
- 支持长期运行（Temporal 集成）与 human-in-the-loop 场景
