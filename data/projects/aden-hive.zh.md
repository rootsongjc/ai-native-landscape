---
name: Aden Hive
slug: aden-hive
homepage: https://docs.adenhq.com/
repo: https://github.com/aden-hive/hive
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Automation
  - Observability
description: 一个面向生产、支持自我演化的智能体开发框架与运行时。
logo: ''
author: Aden
ossDate: '2026-01-12T00:04:22Z'
featured: false
status: tracked
---

## 详细介绍

Aden Hive 是一个面向生产的智能体（智能体）开发框架，旨在通过对目标的自然语言描述自动生成智能体图谱与连接代码。框架同时提供运行时、监控与人机交互节点，使智能体在遇到故障时能够采集失败数据、由编码智能体演化并自动重新部署，从而实现自我改进的闭环。

## 主要特性

- 目标驱动开发：以自然语言定义目标，由编码智能体生成完整的执行图谱与测试用例。
- 自我演化：内置失败捕获与演化流程，使系统能基于实际执行反馈自动改进智能体结构。
- 人机协同：支持可配置的人类介入节点，便于在关键决策点插入人工判断与干预。
- 可观测性与成本控制：实时流式监控、指标采集与预算控制，便于在生产环境中管理可靠性与花费。

## 使用场景

适用于需要长期运行、持续迭代与高可靠性的智能体系统，例如自动化业务流程、企业级客服与领域化助手、以及需要在现场或私有云自托管的多智能体编排场景。对于希望将试验性代理升级为生产级运行的团队，Aden 提供了从开发到运维的完整路径。

## 技术特点

Aden Hive 采用模块化运行时与 SDK 封装的节点，支持多种 LLM 提供商与本地模型接入（通过 LiteLLM），并集成 MCP 风格的工具套件以便于工具调用与状态管理。设计上强调可观测性、故障容忍与 CI/CD 集成，便于在 Kubernetes 等平台上实现可扩展与可靠的部署。
