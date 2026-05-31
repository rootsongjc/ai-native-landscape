---
name: AI Gateway (Portkey)
slug: gateway
homepage: https://portkey.wiki/gh-10
repo: https://github.com/portkey-ai/gateway
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - Inference
description: Portkey 的 AI Gateway 是一个高性能、企业级的 LLM 路由与治理平台，支持多种模型提供方与丰富的守护规则。
logo: ''
author: Portkey-AI
ossDate: '2023-08-23T11:52:47.000Z'
featured: false
status: tracked
---

Portkey 的 AI Gateway 是一个轻量且企业级的路由层，用于将请求路由到 200+ 模型提供方与多种模态模型。它提供快速的请求路由、重试与回退策略、负载均衡、以及可扩展的守护规则和认证授权能力，适合在生产环境中管理大规模 LLM 流量。

## 主要特性

- 可靠路由：支持回退、自动重试与基于规则的路由策略，提升服务可用性。
- 多模态与广泛模型支持：支持文本、音频、图像等多模态以及 200+ 模型提供方的接入。
- 安全与治理：内建守护规则（guardrails）、安全密钥管理与基于角色的访问控制，支持合规部署。
- 成本与性能优化：支持智能缓存、使用统计与提供商优化以降低成本并提高延迟性能。

## 使用场景

- 在企业或产品中统一管理多个 LLM 提供商与模型路由。
- 需要稳定、低延迟的模型接入层，并支持回退与限流策略的场景。
- 构建多模态或代理式应用，需要接入不同类型模型与外部集成的场景。

## 技术特点

- 实现与生态：主要使用 TypeScript 构建，提供 JS/Node 与 Python 客户端，以及丰富的 cookbook 示例与部署指南。
- 部署与兼容性：支持本地 Docker、Node.js 部署、Cloudflare Workers 与云端企业部署；提供企业级部署架构和控制台。
- 文档与社区：项目拥有完整文档站点（<https://portkey.wiki/gh-10>），活跃社区与广泛的集成示例。
