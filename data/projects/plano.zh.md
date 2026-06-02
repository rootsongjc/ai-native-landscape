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
logo: ''
author: Katanemo
ossDate: '2026-04-10T00:00:00Z'
featured: false
status: tracked
---

## 简介

Plano 是一个专为智能体应用打造的 AI 原生代理与数据平面，将请求路由、安全护栏和深度可观测性整合在单一开源网关中。它位于应用代码和 LLM 提供商之间，让团队集中管控智能体与模型的通信方式，同时将供应商耦合降到最低。

## 主要特性

- 统一网关，支持跨多家 LLM 提供商的流量路由，具备自动回退和弹性控制。
- 内建安全和策略执行层，对每个 AI 请求应用鉴权、内容过滤和合规规则。
- 原生可观测性原语，包括分布式追踪、结构化指标和请求级日志，便于运维调试。

## 使用场景

平台团队可使用 Plano 为内部开发者标准化多家模型和提供商的 AI 访问，避免绑定单一供应商。智能体应用可借助内建的编排和安全层确保每个智能体请求都经过鉴权、记录和策略合规检查。多租户 SaaS 产品可在网关层执行按租户的速率限制和治理策略。

## 技术特点

Plano 设计为可扩展的代理和运行时边界，将控制平面与模型后端分离。其插件架构支持用于路由、转换和策略执行的自定义中间件，适合作为企业环境中快速演进的 LLM 技术栈的统一入口。
