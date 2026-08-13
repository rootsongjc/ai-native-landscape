---
name: Strands Agents
slug: strands-agents
homepage: https://strandsagents.com/
repo: https://github.com/strands-agents/sdk-python
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - SDK
  - Python
  - TypeScript
  - MCP
description: 面向生产级 AI Agent 的开源 SDK（Python 与 TypeScript），构建 Agent Harness 并端到端掌控，任意模型、任意云。
author: strands-agents
ossDate: '2025-05-14T19:59:51Z'
featured: false
status: tracked
---

## 简介

Strands Agents 是构建生产级 AI Agent 的开源 SDK，支持 Python 与 TypeScript。它让你构建 Agent Harness 并端到端掌控，兼容任意模型（Anthropic、OpenAI、Bedrock）与任意云。支持 MCP 工具集成、多 Agent 系统和自主 Agent 工作流。

## 主要特性

- Python 与 TypeScript 的 Agent Harness SDK，端到端掌控。
- 模型无关：Anthropic、OpenAI、AWS Bedrock 等。
- 一等公民的 MCP 工具支持。
- 多 Agent 系统与自主 Agent 模式。

## 使用场景

- 构建具备完整生命周期控制的生产级 Agent Harness。
- 跨云、跨模型厂商部署 Agent，避免锁定。
- 结合 MCP 工具组合多 Agent 系统。

## 技术特点

- Harness 中心设计：SDK 暴露完整 Agent 循环（工具、钩子、会话状态），而非藏在黑盒抽象之后。
- 模型无关的驱动层，Anthropic、OpenAI、AWS Bedrock 统一在同一接口后面。
- 工具遵循 MCP 标准，已有 MCP 服务器可直接接入。
- 双语言：Python 与 TypeScript SDK 共享同一套概念，方便跨栈团队协作。
