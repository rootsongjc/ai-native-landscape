---
name: LiteLLM
slug: litellm
homepage: https://docs.litellm.ai/docs/
repo: https://github.com/berriai/litellm
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
description: LiteLLM 是一个轻量级的 LLM 支持与代理框架，提供统一的 OpenAI 格式代理、路由、限流与可插拔的模型提供商支持，适合用于构建 LLM Gateway。
author: BerriAI
ossDate: '2023-07-27T00:09:52.000Z'
featured: false
status: tracked
---

LiteLLM（LiteLLM Proxy / LLM Gateway）提供一个统一的代理层，能将多家模型提供商（OpenAI、Anthropic、Azure、Vertex、Hugging Face 等）以 OpenAI 格式暴露给客户端，并支持路由、重试、限流、费用统计与可配置的后端供应商插件。

## 主要特性

- 统一 OpenAI 格式的代理接口，兼容多数主流模型提供商。
- 支持路由、重试与回退策略，便于实现高可用的供应链。
- 支持密钥与权限管理、费用统计与限流，适合用于生产环境的 LLM Gateway。
- 可扩展的提供商插件与观测回调，支持多种日志/监控后端。

## 使用场景

- 构建企业级 LLM Gateway / Proxy 服务以对接多个模型后端。
- 将第三方模型统一转换为 OpenAI 风格接口，简化上层应用集成。
- 需要流量控制、配额和审计的生产部署环境。

## 技术特点

- 以 Python 为主实现代理与后端整合，前端与仪表盘使用 TypeScript/JS。
- 支持丰富的 provider 列表（包括 Bedrock、Azure、OpenAI、Hugging Face 等），并通过插件扩展新提供商。
- 提供 Docker 与 Helm 部署示例，方便在云环境与 Kubernetes 中运行。
