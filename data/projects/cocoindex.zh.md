---
name: CocoIndex
slug: cocoindex
homepage: https://cocoindex.io
repo: https://github.com/cocoindex-io/cocoindex
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Data
  - Indexing
  - RAG
description: 一个面向 AI 的高性能数据处理与索引框架，支持增量处理与语义索引。
logo: ''
author: CocoIndex
ossDate: '2025-03-03T23:03:09Z'
featured: false
status: tracked
---

## 简介

CocoIndex 是一款面向长期运行 AI 智能体的增量数据索引引擎，能够使数据索引与不断变化的数据源保持同步。它提供高性能的数据转换和语义索引能力，持续处理更新，确保 RAG 流水线和搜索系统始终反映最新的可用信息。

## 主要特性

高性能数据转换与索引，支持并行和增量处理，高效应对持续的数据源更新。原生支持语义索引和向量化流水线，可直接与向量数据库集成。可组合的处理器组件和适配器，支持将多样化数据源连接到下游检索和搜索系统。

## 使用场景

将海量异构数据转换为可检索的语义索引，用于知识库构建、实时日志和事件索引、文档或代码搜索。RAG 流水线的上游数据处理，要求索引与变化的数据源保持同步。需要低延迟增量索引和持续数据同步而无需全量重处理的工程化应用。

## 技术特点

面向流水线的模块化设计，支持针对特定数据工作流自定义转换器和连接器。采用高效并发和增量计算策略实现工程级性能和可扩展性，避免冗余处理。与常见向量数据库和检索组件集成，支持在 CI/CD 中验证数据一致性和索引质量。
