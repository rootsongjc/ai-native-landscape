---
name: MindsDB
slug: mindsdb
homepage: https://mindsdb.com
repo: https://github.com/mindsdb/mindsdb
license: MIT
category: rag-knowledge
subCategory: data-connectors
tags:
  - MCP
description: AI 查询引擎 - 构建能在大规模联合数据上回答问题的 AI 平台 - 你唯一需要的 MCP 服务器。
author: MindsDB
ossDate: '2018-08-02T17:56:45.000Z'
featured: false
status: tracked
---

MindsDB 是一个开源服务器，可以部署在任何地方 - 从你的笔记本电脑到云端。它内置 MCP 服务器，能够连接、统一并响应大规模联合数据的问题。

## 安装 MindsDB 服务器

MindsDB 支持多种安装方式：使用 Docker Desktop（推荐入门方式）、Docker（提供更多自定义灵活性）或 PyPI（适合开发贡献）。

## 核心理念：连接、统一、响应

MindsDB 的架构建立在三个基本能力之上：

### 连接你的数据

你可以连接到数百个企业数据源。这些集成允许 MindsDB 访问数据所在的位置，为所有功能奠定基础。

### 统一你的数据

MindsDB 的联合查询引擎支持使用 SQL 查询不同数据源。它提供三种虚拟表：

- 视图：简化数据访问，无需 ETL
- 知识库：索引和组织非结构化数据
- 机器学习模型：应用 AI/ML 获取见解

数据统一可通过作业自动化，安排同步和转换任务。

### 响应你的数据

MindsDB 提供两种与数据交互的方式：

- 代理：内置代理回答数据相关问题
- MCP：通过模型上下文协议实现无缝交互
