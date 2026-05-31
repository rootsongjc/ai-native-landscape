---
name: WeKnora
slug: weknora
homepage: https://weknora.weixin.qq.com
repo: https://github.com/tencent/weknora
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - RAG
  - Utility
description: WeKnora 是腾讯开源的文档理解与检索框架，基于大语言模型（LLM）和 RAG 技术，支持多格式文档解析、知识图谱构建与智能问答，适用于企业知识管理、科研文献分析等场景。
logo: ''
author: 腾讯
ossDate: '2025-07-22T08:01:23.000Z'
featured: false
status: tracked
---

WeKnora 是一款专为复杂文档场景打造的智能检索与理解框架，融合多模态预处理、语义向量索引与大模型推理，核心采用 RAG（检索增强生成）机制，支持 PDF、Word、图片等多种格式解析。

## 主要特性

- 支持多格式文档结构化解析与知识抽取
- 内置知识图谱自动构建与可视化
- 灵活集成本地/云端大模型，支持 Qwen、DeepSeek 等
- 提供 Web UI 与标准 RESTful API，易于二次开发
- 支持企业私有化部署与数据安全管控

## 使用场景

适用于企业知识管理、科研文献分析、技术支持、法律合规审查、医疗知识辅助等多种场景，显著提升信息检索效率与智能问答质量。

## 技术特点

采用模块化架构，支持多种检索策略（BM25、Dense Retrieve、GraphRAG），可灵活组合召回、重排与生成流程，兼容主流向量数据库（PostgreSQL、Elasticsearch），并支持知识图谱增强检索。
