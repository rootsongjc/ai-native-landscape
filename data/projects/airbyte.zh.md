---
name: Airbyte
slug: airbyte
homepage: 'https://airbyte.com'
repo: https://github.com/airbytehq/airbyte
license: Other
category: rag-knowledge
subCategory: data-connectors
tags:
  - Data Integration
  - ETL
  - Pipeline
  - Data Connector
  - Self-Hosted
description: 开源数据移动平台，用于 ELT 管道和 AI 智能体数据接入，支持从 API、数据库和文件迁移数据到数据仓库、数据湖和 AI 应用。
author: Airbyte
ossDate: '2020-07-27'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Airbyte 是领先的开源数据集成平台，可将数据从 API、数据库和文件迁移到数据仓库、数据湖和 AI 应用。拥有 350+ 连接器并不断增加 AI 智能体支持，是构建 RAG 管道和 AI 数据应用的数据基座。

## 主要特性

- 350+ 预构建连接器，覆盖数据库、API、SaaS 平台和文件
- ELT 架构，支持增量和全量同步
- 面向 AI 的数据管道，支持 RAG 和智能体应用
- 自托管或云端部署
- 变更数据捕获 (CDC) 实现实时数据同步

## 使用场景

- 构建数据管道为 RAG 知识库提供数据
- 同步企业数据到向量数据库支持 AI 搜索
- 为 AI 智能体工具访问创建统一数据层
- 机器学习特征工程的 ETL 工作流

## 技术特点

- 基于 Java 和 Python 构建，Docker 容器化
- 管道内支持 dbt 数据转换
- 连接器开发工具包 (CDK) 用于自定义连接器
- Python 和 PyAirbyte SDK 支持编程式管道控制
