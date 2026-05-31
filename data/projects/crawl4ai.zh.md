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

## 详细介绍

Crawl4AI 是一款为大语言模型（LLM）与 RAG 流程优化的开源网页爬虫与抓取器，旨在把互联网页面转换为干净、可索引的 Markdown 和结构化数据。项目支持 Playwright 驱动的浏览器抓取、远程浏览器控制、代理与会话管理，并为大规模生产环境提供 Docker 化部署与 API 网关能力。

## 主要特性

- LLM 友好的 Markdown 生成：自动去噪与引用格式化，适合下游检索与摘要。
- 丰富的抽取策略：支持 CSS/XPath、Schema 化抽取、BM25 过滤与表格智能分块。
- 浏览器与会话管理：Playwright 支持、持久化用户配置与代理设置，减少反爬挑战。
- 可部署性：提供 Docker 镜像、FastAPI 服务与 Web Playground，便于生产化接入。

## 使用场景

- 构建 RAG 数据管道：为知识库与向量索引准备干净语料。
- 自动化监测与报告：对新闻、竞品或行业站点进行定期抓取与结构化抽取。
- 研究与数据工程：大规模表格抽取、语义分块与 LLM 驱动的数据清洗实验。

## 技术特点

- 异步爬虫与浏览器池，兼顾性能与稳定性；支持虚拟滚动与延迟加载场景。
- LLM 驱动的结构化抽取与智能 chunking，支持自定义策略与插件钩子。
- 采用 Apache-2.0 许可，社区活跃，并提供详尽文档与示例代码以便快速上手。
