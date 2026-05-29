---
name: Pixeltable
slug: pixeltable
homepage: https://docs.pixeltable.com
repo: https://github.com/pixeltable/pixeltable
license: Unknown
category: models-modalities
subCategory: multimodal
tags:
  - Data
  - Dev Tools
  - Multimodal
description: 一个面向多模态 AI 工作负载的声明式数据基础设施，简化数据存储、索引与推理流程。
logo: ''
author: Pixeltable
ossDate: '2023-05-10T18:03:02Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

Pixeltable 是一个为多模态（Multimodal, Multimodal）AI 应用提供声明式、可增量的数据基础设施的开源项目。它通过统一的表格接口管理图像、视频、音频与文档等非结构化数据，并将数据摄取、变换、索引与检索作为内建能力，降低构建生产级多模态应用的工程复杂度。Pixeltable 支持与大语言模型（LLM）与外部向量数据库（Vector DB, Vector Database）集成，便于实现检索增强生成（RAG, Retrieval-Augmented Generation）工作流。

## 主要特性

- 统一多模态表格接口：以 `pxt.Image`、`pxt.Video`、`pxt.Document` 等类型管理不同媒体。
- 声明式计算列：通过计算列（computed columns）定义数据处理与模型推理流水线，自动增量执行与缓存。
- 内建向量索引与语义检索：直接在表格上创建嵌入索引以支持相似度检索与 RAG。
- 广泛模型与服务集成：内置对 OpenAI、Hugging Face、YOLOX 等模型与工具的适配器。

## 使用场景

- 多模态信息检索与问答系统（结合 RAG 与 LLM）。
- 图像/视频的自动标注与对象检测工作流。
- 将数据管道、特征工程与模型推理统一为可版本化、可回溯的表格操作，以支持生产化部署与审计。

## 技术特点

- 增量计算与视图维护：仅重算受影响的数据以节省成本与时间。
- 可扩展的 UDF 与自定义迭代器：支持用户自定义函数与批处理逻辑。
- 本地缓存与持久化：将外部媒体缓存到本地，并在内部使用 PostgreSQL 存储结构化元数据。
- 开源许可：Apache-2.0，社区贡献与插件生态活跃。
