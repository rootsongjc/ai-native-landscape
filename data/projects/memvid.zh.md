---
name: Memvid
slug: memvid
homepage: https://www.memvid.com/
repo: https://github.com/olow304/memvid
license: Apache-2.0
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - RAG
  - Utility
description: 将海量文本分块编码进视频文件，实现毫秒级语义检索与离线优先的知识存储。
author: Saleban Olow (@Olow304)
ossDate: '2025-05-27T16:01:08.000Z'
featured: false
status: tracked
---

## 简介

Memvid 将文本分块编码为视频帧内的二维码（QR），利用现代视频编码的重复模式压缩能力，把大型知识库存为 MP4 文件，从而实现无需数据库、可离线检索的轻量化 AI 内存。该方案兼顾便携性与检索性能，适合离线场景与边缘设备部署。

## 主要特性

- 将文本编码为 QR 后打包为视频，实现 50-100× 的存储压缩比。
- 直接按帧索引并解码，检索延迟可低于 100ms。
- 无需服务器或数据库，视频文件可在任意支持播放的环境中使用。

## 使用场景

- 将文档集合、PDF 或知识库编码为单一可分发的记忆文件以便离线问答。
- 在受限网络或边缘设备上提供高速语义检索。
- 用于文档助手、资料检索与长期档案存储。

## 技术特点

- 通过将文本转为二维码再利用视频编解码器（如 AV1/H.265）压缩，充分利用编码器对重复视觉模式的优势。
- 支持并行处理与自定义 embedding 模型以优化检索质量。
- 提供 Python API、CLI 与交互式本地 UI，易于集成到现有流水线。
