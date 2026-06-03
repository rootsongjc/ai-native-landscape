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
author: SQLiteAI
ossDate: '2025-04-07T11:17:59Z'
featured: false
status: tracked
---

sqlite-vector 是由 SQLiteAI 开发的开源 SQLite 扩展，将原生向量检索能力带入嵌入式数据库。它允许开发者在本地 SQLite 实例中直接存储、索引和查询嵌入向量，无需外部向量数据库服务即可构建检索增强系统。

## 主要特性

- 嵌入式向量索引，直接在 SQLite 内部存储和查询向量，消除外部依赖和运维开销
- 针对小内存占用和跨平台快速查询进行了优化
- 可与标准嵌入生成和 RAG 工作流轻松集成
- 与 SQLite 现有功能集和工具生态完全兼容
- 零基础设施向量搜索，适用于无法运行独立数据库服务的应用

## 使用场景

- 桌面和移动应用中的离线语义搜索
- 数据必须保留在设备端的隐私敏感文档检索
- 嵌入边缘设备的轻量级推荐引擎
- 本地问答和内容匹配等设备端 AI 功能
- 在现有 SQLite 数据库中添加向量相似度搜索，无需配置独立基础设施

## 技术特点

- 以 C 语言实现为原生 SQLite 扩展，开销极小
- 使用高效的数据结构和索引策略优化相似度搜索性能
- 能够以最小的改动将向量能力引入当前数据库架构
- 跨平台支持 Linux、macOS、Windows 和移动环境
