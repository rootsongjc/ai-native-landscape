---
name: Petri
slug: petri
homepage: https://safety-research.github.io/petri/
repo: https://github.com/safety-research/petri
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Agents
  - Alignment
description: Petri 是一个用于快速探索对齐假设的对齐审计代理，旨在帮助研究者自动化对齐评估流程并发现模型潜在风险。
author: Safety Research
ossDate: '2025-08-19T20:39:05.000Z'
featured: false
status: tracked
---

## 简介

Petri 是一个面向对齐研究与审计的代理工具，设计用于系统化地探索和验证对齐假设，帮助研究人员在短周期内构建、执行并比较多组实验。该项目聚焦自动化试验编排、提示生成与结果聚合，可重复地捕获模型在特定策略或输入下的表现差异，从而发现潜在的失败模式与风险点。

## 主要特性

- 自动化的多轮实验编排与管理，支持并行化测试和结果对比。
- 可定制的提示模板库与策略模块，便于快速搭建假设场景。
- 结果聚合与可复现的审计流水线，输出结构化实验报告以便后续分析。

## 使用场景

- 对齐研究：快速验证对齐假设并记录可比较的实验结果。
- 安全审计：在不同输入/策略下发现模型的异常行为或偏差。
- 模型评估：作为对比基线，帮助团队量化策略调整前后的影响。

## 技术特点

- 基于代理的任务编排引擎，支持多步决策与回溯。
- 与常见模型与工具链兼容，便于集成到现有评估流程中。
- 开源许可（MIT），便于社区贡献与扩展。
