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
logo: ''
author: Vectify AI
ossDate: '2025-04-01T10:53:54Z'
featured: false
status: tracked
---

## 简介

PageIndex 是 Vectify AI 开发的无向量、基于推理的文档索引系统，专为长篇专业文档的高精度检索而设计。它不依赖向量数据库和人工分块，而是构建树形目录结构并通过 LLM 推理定位最相关章节，检索结果更准确且可解释。

## 主要特性

- 无向量 RAG：用文档结构感知的 LLM 推理替代嵌入搜索，无需向量数据库即可完成检索。
- 无分块索引：保留文档的自然层级和章节结构，使语义上下文完整不丢失。
- 两阶段树搜索：模拟人类专家的查阅方式，通过多步推理精确定位到节点级别的内容。

## 使用场景

金融分析师可以使用 PageIndex 在冗长的财报中快速定位特定数据和条款，无需翻阅大量无关片段。法律与合规团队在检索法规或合同文档时，可获得可解释的章节级引用。学术研究人员可通过云端 Agent 或自托管流水线，在长篇论文中快速找到相关段落。

## 技术特点

项目以 Python 实现，将文档表示为树状节点，在每个节点上应用基于 LLM 的推理来引导检索。仓库附带可直接运行的脚本、示例笔记本和 Cookbook，采用 MIT 许可证，同时提供可选的 OCR 支持和云端托管服务以满足团队即开即用的文档处理需求。
