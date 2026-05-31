---
name: DataFlow
slug: dataflow
homepage: https://opendcai.github.io/DataFlow-Doc/
repo: https://github.com/opendcai/dataflow
license: Unknown
category: platform-infra
subCategory: data-platforms
tags:
  - Data
  - Dev Tools
description: 面向领域化训练与检索增强生成的高质量数据准备与流水线平台。
logo: ''
author: OpenDCAI
ossDate: '2024-10-13T14:45:45Z'
featured: false
status: tracked
---

## 详细介绍

DataFlow 是一个面向领域化训练与检索增强生成（RAG）的数据准备与流水线系统。该项目通过可组合的 `operator` 组件与可复用的 `pipeline` 流水线，对来自 PDF、文本与低质量 QA 等噪声源的数据进行解析、清洗、增强与评估，以生成适合用于预训练、监督微调或 RAG 的高质量训练数据。

## 主要特性

- 模块化操作符（operators）：结合规则、深度模型与大语言模型（LLM）构建多样化的数据处理单元。
- 可复用流水线（pipelines）：通过编排 operators 实现从数据抽取到质量评估的端到端流程。
- 数据质量评估：多维度评分与过滤机制，增强下游模型效果并减少噪声干扰。

## 使用场景

DataFlow 适用于需提升领域化模型性能的场景，例如医疗、金融、法律领域的数据清洗与标注、构建 SFT/微调数据集、为 RAG 构建高质量知识库条目，或作为训练流水线的自动化组件嵌入到模型工程工作流中。

## 技术特点

项目以 Python 为主实现，提供丰富的 operator 库（文本处理、格式抽取、生成校验等）、支持 Docker 部署与 GPU 加速，并能与 vLLM、Hugging Face 数据集等生态互通；仓库采用 Apache-2.0 开源许可，方便研究与工程化落地。
