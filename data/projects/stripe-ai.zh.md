---
name: Stripe AI
slug: stripe-ai
homepage: https://docs.stripe.com/agents
repo: https://github.com/stripe/ai
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - MCP
  - SDK
description: Stripe 提供的开源 AI 工具集与 SDK，帮助开发者将支付与账单功能安全地集成到 LLM 与智能体工作流中。
logo: ''
author: Stripe
ossDate: '2024-11-11T17:13:41Z'
featured: false
status: tracked
---

## 详细介绍

Stripe AI 是 Stripe 提供的一套开源工具与 SDK，旨在把支付、计费与相关 API 无缝集成到 LLM 与智能体（智能体）工作流中。仓库包含用于 Python 与 TypeScript 的 Agent Toolkit、与计费相关的 `ai-sdk` 与 `token-meter` 等组件，并支持 Model Context Protocol（MCP）以便安全地在托管或本地环境中访问 Stripe 服务。该项目面向开发者开放，便于在构建 AI 驱动的产品时处理支付、账单与权限等工程需求。

## 主要特性

- Agent 集成：提供可与 OpenAI Agent SDK、LangChain、CrewAI、Vercel AI SDK 等框架配合的工具。
- MCP 支持：支持通过 Stripe 托管的 MCP 服务或本地 MCP 实例进行安全访问与 OAuth 授权。
- 多语言 SDK：提供 Python 与 TypeScript 包，便于在服务端与前端集成。
- 计费适配：`ai-sdk` 与 `token-meter` 有助于将模型调用计费与 Stripe 账单体系对接。

## 使用场景

适用于需要将支付或计费流纳入 AI 产品的场景，例如为付费 API 请求计费的模型服务、在智能体执行支付相关操作（如创建支付链接）时进行安全授权、或在产品中对模型使用量进行计费与结算。它也可作为在企业级应用中把 LLM 与现有支付基础设施结合的工程化方案。

## 技术特点

- 基于 MIT 许可证开源，便于企业与研究机构定制与扩展。
- 提供示例、文档与演示（包括 MCP 快速启动与 Gradio/示例集成）。
- 支持工程化功能，如上下文默认值（account context）、权限配置与对接 Stripe Dashboard 的 API 密钥管理。
