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

## 简介

pandas 是用于结构化数据处理与分析的基础开源 Python 库，提供 DataFrame 和 Series 两种核心数据结构，使数据清洗、转换与探索既高效又富有表达力。自 2010 年以来，它一直是数据科学家、分析师和工程师在金融、科研及 AI 预处理流水线中的首选工具。

## 主要特性

- 带标签的 DataFrame 和 Series 结构，拥有强大的索引、对齐和切片语义，能优雅地处理混合类型与缺失值。
- 完备的数据整理工具集，涵盖连接、合并、透视表、重塑以及带窗口函数的分组聚合。
- 高性能 I/O 驱动，支持 CSV、Parquet、Excel、SQL 等多种格式，方便在不同存储系统间搬运数据。

## 使用场景

数据工程师依赖 pandas 清洗和预处理结构化数据集，为机器学习模型准备输入。分析师用它进行探索性数据分析，快速计算统计量和可视化分布。金融与研究团队利用其时间序列重采样和滚动窗口函数对时序数据进行建模。

## 技术特点

pandas 基于 NumPy 实现快速向量化计算，并在关键路径上使用 C 和 Cython 优化。模块化架构支持自定义数组扩展、可插拔 I/O 后端以及与 PyData 生态的深度集成。活跃的大型社区维护着完善的文档和稳定的公开 API。
