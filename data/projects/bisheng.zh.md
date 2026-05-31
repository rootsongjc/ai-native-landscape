---
name: BISHENG
slug: bisheng
homepage: http://www.bisheng.ai
repo: https://github.com/dataelement/bisheng
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - Agents
  - Application
  - RAG
  - Workflow
description: 一个面向企业场景的开源 LLM DevOps 平台，提供工作流、RAG、模型管理与观测等功能。
logo: ''
author: DataElement
ossDate: '2023-08-28T10:00:24Z'
featured: false
status: tracked
---

## 详细介绍

BISHENG 是一个面向企业场景的开源 LLM DevOps 平台，旨在将大模型能力组织为可编排、可观测、可管理的企业应用。平台融合工作流编排、检索增强生成（RAG）、模型管理、数据集与评估等模块，支持多智能体与人工干预的混合执行模式，便于在复杂业务场景中构建可靠的生成式应用。

## 主要特性

- 可视化工作流：以流程图方式构建复杂编排，支持循环、并行、条件与批处理。
- 多智能体支持：内置智能体组合与协作能力，便于实现异构模型协作与任务拆分。
- RAG 与知识管理：集成检索与知识库管理，提升文档理解与长上下文能力。
- 企业级运维：包含 RBAC、SSO、审计、监控与高可用部署方案，满足合规与安全要求。

## 使用场景

适用于文档审阅、固定版式报表生成、客服与工单辅助、会议纪要生成、简历筛选、通话记录分析和非结构化数据治理等企业级场景。平台针对复杂业务流程提供深度组件与参数化能力，方便在金融、政务、制造与服务类行业落地。

## 技术特点

- 混合编排引擎：在单一框架内支持多种执行模式（顺序、并行、循环），并允许运行时人工干预。
- 高精度文档解析：包含印刷体、手写体、表格与布局解析模型，可私有化部署。
- 模型与数据管理：统一管理模型版本、Finetune/SFT 流程与数据集，支持评估与基线对比。
- 可扩展性：基于微服务与容器化部署，支持外部组件（如 Elasticsearch、Milvus）集成以满足性能需求。
