---
name: Pixeltable
slug: pixeltable
homepage: https://docs.pixeltable.com
repo: https://github.com/pixeltable/pixeltable
license: Apache-2.0
category: rag-knowledge
subCategory: data-connectors
tags:
  - Data
  - Dev Tools
  - Multimodal
description: 一个面向多模态 AI 工作负载的声明式数据基础设施，简化数据存储、索引与推理流程。
author: Pixeltable
ossDate: '2023-05-10T18:03:02Z'
featured: false
status: tracked
---

Pixeltable 是一个面向多模态 AI 应用的开源声明式后端，通过统一的表格接口管理图像、视频、音频和文档的存储、索引、转换与推理。它用增量、可版本化的计算替代手工编写的 ETL 脚本，让团队专注于模型逻辑而非管道搭建。

## 原生多模态类型

- 一等列类型（`pxt.Image`、`pxt.Video`、`pxt.Document`），将媒体与传统结构化字段同等对待
- 声明式计算列只需定义一次转换和推理流水线
- 自动增量执行并缓存，避免冗余重算

## 内建搜索与检索

- 在任意列上直接构建嵌入索引和语义搜索，无需外部向量基础设施
- 在表格抽象内直接进行相似度检索和 RAG 工作流
- 支持检索增强生成、自动标注和目标检测管道

## 可扩展性与集成

- 自定义 UDF 和迭代器，扩展特定领域的业务逻辑
- 预构建适配器连接 OpenAI、Hugging Face、YOLOX 等常用服务
- 媒体存储在外部，通过 PostgreSQL 管理元数据，使用视图维护技术保持时效性
- Apache-2.0 许可证发布，拥有活跃的贡献者社区
