---
name: Sub2API
slug: sub2api
homepage: null
repo: https://github.com/Wei-Shaw/sub2api
license: LGPL-3.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - API Proxy
  - Claude
  - OpenAI Compatible
  - Account Pooling
  - Self-hosted
description: 自托管网关，将 Claude、OpenAI、Gemini、Grok 订阅转换为 OpenAI 兼容的 API 端点，提供多账号调度、Token 级计费与密钥分发。
author: Wei-Shaw
ossDate: '2025-12-18T00:00:00Z'
featured: false
status: tracked
---

## 简介

Sub2API 是一个自托管的 AI API 网关，把 Claude、OpenAI、Gemini、Grok 的订阅转换为 OpenAI 兼容的 API 端点。多个用户可通过生成的 API Key 共享订阅额度，由网关统一处理认证、调度、计费和请求转发。

## 主要特性

- 跨供应商多账号管理，同时支持 OAuth 订阅账号与 API Key 账号，自动刷新令牌。
- 智能调度器支持粘性会话保证对话连续性，并提供用户级与账号级并发限制。
- Token 级计费，内置 EasyPay、支付宝、微信支付、Stripe 支付集成。
- 复合分组：管理员路由层可将请求的模型解析到具体的上游供应商。
- Web 管理后台，用于监控账号、密钥与用量。

## 使用场景

- 团队通过每用户密钥与用量统计，在成员间共享 Claude/GPT 订阅额度。
- 将多家 AI 供应商账号统一到一个 OpenAI 兼容端点之后，供内部工具调用。
- 搭建订阅转 API 的中转服务，支持拼车分摊成本与计费策略。

## 技术特点

- 后端使用 Go 编写，基于 Gin 框架与 Ent ORM；前端为 Vue 3 + TailwindCSS 管理后台。
- PostgreSQL 持久化数据；Redis 承担会话状态、限流与分布式协调。
- 网关核心在 OpenAI、Anthropic（/v1/messages）、Gemini（/v1beta）格式之间做协议转换，让 Claude Code 等原生工具无感接入。
- 调度器按模型、健康状态与粘性会话需求选择上游账号；健康监测将故障账号移出轮换。
- OAuth 流程保存 access/refresh 令牌及过期时间；Grok 账号通过计费探测检查媒体生成资格。
