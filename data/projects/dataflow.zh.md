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

## 简介

DataFlow 是一个开源的数据准备平台，利用最新的基于 LLM 的操作符和流水线进行 AI 数据工程。它能将 PDF、文本和低质量 QA 等噪声数据源转化为适合预训练、监督微调和 RAG 工作流的高质量数据集。

## 主要特性

DataFlow 提供模块化操作符，结合规则方法、深度模型和大语言模型构建多样化的数据处理单元。它提供可复用的流水线编排，从数据抽取到质量评估全流程覆盖，并具备多维度评分与过滤机制以提升下游模型效果。

## 使用场景

DataFlow 适用于医疗、金融、法律等领域的专业数据清洗与标注场景。它支持构建 SFT 和微调数据集、为 RAG 系统构建高质量知识库条目，以及将自动化数据管道嵌入到 MLOps 工作流中。

## 技术特点

DataFlow 以 Python 为主实现，提供涵盖文本处理、格式抽取和生成校验的丰富操作符库。它支持 Docker 部署和 GPU 加速，能够与 vLLM、Hugging Face 数据集等生态互通，并采用 Apache-2.0 开源许可证。
