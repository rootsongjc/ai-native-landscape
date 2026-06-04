---
name: Deep Lake
slug: deeplake
homepage: https://docs.deeplake.ai/
repo: https://github.com/activeloopai/deeplake
license: Apache-2.0
category: rag-knowledge
subCategory: vector-databases
tags:
  - Data
  - Database
  - LLM
description: 面向 AI 的数据库，提供对向量、图像、视频与文本的数据存储、检索、版本管理与流式加载功能。
author: Activeloop
ossDate: '2019-08-09T06:17:59.000Z'
featured: false
status: tracked
---
## 简介

Deep Lake 是一个为深度学习与 LLM 应用设计的数据库，优化了存储与检索向量、多模态数据（图像、视频、音频、文本等）以及数据版本控制与流式加载，便于在训练与推理阶段管理大规模数据集。

## 主要特性

- 支持多云存储（S3、GCP、Azure）与本地使用场景。
- 原生向量与多模态数据支持，集成可视化与 App 平台以便快速浏览数据集。
- 与主流工具集成：LangChain、LlamaIndex、PyTorch/TensorFlow 数据加载、Qdrant 等向量后端。
- 数据版本管理与流式训练支持，适合大规模训练与数据流水线。

## 使用场景

- 构建 LLM 的向量存储与检索层（RAG 应用）。
- 管理与共享大型图像/视频/音频数据集以供训练与实验。
- 在企业或研究环境中进行数据可视化、版本控制与协作。

## 技术特点

- 以 Python 实现（仓库语言以 Python 为主），提供丰富的 API 与教程。
- 提供文档与示例（<https://docs.deeplake.ai/>）以及 Deep Lake App 用于数据浏览。
- 采用 Apache-2.0 许可证，社区活跃并持续发布更新。
