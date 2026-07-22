---
name: cognee
slug: cognee
homepage: https://www.cognee.ai
repo: https://github.com/topoteretes/cognee
license: Apache-2.0
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - AI Memory
  - Knowledge Graph
  - Vector Database
  - Graph RAG
  - Context Engineering
description: 开源的 AI 记忆平台，基于自托管的记忆图谱引擎，为智能体提供跨会话的持久长期记忆。
author: topoteretes
ossDate: '2023-08-16'
featured: false
status: tracked
---

## 简介

cognee 是一款面向 AI 智能体的开源记忆平台，可为智能体在会话与工具之间提供持久的长期记忆。它接入非结构化数据，将其建模为自托管的记忆图谱，并通过检索层让智能体的上下文在时间维度上保持一致与可信。

## 主要特性

- 跨会话与多次智能体运行的持久长期记忆
- 自托管记忆图谱引擎，融合向量与图检索
- 可插拔的 LLM、embedding 与向量/图存储后端
- GraphRAG 风格的数据接入，将文档转化为关联知识
- 与主流智能体框架无厂商锁定的集成

## 使用场景

- 为自定义智能体提供持久记忆，摆脱厂商锁定
- 基于企业文档构建 GraphRAG 流水线
- 为长时间运行、跨会话的智能体维护一致的上下文
- 自托管记忆与知识，满足数据敏感型工作负载

## 技术特点

- 在同一记忆引擎中结合向量数据库与知识图谱
- 以数据点为中心的架构，分离接入、处理与检索
- 可在本地或私有基础设施运行，无强制云依赖
- Apache-2.0 协议，后端层模块化且可扩展
