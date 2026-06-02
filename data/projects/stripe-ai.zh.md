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

## 简介

Stripe AI 是 Stripe 提供的开源 SDK 和工具集合，将支付、计费和金融 API 直接集成到 LLM 和智能体工作流中。它提供 Python 和 TypeScript 的 Agent Toolkit、计费工具（如 ai-sdk 和 token-meter）以及 Model Context Protocol 支持，可在托管和本地环境中安全访问 Stripe 服务。

## 主要特性

该工具包与 OpenAI Agent SDK、LangChain、CrewAI、Vercel AI SDK 等主流智能体框架兼容，使智能体能够在适当授权下执行支付操作。它支持 Stripe 托管或自托管的 MCP 服务器并采用 OAuth 安全机制，提供 Python 和 TypeScript SDK，以及将模型 Token 用量直接关联到 Stripe 计费的适配器。

## 使用场景

Stripe AI 在构建需要支付功能的 AI 产品时不可或缺，例如为付费 API 服务的 Token 消耗计量，或让智能体代表用户创建支付链接和管理订阅。它也作为 LLM 应用与企业计费系统之间的工程桥梁，用于使用量追踪和对账。

## 技术特点

项目以 MIT 许可证开源，附带完整的示例、文档和 MCP 快速入门指南。它为生产部署而设计，提供可配置的账户上下文默认值、细粒度权限设置以及与 Stripe Dashboard API 密钥的直接集成。
