---
name: mcp-toolbox
slug: mcp-toolbox
homepage: https://mcp-toolbox.dev/documentation/introduction/
repo: https://github.com/googleapis/mcp-toolbox
license: Apache-2.0
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - Database
  - NL2SQL
  - Google Cloud
description: >-
  开源的模型上下文协议（MCP）服务器，把 AI Agent、IDE 和应用直接连接到企业数据库；既提供开箱即用的通用工具，
  也提供构建自定义安全工具的框架。前身为 Gen AI Toolbox for Databases。
author: googleapis
ossDate: '2024-06-07'
featured: false
status: tracked
---

## 简介

MCP Toolbox for Databases（前身 Gen AI Toolbox / genai-toolbox）是一个开源 MCP 服务器，把 AI Agent、IDE 和应用直接连接到企业数据库。它承担双重角色：一方面提供开箱即用的预置工具，让 Gemini CLI、Claude Code、Codex 等 MCP 客户端立刻能与数据对话；另一方面是构建生产级自定义工具的框架，支持受限访问下的结构化查询、语义搜索与 NL2SQL。

## 主要特性

- 预置通用工具（`list_tables`、`execute_sql` 等），通过 `--prebuilt=<database>` 一键开启，并可在 Google Antigravity MCP Store 中点击安装
- 通过 `tools.yaml` 配置的自定义工具框架：预定义的结构化查询、语义搜索与 NL2SQL 能力，配合受限访问
- 广泛的数据库支持——AlloyDB、BigQuery、Cloud SQL、Spanner、Firestore、Knowledge Catalog、PostgreSQL、MySQL、MariaDB、SQL Server、Oracle、MongoDB、Redis、Elasticsearch、CockroachDB、ClickHouse、Couchbase、Neo4j、Snowflake、Trino 等
- 提供 Python、JS/TS、Go、Java 客户端 SDK，用不到 10 行代码即可把工具接入 ADK、LangChain、LlamaIndex 或自定义 Agent
- 开箱即用的连接池、集成认证（IAM）与端到端 OpenTelemetry 可观测性

## 使用场景

- 把 IDE 或命令行 MCP 客户端连到数据库，用自然语言查询数据、探索表结构、生成感知数据库的代码
- 用预定义的查询逻辑构建生产级 Agent 工具，而非暴露原始数据库访问
- 为 LangChain、LlamaIndex 或 Agent Development Kit 应用提供安全、带类型的数据库工具

## 技术特点

- 工具以声明方式定义在 `tools.yaml` 中（多文件经 `--config` 加载）：source、tool 与 toolset 分开定义再组合，工具将参数绑定到预定义语句，而不是接受任意 SQL
- 预置模式按引擎加载标准工具集并通过 stdio 提供服务——`--prebuilt=<database>`，或 `--prebuilt=postgres/data` 这类子集——同时以 npm 包 `@toolbox-sdk/server` 分发，便于 npx 方式配置 MCP 客户端
- 服务器负责连接池与基于 IAM 的认证，并通过内置的 OpenTelemetry 支持输出指标与链路追踪
- 四个官方 SDK（Python `toolbox-core`、JS/TS `@toolbox-sdk/core`、Go、Java）从运行中的服务器加载工具定义，并以原生方法的形式暴露给 Agent 框架
