---
name: sqlite-vector
slug: sqlite-vector
homepage: https://sqlite.ai/
repo: https://github.com/sqliteai/sqlite-vector
license: Unknown
category: rag-knowledge
subCategory: vector-databases
tags:
  - Database
  - Dev Tools
  - Vector DB
description: 将嵌入向量存储与向量检索能力集成到 SQLite，提供跨平台的轻量向量数据库扩展。
logo: ''
author: SQLiteAI
ossDate: '2025-04-07T11:17:59Z'
featured: false
status: tracked
---

## 简介

sqlite-vector 是由 SQLiteAI 开发的开源 SQLite 扩展，将原生向量检索能力带入嵌入式数据库。它允许开发者在本地 SQLite 实例中直接存储、索引和查询嵌入向量，无需外部向量数据库服务即可构建检索增强系统。

## 主要特性

该扩展提供嵌入式向量索引，直接在 SQLite 内部存储和查询向量，消除了外部依赖和运维开销。它针对小内存占用和跨平台快速查询进行了优化，并可与标准嵌入生成和 RAG 工作流轻松集成。

## 使用场景

sqlite-vector 非常适合本地或边缘部署场景，包括离线语义搜索、隐私敏感的文档检索、轻量级推荐引擎和设备端 AI 功能。团队可以在现有 SQLite 数据库中加入向量相似度搜索，而无需配置独立的基础设施。

## 技术特点

以 C 语言实现为原生 SQLite 扩展，sqlite-vector 使用高效的数据结构和索引策略优化相似度搜索性能。它与 SQLite 现有特性完全兼容，能够以最小的改动将向量能力引入当前数据库架构。
