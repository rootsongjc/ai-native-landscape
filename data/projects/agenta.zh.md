---
name: Agenta
slug: agenta
homepage: https://docs.agenta.ai/
repo: https://github.com/agenta-ai/agenta
license: Unknown
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Evaluation
  - Prompt Engineering
description: Agenta 是一个开源的 LLMOps 平台，集成提示管理、评测与可观测性，帮助团队快速构建可靠的 LLM 应用。
logo: ''
author: Agenta-AI
ossDate: '2023-04-26T09:54:28.000Z'
featured: false
status: tracked
---

## 详细介绍

Agenta 是一个面向生产的开源 LLMOps 平台，旨在将提示工程、自动化评测与运行时可观测性整合为一套可复用的工具链，帮助工程与产品团队在复杂业务场景中快速迭代并稳定交付 LLM 驱动的功能。平台既提供托管的 Agenta Cloud 体验，也提供完整的自托管方案，以满足不同的合规和成本需求。

## 主要特性

- 提示工程与版本管理：交互式 Playground 支持多模型对比、提示版本与分支管理，便于领域专家与开发者协同优化提示。
- 系统化评测与自动化测试：支持将生产数据转为测试集，提供多种评估器（含 LLM-as-judge）和自定义评估插件，便于回归检测与质量监控。
- 可观测性与监控：提供成本、吞吐与延迟统计，并支持分布式追踪（兼容 OpenTelemetry），帮助快速定位模型行为异常与性能瓶颈。

## 使用场景

- 在企业级产品中，需要对模型输出做系统化评估、回归测试与版本对比，以防止模型变更引入回归或不符合业务预期的行为。
- 希望把提示工程纳入日常开发流程，通过分支与环境隔离在多模型间做 A/B 实验并自动化验证效果。
- 在多步骤或跨模型工作流（如检索 - 生成或工具调用）场景中，需要可观测性与追踪来排查问题并优化成本。

## 技术特点

- 技术栈：后端以 Python 为核心、前端与控制台使用 TypeScript，便于扩展与集成现有服务。
- 集成能力：支持 50+ 模型提供者并允许自定义 provider，提供插件化评估器和常见存储/消息系统的连接器。
- 部署灵活：提供从本地 Docker Compose 到远程生产部署的完整指南，项目采用 MIT 许可证开源。
