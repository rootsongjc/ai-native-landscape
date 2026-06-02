---
name: Crawl4AI
slug: crawl4ai
homepage: https://crawl4ai.com
repo: https://github.com/unclecode/crawl4ai
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Dev Tools
description: 一个面向大模型应用的开源网页爬虫与抓取器，输出清洁的 Markdown 与结构化数据，支持浏览器控制、Docker 部署与 LLM 驱动的抽取。
logo: ''
author: UncleCode
ossDate: '2024-05-09T09:48:50Z'
featured: false
status: tracked
---

## 简介

Crawl4AI 是一个开源的 LLM 友好型网页爬虫与抓取器，能够提取针对大语言模型消费优化的结构化数据。它将网页内容转换为干净的 Markdown 和结构化格式，非常适合 RAG 流水线和下游 AI 工作流使用。

## 主要特性

Crawl4AI 提供 LLM 友好的 Markdown 生成，具备自动去噪和引用格式化能力。它支持 CSS/XPath、Schema 化抽取、BM25 过滤和表格智能分块等多种抽取策略，并集成 Playwright 浏览器管理和 Docker 就绪的生产化部署方案。

## 使用场景

Crawl4AI 用于构建 RAG 数据管道，为向量索引和检索准备干净语料。它还支持对新闻和行业站点的定期抓取与结构化抽取，以及大规模数据提取和语义分块等研究场景。

## 技术特点

Crawl4AI 采用异步爬虫与浏览器池架构，支持虚拟滚动和延迟加载内容处理。它支持 LLM 驱动的结构化抽取和可扩展钩子，提供 Docker 镜像和 FastAPI 服务用于生产部署，采用 Apache-2.0 许可证并拥有活跃的社区。
