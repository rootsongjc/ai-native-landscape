---
name: LightRAG
slug: lightrag
homepage: https://pypi.org/project/lightrag-hku/
repo: https://github.com/hkuds/lightrag
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Inference
  - RAG
description: LightRAG 是一个专注于简单高效的检索增强生成（RAG）工具包，支持文档索引、图谱抽取与服务化部署。
logo: ''
author: HKUDS
ossDate: '2024-10-02T11:57:54.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

LightRAG 是一个面向生产的轻量级 RAG 框架，提供文档索引、检索、重排序与生成一体化能力，并同时支持 Server 与 Core 两套部署方式，适用于需要大规模文档检索和知识图谱增强的场景。

## 主要特性

- 支持多种存储后端（本地、Postgres、Redis、Milvus、Qdrant 等），便于灵活部署。
- 集成图谱抽取与实体关系管理，可构建知识图谱以增强检索效果。
- 提供 Server（Web UI + REST API）与 Core 嵌入式使用模式，便于集成到现有系统。
- 支持丰富的模型与 reranker 插件，可使用 Ollama、Hugging Face、OpenAI 等模型。

## 使用场景

- 企业文档检索与问答系统。
- 多模态 RAG 与知识图谱增强的检索流程。
- 学术/工业评测与快速原型搭建。

## 技术特点

- 以 Python 为主实现核心逻辑，TypeScript/JS 用于前端和 WebUI。
- 提供灵活的存储和索引策略，支持大规模向量检索与分布式部署。
- 高度模块化的架构，便于替换 Embedding、Reranker 与存储实现。
