---
name: pandas
slug: pandas
homepage: https://pandas.pydata.org
repo: https://github.com/pandas-dev/pandas
license: BSD-3-Clause
category: rag-knowledge
subCategory: data-connectors
tags:
  - Data Processing
  - Python
  - ML Pipeline
description: pandas 是用于结构化数据处理与分析的开源 Python 库，是 ML 和 AI 数据预处理工作流的核心依赖。
author: pandas-dev
ossDate: '2010-08-24T01:37:33Z'
featured: false
status: tracked
---

pandas 是用于结构化数据处理与分析的基础开源 Python 库，提供 DataFrame 和 Series 两种核心数据结构，使数据清洗、转换与探索既高效又富有表达力。自 2010 年以来，它一直是数据科学家、分析师和工程师在金融、科研及 AI 预处理流水线中的首选工具。

## 核心数据结构

- 带标签的 DataFrame 和 Series 结构，拥有强大的索引、对齐和切片语义
- 优雅地处理混合类型与缺失值，无需手动类型转换
- 直观的 API，支持按标签或条件选择、过滤和转换行列数据

## 数据整理工具集

- 完备的连接、合并和拼接操作，组合来自多个数据源的数据集
- 透视表、重塑、融合和堆叠，将数据重构为所需格式
- 带窗口函数的分组聚合，处理复杂分析查询
- 时间序列重采样、滚动窗口和频率转换，建模时序数据

## I/O 与生态集成

- 高性能 I/O 驱动，支持 CSV、Parquet、Excel、SQL、JSON 等多种格式
- 基于 NumPy 实现快速向量化计算，关键路径使用 C 和 Cython 优化
- 模块化架构支持自定义数组扩展和可插拔 I/O 后端
- 与 PyData 生态（scikit-learn、Matplotlib、Jupyter）深度集成
