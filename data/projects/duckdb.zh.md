---
name: DuckDB
slug: duckdb
homepage: http://www.duckdb.org
repo: https://github.com/duckdb/duckdb
license: Unknown
category: platform-infra
subCategory: data-platforms
tags:
  - Database
  - Dev Tools
description: 一个面向分析的嵌入式 SQL 数据库，适用于交互式查询、ETL 与本地分析。
logo: ''
author: DuckDB
ossDate: '2018-06-26T15:04:45Z'
featured: false
status: tracked
---

## 简介

DuckDB 是一个面向分析的进程内 SQL 数据库管理系统，专为快速分析工作负载设计。它在进程内运行，可直接在应用或分析脚本中执行高性能 SQL 查询，适用于交互式数据探索与临时分析。

## 主要特性

- 嵌入式部署：可在进程内直接嵌入应用或脚本，无需独立数据库服务器。
- 列式存储与向量化执行：针对分析型查询优化，提升大规模扫描与聚合性能。
- 多语言接口：提供 Python、R、Go 等绑定，便于在数据工程与数据科学管道中使用。

## 使用场景

- 数据探索与交互式分析，在本地或笔记本环境中快速运行复杂 SQL 查询。
- 作为 ETL 管道的一部分，用于数据摄取与清洗阶段的高效处理。
- 嵌入式分析后端，为 BI、报表或离线批处理任务提供本地化查询能力。

## 技术特点

- 基于列式存储与向量化执行引擎，优化扫描与聚合操作的吞吐量。
- 支持在本地文件（如 Parquet）上直接查询，减少数据移动成本。
- MIT 许可证开源项目，易于集成到工程流水线与混合部署场景中。
