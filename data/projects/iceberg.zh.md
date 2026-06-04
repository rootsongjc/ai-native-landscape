---
name: Apache Iceberg
slug: iceberg
homepage: https://iceberg.apache.org/
repo: https://github.com/apache/iceberg
license: Apache-2.0
category: platform-infra
subCategory: data-platforms
tags:
  - Data Platform
  - Data Lake
  - Table Format
description: 面向大规模分析表的高性能表格式，提供事务性、快照和多引擎兼容的表存储规范，广泛应用于 AI 数据管线和 ML 特征存储。
author: Apache
ossDate: '2018-11-19T00:00:00.000Z'
featured: false
status: tracked
---

## 简介

Apache Iceberg 是为大规模分析表设计的高性能表格式，旨在将 SQL 表的可靠性与云原生数据湖的灵活性结合。Iceberg 支持 ACID 式快照、时间旅行、分区剥离和可扩展的元数据管理，使多个计算引擎（如 Spark、Flink、Trino 等）可以安全地对同一套表并行读写。

## 主要特性

- 表格式规范：清晰的规范支持跨引擎的统一访问与互操作。
- 事务与快照：支持原子提交、时间旅行与回滚操作。
- 多引擎支持：与 Spark、Flink、Trino、Hive 等多种引擎兼容。
- 效率优化：支持 Parquet/ORC/Arrow 等格式以及高效的元数据布局。

## 使用场景

- 大数据湖治理：在数据湖中提供可靠的表管理与版本控制。
- 多引擎分析：使不同计算引擎能够无缝访问与协作处理同一数据。
- 数据仓库替代：在云原生环境中构建更灵活可扩展的数据仓库架构。

## 技术特点

- 基于 Java 实现的参考实现，提供稳定的核心库与丰富的模块化插件。
- 文档与规范完善，社区活跃并由 Apache 基金会治理。
- 支持多种存储后端与目录服务（S3、HDFS、GCS 等）。
