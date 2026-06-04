---
name: Ragas
slug: ragas
homepage: https://docs.ragas.io/
repo: https://github.com/explodinggradients/ragas
license: Apache-2.0
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Benchmark
description: Ragas 是一个用于评估与优化 LLM 应用的开源工具包，提供客观度量、测试数据生成与生产级反馈回路。
author: ExplodingGradients
ossDate: '2023-05-08T17:48:04.000Z'
featured: false
status: tracked
---

## 简介

Ragas 是一个面向 LLM 应用评估与优化的开源工具包，提供客观度量、生产化测试集生成与数据驱动的反馈循环，帮助团队持续改进模型在真实场景中的表现。

## 主要特性

- 客观度量：基于 LLM 与传统指标，提供细粒度评估维度。
- 测试数据生成：自动生成覆盖多样场景的测试集，降低构建成本。
- 无缝集成：支持与 LangChain 等框架以及常见可观测工具集成，便于在生产环境中落地。

## 使用场景

- 评估与回归测试：对模型变更进行自动化评估与回归验证。
- 质量工程：生成生产对齐的测试数据以发现真实场景下的问题。
- 持续改进：将生产数据纳入反馈回路，形成闭环优化。

## 技术特点

- 语言与生态：以 Python 为主，提供丰富的示例与扩展点。
- 可插拔指标：支持自定义评估指标与 LLM 驱动的判定器（AspectCritic 等）。
- 部署灵活：提供命令行与库级 API，支持本地安装及 CI 集成。
