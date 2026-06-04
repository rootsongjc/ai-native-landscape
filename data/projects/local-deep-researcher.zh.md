---
name: Local Deep Researcher
slug: local-deep-researcher
homepage: null
repo: https://github.com/langchain-ai/local-deep-researcher
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Utility
description: 完全本地化的网络研究与报告写作助手，支持通过本地 LLM（如 Ollama/LMStudio）进行迭代式检索与摘要。
author: LangChain team
ossDate: '2024-12-04T23:57:20.000Z'
featured: false
status: tracked
---

## 详细介绍

Local Deep Researcher 是一个面向本地部署的网络研究与报告写作助手，设计目标是使用任何本地托管的 LLM（例如通过 Ollama 或 LMStudio 提供的模型）完成多轮检索、总结与反思，最终输出带引用来源的 Markdown 报告。整个流程在用户环境内运行，注重隐私与可控性，适合对外网检索有合规或保密需求的研究与分析场景。

该项目将复杂的研究任务拆分为若干检索子任务，结合模型生成与检索结果的迭代反馈以逐步完善结论。输出的报告包含引用来源和检索路径，便于复盘与审计，同时支持在本地调整检索工具、迭代次数与模型配置，以满足不同精度与成本要求。

## 主要特性

- 支持多轮迭代的检索—总结—反思流程，以逐步弥补知识盲点并生成可追溯的研究路径。
- 与本地 LLM（Ollama、LMStudio 等）兼容，便于在离线或受控网络环境中运行，降低数据外泄风险。
- 可配置的搜索工具与检索组件，默认使用无需 API 的 DuckDuckGo，同时支持接入更高级的检索服务以提高覆盖度。
- 输出为结构化 Markdown 报告，包含引用来源和检索证据，便于审计、共享与自动化后处理。

## 使用场景

- 企业或机构在受限网络或合规场景下进行主题调研与情报汇总，确保数据留在内部环境中处理。
- 学术或市场研究团队需要将多个检索轮次的证据聚合为最终报告，并保留检索历史以便审核。
- 开发者在本地迭代检索策略与模型提示，以调优研究流程与提升结果可解释性。

## 技术特点

- 基于 LangChain / LangGraph 等代理式工作流思想，采用分解—检索—总结的循环策略，并通过状态持久化支持长时运行与故障恢复。
- 支持多种本地模型提供者（Ollama、LMStudio），并通过可配置的检索器与工具链扩展功能，便于在不同硬件与合规要求下部署。
- 输出与图/state 持久化设计便于在 LangGraph Studio 中可视化研究过程与来源追踪，从而提升可审计性与调试效率。
