---
name: Khoj
slug: khoj
homepage: https://khoj.dev
repo: https://github.com/khoj-ai/khoj
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Assistant
  - Dev Tools
  - RAG
description: 可自托管的“第二大脑”平台，用于将网页与文档转为可检索知识库并支持构建自定义智能体与自动化。
logo: ''
author: Khoj AI
ossDate: '2021-08-16T01:48:44Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Khoj 是一个面向个人与团队的可自托管“第二大脑”平台，用于将网页、笔记与文档转换为语义知识库，并在私有数据上构建可搜索的智能体与自动化工作流。项目集成语义检索与检索增强生成（RAG）流水线，支持多种 LLM 后端（如 GPT、Gemini、Llama 等）、本地离线模型与插件式接入机制，同时提供仪表盘、CLI 与模板，便于快速搭建并观测智能体行为。

## 主要特性

- 私有化部署：支持本地与私有网络部署，满足数据隐私和合规需求。
- 语义索引与检索：将异构文档转为向量索引，支持高质量检索与多跳查询。
- 多后端与离线模型支持：兼容云端 LLM 与本地离线模型，灵活选型。
- 自动化与调度：支持构建自定义智能体、自动任务与采集观测数据以优化策略。

## 使用场景

- 企业知识库：在受控环境中为客服、R&D 或法律团队构建可检索的知识库并供智能体调用。
- 研究与原型：作为 RAG 与检索算法的实验平台，便于复现与对比方法。
- 个人生产力：把笔记、笔记本或 Obsidian 数据库转为可问答的知识库。
- 离线与边缘场景：在无法或不愿使用外部 API 时，利用本地模型完成推理与检索。

## 技术特点

- 模块化架构：检索、索引、融合与生成模块解耦，便于替换与扩展。
- 多语言 SDK 与模板：提供 Python/TypeScript 等接入模板与示例工程。
- 可扩展存储：支持本地磁盘与外部对象存储作为 artifact 后端。
- 开源许可：项目以 AGPL-3.0 授权，社区与企业可在相应合规下使用与贡献。
