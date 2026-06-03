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
author: GibsonAI
ossDate: '2025-07-24T07:07:51Z'
featured: false
status: tracked
---

## 简介

Memori 是一个智能体原生的记忆基础设施，提供与 LLM 无关的记忆层，将智能体执行转化为存储在标准 SQL 数据库中的结构化持久状态。通过使用 SQLite、PostgreSQL 或 MySQL 等熟悉的关系型数据库，它避免了对专有向量数据库的供应商锁定，同时使智能体能够跨会话保留知识、用户偏好和任务上下文。

## 主要特性

- SQL 原生存储，将记忆保存在标准关系型数据库中，利用现有工具即可轻松完成导出、迁移、审计和备份。
- 多框架兼容，支持 OpenAI、Anthropic、LiteLLM、LangChain 等常见 LLM 框架，可轻松集成到任何智能体技术栈。
- 智能记忆管理，支持自动实体提取、关系映射和上下文优先级排序，在查询时呈现最相关的历史信息。

## 使用场景

- 个人助理和聊天机器人需要在多个会话和交互中维护对话上下文、用户偏好和已学事实。
- 客户支持平台，智能体需要回忆过去的工单、解决历史和客户特定信息以提供一致的服务体验。
- 开发者工具和编码助手，从项目架构、编码模式和团队决策的持久化记忆中获益。

## 技术特点

- 检索注入架构，在每次 LLM 调用前检索相关记忆并在响应后记录提取的信息，形成持续学习循环。
- 多种记忆模式，包括短期、长期、自动检索和显式注入，提供可配置的优先级和压缩策略。
- 使用标准 SQL 连接字符串即可简单部署，兼容 Supabase 和 Neon 等托管数据库服务，内置导出和备份支持。
