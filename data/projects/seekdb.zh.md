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
author: OceanBase
ossDate: '2025-10-21T11:31:11Z'
featured: false
status: tracked
---

## 简介

SeekDB 是 OceanBase 推出的 AI 原生状态存储引擎，在单一 MySQL 兼容引擎中统一了向量搜索、全文搜索和结构化数据存储。它支持嵌入式或服务器部署模式，提供混合向量加全文搜索能力，以低延迟、高并发的检索性能满足生产级 AI 应用需求。

## 主要特性

- 统一引擎，将向量相似度搜索、全文搜索和结构化查询合而为一，消除数据搬运和一致性开销。
- MySQL 兼容接口，支持列式存储和 JSON，适配 OLTP 和 OLAP 混合负载。
- 灵活部署为嵌入式库或独立服务器，从开发环境平滑扩展到企业级生产环境。
- Apache-2.0 开源许可，便于集成和社区驱动的二次开发。

## 使用场景

SeekDB 为语义搜索、知识库问答、推荐系统和数据库内模型推理等需要向量检索与传统关系查询共存的场景提供支持。对于需要在单一平台上同时提供全文检索、结构化分析和向量相似度计算的产品，它能显著简化系统架构并提升数据一致性。

## 技术特点

SeekDB 通过列式存储与向量索引相结合的设计实现低延迟检索和高吞吐量，同时保持完整的事务语义和分析查询支持。其 MySQL 兼容性允许在现有数据库驱动的应用中直接替换，双部署模式既支持在代理中轻量嵌入，也支持大规模分布式服务器配置。
