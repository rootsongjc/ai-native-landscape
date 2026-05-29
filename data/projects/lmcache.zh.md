---
name: LMCache
slug: lmcache
homepage: https://lmcache.ai/
repo: https://github.com/lmcache/lmcache
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Utility
description: 面向 LLM 服务的高性能 KV 缓存层，旨在降低首次响应时间并提升吞吐量，特别适用于长上下文场景和多轮对话。
logo: ''
author: LMCache
ossDate: '2024-05-28T21:06:04.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

LMCache 是一个面向 LLM 服务的高性能 KV 缓存层，通过复用可重用文本的 KV cache（存储于 GPU、CPU DRAM、本地磁盘等），在多轮问答与 RAG 场景中显著减少延迟和 GPU 周期消耗。LMCache 可与多种推理引擎集成（如 vLLM、llm-d、KServe），并提供多种存储后端与 P2P 缓存共享机制。

## 主要特性

- 高性能 KVCache 卸载与恢复（支持 CPU、磁盘 存储）
- 稳定支持非前缀 KV caches，提高长上下文重用效率
- 与 vLLM 深度集成，结合 vLLM 可实现显著的延迟与资源节省
- 支持分布式/对等（P2P）缓存共享与异步远端加载（Mock/Redis）
- 丰富的部署方式：pip 安装、Docker、生产级集成到 vLLM 生产栈

## 使用场景

- 多轮问答系统（聊天机器人），复用历史对话的 KV 缓存以降低响应时间
- RAG（检索增强生成）场景，避免重复计算相似上下文的 KV cache
- 高并发 LLM 服务，提高吞吐量并降低 GPU 成本
- 边缘/混合存储部署：在 CPU/磁盘层面缓存热数据以节约 GPU 资源

## 技术特点

- 语言：主要使用 Python，部分 Cuda/C++ 性能关键组件
- 存储后端：支持 GPU 内存、CPU DRAM、本地磁盘及第三方存储（如 NIXL）
- 可与主流推理引擎（vLLM、llm-d、KServe）无缝集成
- 提供示例与文档：快速开始、示例代码与详细安装说明（<https://docs.lmcache.ai/>）
