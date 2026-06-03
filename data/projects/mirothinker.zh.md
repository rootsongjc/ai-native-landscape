---
name: MiroThinker
slug: mirothinker
homepage: https://miromind.ai/
repo: https://github.com/miromindai/mirothinker
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Application
  - RAG
  - Search
description: 面向工具增强推理的开源研究级搜索智能体，支持超长上下文与高频工具调用。
author: MiroMindAI
ossDate: '2025-08-07T13:32:12Z'
featured: false
status: tracked
---
MiroThinker 是由 MiroMindAI 开发的开源研究级搜索智能体，专为工具增强推理和深度信息检索而优化。项目提供完整生态，包括 MiroThinker 模型、MiroFlow 智能体框架、MiroVerse 训练数据集及相关基础设施。

## 超长上下文与工具调用

- 高达 256K token 的上下文窗口，在扩展文档追踪和持续多步推理链中保持连贯性
- 支持数百至数千次顺序工具调用，配合完善的轨迹采集和日志机制确保完全可复现
- 集中式引用管理和全面的评测日志保障结果可追溯

## 完整研究生态

- 捆绑模型、可复现的智能体框架（MiroFlow）、精选数据集（MiroVerse）和基准测试套件
- 研究人员可在受控实验配置下系统性地评估和比较性能
- 可配置的工具集成包括网页搜索、代码执行、摘要和抓取工具

## 检索与部署

- 检索管线结合混合搜索与重排序，实现高精度信息检索
- 支持 Docker 友好部署和多种服务方案，便于本地或云环境运行
- 以 Python 为主实现，模块化组件清晰分离，易于扩展
