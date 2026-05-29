---
name: Graphiti
slug: graphiti
homepage: null
repo: https://github.com/getzep/graphiti
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - MCP
description: Graphiti 是一个用于构建实时知识图谱的开源框架，专为动态和频繁更新的数据场景以及代理记忆与 RAG 应用设计。
logo: ''
author: Zep / getzep
ossDate: '2024-08-08T22:08:30.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Graphiti 是一个面向智能体的实时知识图谱框架，支持增量更新、双时间（事件发生与摄取时间）建模，以及混合检索（语义、关键词、图遍历）。它是 Zep 平台的核心组件，适用于需要精确历史查询与低延迟检索的场景。

- 实时增量数据摄取，无需批处理重算。
- 双时间（bi-temporal）数据模型，支持点对点时间查询和时间回溯。
- 高效的混合检索：语义嵌入、BM25 关键词与图遍历相结合，低延迟响应。
- 可扩展的自定义实体与可插拔后端（Neo4j、FalkorDB、Kuzu、Amazon Neptune）。

## 使用场景

- 代理记忆（Agent Memory）与长期上下文维护。
- 实时事件处理与状态推理（需要保留历史上下文的场景）。
- 企业级知识管理与复杂查询、用于增强检索生成（RAG）系统。

## 技术特点

- Python 实现，基于可插拔驱动支持多种图数据库后端。
- 提供 MCP 服务与 REST API，方便与代理和工具链集成。
- 设计用于高并发与大规模数据集，支持并行处理与可配置的并发控制。
