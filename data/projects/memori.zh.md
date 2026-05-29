---
name: Memori
slug: memori
homepage: https://memorilabs.ai
repo: https://github.com/gibsonai/memori
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Agents
  - RAG
description: 一个基于 SQL 的开源记忆引擎，帮助大语言模型在会话间持久化与检索上下文。
logo: ''
author: GibsonAI
ossDate: '2025-07-24T07:07:51Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Memori 是一个开源的 SQL-native 记忆引擎，旨在为任何大语言模型（LLM）提供可查询、可审计且可移植的长期与短期记忆管理。它将记忆以结构化记录存储在标准 SQL 数据库（例如 SQLite、PostgreSQL、MySQL）中，由使用者自行掌控数据与合规边界，从而避免向量数据库或第三方锁定。

## 主要特性

- SQL 原生存储：使用常见关系型数据库保存记忆，便于审计、导出与迁移。
- 多框架兼容：与 OpenAI、Anthropic、LiteLLM、LangChain 等常见 LLM 框架集成良好。
- 智能记忆管理：自动提取实体、建立关系并根据优先级注入上下文以减少无关信息。

## 使用场景

适用于需要长期会话上下文的应用场景，如个人助理、团队协作工具、客户支持与研发文档追踪。开发者可以将 Memori 作为后端记忆层，使智能体在跨会话场景中保持背景知识、偏好与任务状态，从而提升连续对话的相关性与可用性。

## 技术特点

- 检索注入流程：在调用 LLM 之前检索相关记忆并注入上下文，调用后记录并抽取可保存的信息。
- 支持多种记忆模式（短期/长期、自动检索/显式注入），并提供可配置的优先级与压缩策略。
- 易于部署：标准 SQL 连接字符串即可接入，便于在现有基础设施（如 Supabase、Neon）上运行，同时支持导出与备份。
