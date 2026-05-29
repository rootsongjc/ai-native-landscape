---
name: Agent Lightning
slug: agent-lightning
homepage: https://microsoft.github.io/agent-lightning/
repo: https://github.com/microsoft/agent-lightning
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Training
description: Agent Lightning 是一个用于训练与优化 AI 智能体的开源框架，旨在通过最小化代码改动提升多智能体系统的长期表现。
logo: ''
author: Microsoft Research
ossDate: '2025-06-18T07:28:45.000Z'
featured: false
status: tracked
---

## 详细介绍

Agent Lightning 是 Microsoft Research 发布的一个开源框架，目标是为各种智能体（agents）提供可插拔的训练与优化能力。该项目通过采集结构化的事件（例如 prompt、工具调用与 reward），将这些数据送入中央存储与训练器，实现强化学习、自动提示优化与监督微调等算法的闭环，从而在不大幅改写业务代码的前提下持续提升智能体在复杂任务中的表现。

## 主要特性

- 支持零或最小代码改动即可将训练环节接入现有智能体系统。
- 支持多种训练算法（强化学习、自动提示优化、监督微调等）。
- 与常见 agent 框架兼容（如 LangChain、AutoGen 等），提供示例与流水线。
- 提供结构化追踪与中心化存储（LightningStore），便于回放与训练。

## 使用场景

- 在多智能体系统中持续优化策略与行为，从而提高长期任务完成率。
- 对话代理和任务型代理在真实流量下进行在线或离线策略改进。
- 作为研究平台用于对比 agent-RL 算法与训练流水线效果。

## 技术特点

- 事件级追踪：采集 prompt、工具调用、模型响应与奖励等结构化数据。
- 可插拔训练器：支持将自定义算法（如 GRPO）或现有 RL 算法接入训练流程。
- 框架兼容性与扩展性：设计为与多种 agent 框架无缝集成，便于复用现有基础设施。
