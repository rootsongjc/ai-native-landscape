---
name: Superagent
slug: superagent
homepage: https://superagent.sh/
repo: https://github.com/superagent-ai/superagent
license: Unknown
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - Dev Tools
  - Security
description: 为应用、模型与工具之间提供运行时保护与受控代理，检测提示注入并验证工具调用。
author: Superagent
ossDate: '2023-05-10T18:50:39.000Z'
featured: false
status: tracked
---

## 简介

Superagent 是一个面向 AI 应用的安全代理，作为应用、模型与工具之间的中间层提供运行时保护、工具调用验证与集中化审计，是构建安全可信 AI 系统的重要组件。

## 主要特性

- 运行时保护：实时检测提示注入、后门与数据泄露风险。
- Guarded Tooling：在工具执行前对工具调用与参数进行验证。
- SuperagentLM：用于推理驱动安全决策的低延迟模型。
- 统一可观测性：策略、审计与合规日志集中管理。

## 使用场景

- 在对外/内部 AI 服务前置代理以防止恶意 prompt 或不安全工具调用。
- 为多模型、多服务的系统提供统一安全策略与审计能力。
- 集成到 CI/CD 或运行时环境以保护生产 AI 工作负载。

## 技术特点

- 提供多语言 SDK（Python、TypeScript）与 Node/Rust proxy 实现，支持高性能部署。
- 可配置的 `superagent.yaml` 用于灵活定义模型、提供商与策略。
- 支持 CLI、容器与多种部署方式，适合云端与边缘场景。
