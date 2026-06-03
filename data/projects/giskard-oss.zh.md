---
name: Giskard OSS
slug: giskard-oss
homepage: https://docs.giskard.ai/en/stable/getting_started/index.html
repo: https://github.com/giskard-ai/giskard-oss
license: Apache-2.0
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Evaluation
description: 一款开源的 AI 评估与测试框架，用于自动检测性能、偏差与安全问题。
author: Giskard-AI
ossDate: '2022-03-06T21:45:37.000Z'
featured: false
status: tracked
---
## 简介

Giskard 是一个开源的模型评估与测试框架，帮助开发者自动检测 LLM 与传统机器学习模型中的性能、偏差与安全问题，覆盖从 RAG 应用到视觉模型的评估工具链。

## 主要特性

- 自动化扫描（Scan）：检测幻觉、注入、敏感信息泄露与稳健性问题。
- RAGET：为 RAG 应用自动生成评估数据集并评测生成回答的各个组件。
- 多模型与环境兼容：支持任意模型与自定义包装，可在本地、Colab 或 CI 环境运行。
- 可视化与交互：提供 Web 界面、文档与示例以便调试与分享评估结果。

## 使用场景

- 生产前安全审查：在部署前自动化检测潜在风险与有害输出。
- 回归测试：在模型迭代中持续监控性能与公平性指标。
- RAG 评估：生成并使用测试集评估检索与生成端的整体表现。

## 技术特点

- 提供 CLI、Python API 与交互式 Notebook 示例，支持脚本化集成。
- 活跃的版本更新与社区支持，丰富的文档与示例覆盖常见用例。
- 采用模块化设计，便于扩展自定义检测规则与评估流程。
