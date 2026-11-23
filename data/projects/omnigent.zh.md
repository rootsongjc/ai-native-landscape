---
name: Omnigent
slug: omnigent
homepage: https://omnigent.ai
repo: https://github.com/omnigent-ai/omnigent
license: Apache-2.0
category: agents
subCategory: agent-orchestration
tags:
  - Orchestration
  - Multi-Agent
  - Coding Agent
  - Sandbox
  - Claude Code
description: >-
  开源的智能体元 harness，在 Claude Code、Codex、Cursor 和自定义智能体之上提供统一的编排层，支持策略管控、云端沙箱以及跨设备实时协作。
author: Omnigent
ossDate: '2026-06-11T12:18:13.000Z'
featured: false
status: tracked
---
## 简介

Omnigent 是一个开源的 AI 智能体元 harness。它在 Claude Code、Codex、Cursor、OpenCode、Goose、GitHub Copilot 等编码智能体以及用 YAML 定义的自定义智能体之上提供统一的编排层，切换或组合 harness 时无需重写。会话可在终端、浏览器、手机和原生桌面应用之间保持同步。

## 主要特性

- 多智能体协同：在同一会话中混用不同智能体，让一个智能体审查另一个的工作，或把任务拆给各有所长的智能体。
- 模型不受限：支持官方 API key、Claude 或 ChatGPT 订阅，以及任意兼容的网关。
- 云端沙箱：可在 Modal、Daytona、E2B、Kubernetes、Databricks 等一次性沙箱中运行会话。
- 治理能力：通过策略在高风险操作前暂停等待审批、限制花费或限定可用工具，作用范围可以是整个服务器、单个智能体或单次对话。
- 协作：共享会话后，队友可以实时观看、共同操作，或分叉对话继续工作。

## 使用场景

- 让多个编码智能体处理同一任务，并相互对比或审查结果。
- 在终端开始的智能体会话，转到浏览器或手机上继续。
- 为团队提供带审批和花费控制的、沙箱化的编码智能体使用环境。

## 技术特点

- 使用 Python（3.12+）编写，通过 PyPI 和 Homebrew 分发。
- 可选扩展包提供更多模型提供方（Bedrock、Vertex）、沙箱提供方和 SDK harness。
- 采用 Apache 2.0 许可证发布，项目自述目前处于 alpha 阶段。
