---
name: NLWeb
slug: nlweb
homepage: null
repo: https://github.com/nlweb-ai/nlweb
license: Unknown
category: coding-devtools
subCategory: mcp-tools
tags:
  - Dev Tools
  - Utility
description: 用于为网站快速构建对话接口的开源协议与实现集合，支持 MCP/A2A 与 Schema.org 输出。
logo: ''
author: NLWeb Community
ossDate: '2025-04-28T20:44:02.000Z'
featured: false
status: tracked
---

NLWeb 是一个面向构建网站会话接口的开源协议与实现集合，旨在使用 Schema.org 等结构化格式将网页内容暴露为可查询的自然语言 API。项目包含服务端实现、示例 UI、数据摄取工具与多种向量存储/模型连接器，便于在实际网站上快速部署可与人类与 AI Agent 通信的对话能力。

## 主要特性

- 协议与实现：提供自然语言到网站内容的协议规范与参考实现。
- 广泛兼容：支持多种向量存储（如 Qdrant、Milvus、Elasticsearch）和 LLM 后端。
- 可部署性：包含 Docker、Azure 等部署示例与自动化脚本。
- 社区驱动：活跃的贡献与文档，包含运行与本地化指南。

## 使用场景

- 为电商、旅游、内容网站添加自然语言查询接口以提升搜索与推荐体验。
- 快速搭建 RAG（检索增强生成）前端，结合向量数据库实现知识检索。
- 将网站内容以结构化 Schema.org 格式暴露，便于 Agent 自动消费。

## 技术特点

- 轻量级 Python 实现，支持多平台部署（本地、容器、云服务）。
- 丰富的连接器与数据摄取脚本，支持多种数据源与向量后端。
- 遵循 MCP/A2A 等新兴协议，便于与多 Agent 体系集成。

注：本文为概要介绍，详情请参见仓库文档与示例。
