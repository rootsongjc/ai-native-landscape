---
name: Pydantic AI
slug: pydantic-ai
homepage: null
repo: https://github.com/pydantic/pydantic-ai
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - AI Agent
  - Dev Tools
  - LLM
  - Utility
description: 由 Pydantic 和 FastAPI 团队打造的结构化生产级 AI 系统框架，支持多智能体设置，具有严格的数据验证和实时输出功能。
author: Pydantic
ossDate: '2024-06-21T15:55:04.000Z'
featured: false
status: tracked
---

Pydantic AI 是由 Pydantic 和 FastAPI 团队联合打造的下一代 AI 框架，专为构建结构化、生产级 AI 系统而设计。它将 Pydantic 的数据验证能力与现代 AI 开发需求完美结合，提供一个 Python 优先的平台，开发者可以使用熟悉的语法构建健壮的智能体，无需学习新的 DSL 或配置语言。

## Python 原生控制流

- 利用标准 Python 控制流和 **async/await** 编写智能体逻辑
- 无需学习专有 DSL 或配置语言
- Python 开发者可以立即发挥现有技能优势，快速上手

## 严格的数据验证

- 使用 Pydantic 模型对 LLM 输出进行结构和类型校验
- 在边界处捕获格式异常的模型响应，防止错误向下游传播
- 大幅减少因数据格式不符合预期而导致的运行时错误

## 实时流式输出与验证

- 支持流式输出，在内容生成的同时进行验证
- 开发者可在生成过程中检查和处理数据，而非等待全部完成
- 提升用户体验，实现更快的感知响应和早期错误检测

## 服务层与可观测性

- 提供完整的服务层架构，为智能体提供上下文数据和业务逻辑支持
- 集成 **Logfire** 进行调试、链路追踪和性能监控
- 企业级架构设计，特别适合熟悉 Python + FastAPI 生态的开发团队
