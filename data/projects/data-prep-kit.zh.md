---
name: Data Prep Kit
slug: data-prep-kit
homepage: https://data-prep-kit.github.io/data-prep-kit/
repo: https://github.com/data-prep-kit/data-prep-kit
license: MIT
category: rag-knowledge
subCategory: data-connectors
tags:
  - Data
description: Data Prep Kit 用于为 LLM 应用加速非结构化数据的清洗、转换与增强。
author: Data Prep Kit / IBM Research
ossDate: '2024-04-08T23:43:52.000Z'
featured: false
status: tracked
---
## 简介

Data Prep Kit 是一个开源工具包，旨在加速面向生成式 AI 的非结构化数据准备工作，支持从笔记本到数据中心的可扩展处理流程，可用于预训练、微调、指令微调和 RAG 应用的数据处理。

## 主要特性

- 丰富的 transforms/modules，覆盖从小规模到数据中心规模的处理场景。
- 支持多种运行时：Python 本地、Ray、Spark，并提供 Kubeflow Pipelines 的工作流集成。
- 提供示例、recipes 与 Google Colab 演示，方便快速上手。
- 社区活跃、由 IBM Research 与 LF AI & Data 托管，具有详尽的文档与维护者列表。

## 使用场景

- 为 LLM 训练或微调准备语料（清洗、去重、格式化）。
- 构建用于 RAG 的检索数据集与管道。
- 将现有数据转换为适配下游模型训练/评估的格式。

## 技术特点

- 主要语言：HTML/Jupyter/Python，模块化 transform 设计便于扩展。
- 许可证：Apache-2.0。
- 项目包含大量示例、recipes、和流水线定义，方便将 transforms 组合成端到端管道。
