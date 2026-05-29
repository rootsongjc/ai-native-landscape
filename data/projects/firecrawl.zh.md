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
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Firecrawl 是一个面向 AI 的 Web 数据 API，将任意网站爬取并清洗为可供训练或检索增强生成（RAG）使用的结构化数据与 markdown。它会递归发现所有可访问子页面，抽取正文、元数据与内链关系，并做分段、去重与语言检测，方便后续供给大语言模型（LLM）或智能体进行索引与问答。

## 主要特性

- 全站爬取与发现：自动遍历可访问页面，无需站点地图。
- 内容清洗与分段：生成干净的 markdown、正文摘要、元信息与段落边界，便于向量化与索引。
- 支持多语言与编码检测：自动识别语言并做基本规范化处理。
- 可配置速率与遵循 robots：支持速率限制、并发控制与 robots.txt 规则。

## 使用场景

- 构建 RAG 管道：将网站内容转为向量数据库索引源。
- 数据摄取与知识库搭建：为问答系统、智能客服或内部知识库提供干净数据。
- 自动化内容归档：网站迁移或离线存档时提取结构化内容。

## 技术特点

- 提供 HTTP API 与 Docker 容器化部署示例，支持本地运行与云端部署。
- 并发爬取与流式输出：减少等待，支持增量导出。
- 可扩展的解析器插件：方便接入自定义的内容清洗逻辑与元数据抽取。
- 对接常见下游组件：易于与向量数据库、索引器与智能体工作流集成。

该项目为开源软件（OSS），仓库持续演进，文档与示例请参见项目主页与仓库说明。
