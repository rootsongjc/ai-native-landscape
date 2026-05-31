---
name: Dingo
slug: dingo
homepage: https://huggingface.co/spaces/DataEval/dingo
repo: https://github.com/dataeval/dingo
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Evaluation
description: 一个用于自动化数据质量评估的工具，支持规则与模型相结合的多维度评估。
logo: ''
author: MigoXLab / DataEval
ossDate: '2024-12-24T05:59:24.000Z'
featured: false
status: tracked
---

## 简介

Dingo 是一个面向 AI 数据质量的评估工具，能自动检测数据集中的质量问题并生成可视化报告，适用于预训练、微调与评估数据集。它同时支持规则引擎与基于 LLM 的评估策略，便于集成到 CI、评估流水线与可视化平台。

## 主要特性

- 多源多模态支持：支持文本与图像数据，能处理本地文件、Hugging Face 数据集与 S3 存储。
- 规则与模型混合评估：提供 20+ 内置规则，并支持 LLM 驱动的评估以检测幻觉、重复、完整性等问题。
- 可视化输出：评估后生成摘要与详情报告，提供本地 GUI 与 Gradio 演示。
- 灵活集成：提供 CLI 与 SDK，可嵌入到 Spark 或本地执行引擎。

## 使用场景

- 预训练数据筛选：在大规模语料入库前进行质量检测与筛除低质量样本。
- 微调数据审查：为 SFT/微调数据做一致性与有害性检查，提升下游模型质量。
- 评估流水线：作为模型或数据评估环节的一部分，自动化生成质量报告与问题定位。

## 技术特点

- 插件化规则体系：支持自定义规则注册与扩展，便于针对领域数据定制检查项。
- LLM 协同评估：可配置 OpenAI 等接口或本地模型进行语义层面的质量判断。
- 输出可追溯：生成包含评分、异常样本与规则命名的详细报告，便于问题分析与修复。
