---
name: LocalAGI
slug: localagi
homepage: https://localai.io
repo: https://github.com/mudler/localagi
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateways
  - Agents
  - Dev Tools
description: LocalAGI 是一个可自托管的智能体平台，强调隐私、本地运行与丰富的连接器生态。
author: mudler
ossDate: '2023-07-27T23:21:36Z'
featured: false
status: tracked
---

## 简介

LocalAGI 是一个可自托管的 AI 智能体平台，完全在用户自有硬件上运行，不依赖任何云服务，从而实现最大程度的隐私保护。它提供 Web 管理界面、REST API 和多种消息连接器，使团队能够在本地部署具备工具调用、长期记忆和多步任务执行能力的 AI 智能体。

## 主要特性

- 完全本地化的智能体执行环境，配有 Web 管理界面，可创建、配置和监控智能体而无需将数据发送到外部。
- 原生支持 Discord、Slack、Telegram 等消息平台的连接器以及自定义动作，使智能体能够跨平台交互。
- 与 LocalRecall 深度集成实现持久化记忆，与 LocalAI 集成实现推理，构成完整的自托管 AI 技术栈。
- 支持多种硬件配置，包括 CPU、GPU、Intel 和 AMD 加速器。

## 使用场景

- 对隐私敏感的组织需要 AI 智能体能力，但不能将数据传输到外部云服务。
- 在离线或带宽受限的边缘环境中部署，云连接不可靠或被禁止的场景。
- 团队构建内部 AI 助手，需要长期记忆、私有文档的 RAG 检索以及工具调用能力。

## 技术特点

- 模块化架构，支持模型上下文协议（MCP）以实现可扩展的工具集成和可插拔的记忆层。
- 提供与 OpenAI 兼容的生产级 REST API 端点，可作为云端智能体服务的直接替代方案。
- 附带针对不同硬件和网络环境优化的 Docker 和 Kubernetes 部署示例。
