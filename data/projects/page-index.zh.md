---
name: PageIndex
slug: page-index
homepage: https://pageindex.ai
repo: https://github.com/vectifyai/pageindex
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Application
  - RAG
  - Retrieval
description: PageIndex 是 Vectify AI 开源的基于推理的文档索引系统，适用于长文档的高精度检索与分析。
author: Vectify AI
ossDate: '2025-04-01T10:53:54Z'
featured: false
status: tracked
---

PageIndex 是 Vectify AI 开发的无向量、基于推理的文档索引系统，专为长篇专业文档的高精度检索而设计。它不依赖向量数据库和人工分块，而是构建树形目录结构并通过 LLM 推理定位最相关章节，检索结果更准确且可解释。

## 无向量检索方案

- 用文档结构感知的 LLM 推理替代嵌入搜索，无需向量数据库即可完成检索
- 无分块索引保留文档的自然层级和章节结构，使语义上下文完整不丢失
- 两阶段树搜索模拟人类专家的查阅方式，通过多步推理精确定位到节点级别

## 准确性与可解释性

- 提供章节级引用，用户可追溯至文档中的具体位置
- 多步推理能力，处理需要跨章节综合分析的复杂查询
- 在长文档检索中比传统 RAG 具有更高准确率，避免分块边界导致的信息丢失

## 开发者体验

- 附带可直接运行的脚本、示例笔记本和 Cookbook，快速上手
- 可选的 OCR 支持，处理扫描文档
- 云端 Agent 和自托管流水线两种部署方式
- MIT 许可证，Python 实现，便于定制化
