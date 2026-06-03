---
name: Faiss
slug: faiss
homepage: https://faiss.ai/
repo: https://github.com/facebookresearch/faiss
license: MIT
category: platform-infra
subCategory: data-platforms
tags:
  - Data
  - Database
  - Dev Tools
description: 高性能的向量相似性搜索与聚类库，适用于大规模向量检索与加速近邻搜索。
author: Faiss (facebookresearch)
ossDate: '2017-02-07T16:07:05.000Z'
featured: false
status: tracked
---
## 简介

Faiss 是 Meta (facebookresearch) 开源的高性能库，用于密集向量的相似性搜索与聚类。它支持 CPU 与 GPU 实现，能够扩展到数十亿条向量，并提供 Python 与 C++ 接口，适合构建检索与召回系统。

## 主要特性

- 多种索引结构（精确与近似），包括量化、图索引（HNSW/NSG）等。
- GPU 加速以显著提升大规模检索速度，支持单机与多 GPU 场景。
- 提供 Python/Numpy 包装与 C++ 原生接口，便于集成与性能优化。

## 使用场景

- 大规模语义检索与向量召回（搜索、推荐）。
- 检索增强生成（RAG）中的相似段落检索与向量检索。
- 图像/音频/视频等多媒体嵌入的相似性搜索。

## 技术特点

- 在查询延迟、精度与内存占用之间提供灵活权衡选项。
- 支持 L2、点积与余弦相似度（通过归一化实现）。
- 提供压缩、磁盘索引与参数训练工具以降低资源占用并优化效果。
