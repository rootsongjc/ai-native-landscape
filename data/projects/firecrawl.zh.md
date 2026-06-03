---
name: Firecrawl
slug: firecrawl
homepage: https://firecrawl.dev
repo: https://github.com/firecrawl/firecrawl
license: AGPL-3.0
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Utility
description: 一个面向 AI 的 Web 数据 API，将整个网站转换为干净的 markdown 或结构化数据，方便用于 RAG 与知识库构建。
author: Mendable AI
ossDate: '2024-04-15T21:02:29.000Z'
featured: false
status: tracked
---
Firecrawl 是一个专为 AI 工作流设计的 Web 数据 API，支持大规模搜索、抓取和交互网站内容。它能够爬取目标网站、发现可访问的子页面，并将网页内容转换为干净的 markdown 或结构化数据，优化为适合检索增强生成（RAG）和大语言模型使用的格式。

## 爬取与抓取

- 无需站点地图即可进行全站发现和递归爬取
- 生成清洗后的 markdown、段落级分块和元数据用于索引
- 语言和编码检测与自动规范化
- 可配置的速率限制和 robots.txt 遵循机制

## 结构化数据提取

- 面向 LLM 的结构化数据提取
- 可自定义提取模式以适配特定使用场景
- 自动内容解析，去除导航、广告和页面样板
- 元数据增强，服务于下游搜索和检索管道

## 集成与部署

- HTTP API 和 Docker 部署支持，兼容本地和云端环境
- 并发爬取和流式输出以支持增量导入
- 可扩展的解析器插件用于自定义内容抽取和增强
- 与向量数据库、索引器和智能体管道轻松集成

## 常见使用场景

- 为 RAG 系统和语义搜索填充向量数据库
- 从公开网站构建知识库和问答系统
- 自动化内容归档和迁移提取
- 大规模将网页内容转化为结构化、AI 可消费数据
