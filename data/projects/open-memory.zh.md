---
name: OpenMemory — Explainable Long-term Memory Engine
slug: open-memory
homepage: https://openmemory.cavira.app
repo: https://github.com/caviraoss/openmemory
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - AI Agent
  - Embedding Model
  - Memory
  - RAG
description: 一个可自托管的多扇区语义记忆引擎，提供高召回、低成本且可解释的长期记忆能力。
logo: ''
author: Cavira
ossDate: '2025-10-19T16:12:49Z'
featured: false
status: tracked
---

## 详细介绍

OpenMemory 是一个为 LLM 应用设计的可自托管长期记忆层，采用分扇区（episodic、semantic、procedural、emotional、reflective）与单向航点（single-waypoint）图结构的层次化记忆分解（HMD）架构。该设计避免数据重复，支持多模态嵌入后融合检索，并提供可解释的回溯路径，从而在保证隐私与可控性的前提下提高召回率并降低运行成本。

## 主要特性

- 多扇区记忆模型（sectorized memory），支持对不同记忆类型的差异化处理。
- 单向航点与稀疏图连接，提供可追溯的检索路径与解释能力。
- 支持多种嵌入后端（本地模型、OpenAI、Gemini、Ollama 等）与向量存储后端（SQLite、pgvector、Weaviate）。
- 内置 MCP（Model Context Protocol）兼容的 HTTP 接口，便于与 Agent 与工具集成。

## 使用场景

- 智能助理与 Copilot：提供跨会话的用户偏好与上下文记忆，提升对话连贯性。
- 长期日志与笔记检索：对大量历史条目进行高效召回，支持事实回溯与证据展示。
- Agent 编排与闭环执行：作为 Agent 的长期记忆层，支持分布式 Agent 的上下文共享与能力增强。
- 企业自托管场景：避免数据外泄，可与组织 IAM/加密策略集成。

## 技术特点

- 局部化成本优化：在本地运行时对存储与嵌入调用进行成本/性能权衡，极大降低长期运维开销。
- 混合检索策略：扇区融合 + 激活扩散（activation spreading）提高多阶段任务的相关性。
- 可观测与治理：支持审计、删除（erasures）与多租户隔离，便于生产化部署。
