---
name: DataTrove
slug: datatrove
homepage: null
repo: https://github.com/huggingface/datatrove
license: Apache-2.0
category: rag-knowledge
subCategory: data-connectors
tags:
  - Data
  - Tool
description: DataTrove 提供可扩展、平台无关的数据处理管道，用于大规模文本数据的清洗、去重与转换。
author: Hugging Face
ossDate: '2023-06-14T12:05:28.000Z'
featured: false
status: tracked
---
## 简介

DataTrove 是一个开源库，提供用于大规模文本数据处理的可组合 pipeline 模块，支持读取、提取、过滤、去重与保存多种数据格式，适用于 LLM 训练数据预处理和 RAG 数据管道。

## 主要特性

- 模块化的 pipeline blocks（readers, writers, extractors, filters, stats）。
- 支持多种执行器（Local、Slurm、Ray）实现从笔记本到集群的横向扩展。
- 提供多种示例：处理 Common Crawl、去重、摘要统计与合成数据生成。
- 与 Hugging Face Hub 的数据集和工具链配合良好，社区活跃，文档充足。

## 使用场景

- 为模型训练/微调准备清洗与格式化数据集。
- 构建用于 RAG 的检索/索引前处理流水线。
- 批量处理和去重大规模语料，以降低训练数据噪声与冗余。

## 技术特点

- 主要语言：Python（项目中也有少量 Rust 代码）。
- 许可：Apache-2.0。
- 提供 `pip install datatrove[...]` 的多种可选依赖项以支持不同的输入/运行时（io、processing、ray、cli 等）。
