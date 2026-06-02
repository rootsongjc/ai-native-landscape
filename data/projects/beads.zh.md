---
name: Beads
slug: beads
homepage: https://steveyegge.github.io/beads/
repo: https://github.com/steveyegge/beads
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
  - Memory
description: 为代码智能体提供持久化记忆和高效检索的轻量化框架。
logo: ''
author: Steve Yegge
ossDate: '2025-10-12T03:09:46Z'
featured: false
status: tracked
---

## 简介

Beads 是一个面向代码智能体的轻量级记忆层，为 AI 辅助开发提供持久化上下文与高效检索能力。它通过将重要上下文转换为嵌入并保存在高效索引中，帮助智能体在多轮交互或长期会话中保持连贯性和历史感知，从而提升代码生成、补全与调试等任务的质量。

## 主要特性

Beads 提供持久化记忆存储（支持关键对话片段、代码片段或元数据的持久化保存）、基于嵌入的向量检索（快速召回语义相关上下文）、针对代码助手场景优化的低延迟查询，以及简单可扩展的 API 接口便于与现有智能体运行时或工具链集成。

## 使用场景

Beads 适用于需要记忆能力的代码智能体场景，例如长期对话式编程助手、跨会话上下文恢复、关联历史变更与注释、以及增强调试流程的上下文感知。对于希望将记忆功能独立出来并与模型推理分离的开发者，Beads 可以作为模块化记忆层接入现有流水线。

## 技术特点

Beads 以嵌入为核心，结合高效的向量索引与元数据过滤，兼顾召回相关性与性能。设计上注重与大语言模型的无缝协作（例如将检索结果拼接入上下文窗口），并提供适用于代码场景的语义检索策略与存储优化，降低上下文工程复杂度。
