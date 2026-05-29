---
name: Opik
slug: opik
homepage: https://www.comet.com/docs/opik/
repo: https://github.com/comet-ml/opik
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Evaluation
  - Observation
description: Opik：一个开源的 LLM 评估与可观测平台，帮助团队构建、评估并优化 LLM 应用。
logo: ''
author: Comet
ossDate: '2023-05-10T12:57:13.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

Opik 是 Comet 开发的开源 LLM 评估与可观测平台，集成深度追踪、评估指标与仪表盘，旨在提高 LLM 系统在开发和生产环境中的可观测性与质量。

## 主要特性

- 全链路追踪：记录 LLM 调用、会话与 agent 活动，支持高吞吐量日志与细粒度上下文。
- 高级评估：内置 LLM-as-a-judge 指标、数据集与自动化评估管道，支持将评估纳入 CI/CD。
- 生产监控与规则：在线评估规则、反馈评分与 Guardrails 功能，帮助发现与自动化处理生产问题。

## 使用场景

- RAG 聊天机器人与对话系统的质量评估与回归测试。
- 代码助手与多步骤 agent 的行为追踪与性能优化。
- 在生产环境中监控 token 使用、响应质量与异常行为，支持快速调查与回溯。

## 技术特点

- 多语言 SDK 与集成：提供 Python/TypeScript SDK，与 LangChain、LlamaIndex、Autogen 等生态集成。
- 可扩展部署：支持 Comet.com 云托管或自托管（Docker Compose / Kubernetes），并提供丰富的示例与安装脚本。
- 丰富的 UI 与自动化：内置仪表盘、Prompt Playground、评估规则与 Agent Optimizer。
