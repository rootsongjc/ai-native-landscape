---
name: Pathway LLM App
slug: llm-app
homepage: https://pathway.com/developers/templates/
repo: https://github.com/pathwaycom/llm-app
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Framework
  - RAG
description: 一组面向生产的可部署 RAG 与 AI 管道模板，支持实时数据同步与大规模文档索引。
author: Pathway
ossDate: '2023-07-19T08:43:37.000Z'
featured: false
status: tracked
---

## 简介

Pathway 的 LLM App 是一组可直接部署的 RAG 与 AI 管道模板，支持实时数据同步（文件系统、Google Drive、SharePoint、S3 等）与大规模文档索引，旨在将企业级检索增强生成（RAG）与搜索能力快速投入生产。

## 主要特性

- 应用模板：包含问答、实时索引、多模态 RAG、Unstructured-to-SQL 等多种开箱即用模板。
- 实时数据同步：自动监听数据源变更并更新索引，支持多种数据源与混合索引策略。
- 可部署性：Docker 化，支持云端与本地部署，并提供 Streamlit 或 REST 示例前端。
- 集成生态：与 Pathway 引擎、usearch、Tantivy、LangChain 等集成以提升检索与性能。

## 使用场景

- 企业级知识库搜索與问答服务（支持 SharePoint、Google Drive 等实时同步）。
- 金融/法律等需要从大量文档中提取表格与表数据的多模态检索场景。
- 快速搭建 RAG 后端并连接自定义前端或现有应用。

## 技术特点

- 基于 Pathway Live Data 框架（Python + Rust 引擎）实现实时同步与高性能索引。
- MIT 许可证，便于企业采纳与二次开发。
- 包含丰富示例与演示、CI 模板与部署脚本，便于上手与扩展。
