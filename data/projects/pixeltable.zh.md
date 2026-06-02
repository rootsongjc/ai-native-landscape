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
status: tracked
---

## 简介

Pixeltable 是一个面向多模态 AI 应用的开源声明式后端，通过统一的表格接口管理图像、视频、音频和文档的存储、索引、转换与推理。它用增量、可版本化的计算替代手工编写的 ETL 脚本，让团队专注于模型逻辑而非管道搭建。

## 主要特性

- 原生多模态列类型（`pxt.Image`、`pxt.Video`、`pxt.Document`），将媒体数据与传统结构化字段同等对待。
- 声明式计算列只需定义一次转换和推理流水线，系统自动增量执行并缓存，避免冗余重算。
- 内建嵌入索引和语义搜索，可在任意列上直接进行相似度检索和 RAG，无需外部向量基础设施。

## 使用场景

构建多模态检索和问答系统的团队可以在单一声明式表格中完成媒体数据的摄取、嵌入和搜索。自动标注和目标检测管道可利用 Pixeltable 的增量重算能力随新数据到达自动更新。生产级 ML 工作流可为每个数据转换和模型推理步骤获得可复现性和版本管理。

## 技术特点

Pixeltable 将媒体存储在外部，通过 PostgreSQL 管理元数据和计算结果，使用视图维护技术保持派生数据的时效性。用户可通过自定义 UDF 和迭代器扩展系统，预构建的适配器连接了 OpenAI、Hugging Face、YOLOX 等常用服务。项目以 Apache-2.0 许可证发布，拥有活跃的贡献者社区。
