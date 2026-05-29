---
name: ZenML
slug: zenml
homepage: https://docs.zenml.io/
repo: https://github.com/zenml-io/zenml
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - AI Agent
  - ML Platform
  - Workflow
description: 统一的 MLOps 框架，支持从经典模型到多智能体系统的一体化开发、评估与部署。
logo: ''
author: ZenML
ossDate: '2020-11-19T09:25:46.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

ZenML 是一个统一的 MLOps 框架，帮助团队在一个平台上开发、版本化、评估并把从经典机器学习模型到复杂 AI agents 的工作负载部署到生产环境，简化测试、可观测性和持续交付流程。

## 主要特性

- 管道化（pipelines）与步骤（steps）概念，支持可重复的训练、评估与部署流程。
- 原生集成多种后端（本地、Kubernetes、云）与第三方工具（MLflow、W&B、LangGraph 等）。
- 支持 agent 与 LLMOps 场景，提供版本化 prompts、实验比较与评估机制。

## 使用场景

- 在 CI/CD 中自动化模型训练、验证与发布，确保可重复性与可审计性。
- 对比与评估多种 agent 架构，基于数据选择最佳方案并部署到生产。
- 将管道连接到监控与追踪工具，实现模型健康监测与性能分析。

## 技术特点

- Python 原生 SDK 与 CLI，易于与现有代码集成。
- 支持 Helm/Docker 部署与 Server/Client 模式，适配本地与云环境。
- 文档完善、示例丰富并拥有活跃社区与企业支持选项（ZenML Pro）。
