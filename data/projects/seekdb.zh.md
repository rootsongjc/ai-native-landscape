---
name: SeekDB
slug: seekdb
homepage: https://oceanbase.ai/
repo: https://github.com/oceanbase/seekdb
license: Unknown
category: rag-knowledge
subCategory: vector-databases
tags:
  - Data
  - Vector DB
description: 一个 AI 原生搜索数据库，在单一引擎中统一向量、文本与结构化数据以支持混合检索与数据库内 AI 工作流。
logo: ''
author: OceanBase
ossDate: '2025-10-21T11:31:11Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

SeekDB 是 OceanBase 提供的 AI 原生搜索数据库，它将向量检索、全文检索与结构化/半结构化数据存储统一到单一引擎中，支持混合检索与在库内执行 AI 工作流。SeekDB 旨在为需要低延迟、高并发的检索场景提供可扩展、生产级的解决方案，同时保持对关系型查询与分析能力的兼容。

## 主要特性

- 在单个引擎中同时支持向量检索与结构化查询，简化数据路径与一致性管理。
- 支持高性能列存与 JSON 存储，适配 OLTP/OLAP 场景混合负载。
- 面向生产的可扩展性与容错能力，便于在企业级环境中部署。
- 开源许可（Apache-2.0），便于集成与二次开发。

## 使用场景

适用于需要将向量搜索与传统数据库能力结合的场景，例如语义搜索、知识库问答、推荐系统与在库模型推理等。对于需要在单一数据平台上同时提供全文检索、结构化分析与向量相似度计算的产品线，SeekDB 能显著简化架构并提升数据一致性。

## 技术特点

SeekDB 通过列式存储与向量索引相结合的设计，提供低延迟检索与高吞吐能力；同时兼顾事务与分析语义，适合在生产环境中承载混合型工作负载。更多接入与 API 说明请参见项目文档（[GitHub 仓库](https://github.com/oceanbase/seekdb) 与官网文档）。
