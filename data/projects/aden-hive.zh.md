---
name: Aden Hive
slug: aden-hive
homepage: https://docs.adenhq.com/
repo: https://github.com/aden-hive/hive
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Automation
  - Observability
description: 一个面向生产、支持自我演化的智能体开发框架与运行时。
author: Aden
ossDate: '2026-01-12T00:04:22Z'
featured: false
status: tracked
---
## 简介

Aden Hive 是一个面向生产的多智能体编排平台，通过自然语言目标描述自动生成智能体图谱与连接代码。框架提供运行时、可观测性工具与人机交互节点，使智能体能够采集失败数据、由编码智能体演化并自动重新部署，形成持续自我改进的闭环。

## 主要特性

- 目标驱动开发，以自然语言定义目标后由编码智能体自动生成执行图谱与测试用例。
- 自我演化能力，内置失败捕获与演化流程，基于实际执行反馈自动改进智能体结构。
- 人机协同节点，支持在关键决策点插入人工判断与干预，保障自动化安全性。

## 使用场景

- 需要长期运行、高可靠性的智能体系统，如自动化业务流程和企业级助手。
- 需要生产级可观测性与成本控制的自托管多智能体编排。
- 团队将实验性智能体升级为生产级运行，需要从开发到运维的完整工具链。

## 技术特点

- 模块化运行时与 SDK 封装节点，通过 LiteLLM 支持多种 LLM 提供商与本地模型。
- 集成 MCP 风格工具套件，便于跨智能体的工具调用与状态管理。
- 强调可观测性、故障容忍与 CI/CD 集成，支持在 Kubernetes 上大规模部署。
