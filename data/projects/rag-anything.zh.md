---
name: RAG-Anything
slug: rag-anything
homepage: null
repo: https://github.com/hkuds/rag-anything
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - RAG
  - Utility
description: 多模态文档处理与检索增强生成（RAG）系统，支持文本、图片、表格、公式等多种内容的统一解析与智能检索。
author: HKUDS
ossDate: '2025-06-06T06:47:29.000Z'
featured: false
status: tracked
---

RAG-Anything 是一个综合性多模态文档处理与检索增强生成（RAG）系统，基于 LightRAG 框架，支持文本、图片、表格、公式等多种内容的统一解析与智能检索。适用于学术研究、技术文档、金融报告、企业知识管理等复杂场景。

## 核心特性

- **端到端多模态处理**：从文档解析到多模态检索响应的完整处理链路
- **多格式文档支持**：兼容 PDF、Office 文档（DOC/DOCX/PPT/PPTX/XLS/XLSX）、图片、文本等主流格式
- **专用内容分析引擎**：针对图片、表格、公式和文本内容部署专用处理器，保证精准解析
- **知识图谱索引**：自动化实体提取与关系构建，支持跨模态语义连接
- **灵活处理架构**：支持 MinerU 智能解析与直接内容插入，满足多种数据来源整合需求
- **智能检索机制**：融合向量与图结构检索，支持文本、图片、表格、公式等多模态内容的智能查询
- **VLM 增强查询**：文档包含图片时自动结合视觉模型进行多模态分析

## 算法原理与架构

- 文档解析：集成 MinerU/Docling，支持高精度结构化内容提取
- 多模态内容理解：并发多流水线架构，智能分流文本、图片、表格、公式等内容
- 多模态分析引擎：专用视觉、表格、公式处理器，支持语义理解与关系抽取
- 知识图谱索引：自动化实体与关系构建，层次结构与语义关联
- 检索机制：向量 - 图融合检索，支持多模态内容的相关性排序与上下文整合

## 适用场景

- 学术论文、技术文档、金融报告、企业知识库的多模态检索与分析
- 复杂内容的结构化解析与智能问答
- 跨模态知识图谱构建与语义关联

## 相关项目

- [LightRAG](https://github.com/HKUDS/LightRAG)：简洁高效的 RAG 系统
- [VideoRAG](https://github.com/HKUDS/VideoRAG)：超长上下文视频 RAG 系统
- [MiniRAG](https://github.com/HKUDS/MiniRAG)：极简 RAG 系统

## 参考链接

- [RAG-Anything - github.com](https://github.com/HKUDS/RAG-Anything)
- [arXiv 论文](https://arxiv.org/abs/2410.05779)
