---
name: Pipelex
slug: pipelex
homepage: https://pipelex.com
repo: https://github.com/pipelex/pipelex
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Orchestration
  - Workflow
description: 用于构建与运行可复现 AI 智能体工作流的开源语言与工具集。
logo: ''
author: Pipelex
ossDate: '2025-05-26T07:21:34Z'
featured: false
status: tracked
---

## 详细介绍

Pipelex 是一个面向智能体（Agent）与工作流的开源语言和工具集，旨在帮助开发者用声明式方式定义、组合并运行可复现的多步骤 AI 智能体工作流。它关注工作流的可观测性、可重放性与与外部系统的连接能力，使得复杂任务可以拆分为可组合的工具与步骤，由智能体协调执行。

## 主要特性

- 声明式工作流语言，便于描述任务步骤与工具链。
- 内置编排与重试机制，保证任务在失败后的稳健性与可重放性。
- 丰富的连接器与适配层，方便与外部 API、数据库及向量存储集成。
- 开源且可扩展，适配不同的大模型（大语言模型（LLM））与自定义工具。

## 使用场景

适用于需要将多步模型调用、检索、外部 API 与业务逻辑组合为可靠流水线的场景，例如知识检索增强生成（RAG）、自动化内容生成、跨系统信息聚合与长时任务编排。对构建实验性智能体原型与生产级任务均有帮助。

## 技术特点

Pipelex 采用轻量 DSL 作为编排语言，支持步骤级别的日志与状态追踪，便于调试与可观测性；同时提供插件化的工具系统，使开发者可以将自定义动作作为工具暴露给智能体调用。总体设计兼顾可复现性、可扩展性与与现有模型/向量库的互操作性。
