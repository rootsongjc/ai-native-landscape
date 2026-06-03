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
author: Pipelex
ossDate: '2025-05-26T07:21:34Z'
featured: false
status: tracked
---

Pipelex 是一个开源的声明式语言与开发工具，用于构建智能体和人类均可使用的可组合 AI 工作流。开发者可以通过可读的 DSL 定义多步骤智能体流水线，内置编排、可观测性和回放能力，使复杂任务可复现且易于调试。

## 声明式 DSL

- 简洁、可版本化的工作流定义，便于与应用代码一起进行代码审查
- 人类可读的语法，开发者和 AI 智能体都能理解和修改
- 步骤级状态追踪，完整展示流水线执行进度

## 编排与可靠性

- 内置编排引擎，提供自动重试和回放机制
- 确定性执行，确保工作流在多次运行中产生一致结果
- 结构化日志，便于调试复杂的多步骤管道

## 可插拔连接器

- 支持外部 API、数据库、向量存储和自定义工具的连接器
- 兼容多家 LLM 提供商，灵活选择模型
- 插件架构允许将任何自定义动作暴露为可调用的工具
