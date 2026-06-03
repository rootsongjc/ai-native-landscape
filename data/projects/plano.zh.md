---
name: Plano
slug: plano
homepage: https://docs.planoai.dev/
repo: https://github.com/katanemo/plano
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - Inference
  - LLM Router
description: Plano 是一个开源 AI 网关与策略运行时，用于在生产环境中对 LLM/API 流量进行路由、安全治理与可观测性管理。
author: Katanemo
ossDate: '2026-04-10T00:00:00Z'
featured: false
status: tracked
---

Plano 是一个专为智能体应用打造的 AI 原生代理与数据平面，将请求路由、安全护栏和深度可观测性整合在单一开源网关中。它位于应用代码和 LLM 提供商之间，让团队集中管控智能体与模型的通信方式，同时将供应商耦合降到最低。

## 统一网关

- 支持跨多家 LLM 提供商的流量路由，具备自动回退和弹性控制
- 将控制平面与模型后端分离，保持清晰的架构边界
- 插件架构支持用于路由、转换和策略执行的自定义中间件

## 安全与策略执行

- 内建鉴权、内容过滤和合规规则，对每个 AI 请求生效
- 多租户 SaaS 产品可执行按租户的速率限制和治理策略
- 确保每个智能体请求都经过鉴权、记录和策略合规检查

## 可观测性

- 原生分布式追踪，实现跨提供商的端到端请求可见性
- 结构化指标和请求级日志，便于运维调试
- 对智能体与模型通信的深度可观测，保障生产可靠性
