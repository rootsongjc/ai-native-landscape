---
name: LightEval
slug: lighteval
homepage: https://huggingface.co/docs/lighteval/main/en/index
repo: https://github.com/huggingface/lighteval
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Evaluation
description: Hugging Face 出品的轻量级 LLM 评估工具，支持多后端与丰富基准任务。
logo: ''
author: Hugging Face
ossDate: '2024-01-26T13:15:39.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

LightEval 是 Hugging Face 提供的轻量级 LLM 评估工具箱，支持多种后端（包括 Accelerate、VLLM、Nanotron 与端点服务），能以样本为单位生成详细评估结果，便于调试与比较模型表现。

## 主要特性

- 支持 7,000+ 评估任务与多种基准（知识、数学、对话、跨语种等）。
- 多后端兼容：支持本地内存模型、Accelerate、VLLM、Nanotron 以及各类推理端点。
- 可扩展任务与指标：提供创建自定义任务与自定义指标的文档与示例。
- 输出可视化：保存样本级结果以便后续分析与可视化。

## 使用场景

- 模型对比：在相同任务集上按样本比较模型差异以定位弱点。
- 基准测试：为模型发布前做快速全面的基线评估。
- 研究与调试：研究人员可以借助样本级报告调试模型行为与评估指标。

## 技术特点

- 采用模块化设计，方便接入新的后端与任务列表。
- 提供 CLI 与 Python API，支持脚本化与交互式使用。
- 活跃维护与社区贡献，文档与示例覆盖常见使用场景。
