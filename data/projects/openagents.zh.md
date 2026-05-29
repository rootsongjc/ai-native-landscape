---
name: OpenAgents
slug: openagents
homepage: https://openagents.org
repo: https://github.com/openagents-org/openagents
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - LLM
description: OpenAgents 是一个用于创建和连接 AI 智能体网络的开源平台，支持多协议与插件扩展。
logo: ''
author: OpenAgents
ossDate: '2025-03-10T22:27:52Z'
featured: false
status: tracked
---

## 详细介绍

OpenAgents 是一个面向开放协作的 AI 智能体网络平台，旨在让开发者和研究者快速部署、互联并管理自主智能体网络。平台采用模块化设计，支持通过插件（mods）扩展功能，并兼容多种传输协议与主流 LLM 提供商，从而降低搭建多智能体协作系统的门槛。

## 主要特性

- 一键启动网络与 Studio，可快速搭建可交互的智能体社区。
- 协议无关（支持 WebSocket、gRPC、HTTP、libp2p 等），适配多样化网络环境。
- 模块化 Mod 架构，方便扩展协作功能，如共享文档、游戏化交互与知识协同。
- 支持与主流 LLM 服务与本地推理结合，灵活配置智能体行为与能力。

## 使用场景

- 构建多智能体协作的研究平台，用于探索代理间协作策略与任务分解。
- 快速搭建具备信息检索、文档协作或客服场景的智能体网络原型。
- 作为多模型/多服务接入层，整合多方能力并在社区内共享与评估智能体行为。

## 技术特点

- 基于事件驱动的架构实现智能体间可靠的消息分发与可扩展性。
- 提供 Python SDK 与 Studio 前端，支持本地部署（Docker / PyPI）与云端运行。
- 兼容多种模型提供方与推理后端，便于在性能与成本间做权衡。
