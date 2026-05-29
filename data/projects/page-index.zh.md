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

## 详细介绍

PageIndex 是 Vectify AI 提出的开源文档索引系统，面向长篇专业文档（如财报、法规、技术手册）的检索与分析。它通过构建文档的树形目录（类似 TOC）并在该索引上进行基于推理的检索，避免了对向量数据库与人工分块的依赖，使检索更接近人类专家的查阅方式。项目同时提供本地运行脚本、示例笔记本以及云端服务与交互式 Agent 体验。

## 主要特性

- 无需向量数据库：使用文档结构与 LLM 推理实现检索。
- 无需人工分块：以自然章节为单位组织文档，保留语义与层级信息。
- 人类式检索流程：通过树搜索让模型进行多步推理以定位最相关节点。
- 多种接入：提供自托管代码、Dashboard、API 与 MCP 插件，支持快速试用与企业集成。

## 使用场景

适用于对长文档要求高准确性与可解释性的场景，例如金融报告与合规文档分析、技术与法律文档检索、学术论文审阅等。团队可将 PageIndex 用作研发级的文档分析工具，或通过云端 Agent 快速得到高质量问答和文档摘要。

## 技术特点

项目以 Python 为主实现，采用树状节点表示文档结构，并结合 LLM 进行节点级别的推理检索；提供示例脚本（如 `run_pageindex.py`）、Cookbook 与 Colab 演示。仓库采用 MIT 许可，且同时提供商业云服务与 OCR 增强模块以处理复杂 PDF。
