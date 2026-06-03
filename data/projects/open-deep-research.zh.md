---
name: Open Deep Research
slug: open-deep-research
homepage: null
repo: https://github.com/langchain-ai/open_deep_research
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
description: 一个开源的深度研究智能体框架，支持多模型、多检索工具与 MCP 集成，适用于自动化学术级研究流程。
author: LangChain
ossDate: '2024-11-20T17:37:22.000Z'
featured: false
status: tracked
---

## 详细介绍

Open Deep Research 是一个面向研究场景的开源智能体框架，旨在构建可复现的“深度研究”流水线。它整合多模型提供商、搜索工具与 Model Context Protocol（MCP），提供 LangGraph Studio 等交互式界面与可配置的代理组件，使研究任务从检索、摘要到最终报告自动化进行。

## 主要特性

- 支持多种 LLM 提供商与本地模型，方便根据成本与能力选择策略。
- 与搜索 API、LangGraph 平台和 Open Agent Platform 集成，支持端到端研究流程。
- 包含评估组件（Deep Research Bench）与 LangSmith 集成，便于基准测评与可重复实验。
- 配置驱动、模块化设计，包含快速启动示例与教学资源。

## 使用场景

- 自动化的学术或行业研究任务（文献检索、信息汇总、报告撰写）。
- 教学与训练：作为构建深度研究课程与示例项目的基础代码库。
- 企业或研究机构的研究助手部署，用于快速生成研究草稿与评估模型表现。

## 技术特点

- 基于 LangGraph 架构设计，支持可视化配置与运行时管理。
- 强化的评估与基准工具链，能够与 LangSmith 和 Deep Research Bench 协同工作。
- 插件化与配置化，支持不同检索后端、MCP 服务与模型适配层的快速替换。
