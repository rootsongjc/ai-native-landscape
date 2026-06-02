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

## 简介

Pipelex 是一个开源的声明式语言与开发工具，用于构建智能体和人类均可使用的可组合 AI 工作流。开发者可以通过可读的 DSL 定义多步骤智能体流水线，内置编排、可观测性和回放能力，使复杂任务可复现且易于调试。

## 主要特性

- 声明式 DSL 使工作流定义简洁、可版本化，便于与应用代码一起进行代码审查。
- 内置编排引擎，提供自动重试和回放机制，确保工作流稳健且确定性可重现。
- 可插拔的连接器系统，支持外部 API、数据库、向量存储和自定义工具，兼容多家 LLM 提供商。

## 使用场景

构建 RAG 管道的团队可以用声明式方式将检索、模型推理和后处理步骤串联为一个可复现的工作流。内容生成管道在迭代提示词时可利用步骤级日志和回放来提升效率。跨系统的长时间编排任务可以用同一套 DSL 从原型到生产进行建模、测试和部署。

## 技术特点

Pipelex 的轻量 DSL 编译为一个编排运行时，提供步骤级状态追踪和结构化日志以实现完整的可观测性。插件架构允许将任何自定义动作暴露为可调用的工具，系统设计注重与现有模型提供商和向量库的互操作性。
