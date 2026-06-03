---
name: Agent Framework
slug: agent-framework
homepage: https://aka.ms/agent-framework
repo: https://github.com/microsoft/agent-framework
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Workflow
description: 微软的多语言智能体框架，用于构建、编排和部署 AI 智能体与多智能体工作流。
author: Microsoft
ossDate: '2025-04-28T19:40:42.000Z'
featured: false
status: tracked
---
## 简介

Microsoft Agent Framework 是一个跨语言（Python / .NET）框架，提供从简单对话智能体到复杂多智能体图形编排工作流的端到端能力，支持可观察性、多个模型提供者和开发者友好的调试工具。

## 主要特性

- 图形化的工作流编排，支持流式处理、检查点和回放能力。
- 多语言实现（Python、C#/.NET）和多模型提供者适配层。
- 内置可观测性（OpenTelemetry）、中间件机制与 DevUI 开发调试界面。

## 使用场景

- 构建需要多个协作智能体的自动化业务流程与生产工作流。
- 在研发环境中快速验证代理策略、调试复杂信息流与人机交互环节。
- 将多个 LLM 提供者统一接入并在分布式环境中部署和监控。

## 技术特点

- 模块化包结构（python、dotnet），包括实验性 AF Labs 扩展包。
- 支持与 Azure OpenAI 等提供者集成，并提供样例、教程与迁移指南（如从 Semantic Kernel 迁移）。
- MIT 许可开源，社区贡献活跃，适合企业级集成与扩展。
