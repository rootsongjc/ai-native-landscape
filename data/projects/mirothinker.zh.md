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
status: tracked
---

## 简介

MiroThinker 是由 MiroMindAI 开发的开源研究级搜索智能体，专为工具增强推理和深度信息检索而优化。项目提供完整生态，包括 MiroThinker 模型、MiroFlow 智能体框架、MiroVerse 训练数据集及相关基础设施。支持高达 256K token 的上下文窗口和数百至数千次顺序工具调用，面向复杂的多步骤研究与预测工作流。

## 主要特性

高达 256K token 的超长上下文窗口使智能体能够在扩展的文档追踪和持续的多步推理链中保持连贯性。高频工具调用支持数百至数千次顺序调用，配合完善的轨迹采集和日志机制确保完全可复现性。完整生态捆绑了模型、可复现的智能体框架、精选数据集和基准测试套件，便于研究人员系统性地评估和比较性能。

## 使用场景

学术研究人员利用 MiroThinker 进行深度网络检索、长文档问答和可复现的基准评测。工程团队将其集成为工具增强的检索或研究助手子系统，用于复杂的多源信息收集和分析任务。

## 技术特点

框架以 Python 为主实现，提供可配置的工具集成，包括网页搜索、代码执行、摘要和抓取工具。检索管线结合混合搜索、重排序和集中式引用管理，在评测中保持可追溯性。支持 Docker 友好部署和多种服务方案，便于在本地或云环境中运行。
