---
name: Deep Agents
slug: deepagents
homepage: https://docs.langchain.com/oss/python/deepagents/overview
repo: https://github.com/langchain-ai/deepagents
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
description: LangChain 提供的深度智能体库，支持规划、子智能体、文件系统工具与持久记忆，用于构建多步骤和长期推理的智能体。
logo: ''
author: LangChain
ossDate: '2025-07-27T23:07:53.000Z'
featured: false
status: tracked
---

## 详细介绍

Deep Agents 是 LangChain 提供的通用深度智能体库，设计目标是让智能体在复杂、多步骤任务中具备长期规划与分工能力。它整合了规划工具、子智能体（subagents）、文件系统工具与持久记忆等机制，能够把大型任务拆分为明确的子任务并在运行时协调执行，从而避免“浅层”循环调用带来的短视行为。

## 主要特性

- 内置规划与待办列表工具，便于分解问题并逐步执行。
- 支持子智能体与中间件，利于职责隔离与组合式扩展。
- 提供文件系统类工具与持久化记忆以处理长上下文信息。

## 使用场景

- 深度研究助手：持续抓取与整理信息并产出研究型报告。
- 代码工作流自动化：将复杂编码任务拆解为可执行子任务并串联工具链。
- 多阶段业务流程自动化：对接外部工具与数据源，实现跨步骤的长期任务执行与记忆保存。

## 技术特点

- 模块化中间件架构（PlanningMiddleware、FilesystemMiddleware、SubAgentMiddleware），便于自定义与扩展。
- 支持 Python 生态与常见包管理器（pip/poetry），并通过 LangGraph 兼容多种模型与工具集成。
- MIT 许可，便于企业与社区复用与二次开发。
