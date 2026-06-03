---
name: Apache Spark
slug: apache-spark
homepage: https://spark.apache.org/
repo: https://github.com/apache/spark
license: MIT
category: inference-serving
subCategory: inference-runtimes
tags:
  - Data
  - Framework
description: 一个用于大规模数据处理的统一分析引擎，支持批处理、流处理和机器学习。
author: Apache Software Foundation
ossDate: '2014-02-25T08:00:08Z'
featured: false
status: tracked
---
Apache Spark 是一个面向大规模数据处理的统一分析引擎，在工业界的机器学习管道中被广泛使用。它支持 Scala、Java、Python 和 R 等多语言接口，将批处理、流处理与机器学习能力整合在同一高性能分布式平台上。

## 核心能力

- **统一 DataFrame/SQL API**，覆盖 Scala、Java、Python、R，共享查询优化器
- **内存计算引擎**，支持惰性求值与任务合并，显著提升吞吐量
- **Structured Streaming**，提供低延迟、容错的流处理能力
- **MLlib** 提供分类、回归、聚类、协同过滤等分布式机器学习算法
- **GraphX** 用于图并行计算与图分析

## 生态集成

- 深度连接 Hadoop HDFS、YARN 与 Hive 元数据存储
- 与 Kafka、Delta Lake、Apache Iceberg 集成，支持流式与湖仓架构
- 兼容云对象存储（S3、ADLS、GCS），适配现代数据管道
- 提供关系型数据库、NoSQL 存储与消息队列连接器

## 典型应用场景

- 大规模 ETL 与数据工程管道
- PB 级数据的交互式 SQL 查询与即席分析
- 实时流处理，应用于日志分析与事件驱动应用
- 推荐系统的特征工程与分布式模型训练

## 架构特点

- 分布式 DAG 执行引擎，支持自动故障恢复与推测执行
- 模块化设计，由 Spark SQL、Streaming、MLlib、GraphX 组合而成
- 由 Apache 软件基金会维护，拥有活跃的开源社区与长期版本支持
