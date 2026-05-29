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

## 详细介绍

sqlite-vector 是一个由 SQLiteAI 提供的开源 SQLite 扩展，旨在将向量检索能力原生带入嵌入式数据库。该扩展通过紧凑高效的实现，允许在本地 SQLite 实例中存储、索引与检索嵌入向量，支持跨平台部署与轻量化场景，使开发者能够在无需外部向量数据库服务的情况下构建近实时的检索增强系统。

## 主要特性

- 嵌入式向量索引：在 SQLite 中直接存储与检索向量，降低依赖与运维成本。
- 高效实现：关注性能与内存占用，适配本地及移动端场景。
- 跨平台：作为 SQLite 扩展，支持多种操作系统与运行环境。
- 易集成：与主流嵌入生成与检索流程配合使用，便于将检索增强生成（RAG）能力嵌入应用。

## 使用场景

适用于需要本地或边缘部署的向量检索场景，例如离线搜索、隐私敏感的数据检索、轻量化推荐与移动端语义搜索。工程团队可以在不引入外部服务的前提下，把向量化检索能力嵌入现有 SQLite 数据库，实现低延迟的相似度查询与检索增强流水线。

## 技术特点

该项目以 C 语言实现为主，作为 SQLite 的扩展模块工作，利用高效的数据结构与索引策略实现相似度搜索。设计上强调与 SQLite 原生特性的兼容性，便于在现有数据库架构中平滑引入向量能力。
