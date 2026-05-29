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

## 详细介绍

CocoIndex 是一个面向 AI 的数据转换与索引框架，旨在以极高性能处理大规模数据并支持增量处理和实时索引。它关注把原始数据流水线化、标准化为适合向量化与检索的格式，从而加速语义搜索和检索增强生成（RAG, Retrieval-Augmented Generation）工作流的构建。CocoIndex 提供端到端的数据处理组件，兼顾吞吐与延迟的工程折中，适合需要大规模索引与实时更新的场景。

## 主要特性

- 高性能的数据转换与索引，支持并行与增量处理。
- 原生支持语义索引与向量化管道，便于与向量数据库集成。
- 可组成的处理器组件与丰富的适配器，方便连接多种数据源与下游系统。

## 使用场景

CocoIndex 适用于需要将海量异构数据转为可检索语义索引的场景，例如知识库构建、实时日志/事件索引、文档与代码检索、以及 RAG 流水线中的数据上游处理。它也适合需要低延迟增量索引与持续数据同步的工程化应用。

## 技术特点

- 面向流水线的模块化设计，支持自定义转换器与连接器。
- 注重工程性能与可扩展性，采用高效并发与增量计算策略。
- 与常见向量数据库及检索组件友好集成，便于在 CI/CD 中验证数据一致性与索引质量。
