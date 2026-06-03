---
name: adk-go
slug: adk-go
homepage: https://google.github.io/adk-docs/
repo: https://github.com/google/adk-go
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - LLM
  - MCP
  - SDK
description: 一个面向工程化的 Go 工具包，用于构建、评估与部署复杂的智能体应用。
author: Google
ossDate: '2025-05-05T17:16:26Z'
featured: false
status: tracked
---
## 简介

adk-go 是由 Google 开发的开源、代码优先的 Go 工具包，用于构建、评估与部署复杂的 AI 智能体。它将模型后端、工具调用、检索组件与策略引擎抽象为一致的接口，提供测试与评估能力，并支持将任务流程打包为可部署的服务，适合需要高可控性的生产环境。

## 主要特性

- 统一抽象接口，屏蔽不同模型提供商的差异，支持无缝切换。
- 内置评估与测试工具，支持对智能体行为进行量化分析与回归检测。
- 提供检索、向量搜索与外部工具的适配器，便于构建 RAG 流水线。
- 面向生产的部署与监控约定，支持在 CI/CD 中集成与演进。

## 使用场景

- 构建面向任务分解与工具调用的多智能体系统以自动化复杂工作流。
- 在企业环境中进行模型能力对比、回归测试与灰度发布。
- 将大语言模型能力工程化为可审计、可监控的线上服务。

## 技术特点

- 模块化架构，模型、检索、工具与策略解耦，便于替换与扩展。
- Go 语言实现，面向高性能与生产环境的运行时与部署体验。
- 支持 MCP 等协议，便于多智能体间的上下文与工具协作。
