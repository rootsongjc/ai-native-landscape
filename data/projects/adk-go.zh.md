---
name: adk-go
slug: adk-go
homepage: https://google.github.io/adk-docs/
repo: https://github.com/google/adk-go
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - LLM
  - MCP
  - SDK
description: 一个面向工程化的 Go 工具包，用于构建、评估与部署复杂的智能体应用。
logo: ''
author: Google
ossDate: '2025-05-05T17:16:26Z'
featured: false
status: tracked
---

> 一个以工程化为核心的 Go 工具包，帮助团队把大语言模型能力落地为可靠的智能体服务。

## 详细介绍

adk-go（由 Google 开发）是一个面向工程化的 Go 工具包，旨在简化构建复杂智能体（智能体）应用的流程。它将模型后端、工具调用、检索组件与策略引擎抽象为一致的接口，提供测试与评估能力，并支持把任务流程打包为可部署的服务。该项目适合需要高可控性、可观测性与企业级工程实践的场景。

## 主要特性

- 统一抽象接口，屏蔽不同模型提供商的差异，便于切换与比较。
- 内置评估与测试工具，支持对智能体行为进行量化分析。
- 与检索、向量搜索和外部工具的适配器生态，便于构建 RAG（检索增强生成）流水线。
- 面向生产的部署与监控约定，支持在 CI/CD 中集成与演进。

## 使用场景

- 构建面向任务分解与工具调用的多智能体系统以自动化复杂工作流。
- 在企业环境中做模型能力对比、回归测试与版本灰度发布。
- 把 LLM（大语言模型）能力工程化为可审计、可监控的线上服务。

## 技术特点

- 模块化设计：模型、检索、工具与策略解耦，便于替换与扩展。
- Go 语言实现：面向高性能与生产环境的运行时与部署体验。
- 支持 MCP 等协议，便于多智能体间的上下文与工具协作。
