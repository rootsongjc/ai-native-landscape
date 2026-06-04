---
name: Docling
slug: docling
homepage: https://docling-project.github.io/docling/
repo: https://github.com/docling-project/docling
license: MIT
category: rag-knowledge
subCategory: document-processing
tags:
  - Utility
description: 面向通用文档理解与转换的开源框架，支持 PDF、DOCX、图片、音频等多种格式的解析与结构化输出。
author: Docling
ossDate: '2024-07-09T07:50:26.000Z'
featured: false
status: tracked
---
## 简介

Docling 是一个开源的文档解析与理解框架，旨在将异构文档（PDF、DOCX、PPTX、HTML、图像、音频等）转换为统一的结构化表示，便于下游知识抽取、RAG（检索增强生成）与检索索引构建。它集成了 OCR、版面分析、表格识别与多格式转换能力，同时提供本地执行以满足隐私与离线场景需求。

## 主要特性

- 支持多种文档格式的统一解析（PDF、DOCX、PPTX、HTML、图片、音频）
- 先进的 PDF 布局与表格理解，保持阅读顺序与结构信息
- 与主流检索/代理框架集成（如 LangChain、LlamaIndex 等），方便构建 RAG 流水线
- 提供命令行工具与 Python API，支持本地运行与批量处理

## 使用场景

- 构建文档问答与知识库（RAG）管道，将非结构化文档转为可检索片段
- 批量抽取学术文献/报告的元数据与章节内容，用于文献综述或索引
- 对扫描件与图像类文档进行 OCR 与结构化处理，应用于档案数字化
- 将复杂报表/表格转为结构化数据以便进一步分析

## 技术特点

- 以 Python 为主的实现，兼容多平台（x86_64 与 arm64），并可通过 pip 安装
- 支持外部 VLM（如 GraniteDocling）与 ASR 模型，扩展视觉与音频能力
- 注重可组合性：提供统一的 DoclingDocument 表示，可导出为 Markdown、HTML、JSON 等格式
