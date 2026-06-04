---
name: pgvector
slug: pgvector
homepage: https://pgvector.org
repo: https://github.com/pgvector/pgvector
license: Unknown
category: rag-knowledge
subCategory: vector-databases
tags:
  - Database
description: pgvector 是一个为 PostgreSQL 提供向量相似度检索能力的开源扩展，便于在数据库中存储与检索向量并支持近似/精确检索策略。
author: pgvector
ossDate: '2021-01-15T00:00:00.000Z'
featured: false
status: tracked
---

pgvector 是一个为 PostgreSQL 添加向量数据类型与相似度检索能力的开源扩展，支持多种距离度量（L2、内积、余弦等）与索引结构（HNSW、IVFFlat），可在数据库内高效执行嵌入检索。它使向量搜索与关系型数据无缝结合，充分享受 Postgres 的事务性与生态优势。

## 向量搜索能力

- 原生 Postgres 向量类型与操作符，直接存储和查询嵌入向量
- 支持精确与近似最近邻搜索，灵活平衡精度与速度
- HNSW 和 IVFFlat 索引支持，可扩展至百万级向量规模
- 多种距离度量：L2 距离、内积和余弦相似度

## 集成与部署

- 多语言客户端生态（Python、Go、JavaScript、Java 等）
- 与现有 Postgres 复制、备份和运维工具无缝协作
- 多种安装方式：编译安装、Docker、Homebrew、包管理器
- 无需额外基础设施，向量与关系数据共存于同一数据库

## 使用场景

- 利用 SQL JOIN 和强一致性构建 RAG 系统
- 结合元数据过滤和事务完整性的语义搜索
- 需要混合结构化过滤与向量相似度的应用场景
- 推荐系统、去重和异常检测等现有 Postgres 工作负载中的向量需求
