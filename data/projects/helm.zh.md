---
name: HELM
slug: helm
homepage: https://crfm.stanford.edu/helm/
repo: https://github.com/stanford-crfm/helm
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Evaluation
description: 由 Stanford CRFM 开发的 Holistic Evaluation 框架，用于可复现的基础模型评估与基准管理。
author: Stanford CRFM
ossDate: '2021-11-29T08:53:17.000Z'
featured: false
status: tracked
---

## 简介

HELM（Holistic Evaluation of Language Models）是 Stanford CRFM 提供的开源评估框架，旨在为基础模型提供全面、可重复与透明的评测工具，包括数据集、基准与多维度指标，支持生成排行榜与可视化界面。

## 主要特性

- 标准化数据集与基准：包含 MMLU-Pro、GPQA、IFEval 等多种任务集合。
- 多维评估指标：支持准确率、效率、偏差与安全性等综合指标的计算与对比。
- Web UI 与排行榜：提供可视化界面用于逐样本检视与排行榜展示。
- 可重现的实验流水线：提供工具与脚本便于重现实验与汇总结果。

## 使用场景

- 学术研究：复现论文中的基准测试与比较不同模型的多维表现。
- 工程基准：在模型发布前执行全面的评估与安全性检查。
- 诊断与可视化：按样本分析模型输出，用于调试与改进模型。

## 技术特点

- 模块化设计，便于扩展任务集与接入外部模型提供商。
- 提供 CLI 与 Python API，支持脚本化执行与大规模评估。
- 活跃维护并具备详尽文档与引用信息，便于学术引用与工程使用。
