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
logo: ''
author: Infiniflow
ossDate: '2022-07-18T13:52:38Z'
featured: false
status: tracked
---

## 详细介绍

Infinity 是一款面向 LLM 应用的 AI 原生数据库，支持稠密向量、稀疏向量、多向量（tensor）、全文与结构化数据的混合检索。它通过高性能的索引与检索引擎，为 RAG、检索、推荐、问答与对话式 AI 等场景提供低延迟与高吞吐的查询能力，同时兼顾易用的 Python API 与单二进制部署体验，便于在生产环境快速上线。

## 主要特性

- 高性能混合检索：支持稠密/稀疏/全文/张量混合检索与多种 reranker 策略。
- 丰富数据类型：同时支持向量、文本、数值与结构化字段。
- 易用客户端：提供直观的 Python SDK 与单二进制运行方式，简化部署与集成。
- 可扩展与可观测：支持高并发 QPS、基于容器或二进制的扩展部署与完整的基准测试报告。

## 使用场景

适用于向量搜索、检索增强生成（RAG）、相似度推荐、知识库检索、对话上下文检索与大规模全文搜索等场景。企业可以将 Infinity 部署在私有网络中以满足合规性需求，并通过 Python SDK 快速将检索能力接入到 LLM 应用中。

## 技术特点

- 高吞吐低延迟：针对百万级向量和千万级文档提供毫秒级查询延迟与万级 QPS 的吞吐能力。
- 混合索引架构：将向量索引、稀疏索引与全文索引联合使用以提升检索精度。
- 单二进制与 Python 嵌入：支持将服务以单文件二进制部署或嵌入 Python 进程以便快速集成。
- 开源许可：采用 Apache-2.0 许可证，方便开源社区与企业采纳与扩展。
