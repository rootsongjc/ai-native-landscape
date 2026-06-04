---
name: Haystack
slug: haystack
homepage: null
repo: https://github.com/deepset-ai/haystack
license: Apache-2.0
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - RAG
description: Haystack 是一个面向文档检索增强生成（RAG）与搜索应用的开源框架，方便将检索、索引与大模型组合成生产级查询与问答系统。
author: deepset-ai
ossDate: '2019-11-14T09:05:28.000Z'
featured: false
status: tracked
---

## 简介

Haystack 是由 deepset 开发的开源框架，旨在将向量检索、文档索引与大语言模型（LLM）集成，构建可靠的检索增强生成（RAG）与问答系统。它支持多种检索后端与模型后端，适用于企业搜索、知识库问答和智能助手等场景。

## 主要特性

- 支持多种检索引擎（Elasticsearch、Milvus、FAISS 等）和向量存储后端。
- 与主流 LLM 与嵌入模型兼容，便于替换推理/嵌入提供者。
- 丰富的管道（pipelines）抽象，支持检索、召回、重排序与生成环节组合。
- 内置文档处理器（解析、分段、去重）与流式处理能力，便于大规模文档索引。
- 生产化特性：可配置缓存、并发控制与监控集成。

## 使用场景

- 企业知识库问答：为内部文档、FAQ 提供自然语言问答入口。
- 客服与助理：结合检索与生成提供准确的回答并引用来源。
- 文档搜索与摘要：基于语义检索实现跨文档检索与摘要生成。
- RAG 原型与产品化：快速将检索与 LLM 组合用于不同垂类场景。

## 技术特点

- 模块化架构：清晰分层，检索、嵌入、生成模块易于替换与扩展。
- 支持批量与流式索引，能处理大规模语料。
- 提供 Python SDK 与示例工程，便于开发与部署。
- 与 Kubernetes、Docker 等云原生工具良好集成，便于在生产环境运行。
