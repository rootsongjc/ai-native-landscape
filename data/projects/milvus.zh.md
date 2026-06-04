---
name: Milvus
slug: milvus
homepage: https://milvus.io
repo: https://github.com/milvus-io/milvus
license: Apache-2.0
category: rag-knowledge
subCategory: vector-databases
tags:
  - Data
description: Milvus 是一个高性能向量数据库，专为大规模非结构化数据处理而设计。
author: Milvus
ossDate: '2019-09-16T06:43:43.000Z'
featured: false
status: tracked
---

Milvus 是一个高性能、云原生的向量数据库，专为大规模近似最近邻（ANN）搜索而构建，可处理数十亿级向量的检索。项目使用 Go 和 C++ 开发，支持 CPU 与 GPU 硬件加速，通过分布式架构实现水平扩展，广泛应用于企业级 AI 流水线中。Milvus 是 LF AI & Data Foundation 的毕业项目。

## 核心特性

- **多种索引类型**，支持 HNSW、IVF、FLAT 等，可在搜索精度与延迟之间灵活调优
- **混合搜索能力**，同时处理稀疏向量和密集向量，实现关键词与语义检索的联合查询
- **企业级运维**，涵盖多租户、冷热存储分层、TLS 加密和基于角色的访问控制
- **全文搜索支持**，与向量相似度检索协同工作，提供全面的检索能力
- **灵活的部署模式**，支持单机、集群和云端部署，并提供轻量级 Milvus Lite 用于快速原型验证

## 使用场景

- 推荐系统、图像和视频相似性搜索、自然语言语义检索
- 基于 RAG 管道的 AI 驱动问答系统
- 需要亚毫秒级向量相似度查询的实时个性化引擎
- 企业数据湖上的大规模批量相似性计算

## 技术特点

- Go 与 C++ 核心实现高吞吐数据写入和低延迟查询，硬件加速索引充分利用 CPU 和 GPU 资源
- 分布式架构支持跨多节点和多区域的水平扩展
- 偏好免运维的团队可选择 Zilliz Cloud 上的全托管云服务
