---
name: Apache Spark
slug: apache-spark
homepage: https://spark.apache.org/
repo: https://github.com/apache/spark
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Data
  - Framework
description: 一个用于大规模数据处理的统一分析引擎，支持批处理、流处理和机器学习。
logo: ''
author: Apache Software Foundation
ossDate: '2014-02-25T08:00:08Z'
featured: false
status: tracked
---

## 简介

Apache Spark 是一个面向大规模数据处理的统一分析引擎，在工业界的机器学习管道中被广泛使用。它支持 Scala、Java、Python 和 R 等多语言接口，将批处理、流处理与机器学习能力整合在同一高性能分布式平台上，使开发者能够构建从单机到大规模集群无缝扩展的复杂数据管道。

## 主要特性

Spark 提供统一的多语言 DataFrame/SQL API、基于内存计算的优化执行引擎、用于低延迟流处理的 Structured Streaming，以及为常用机器学习算法提供分布式实现的 MLlib。其丰富的生态体系与 Hadoop、Kafka、Delta Lake 等众多存储与计算组件深度集成。

## 使用场景

适用于大规模数据 ETL、离线批处理分析、实时流处理、交互式 SQL 查询与大规模机器学习训练与推理。常见于数据工程管道、报表与仪表盘后台、日志分析、推荐系统特征工程以及模型训练等场景。

## 技术特点

Spark 采用分布式 DAG 执行引擎，支持惰性求值与任务合并优化，具备可扩展的资源调度与容错机制。其模块化设计（Spark SQL、Streaming、MLlib、GraphX）便于按需组合，项目由 Apache 软件基金会维护，拥有活跃的开源社区与长期版本发布策略。
