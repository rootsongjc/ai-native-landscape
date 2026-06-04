---
name: Stripe AI
slug: stripe-ai
homepage: https://docs.stripe.com/agents
repo: https://github.com/stripe/ai
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - MCP
  - SDK
description: Stripe 提供的开源 AI 工具集与 SDK，帮助开发者将支付与账单功能安全地集成到 LLM 与智能体工作流中。
author: Stripe
ossDate: '2024-11-11T17:13:41Z'
featured: false
status: tracked
---

Stripe AI 是 Stripe 提供的开源 SDK 和工具集合，将支付、计费和金融 API 直接集成到 LLM 和智能体工作流中。它提供 Python 和 TypeScript 的 Agent Toolkit、计费工具（如 ai-sdk 和 token-meter）以及 Model Context Protocol 支持，可在托管和本地环境中安全访问 Stripe 服务。

## 主要特性

- 兼容 OpenAI Agent SDK、LangChain、CrewAI、Vercel AI SDK 等主流智能体框架
- 支持 Stripe 托管或自托管的 MCP 服务器，采用 OAuth 安全机制
- 提供 Python 和 TypeScript SDK，包含将 Token 用量关联到 Stripe 计费的适配器
- 支持可配置的账户上下文默认值和细粒度权限设置
- 附带 ai-sdk 和 token-meter 工具，支持 AI API 消耗的计量计费

## 使用场景

- 为付费 API 服务和 AI 产品计量 Token 消耗
- 让智能体代表用户创建支付链接和管理订阅
- 作为 LLM 应用与企业计费系统之间的桥梁，用于使用量追踪和对账
- 构建需要支付功能的 AI 产品，如按查询付费或订阅门控功能

## 技术特点

- 以 MIT 许可证开源，附带完整的示例和 MCP 快速入门指南
- 为生产部署而设计，支持与 Stripe Dashboard API 密钥的直接集成
- 支持托管 MCP 和本地服务器两种部署模式，架构灵活
- 确保智能体工作流中的支付操作安全且经过授权
