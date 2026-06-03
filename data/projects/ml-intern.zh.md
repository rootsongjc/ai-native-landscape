---
name: ML Intern
slug: ml-intern
homepage: null
repo: https://github.com/huggingface/ml-intern
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - AI Agent
  - CLI
  - Dev Tools
description: ML Intern 是由 HuggingFace 开发的开源自主 ML 工程师 Agent，能够自主阅读论文、训练模型并交付 ML 代码，深度集成 HuggingFace 生态。
author: HuggingFace
ossDate: '2025-10-30T13:43:09Z'
featured: false
status: tracked
---

## 详细介绍

ML Intern 是 HuggingFace 推出的开源自主 ML 工程师 Agent，旨在自动化机器学习开发流程中的研究、编码和部署环节。它深度集成 HuggingFace 生态，能够访问 HuggingFace 文档、数据集、模型仓库和论文资源，结合沙箱执行环境和 GitHub 代码搜索能力，实现从论文阅读到模型训练再到代码交付的端到端自动化。支持交互模式和 headless 模式，可通过 Claude、GPT 等多种 LLM 后端驱动。

## 主要特性

- 自主 ML 工作流：自动完成论文调研、数据处理、模型微调和代码编写。
- HuggingFace 生态深度集成：直接访问 HF 文档、数据集、模型仓库、推理任务和论文。
- 沙箱执行环境：代码在隔离沙箱中运行，支持本地工具和 MCP server。
- 多模型支持：支持 Anthropic Claude、OpenAI GPT 以及 HF Router 路由的多种模型。
- 会话追踪：每次会话自动上传至 HuggingFace 数据集，支持通过 Agent Trace Viewer 浏览。
- 通知网关：支持 Slack 等通知渠道，在需要审批或出错时发送状态更新。

## 使用场景

- 自动化模型微调：给定数据集和目标模型，自动完成数据处理、训练配置和训练执行。
- ML 论文复现：阅读论文后自动编写复现代码，利用 HF 生态资源加速实验。
- ML 工程自动化：将重复性的 ML 开发任务（数据预处理、评估、部署）交由 Agent 自主完成。
- 团队协作与审计：通过会话追踪和 Trace Viewer 回顾 Agent 决策过程，便于团队协作。

## 技术特点

- 基于 Python 构建，使用 smolagents 框架作为 Agent 底层。
- 内置上下文管理器，支持 170k token 自动压缩和会话持久化。
- Doom Loop 检测器：识别重复工具调用模式并注入纠正提示，防止 Agent 陷入死循环。
- ToolRouter 架构：统一调度 HF 文档、GitHub 搜索、沙箱工具、规划工具和 MCP 工具。
- 支持最多 300 次迭代的 Agentic Loop，兼顾复杂任务的处理能力和资源安全。
