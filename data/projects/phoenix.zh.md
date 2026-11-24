---
name: Phoenix
slug: phoenix
homepage: https://arize.com/docs/phoenix
repo: https://github.com/Arize-ai/phoenix
license: Elastic-2.0
category: training-optimization
subCategory: observability-monitoring
tags:
  - Observability
  - Tracing
  - Evaluation
  - OpenTelemetry
  - LLMOps
description: Phoenix 是 Arize AI 推出的 LLM 应用与智能体可观测性和评测平台，涵盖基于 OpenTelemetry 的链路追踪、评测、数据集与实验以及提示词管理。
author: Arize AI
ossDate: '2022-11-09T23:44:35Z'
featured: false
status: tracked
---

## 简介

Phoenix 由 Arize AI 开发，是面向 LLM 应用和智能体的可观测性与评测平台。它通过 OpenTelemetry 采集链路追踪数据，支持在追踪数据上运行评测，并将数据集、实验和提示词集中管理，让应用的每次改动都有数据可依。它可以运行在本机、Notebook、容器中，也可以使用托管服务。

## 主要特性

- 基于 OpenTelemetry 和 OpenInference 规范的链路追踪，对常见框架和模型供应商提供自动埋点
- 评测能力：支持基于 LLM 和基于代码的评估器，用于检索相关性、回答质量等指标
- 数据集与实验：以版本化的样本集并排比较提示词、模型和检索配置
- 提示词 Playground 与提示词管理，支持版本控制，并可修改提示词后重放已追踪的调用
- 支持通过 pip、Docker 或 Kubernetes 自托管部署

## 使用场景

- 逐个 span 检查请求，调试智能体和 RAG 流水线
- 发布前用固定数据集对提示词或模型改动做回归测试
- 跟踪线上应用的延迟、Token 用量和评测得分

## 技术特点

- 厂商中立的埋点：追踪数据是标准 OTLP，也可以发送到其他后端
- 提供 Python 和 TypeScript 客户端
- 以 Elastic License 2.0 发布，属于源码可用许可证，并非 OSI 认可的开源许可证
