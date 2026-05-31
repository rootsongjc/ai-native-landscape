---
name: Higress
slug: higress
homepage: https://higress.ai/en/
repo: https://github.com/alibaba/higress
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
description: 基于 Istio 和 Envoy 的云原生 API 网关，支持 Wasm 插件和 AI Gateway 功能，包括 MCP 托管与多模型集成。
logo: ''
author: 阿里巴巴
ossDate: '2022-10-27T03:53:00.000Z'
featured: false
status: tracked
---

## 概述

Higress 是阿里巴巴推出的云原生 API 网关，基于 Istio 和 Envoy 构建。它通过 Wasm 插件扩展网关能力，并提供 AI Gateway 功能，如 MCP 托管和企业级多模型统一集成。

## 主要特性

- 支持多模型服务统一接入，具备可观测性、令牌速率限制和缓存能力
- MCP 服务器托管及 openapi-to-mcp 工具链
- 丰富的 Wasm 插件生态，支持多语言扩展

## 典型场景

- 在企业 API 网关中集成 LLM API 和 MCP 服务
- 托管远程 MCP 服务器，统一认证、速率限制和审计
- 为 AI 工作负载提供流式处理和高可用性

## 技术亮点

- 生产级架构，支持零停机配置更新
- Wasm 插件沙箱机制，安全可扩展
- 企业级可观测性、审计与安全特性
