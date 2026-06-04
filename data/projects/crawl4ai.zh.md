---
name: Crawl4AI
slug: crawl4ai
homepage: https://crawl4ai.com
repo: https://github.com/unclecode/crawl4ai
license: Apache-2.0
category: rag-knowledge
subCategory: data-connectors
tags:
  - Dev Tools
description: 一个面向大模型应用的开源网页爬虫与抓取器，输出清洁的 Markdown 与结构化数据，支持浏览器控制、Docker 部署与 LLM 驱动的抽取。
author: UncleCode
ossDate: '2024-05-09T09:48:50Z'
featured: false
status: tracked
---
Crawl4AI 是一个开源的 LLM 友好型网页爬虫与抓取器，能够提取针对大语言模型消费优化的结构化数据。它将网页内容转换为干净的 Markdown 和结构化格式，非常适合 RAG 流水线和下游 AI 工作流使用。

## 抽取与输出能力

- LLM 友好的 Markdown 生成，具备自动去噪、链接扁平化和引用格式化能力
- 灵活的抽取策略：CSS/XPath 选择器、JSON Schema 结构化抽取和 BM25 相关性过滤
- 表格智能分块和结构化数据抽取，保留语义关系
- 支持在提取文本内容的同时抽取媒体元数据

## 浏览器管理与部署

- 基于 Playwright 的浏览器管理，提供浏览器池支持并发抓取
- 支持虚拟滚动、延迟加载和 JavaScript 重型单页应用
- Docker 就绪的生产化部署，提供预构建镜像快速启动
- FastAPI 服务端，便于编程访问和集成到现有流水线

## 使用场景

- 构建 RAG 数据管道，为向量索引和检索准备干净语料
- 对新闻和行业站点进行定期抓取与自动化监控报告
- 大规模数据提取和语义分块等研究场景
- 按需为 LLM 驱动的应用提供新鲜、结构化的网页数据

## 技术亮点

- 异步爬虫架构，专为高吞吐量工作负载设计
- 支持 LLM 驱动的结构化抽取和可扩展的自定义处理钩子
- 采用 Apache-2.0 许可证，拥有活跃成长中的开源社区
