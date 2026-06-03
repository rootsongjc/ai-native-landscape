---
name: Infinity
slug: infinity
homepage: https://infiniflow.org
repo: https://github.com/infiniflow/infinity
license: Unknown
category: rag-knowledge
subCategory: vector-databases
tags:
  - Data
  - RAG
  - Vector DB
description: 一个 AI 原生数据库，提供稠密/稀疏向量、张量、全文与结构化数据的高速混合检索能力。
author: Infiniflow
ossDate: '2022-07-18T13:52:38Z'
featured: false
status: tracked
---

Infinity 是一个 AI 原生推理引擎，专为高性能嵌入、重排序和分类工作负载而构建。它通过统一的 API 为检索增强生成和搜索应用中最常用的 AI 模型类型提供低延迟、高吞吐的推理服务。

## 主要特性

- 为流行的嵌入模型和重排序器提供优化的推理服务，实现毫秒级查询延迟
- 支持稠密向量、稀疏向量、张量、全文和结构化字段等多种数据类型
- 开发者友好的 Python SDK 和单二进制部署方式，快速上手集成
- 为高 QPS 生产工作负载设计的内置可观测性和基准测试工具
- 混合索引架构统一向量、稀疏和全文索引

## 使用场景

- 驱动低延迟向量搜索和检索增强生成（RAG）系统
- 构建电商、内容和媒体平台的相似度推荐引擎
- 大规模部署企业级分类模型应用
- 无法使用外部推理服务的合规敏感场景的私有化部署

## 技术特点

- 通过混合索引架构和智能资源管理实现高 QPS 吞吐量
- 支持作为独立二进制运行或嵌入 Python 进程进行灵活部署
- 采用 Apache-2.0 许可证，方便开源社区和企业采纳与扩展
