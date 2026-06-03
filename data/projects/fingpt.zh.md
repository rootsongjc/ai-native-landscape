---
name: FinGPT
slug: fingpt
homepage: https://ai4finance.org
repo: https://github.com/ai4finance-foundation/fingpt
license: MIT
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Data
description: 开源的金融大语言模型项目，提供金融领域定制的数据管道、指令微调与 RAG 工具链。
author: AI4Finance Foundation
ossDate: '2023-02-11T20:21:34.000Z'
featured: false
status: tracked
---
## 详细介绍

FinGPT 是一个面向金融场景的开源大语言模型生态，包含金融数据管道、指令微调数据集、FinGPT-Benchmark、以及基于检索的 RAG 框架。项目通过轻量化微调（如 LoRA/QLoRA）和专用的金融任务集，降低了在有限算力下训练与部署金融下游模型的门槛，同时提供可复现的教学与实验材料。

## 主要特性

- 多任务金融指令数据集与 benchmark，覆盖情感分析、关系抽取、命名实体识别与问答等任务。
- 支持 LoRA/QLoRA 等低成本微调方法，兼顾效果与资源消耗。
- 提供 FinGPT-RAG 框架以结合外部金融知识检索，提升时序性与事实准确性。

## 使用场景

- 金融情感分析与舆情监控，用于新闻、公告与社交媒体的信号提取。
- 金融问答与报表摘要，辅助投资研究与报告自动化生成。
- 教学与研究：课程实验、复现实验与模型基准评估。

## 技术特点

- 基于开源基础模型进行指令微调，采用 LoRA/QLoRA 降低微调成本。
- 结合检索增强（RAG）与领域数据管道，支持高质量的证据驱动输出。
- 丰富的 notebook、脚本与 CI 配置，便于在本地或云端复现实验流程。
