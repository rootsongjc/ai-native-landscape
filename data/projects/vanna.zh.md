---
name: Vanna
slug: vanna
homepage: https://vanna.ai/
repo: https://github.com/vanna-ai/vanna
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Data
  - RAG
description: Vanna 是一个开源的 RAG 框架，支持将自然语言问题转为 SQL 并在本地数据库上执行，适合面向数据的检索增强生成场景。
logo: ''
author: Vanna
ossDate: '2023-05-13T17:26:28.000Z'
featured: false
status: tracked
---

## 简介

Vanna 是一个开源的 RAG（Retrieval-Augmented Generation）框架，专注于将用户查询转换为可执行的 SQL 并在本地数据库上运行。它支持多种 LLM、向量库与数据库，适用于企业级数据分析、BI 和交互式数据查询场景。

## 主要特性

- 高精度的 Text-to-SQL 生成功能，并能将生成 SQL 自动运行返回结果与图表。
- 支持多种 LLM（OpenAI、Anthropic、Gemini 等）与向量存储（Chroma、Pinecone、Milvus 等）。
- 提供 Jupyter、Streamlit、Slack 等多种示例界面与接入方式。

## 使用场景

- 数据分析与自助 BI：将自然语言问题直接映射为 SQL 并可视化结果。
- 内部知识库与审计：在本地运行 SQL，保持数据隐私与合规。
- 教学与原型：快速搭建 Text-to-SQL 的演示与研究环境。

## 技术特点

- 用 Python 实现，提供易扩展的抽象基类（VannaBase）用于接入不同 LLM 与向量数据库。
- 支持通过训练、文档或 SQL 示例进行 RAG 模型训练，具备自学习能力。
- MIT 许可，社区活跃，文档齐全（官网与 docs 链接）。
