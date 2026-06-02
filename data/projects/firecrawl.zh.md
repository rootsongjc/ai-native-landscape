---
name: Firecrawl
slug: firecrawl
homepage: https://firecrawl.dev
repo: https://github.com/firecrawl/firecrawl
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Utility
description: 一个面向 AI 的 Web 数据 API，将整个网站转换为干净的 markdown 或结构化数据，方便用于 RAG 与知识库构建。
logo: ''
author: Mendable AI
ossDate: '2024-04-15T21:02:29.000Z'
featured: false
status: tracked
---

## 简介

Firecrawl 是一个专为 AI 工作流设计的 Web 数据 API，支持大规模搜索、抓取和交互网站内容。它能够爬取目标网站、发现可访问的子页面，并将网页内容转换为干净的 markdown 或结构化数据，优化为适合检索增强生成（RAG）和大语言模型使用的格式。

## 主要特性

Firecrawl 无需站点地图即可进行全站发现和递归爬取，生成清洗后的 markdown、段落级分块和元数据用于索引。它支持语言和编码检测与规范化，并提供可配置的速率限制和 robots.txt 遵循机制。API 同时支持网页抓取和面向 LLM 的结构化数据提取。

## 使用场景

Firecrawl 可用于为 RAG 系统和语义搜索填充向量数据库，从公开网站构建知识库和问答系统，以及自动化内容归档和迁移提取。对于需要大规模将网页内容转化为结构化、AI 可消费数据的团队特别有价值。

## 技术特点

Firecrawl 提供 HTTP API 和 Docker 部署支持，兼容本地和云端环境。它具备并发爬取和流式输出能力以支持增量导入，可扩展的解析器插件用于自定义内容抽取和增强，并可与下游向量数据库、索引器和智能体管道轻松集成。
