---
name: Eino
slug: eino
homepage: https://www.cloudwego.io/docs/eino/
repo: https://github.com/cloudwego/eino
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Dev Tools
  - Framework
  - Model
description: Eino 是一个以 Go 为核心的 LLM 应用开发框架，强调可组合性、流处理和工程化能力。
author: 字节跳动
ossDate: '2024-12-04T06:47:27Z'
featured: false
status: tracked
---

## 详细介绍

Eino 是一个面向 Go 语言的 LLM 应用开发框架，提供丰富的组件抽象（如 ChatModel、Tool、Retriever、Workflow 等）与强大的编排能力（Chain、Graph、Workflow）。框架关注流式处理、类型安全、并发管理与可扩展的回调机制，帮助工程团队在生产环境中高效构建可观测、可测试的 AI 应用。

## 主要特性

- 丰富的组件与抽象，便于复用与组合
- 强大的图式/链式/工作流编排能力，支持流处理与分支执行
- 完整的示例、文档与开发工具链，便于工程化落地
- 集成可观测与调试能力，支持在线追踪与指标采集
- 兼容多模型提供方并支持工具调用与 RAG 场景

## 使用场景

适用于需要将 LLM 能力集成到后端服务或微服务架构中的场景，例如知识问答、文档检索、自动化工作流、对话式助手与多步骤任务编排。Eino 特别适合要求高并发、强类型校验与生产级可靠性的工程项目。

## 技术特点

基于 Go 语言实现，Eino 在类型安全、性能和并发控制上具有天然优势。框架提供流整合、回调切面和丰富示例，支持开发者在保留灵活性的前提下快速构建健壮的 LLM 应用。
