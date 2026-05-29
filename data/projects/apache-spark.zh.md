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
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Apache Spark 是一个面向大规模数据处理的统一分析引擎，支持 Scala、Java、Python 和 R 等多语言接口。它提供高性能的分布式计算框架与弹性数据抽象（RDD、DataFrame/DataSet），并将批处理、流处理与机器学习能力整合在同一平台上，便于在单机或集群环境中以一致的 API 执行复杂的数据管道与分析任务。

## 主要特性

Spark 提供：统一的多语言 API（支持 DataFrame/SQL）；高性能的执行引擎（支持内存计算与任务调度优化）；Structured Streaming 用于低延迟流处理；以及 MLlib 为常用机器学习算法提供分布式实现。生态体系丰富，包含与 Hadoop、Kafka、Delta Lake 等存储与计算组件的集成。

## 使用场景

适用于大规模数据 ETL、离线批处理分析、实时流处理、在线交互式查询与大规模机器学习训练与推理。常见于数据工程管道、报表与仪表盘后台、日志分析、特征工程以及推荐系统与模型训练等场景。

## 技术特点

Spark 采用分布式 DAG 执行引擎，支持惰性求值与任务合并优化，具备可扩展的资源调度与容错机制。其模块化设计（Spark SQL、Streaming、MLlib、GraphX）便于按需组合，且拥有活跃的开源社区与长期维护的版本发布策略。
