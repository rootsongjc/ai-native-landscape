---
name: pandas
slug: pandas
homepage: https://pandas.pydata.org
repo: https://github.com/pandas-dev/pandas
license: Unknown
category: coding-devtools
subCategory: developer-utilities
tags:
  - Data Processing
  - Python
  - ML Pipeline
description: pandas 是用于结构化数据处理与分析的开源 Python 库，是 ML 和 AI 数据预处理工作流的核心依赖。
logo: ''
author: pandas-dev
ossDate: '2010-08-24T01:37:33Z'
featured: false
status: tracked
---

## 详细介绍

pandas 是一个开源的 Python 数据分析与处理库，提供类似表格的主数据结构 DataFrame 和一维的 Series，便于以向量化、可读的方式进行数据清洗、转换与分析。自 2010 年起由社区维护并逐步成熟，广泛用于数据科学、金融分析、科研与工程数据处理领域。pandas 将高效的数组计算（基于 NumPy）与灵活的索引、时间序列支持以及丰富的 I/O 接口结合，降低了结构化数据处理的复杂度。

## 主要特性

- 提供 DataFrame/Series 等核心数据结构，支持标签索引、切片与对齐操作。
- 丰富的数据清洗与转换函数（缺失值处理、合并/连接、透视表、重塑等）。
- 强大的分组聚合（groupby）与窗口函数，便于统计与时间序列分析。
- 高性能 I/O 支持多种格式（CSV、Parquet、Excel、SQL 等），便于与数据管道集成。

## 使用场景

- 数据清洗与预处理：为机器学习与统计建模准备结构化数据。
- 探索性数据分析（EDA）：快速计算统计量、绘制可视化输入数据摘要。
- 时间序列分析与金融数据处理：重采样、滚动窗口计算与时间索引管理。
- 数据工程流程中的中间处理节点：与数据库、数据湖与分布式计算框架结合使用。

## 技术特点

- 基于 NumPy 提供向量化运算以确保性能，并在关键路径使用 C/Cython 优化。
- 灵活的索引与对齐语义，支持混合类型与缺失值。
- 模块化设计，易于扩展（扩展数组、IO 后端、第三方生态集成）。
- 社区活跃、文档完善，拥有稳定的 API 与广泛的生态工具链支持。
