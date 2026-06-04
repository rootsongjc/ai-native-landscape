---
name: KServe
slug: kserve
homepage: https://kserve.github.io/website/
repo: https://github.com/kserve/kserve
license: Apache-2.0
category: inference-serving
subCategory: model-serving
tags:
  - Deployment
  - Inference Service
description: KServe：Kubernetes 原生的标准化模型推理与生成式 AI 服务平台，支持高可扩展性、自动伸缩与多框架的生产部署。
author: KServe
ossDate: '2019-03-27T21:14:14.000Z'
featured: false
status: tracked
---

KServe 是一个 Kubernetes 原生的模型推理平台，提供统一的 CRD 与标准数据平面协议，用于支持预测与生成式 AI 的生产化部署。

## 主要特性

- 标准化的 Inference CRD 与 API，简化模型部署与生命周期管理。
- 自动伸缩（含 GPU 弹性扩缩与 scale-to-zero）与高密度模型加载（ModelMesh）。
- 支持 Canary 发布、Pipeline 与 Ensemble（InferenceGraph）等高级部署模式。

## 使用场景

- 在 Kubernetes 平台上以声明式方式部署并管理在线推理服务（实时与批量）。
- 在多框架、多模型场景中提供统一的接入层与智能路由。
- 对接 GenAI/LLM 推理与 MCP 场景，提供可观测性、治理与缓存策略。

## 技术特点

- 基于 Kubernetes CRD 扩展，便于与现有 k8s 工具链和 CI/CD 集成。
- 与 ModelMesh 集成以实现高密度加载、智能路由与资源复用。
- 支持多种部署方式（Knative serverless、raw k8s、ModelMesh），以适配不同规模与延迟需求。
