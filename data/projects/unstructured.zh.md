---
name: Unstructured
slug: unstructured
homepage: https://www.unstructured.io/
repo: https://github.com/unstructured-io/unstructured
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Data
  - RAG
description: 用于将复杂文档无缝转换为结构化数据的开源 ETL 解决方案，适配语言模型的数据处理场景。
logo: ''
author: Unstructured
ossDate: '2022-09-26T21:53:41.000Z'
featured: false
status: tracked
---

## 简介

Unstructured 是一个开源的 ETL 解决方案，专注于将复杂的文档（PDF、扫描图像、Word、HTML 等）转换为清晰、结构化的格式以供语言模型使用。项目结合多种解析和预处理策略，能够对文档进行分块、增强与嵌入准备，支持从研究原型到生产级工作流的迁移。

## 主要特性

- 多格式解析：支持 PDF、DOCX、HTML、图像等多种输入格式的解析与抽取。
- 数据清洗与分块：提供预处理、分段与增强模块以生成适用于检索与生成任务的数据片段。
- 生产级功能：面向企业级流程的分区、丰富化与嵌入准备能力。

## 使用场景

- RAG/问答系统：将非结构化文档转换为向量化片段以供检索增强生成使用。
- 文档迁移：把历史文档库提取成结构化数据以便索引和分析。
- 数据工程流水线：作为上游 ETL 组件，连接解析、清洗与下游嵌入/搜索组件。

## 技术特点

- 技术栈：以 Python 为主，兼容主流的嵌入与检索工具链（如 Faiss、Milvus、OpenSearch 等）。
- 可扩展性：模块化设计易于添加自定义解析器与处理步骤。
- 许可与生态：采用 Apache-2.0 许可，适合社区与商业场景的采用与贡献。
