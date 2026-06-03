---
name: vLLM Semantic Router
slug: semantic-router
homepage: https://vllm-semantic-router.com/
repo: https://github.com/vllm-project/semantic-router
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - Inference
  - LLM Router
description: 智能的 Mixture-of-Models 路由器，用于提高大模型推理的效率和准确性。
author: vLLM Semantic Router 团队
ossDate: '2025-08-26T21:49:50.000Z'
featured: false
status: tracked
---

## 简介

vLLM Semantic Router 是一个面向高性能推理场景的智能路由框架，采用 Mixture-of-Models 思路，通过语义理解将请求分派给最合适的模型或服务，以提升准确性并优化成本与延迟。

## 主要特性

- 基于语义分类的模型选择（BERT 分类器 / MoM 路由）。
- 相似度缓存（similarity caching）以降低重复计算与延迟。
- 企业级安全特性：PII 检测与 prompt 守卫。

## 使用场景

- 多模型部署场景下的请求路由与模型调度。
- 需要在延迟、成本和准确性之间权衡的推理平台。
- 将路由能力作为 AI 网关或微服务的一部分接入生产环境。

## 技术特点

- 多语言实现（Go 主体，含 Python 基准与 Rust 绑定）。
- 支持与 vLLM、Hugging Face Candle 等后端集成，并提供 Grafana 仪表盘示例与部署脚本。
- 提供详尽文档、示例与基准测试（bench & examples）。
