---
name: Evidently
slug: evidently
homepage: null
repo: https://github.com/evidentlyai/evidently
license: Apache-2.0
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Evaluation
  - Monitoring
description: 一个开源的 ML 与 LLM 评估、测试与监控框架，支持从实验到生产的一站式质量检查与仪表盘展示。
author: Evidently Team
ossDate: '2020-11-25T15:20:08.000Z'
featured: false
status: tracked
---
## 简介

Evidently 是一个开源的 ML/LLM 可观测性与评估框架，提供报告、测试套件和监控面板，支持表格和文本数据，并内置 100+ 指标，适用于实验分析与生产监控。

## 主要特性

- 丰富的报告与测试套件：内置 Presets 与多种指标，支持将报告转为 HTML/JSON。
- 实时与离线监控：支持导出结果并在 UI 中可视化历史趋势。
- 灵活的扩展：支持自定义指标、LLM 作为评判器和多种数据类型。

## 使用场景

- 实验阶段的模型质量评估与对比分析。
- CI/CD 中的回归测试与数据漂移检测。
- 生产环境的模型监控与告警可视化。

## 技术特点

- 支持多种 Preset（DataDrift、TextEvals 等）和 100+ 内置指标。
- 提供可自托管的监控 UI，以及 Evidently Cloud 的托管服务和 demo 环境。
- 与常见工具链（Pandas、Hugging Face、Docker）兼容，适配多种部署方式。
