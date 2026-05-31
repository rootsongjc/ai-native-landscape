---
name: lm-evaluation-harness
slug: lm-evaluation-harness
homepage: null
repo: https://github.com/eleutherai/lm-evaluation-harness
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Benchmark
description: lm-evaluation-harness 是一个用于对生成式语言模型进行大规模、可复现评测的框架，支持多种数据集与评测方式，便于研究与基准比较。
logo: ''
author: EleutherAI
ossDate: '2020-08-28T00:09:15.000Z'
featured: false
status: tracked
---

## 简介

lm-evaluation-harness 提供统一的评测接口与大量预实现的任务集合（如 Hellaswag、LAMBADA 等），支持本地模型、Hugging Face 模型与商业 API 的评测。

## 主要特性

- 丰富的基准和任务库，覆盖学术与工程常见评测场景。
- 支持多后端（transformers、vLLM、GPT-NeoX 等）与多种部署模式。
- 可配置的评测流水线，便于复现实验与结果对比。

## 使用场景

- 研究人员进行模型效果对比与论文复现。
- 工程团队对在线/离线模型进行回归测试与基准监控。
- 教学与基准平台构建（例如 Open LLM Leaderboard）。

## 技术特点

- 提供命令行工具 `lm_eval` 及完善的文档与示例配置文件。
- 支持批处理、并行评测与缓存结果以便重复实验。
- 集成多种结果可视化与上报机制（如 W&B、Zeno、Hugging Face Hub）。
