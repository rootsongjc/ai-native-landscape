---
name: dbx
slug: dbx
homepage: https://dbxio.com
repo: https://github.com/t8y2/dbx
license: Apache-2.0
category: coding-devtools
subCategory: developer-utilities
tags:
  - Database Client
  - Rust
  - MCP
  - AI Assistant
description: 25 MB 的轻量级跨平台数据库客户端，支持 MySQL、PostgreSQL、SQLite、Redis、MongoDB、DuckDB、SQL Server、达梦等 100+ 数据库，提供桌面端、Docker、CLI 与 Web 版本，内置 AI 助手和 MCP Server。
author: t8y2
ossDate: '2026-04-29'
featured: false
status: tracked
---

## 简介

DBX 是一个轻量级跨平台数据库客户端，把对 100 多种数据库的支持装进一个 25 MB 的二进制文件——无需 Java JRE、Python 虚拟环境或内置 Chromium，区别于基于 Java 或免费增值模式的同类工具。它覆盖 MySQL、PostgreSQL、SQLite、Redis、MongoDB、DuckDB、SQL Server、Oracle、ClickHouse，以及达梦、OceanBase、openGauss 等国产数据库，还为消息队列与中间件（Kafka、RocketMQ、RabbitMQ、Pulsar、MQTT、Nacos、etcd）提供一等公民的控制台。内置 AI 助手可用自然语言生成 SQL，MCP Server 则把已有连接暴露给 AI 编码智能体。

## 主要特性

- 支持 100+ 数据库，包括 MySQL、PostgreSQL、SQLite、Redis、MongoDB、DuckDB、SQL Server、Oracle、Elasticsearch、ClickHouse、TiDB、StarRocks、Redshift、达梦、OceanBase、openGauss、TDengine 等
- 中间件一等公民控制台：Kafka、RocketMQ、RabbitMQ、Pulsar、MQTT，以及 Nacos、Consul、ZooKeeper、etcd
- 内置 AI 助手：选中表、描述需求、得到 SQL——支持 Claude、OpenAI 或经 Ollama 的本地模型——AI 生成的 SQL 在执行前经过安全检查
- MCP Server 让 Claude Code、Cursor、Windsurf 等智能体通过你已配置的连接查询数据库
- 一个工具、多种形态：macOS/Windows/Linux 原生桌面端、用于自托管团队部署的 Docker、Web 版本和 CLI
- 约 25 MB 的单个二进制文件，零运行时负担

## 使用场景

- 用一个小体积二进制替代沉重的基于 Java 的客户端，连接一切数据库
- 在编辑器内用 AI 生成并审查 SQL，免去工具间复制粘贴
- 开发过程中让 AI 编码智能体经 MCP 查询真实数据库
- 团队通过 Docker 自托管共享的数据库控制台，并可在数据库旁边检查消息队列

## 技术特点

- 基于 Tauri 构建：Rust 内核加 Vue 前端，以约 25 MB 的单个二进制分发——安装时无需 JVM、Python 运行时或内置 Chromium
- 协议覆盖面广：关系型（MySQL、PostgreSQL、SQL Server、Oracle、达梦、OceanBase、openGauss、KingbaseES）、嵌入式/分析型（SQLite、DuckDB、ClickHouse、TiDB、StarRocks）、NoSQL（Redis、MongoDB、Elasticsearch）、时序（TDengine、InfluxDB）、云数仓（Redshift、Spanner），以及通用 JDBC 桥接
- AI 助手调用 Claude、OpenAI 或本地 Ollama 模型，把选中的表加自然语言描述转换为 SQL，并在执行前对生成语句运行安全检查
- 实现 Model Context Protocol，将已配置的连接暴露给 MCP 客户端（Claude Code、Cursor、Windsurf），一份配置处处可用
- 以 macOS、Windows、Linux 原生桌面应用、自托管 Docker 镜像、Web 版本和 CLI 分发，全部共享同一功能集与连接配置
