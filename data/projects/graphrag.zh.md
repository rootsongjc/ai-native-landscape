---
name: GraphRAG
slug: graphrag
homepage: null
repo: https://github.com/microsoft/graphrag
license: MIT
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Data
  - RAG
description: GraphRAG 是微软研究提出的用于将知识图谱与 RAG 技术结合的开源工具集，旨在从文本中抽取结构化信息并支持复杂时序查询。
author: Microsoft
ossDate: '2024-03-27T17:57:52.000Z'
featured: false
status: tracked
---

## 简介

GraphRAG 是一个面向从非结构化文本中构建知识图谱并结合检索增强生成（RAG）的开源项目，由微软研究领导，旨在提升 LLM 对私有叙事数据的检索与推理能力。

## 主要特性

- 将文本转为结构化知识（实体、关系、事件）的流水线与转换工具。
- 支持 Prompt 微调与可配置索引策略，文档提供详尽的快速开始与开发指南。
- 可与多种后端与检索工具集成，便于扩展与迁移。

## 使用场景

- 从企业文档、日志或叙事数据中提取可查询的知识并用于增强查询。
- 构建面向长期记忆与时序查询的代理与问答系统。
- 学术研究与实验性 RAG 流程的探索与验证。

## 技术特点

- 提供 CLI 快速入门示例与完整文档，依赖 LLM 进行结构化信息抽取。
- 设计为演示与研究工具（非官方托管产品），强调可配置性与迁移性。
- 许可证与贡献指南详见仓库文档，注意索引操作可能成本较高。
