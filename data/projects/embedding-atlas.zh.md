---
name: Embedding Atlas
slug: embedding-atlas
homepage: null
repo: https://github.com/apple/embedding-atlas
license: MIT
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Dev Tools
  - RAG
  - Utility
description: 为大型嵌入提供交互式可视化的工具，支持可视化、交叉过滤和搜索嵌入及元数据。
author: Apple
ossDate: '2025-05-07T00:56:44.000Z'
featured: false
status: tracked
---
Embedding Atlas 是 Apple 开源的交互式可视化工具，专为大规模嵌入空间设计。它支持对嵌入向量及其元数据进行可视化探索、交叉过滤和搜索，帮助用户直观理解高维数据的结构与分布。

## 可视化与探索

- 自动数据聚类和标记，交互式可视化并导航整体数据结构
- 核密度估计和密度轮廓，轻松区分数据密集区域和异常值
- 顺序无关透明度，确保重叠数据点清晰、准确地渲染
- 流畅的大规模性能表现，可在现代渲染栈上处理数百万个数据点

## 搜索与分析

- 实时搜索和最近邻查找，快速定位与查询或已有数据点相似的内容
- 多协调视图支持元数据探索，在多个列之间交互式链接和过滤数据
- 嵌入空间与元数据维度的交叉过滤，提供更深入的分析洞察

## 渲染与性能

- WebGPU 实现，支持 WebGL 2 回退，兼容主流浏览器
- GPU 加速的渲染管线，即使在大型数据集上也保持快速流畅的交互
- 轻量级前端设计，无需服务端依赖即可进行探索性数据分析
