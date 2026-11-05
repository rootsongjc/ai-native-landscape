---
name: Kinference
slug: kinference
homepage: https://kinference.ai/
repo: https://github.com/Kinference-AI/kinference
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - Inference Routing
  - Kubernetes
  - vLLM
  - Control Plane
  - LLM Gateway
description: >-
  面向 Kubernetes 和 vLLM 的推理控制平面，在多个推理端点之间进行选择，并应用策略、路由和负载均衡。通过监听 vLLM KV-cache 事件和引擎指标做出放置决策。
author: Kinference-AI (Buoyant)
ossDate: '2026-10-05'
featured: false
status: tracked
---

## 简介

Kinference 是一个面向 Kubernetes 和 vLLM 的推理控制平面。其核心能力是在多个推理端点之间进行选择，并根据需要应用策略、路由和负载均衡。Kinference 设计为与代理（如 Buoyant Gateway）配合使用，由代理将流量转发到 Kinference 选定的端点。

## 主要特性

- 对推理请求进行端点选择，支持策略执行、路由和负载均衡
- 提供 gRPC 接口，接收推理请求（如 OpenAI chat-completions 格式），返回选定的端点以及经过相应改写的请求体
- 基于 Kubernetes CRD 进行配置，并监听和回写 CRD 状态
- 附带 kinfctl 命令行工具，可在策略提交到服务端之前先进行校验

## 使用场景

- 在 Kubernetes 上对一组 vLLM 推理端点进行路由和负载均衡
- 感知 KV-cache 的请求放置，提升推理吞吐
- 在 CI 中或由智能体在应用路由配置前校验策略

## 技术特点

- 监听 vLLM KV-cache 事件和引擎指标，使用 NVIDIA 的 dynamo-kv-router crate 处理缓存事件
- 行为由一组 Kubernetes 自定义资源定义（CRD）配置，Kinference 监听这些 CRD 并将状态写回
- 定位为控制平面，与数据面代理（如 Buoyant Gateway）配对使用，自身不终结流量
- 目前为 Alpha 阶段：尚不支持 /v1/messages、限流、语义分类器和多副本部署
