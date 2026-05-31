---
name: cuDF
slug: cudf
homepage: https://docs.rapids.ai/api/cudf/stable/
repo: https://github.com/rapidsai/cudf
license: Unknown
category: platform-infra
subCategory: data-platforms
tags:
  - Data
  - Dev Tools
description: 基于 GPU 的 DataFrame 库，用于加速数据分析与表格计算的开源工具。
logo: ''
author: RAPIDS (NVIDIA)
ossDate: '2017-05-07T03:43:37.000Z'
featured: false
status: tracked
---

## 简介

cuDF 是 RAPIDS 生态中用于高性能数据处理的 GPU DataFrame 库，目标是把表格型计算从 CPU 转移到 GPU，从而显著加速数据清洗、聚合与变换等常见分析任务。该库广泛用于数据科学、ETL 与实时分析场景。

## 主要特性

- GPU 加速：利用 CUDA 并行能力加速 DataFrame 操作。
- Pandas 兼容：提供类似 Pandas 的 API，以降低迁移成本。
- 大规模分析：面向大规模数据处理和高吞吐场景的优化。

## 使用场景

- 数据预处理：在 ETL 流程中加速大规模数据清洗与转换。
- 实时分析：对需要低延迟、高吞吐的数据流做快速聚合与统计。
- 科研与工程：数据科学家用于加速模型训练前的数据处理与特征工程。

## 技术特点

- 技术栈：基于 C++/CUDA 与 Python 绑定，兼顾性能与易用性。
- 可扩展性：与 RAPIDS 其他组件（如 cuML、cuGraph）协同工作以构建端到端 GPU 工作流。
- 许可：Apache-2.0 许可，适合企业和学术采用。
