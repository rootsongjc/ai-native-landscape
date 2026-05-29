---
name: Gateway API Inference Extension
slug: gateway-api-inference-extension
homepage: https://gateway-api-inference-extension.sigs.k8s.io/
repo: https://github.com/kubernetes-sigs/gateway-api-inference-extension
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
description: 将 Gateway API 与外部处理扩展结合，构建 Kubernetes 原生的推理网关以优化生成式 AI 推理部署。
logo: ''
author: Kubernetes SIGs
ossDate: '2024-08-28T20:04:10.000Z'
featured: false
status: tracked
---

## 简介

Gateway API Inference Extension（Inference Gateway）将 Gateway API 与 Envoy 的 External Processing 扩展相结合，提供面向 Kubernetes 的推理网关功能，用于管理、调度并优化自托管生成式模型的推理请求。

## 主要特性

- Kubernetes 原生声明式 API（InferenceObjective / Inference Pool）用于模型路由与流量控制。
- 可插拔的调度器与 Endpoint Picker（EPP），支持成本/性能意识的调度策略与前缀缓存（prefix cache）。
- 企业级运维与可观察性：Grafana 仪表盘、端到端测试与丰富的文档与示例。

## 使用场景

- 在 Kubernetes 上托管多模型推理平台，按性能与成本对请求进行路由与分层调度。
- 将路由与模型编排能力作为 AI 网关的一部分，支持 LoRA 适配器、A/B 流量切分与安全隔离。
- 与 vLLM、llm-d 等模型服务集成以实现分离式/可扩展的推理架构。

## 技术特点

- 主要用 Go 语言实现，代码仓库包含 Python 工具与示例、文档站点与测试套件。
- 支持 ext-proc、Envoy Gateway、以及与多种模型服务器协议的适配器与集成。
- 提供 CRD、控制器与部署脚本，已包含示例、基准与端到端测试流程。
