---
name: Khoj
slug: khoj
homepage: https://khoj.dev
repo: https://github.com/khoj-ai/khoj
license: AGPL-3.0
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Assistant
  - Dev Tools
  - RAG
description: 可自托管的"第二大脑"平台，用于将网页与文档转为可检索知识库并支持构建自定义智能体与自动化。
author: Khoj AI
ossDate: '2021-08-16T01:48:44Z'
featured: false
status: tracked
---

Khoj 是一个可自托管的 AI"第二大脑"平台，能将网页、笔记和文档转化为可搜索的知识库。用户可以从互联网或自有文档中获取答案、构建自定义智能体并执行深度研究，同时通过私有化部署完全掌控自己的数据。

## 主要特性

- 集成语义检索与 RAG 流水线，支持 GPT、Gemini、Llama 等多种 LLM 后端以及本地离线模型
- 自定义智能体构建器，支持自动化与调度能力以处理周期性任务
- 异构文档导入，将文件转化为向量索引以支持高质量的多跳查询
- 支持在私有网络中部署以满足严格的隐私与合规需求
- 检索、索引、融合与生成模块解耦设计，便于替换和扩展

## 使用场景

- 构建企业知识库，在受控环境中为客服、研发或法律团队提供可检索的知识服务
- 将笔记或 Obsidian 数据库转为可问答的个人知识库，提升个人生产力
- 无法使用外部 API 的离线或边缘场景，仍可提供智能搜索能力
- 需要跨大量文档进行多跳推理的深度研究任务

## 技术特点

- 提供 Python/TypeScript 等多语言 SDK 与模板，方便开发者集成
- 支持从本地磁盘到外部对象存储的可扩展存储后端
- 开源许可为 AGPL-3.0，拥有活跃的开源社区
