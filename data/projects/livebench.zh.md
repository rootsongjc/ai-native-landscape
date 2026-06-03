---
name: LiveBench
slug: livebench
homepage: https://livebench.ai/
repo: https://github.com/livebench/livebench
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Benchmark
  - Evaluation
description: LiveBench 是一个面向客观评测与最小污染的 LLM 基准套件，提供可复现的题库、自动评分与在线排行榜服务。
author: LiveBench
ossDate: '2024-06-12T12:13:57.000Z'
featured: false
status: tracked
---

LiveBench 是一个注重数据集污染防控与可自动评分的 LLM 基准平台，包含多种任务（推理、数学、编码、语言理解、数据分析、指令跟随等），并定期发布新问题以减少测试集污染。

## 主要特性

- 提供可自动评分的客观题库，避免依赖 LLM 做评判，提高评测可信度。
- 定期发布新问题以降低测试集污染，并维护在线排行榜与历史版本。
- 支持并行化评测、API/本地模型评测、以及多种并行策略以提高吞吐量。
- 提供数据集与评分脚本、可扩展的任务模版与 Docker/部署示例。

## 使用场景

- 研究和开发团队用于评估 LLM 在不同任务上的客观性能。
- 进行模型比较、回归测试及性能监控的基准流水线。
- 教学或竞赛中用于自动化评测与排名展示。

## 技术特点

- 以 Python 实现评测与评分逻辑，提供可运行的脚本（如 `run_livebench.py`）用于生成答案、评分与展示结果。
- 支持 Hugging Face / API 模型与本地 GPU 推理（推荐通过 vLLM 等 OpenAI 兼容服务进行本地评测）。
- 提供并行评测选项（tmux/session、多线程请求并行）以支持大规模评估。
