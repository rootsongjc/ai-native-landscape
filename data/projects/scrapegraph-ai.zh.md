---
name: ScrapeGraphAI
slug: scrapegraph-ai
homepage: https://scrapegraphai.com
repo: https://github.com/scrapegraphai/scrapegraph-ai
license: Unknown
category: coding-devtools
subCategory: browser-automation
tags:
  - Browser Automation
  - Data
  - Dev Tools
  - SDK
description: ScrapeGraphAI 是一个基于大语言模型的网页与文档爬取库，旨在将网站和本地文档高效转换为结构化数据并支持多种集成与 SDK。
logo: ''
author: ScrapeGraph AI
ossDate: '2024-01-27T16:54:38.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

ScrapeGraphAI 是一款面向开发者与数据工程团队的爬虫与数据抽取库。它将大语言模型的语义理解能力与显式的图结构抽取逻辑结合，能够把网站页面、HTML 片段、JSON 与 Markdown 等多种来源自动解析为结构化的字段与记录。项目目标是减少为复杂页面编写专用解析器的成本，通过提示驱动的抽取管道（如 SmartScraperGraph）快速产出高质量数据，同时提供可插拔的清洗、去重和导出阶段，便于与检索、向量数据库和 RAG 工作流无缝结合。

## 主要特性

- 基于图的爬取管道（SmartScraperGraph 等），通过提示驱动抽取目标字段。
- 提供 Python 与 Node.js SDK，支持多种 LLM 后端与本地模型运行时。
- 支持页面多样性（静态/动态页面、文档与本地文件），并包含丰富的集成（如 LangChain、LlamaIndex）。
- 可扩展的插件与流水线机制，便于自定义解析、清洗与输出格式。

## 使用场景

- 从新闻、产品页、目录页以及行业门户批量抽取结构化信息，用于搜索、监测和数据分析。
- 把爬取到的网页内容转换为知识库文档，支撑 RAG（检索增强生成）和问答系统的索引与检索层。
- 嵌入到数据工程流水线，实现自动化的采集、清洗、去重与入库，降低人工维护成本。
- 在快速迭代的场景中作为原型工具，开发者只需通过配置与少量提示即可完成复杂抽取任务，加速实验与部署。

## 技术特点

- 将 LLM 推理与图模型结合以提升对嵌套结构与表格的识别精度。
- 支持并发与分布式抓取，具备错误重试与速率控制，适配生产环境的稳定性需求。
- 仓库提供详尽的示例与测试套件，项目以 MIT 协议开源，便于企业或研究团队在合规前提下集成。
- 丰富的 SDK 与 API 使其能平滑对接现有的向量数据库、消息队列和 ETL 工具链。
