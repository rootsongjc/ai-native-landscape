---
name: Tongyi DeepResearch
slug: deep-research
homepage: https://tongyi-agent.github.io/blog/introducing-tongyi-deep-research/
repo: https://github.com/alibaba-nlp/deepresearch
license: Unknown
category: rag-knowledge
subCategory: retrieval-indexing
tags:
  - AI Agent
  - LLM
  - RAG
description: 面向长时信息检索与 agentic 任务的开放式大规模研究代理模型与工具集。
logo: ''
author: 阿里巴巴
ossDate: '2025-01-09T11:07:35.000Z'
featured: false
status: tracked
---

## 简介

Tongyi DeepResearch 是由 Tongyi Lab / Alibaba-NLP 开源的 agentic 大语言模型与工具链，针对长时信息检索和深度研究任务进行了专门设计（30.5B 参数家族，采用高效激活策略）。项目覆盖合成数据流水线、agent 训练与推理框架，并提供模型与示例代码以便复现与评估。

## 主要特性

- 自动化的大规模合成数据生成流水线，用于 agentic 预训练与微调。
- 支持端到端的强化学习（定制的 Group Relative Policy Optimization）以提升长时任务稳定性。
- 兼容多种推理范式（ReAct、IterResearch 等），并提供评估与基准脚本。

## 使用场景

- 信息检索与知识发现：长上下文网页检索、跨文档问答与证据汇总。
- 自动化研究助手：文献检索、实验方案生成与结果归纳。
- 多工具协同代理：结合检索、计算与外部 API 的复杂任务执行。

## 技术特点

- 大规模持续预训练与任务型合成数据（提高推理与召回能力）。
- 基于 token 级策略梯度的强化学习设计，包含负样本选择与稳定化策略。
- 提供 HuggingFace / ModelScope 模型链接与推理示例，便于工程化落地。
