---
name: TokenHub
slug: tokenhub
homepage: https://thinkinai-labs.github.io/tokenhome/
repo: https://github.com/astaxie/TokenHub
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - Enterprise
  - LLM Routing
description: TokenHub 是一个私有化部署的企业级 AI 网关，通过 OpenAI 与 Anthropic 兼容 API 统一接入多模型提供方，并为普通用户、团队负责人和管理员提供基于角色的独立工作空间。
author: 谢孟军（astaxie）
ossDate: '2026-06-10T15:32:07Z'
featured: false
status: tracked
---
## 简介

TokenHub 是一个以 SQLite 为首选存储、Go 编写、配套 Next.js 控制台的可私有化部署企业级 AI 网关。它在 OpenAI、Azure OpenAI、Anthropic、Gemini、DeepSeek、Qwen 以及本地 vLLM/Ollama 等上游提供方之上，统一暴露 OpenAI 与 Anthropic 兼容端点，并围绕用户、团队负责人、管理员三种角色组织访问，让日常模型调用、团队治理与平台管理各司其职。

## 主要特性

- 兼容 OpenAI 的 `/v1/chat/completions`、`/v1/responses`、`/v1/embeddings` 与 Anthropic `/v1/messages`，并支持图像生成与参考图编辑
- 提供方通道配合模型目录与路由策略，支持优先级、权重、故障转移与路由健康诊断
- 项目级 API Key 管理，支持成员权限、配额与并发控制
- 按用户、项目、团队、模型、成本中心维度的用量分析与请求日志
- 企业级身份接入（OAuth/OIDC）、RBAC 与审计追踪
- 以 SQLite 为首选存储、Docker Compose 私有化部署，PostgreSQL 支持横向扩展

## 使用场景

适合需要在多模型提供方之上搭建可审计私有 AI 网关的组织：平台团队做成本归因与治理、团队负责人管理项目访问与配额、终端用户通过项目级 Key 统一调用模型 API。

## 技术特点

- Go 1.26 后端 + Next.js 16 / React 19 控制台
- SQLite 优先存储；PostgreSQL 支持多实例部署与连接池
- 控制台支持中、英、日多语言
- 可对接 OpenAI Codex 订阅资源，将指定 Codex CLI/桌面会话通过可恢复的隔离配置进行路由
