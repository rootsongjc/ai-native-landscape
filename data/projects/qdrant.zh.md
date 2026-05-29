---
name: Qdrant
slug: qdrant
homepage: https://qdrant.tech
repo: https://github.com/qdrant/qdrant
license: Unknown
category: rag-knowledge
subCategory: vector-databases
tags:
  - Data
  - Vector DB
description: Qdrant 是一款面向生产环境的向量搜索引擎与向量数据库，提供高性能相似度检索、量化支持、持久化以及多语言客户端，适用于语义搜索、推荐与检索增强生成等场景。
logo: ''
author: Qdrant
ossDate: '2019-05-01T00:00:00.000Z'
featured: false
status: tracked
---

## 简介

Qdrant 是面向生产环境的向量搜索引擎与向量数据库，提供高性能相似度检索、持久化存储与可扩展部署能力。它通过量化、索引与过滤机制来提高查询效率，并为多语言客户端与云端托管服务提供统一的 API 支持。

## 主要特性

- 高性能向量检索与量化支持，兼顾吞吐与延迟。
- 灵活的 payload 过滤与查询表达式，支持复杂条件筛选。
- 丰富的客户端与 OpenAPI 接口，便于与多种语言与框架集成。
- 可托管的 Qdrant Cloud 与自托管部署选项。

## 使用场景

- 语义搜索与 RAG 检索层：在文本、图片或混合数据上做相似度检索与召回。
- 推荐系统与个性化排序：基于向量相似性与属性过滤实现近似推荐。
- 大规模离线/在线混合查询：需要低延迟检索与可扩展存储的应用场景。

## 技术特点

- 采用 Rust 实现，关注性能与稳定性，支持分布式部署与水平扩展。
- 提供索引（如 HNSW）、量化与持久化策略，并支持多种客户端与备份恢复机制。
