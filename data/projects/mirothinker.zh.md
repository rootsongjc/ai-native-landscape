---
name: MiroThinker
slug: mirothinker
homepage: https://miromind.ai/
repo: https://github.com/miromindai/mirothinker
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Application
  - RAG
  - Search
description: 面向工具增强推理的开源研究级搜索智能体，支持超长上下文与高频工具调用。
logo: ''
author: MiroMindAI
ossDate: '2025-08-07T13:32:12Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

MiroThinker 是 MiroMindAI 提供的一套开源研究级搜索智能体与框架，专注于工具增强推理与深度信息检索。项目包含模型（MiroThinker）、代理框架（MiroFlow）、训练数据集（MiroVerse）与训练基础设施，支持超长上下文（高达 256K）与成百上千次工具调用，面向复杂的科研级检索与决策工作流。你可以在[官网](https://miromind.ai/)查看项目概览，或通过[在线演示](https://dr.miromind.ai/)体验交互式示例。

## 主要特性

- 开源搜索智能体：面向工具调用的模型设计，适合复杂检索和多步推理任务。
- 超长上下文支持：提供高达 256K 的上下文窗口，便于处理长文档与持续对话历史。
- 高频工具调用：框架支持数百到数千次工具调用的稳定执行与轨迹采集。
- 完整生态：包含训练数据、评估基准与可复现的代理框架，便于研究与复现结果。

## 使用场景

适用于学术研究、长文档问答、基于网络的深度检索、基准测试与模型开发者的评估工作流。研究者可用于大规模基准评测与可复现实验；工程团队可将其作为工具增强的搜索/检索子系统，集成到研究助手或文献综述流程中。

## 技术特点

项目以 Python 为主，提供可配置的 agent 框架与工具集成（如网页检索、代码执行、摘要与抓取工具），并支持 Docker 化部署与多种模型服务方案。检索与评估管线包含混合检索、重排序与集中式引用管理，方便在评测中保持可追溯性与可重复性。
