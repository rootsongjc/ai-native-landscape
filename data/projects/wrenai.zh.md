---
name: Wren AI
slug: wrenai
homepage: https://docs.getwren.ai/oss/overview/introduction
repo: https://github.com/canner/wrenai
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - RAG
description: 开源的 GenBI 代理，可将自然语言查询转换为精准 SQL、图表与 AI 洞察。
author: Canner
ossDate: '2024-03-13T06:18:20.000Z'
featured: false
status: tracked
---

## 简介

Wren AI 是开源的 GenBI 代理，能够将自然语言问题转为精准的 SQL、图表与 AI 驱动的洞察，支持多种数据源与模型提供者。

## 主要特性

- 文本转 SQL（Text-to-SQL）与文本转图表（Text-to-Chart），快速生成分析结果与可视化。
- 基于 MDL 的语义层保证 LLM 输出的准确性与治理能力，提供嵌入 API 以便在应用中集成。
- 支持丰富的数据连接器（BigQuery、DuckDB、Snowflake、Postgres 等），并支持本地与云端部署。

## 使用场景

- 快速 BI 探索：分析师通过自然语言直接生成图表与洞察，降低 SQL 学习成本。
- 将查询生成功能嵌入产品（SaaS、内部仪表盘）以提供智能查询体验。

## 技术特点

- 使用 TypeScript 与 Python 混合实现，提供 SDK 与详尽的开源文档；开源许可为 AGPL-3.0。
