---
name: LocalRecall
slug: localrecall
homepage: https://quay.io/mudler/localrecall
repo: https://github.com/mudler/localrecall
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Data
  - Memory
  - RAG
description: LocalRecall 提供本地化的记忆层与知识库管理，便于与智能体集成的 RAG 功能。
logo: ''
author: mudler
ossDate: '2025-02-12T21:07:04Z'
featured: false
status: tracked
---

## 简介

LocalRecall 是一个 100% 本地化的记忆层和知识库服务，专为 AI 智能体设计，通过简单的 RESTful API 提供持久化的短期和长期记忆能力。它完全在本地处理文件上传、索引构建、语义检索和集合管理，适用于无法依赖外部云服务的隐私优先智能体架构。

## 主要特性

- RESTful API 用于管理知识集合、上传文档以及执行语义搜索和检索操作。
- 本地向量存储支持可插拔后端，使智能体能够在无云依赖的情况下存储和查询嵌入向量。
- 与 LocalAGI 和 LocalAI 原生集成，构成具备内置记忆能力的无缝自托管智能体技术栈。
- 支持多种文档格式，包括 Markdown、PDF 和纯文本，并提供自动分块和索引功能。

## 使用场景

- 为需要在跨会话中回忆过去交互、决策和已学事实的自主智能体提供持久化记忆。
- 在离线或合规敏感环境中，基于内部文档、Wiki 和知识库构建私有 RAG 管道。
- 为聊天机器人和助手提供长期上下文感知能力，而无需将对话历史发送到第三方服务。

## 技术特点

- 轻量级服务，支持 Docker 和 Docker Compose 部署，可在任何环境中快速启动。
- 可插拔的向量后端架构，允许用户选择适合其基础设施的嵌入和存储引擎。
- 设计为独立的记忆微服务，任何智能体框架均可通过其 REST API 调用。
