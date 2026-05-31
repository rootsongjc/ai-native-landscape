---
name: pgvector
slug: pgvector
homepage: https://pgvector.org
repo: https://github.com/pgvector/pgvector
license: Unknown
category: platform-infra
subCategory: data-platforms
tags:
  - Database
description: pgvector 是一个为 PostgreSQL 提供向量相似度检索能力的开源扩展，便于在数据库中存储与检索向量并支持近似/精确检索策略。
logo: ''
author: pgvector
ossDate: '2021-01-15T00:00:00.000Z'
featured: false
status: tracked
---

## 简介

pgvector 是一个为 PostgreSQL 添加向量数据类型与相似度检索能力的扩展，支持多种距离度量（L2、内积、余弦等）与索引结构（HNSW、IVFFlat）以在数据库内高效执行嵌入检索。它使得将向量搜索与关系型数据结合成为可能，享受 Postgres 的事务性与生态优势。

## 主要特性

- 原生 Postgres 向量类型与操作符。
- 支持精确与近似检索、HNSW/IVFFlat 索引。
- 多语言客户端生态（Python、Go、JS、Java 等）。
- 易于与现有 Postgres 工作负载集成，支持复制与备份策略。

## 使用场景

- 将嵌入存储在业务数据库中以实现语义搜索与混合检索。
- 构建 RAG 系统时用作持久化向量存储与检索层。
- 在需要事务、JOIN 与复杂过滤条件下进行相似度检索的场景。

## 技术特点

- 利用 Postgres 的扩展机制与索引能力，兼顾一致性与可扩展性。
- 提供多种部署方式（编译安装、Docker、Homebrew、包管理器）。
