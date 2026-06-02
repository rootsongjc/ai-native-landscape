---
name: Milvus
slug: milvus
homepage: https://milvus.io
repo: https://github.com/milvus-io/milvus
license: Unknown
category: rag-knowledge
subCategory: vector-databases
tags:
  - Data
description: Milvus 是一个高性能向量数据库，专为大规模非结构化数据处理而设计。
logo: ''
author: Milvus
ossDate: '2019-09-16T06:43:43.000Z'
featured: false
status: tracked
---

## 简介

Milvus 是一个高性能、云原生的向量数据库，专为大规模近似最近邻（ANN）搜索而构建，可处理数十亿级向量的检索。项目使用 Go 和 C++ 开发，支持 CPU 与 GPU 硬件加速，通过分布式架构实现水平扩展，广泛应用于企业级 AI 流水线中。Milvus 是 LF AI & Data Foundation 的毕业项目。

## 主要特性

支持 HNSW、IVF、FLAT 等多种索引类型，可在搜索精度与延迟之间灵活调优以适配不同工作负载。混合搜索能力同时处理稀疏向量和密集向量，实现关键词与语义检索的联合查询。企业级功能涵盖多租户、冷热存储分层、TLS 加密、基于角色的访问控制及全文搜索，满足大规模生产部署需求。

## 使用场景

Milvus 广泛应用于推荐系统、图像和视频相似性搜索、自然语言语义检索以及 AI 驱动的问答系统。无论是实时个性化引擎还是企业数据湖上的大规模批量相似性计算，Milvus 都能提供高性能支撑。

## 技术特点

分布式架构支持单机、集群和云端部署模式，并提供轻量级 Milvus Lite 用于快速原型验证。Go 与 C++ 的组合实现高吞吐数据写入和低延迟查询，硬件加速索引充分利用 CPU 和 GPU 资源。偏好免运维的团队可选择 Zilliz Cloud 上的全托管云服务。
