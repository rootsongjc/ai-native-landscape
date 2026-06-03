---
name: ART (Agent Reinforcement Trainer)
slug: openpipe-art
homepage: https://art.openpipe.ai
repo: https://github.com/openpipe/art
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - AI Agent
  - RAG
description: OpenPipe 出品的开源强化学习训练框架，用于对基于 LLM 的代理进行强化学习训练与微调。
author: OpenPipe
ossDate: '2025-03-10T18:25:47.000Z'
featured: false
status: tracked
---

## 简介

ART（Agent Reinforcement Trainer）是 OpenPipe 提供的开源强化学习训练框架，致力于让基于大模型的代理通过经验学习提高可靠性。它将训练服务器与客户端解耦，支持本地或云端 GPU 环境，并提供完善的示例与笔记本供快速上手。

## 主要特性

- 零样本奖励（RULER）：使用 LLM 作为评判器自动打分，免去手工设计奖励函数。
- GRPO 训练循环：为多步代理提供可重复、可扩展的训练流水线。
- 丰富集成：兼容 vLLM、Unsloth，并支持可视化与监控（W&B、Langfuse 等）。

## 使用场景

- 将对话式或工具型代理进行强化学习以提升任务完成度与稳健性。
- 训练基于 Qwen、Llama、或 HuggingFace 模型的代理在复杂流程中持续优化表现。
- 教学与研究中快速复现实验与验证新型奖励策略。

## 技术特点

- 客户端/服务端架构：训练与推理分离，便于在 GPU 节点上短时启停训练环境。
- 支持 LoRA 与 vLLM 流水线，训练产出以 LoRA 检查点形式加载到推理服务。
- 提供大量笔记本示例与文档，快速复现训练流程与基准。
