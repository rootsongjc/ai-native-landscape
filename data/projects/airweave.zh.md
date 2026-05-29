---
name: Airweave
slug: airweave
homepage: https://airweave.ai/
repo: https://github.com/airweave-ai/airweave
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Data
  - RAG
description: Airweave 是一个让代理可以检索任何应用数据的工具，支持将应用、生产力工具、数据库与文档存储的内容构建成可语义搜索的知识库。
logo: ''
author: Airweave
ossDate: '2024-12-24T10:00:06.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Airweave 让代理能够搜索并检索来自应用、生产力工具、数据库与文档存储的内容。平台覆盖从认证、数据抽取、向量化到搜索服务的全链路，提供统一的检索接口供代理使用。

## 主要特性

- 支持 25+ 数据源的同步与抽取（例如 Google Drive、Gmail、GitHub 等）。
- 提供实体抽取、转换与向量化管道，支持增量更新与版本管理。
- 可通过 REST API 或 MCP 暴露检索接口，支持多租户与 OAuth2 授权。
- 内置 SDK（Python、TypeScript）便于快速集成。

## 使用场景

- 为 RAG（检索增强生成）系统构建可搜索的知识库。
- 将应用内数据（文档、邮件、日历、存储）开放给智能代理进行自动化任务。
- 在多租户环境下为内部搜索、问答、推荐或客服系统提供语义搜索能力。

## 技术特点

- 后端基于 FastAPI，向量存储常用 Qdrant 等数据库。
- 前端采用 React/TypeScript，具有可视化的数据连接器与管理面板。
- 支持本地自托管（Docker Compose / Kubernetes）和托管服务（Airweave Cloud）。
