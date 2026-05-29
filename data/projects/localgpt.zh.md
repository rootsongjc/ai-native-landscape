---
name: LocalGPT
slug: localgpt
homepage: null
repo: https://github.com/promtengineer/localgpt
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - RAG
description: 一个本地化的私有文档智能平台，支持混合检索与多模型推理，所有数据保存在本地。
logo: ''
author: PromtEngineer
ossDate: '2023-05-24T05:32:40.000Z'
featured: false
status: tracked
---

## 简介

LocalGPT 是一个私有、可部署在本地的文档智能平台，结合语义检索、关键词匹配与 Late Chunking，能在不将数据泄露到外部的前提下对文档进行问答、摘要与洞察挖掘。

## 主要特性

- 支持多种文档格式（PDF、DOCX、TXT、Markdown）与批量索引处理。
- 混合检索引擎（向量+BM25）、句级 Context Pruning 与独立的答案验证流程，提高长上下文检索的准确度。
- 支持本地模型（通过 Ollama）、HuggingFace 作为嵌入/重排序提供者，具备灵活的模型路由与缓存机制。

## 使用场景

- 在敏感数据场景（法律、财务、医疗）进行本地化文档问答与知识库查询。
- 团队内部知识库搜索、合同审阅、报告摘要与合规审计等场景的快速部署。

## 技术特点

- 纯 Python 核心，模块化架构，可只启用需要的组件以降低依赖和资源占用。
- 支持 Ollama 本地推理，多平台（GPU/CPU/HPU/MPS）兼容，并提供 Docker 与直接开发两种部署方式。
- 管道化配置（默认/快速/自定义），支持重排序、验证、late-chunking 与查询分解等高级检索策略。
