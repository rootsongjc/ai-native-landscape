---
name: VM0
slug: vm0
homepage: https://vm0.ai
repo: https://github.com/vm0-ai/vm0
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - CLI
  - MCP
  - Orchestration
  - Workflow
description: 一个面向自然语言描述的智能体运行时与编排平台，支持会话持久化、可观测性与多模型路由。
logo: ''
author: VM0.ai
ossDate: '2025-11-14T03:27:22Z'
featured: false
status: tracked
---

## 详细介绍

VM0 是一个以自然语言为中心的智能体运行时与编排平台，旨在让开发者和产品团队通过书写意图而非绘制流程图来构建复杂任务。平台将每次运行视为有状态的智能体会话，提供会话持久化、检查点与回放能力，便于调试与演化智能体行为，且内置多模型路由支持选择不同大模型作为执行引擎。

## 主要特性

- 自然语言驱动的智能体配置，跳过繁琐的画布与节点编辑。
- 会话持久化与检查点（checkpoint），支持恢复、分叉与回放运行轨迹。
- 可观测性与调试：实时日志、指标与工具调用追踪，便于定位行为与性能问题。
- 多模型路由：可在运行时选择 Claude、GPT、Gemini 等模型作为后端。

## 使用场景

VM0 适合需要将高阶业务逻辑用自然语言表达并自动化执行的场景，例如研究型信息收集、编码管理与自动化运维任务、营销活动自动化、以及面向内部工具的生产力智能体等。对希望快速原型与迭代智能体策略的团队尤为有用。

## 技术特点

平台以智能体为第一公民，提供持久化会话语义和可重放检查点，强调可观测性与审计能力；运行时支持状态化智能体而非一次性容器进程，便于长期记忆与工具调用。系统通过标准化的 MCP/工具接口与外部服务集成，并提供命令行与 SDK 便于工程化部署。
