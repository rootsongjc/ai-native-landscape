---
name: Agent Router
slug: agent-router
homepage: https://theagentrouter.ai/
repo: https://github.com/theagentrouter/agent-router
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - Kubernetes
  - Envoy
  - LLM
description: 基于 Envoy Gateway 构建的开源 AI 与智能体流量控制平面，提供统一的 OpenAI 兼容 API，集中管理凭证、路由、配额与故障切换。前身为 Envoy AI Gateway。
author: Agentic AI Foundation
ossDate: '2024-10-21T02:59:59.000Z'
featured: false
status: tracked
---
## 简介

Agent Router（前身 Envoy AI Gateway）是由 Envoy 与 Envoy Gateway 驱动的开源 AI 与智能体流量控制平面，现为 Agentic AI Foundation 项目。它为应用团队提供统一、OpenAI 兼容的 API，覆盖托管服务商、自托管推理和 MCP 服务器等各类模型与工具；平台团队则将凭证、路由、配额、故障切换与用量归集集中在一处管理。更名仅涉及仓库与网站地址，CRD、`aigw` CLI、容器镜像、Helm Chart 与 Go module 路径均保持不变。

## 主要特性

- 统一的 OpenAI 兼容 API，支持 20+ 服务商，包括 OpenAI、Azure OpenAI、Anthropic、Google Gemini、Vertex AI、AWS Bedrock、Mistral、Groq、DeepSeek 以及自托管推理
- Kubernetes 原生控制平面，提供 `AIGatewayRoute`、`AIServiceBackend`、`BackendSecurityPolicy` 等 CRD
- 集中式的凭证管理、令牌配额、速率限制、故障切换与用量归集
- 通过 `aigw` CLI 支持独立运行模式：`aigw run` 一条命令启动本地路由器并自动配置服务商，在 `localhost:1975` 上提供 OpenAI 兼容接口
- 两级网关模式：一级网关负责认证、顶层路由与全局速率限制；二级网关面向自托管模型集群提供细粒度控制与 endpoint picker 支持
- 在托管与自托管模型后端之外同时支持 MCP 服务器

## 使用场景

- 应用侧只对接单一 OpenAI 兼容端点，后端在多家模型服务商之间路由
- 平台团队统一实施凭证、配额与用量归集策略，无需改动应用代码
- Kubernetes 环境下自托管 LLM 推理集群的入口流量管理
- 本地开发与评估：零配置的独立路由器

## 技术特点

- 控制平面构建于 Envoy Gateway 之上：AI 流量资源以 Kubernetes CRD 声明，由 Envoy 作为数据平面执行（"Agent Router controls, Envoy carries"）
- API 组 `aigateway.envoyproxy.io` 与各 CRD 沿用 Envoy AI Gateway 时期的定义，既有清单在更名后无需修改即可继续使用
- 运行于 `envoy-ai-gateway-system` 命名空间；镜像发布为 `docker.io/envoyproxy/ai-gateway-*`，Go module 路径保持 `github.com/envoyproxy/ai-gateway`
- 独立运行模式 `aigw run` 在 1975 端口提供 OpenAI 兼容的 `/v1` API，无需 Kubernetes 集群即可在本地使用
