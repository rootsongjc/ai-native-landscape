---
name: ArchGW
slug: archgw
homepage: https://docs.archgw.com/
repo: https://github.com/katanemo/archgw
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - Observability
  - Orchestration
description: ArchGW 是一个面向 agent 的模型原生代理服务器，提供路由、护栏、工具调用与端到端可观测能力。
author: Arch (katanemo)
ossDate: '2024-07-09T20:25:56Z'
featured: false
status: tracked
---
## 详细介绍

ArchGW（Arch）是一个面向 agent 的模型原生代理服务器，旨在把构建 agentic 应用所需的低级管道（如路由、护栏、工具调用与统一模型接入）从应用代码中抽离出来。基于 Envoy 架构，Arch 提供对多模型提供方的统一访问、偏好化路由策略、函数调用转换以及端到端的日志与追踪，帮助团队更快地将 agent 能力工程化并保证可观测性与安全性。

## 主要特性

- 多模型路由策略：支持模型、别名与偏好对路由的灵活配置
- 护栏与输入校验：集中化配置安全策略与输出限制
- 工具与函数调用：将自然语言提示自动转换为 API/工具调用
- 端到端可观测：W3C 请求追踪、LLM 指标与与主流可观测工具集成
- 与 Envoy 集成，便于在现有流量管理架构中部署

## 使用场景

适合需要统一管理模型接入与路由、对提示与输出进行集中化治理、或需要将 agent 能力在多服务间快速推广的场景。常见于企业级生产系统、平台化 AI 基础设施与需要强审计与日志追踪的合规环境。

## 技术特点

项目以 Rust 为主实现并辅以 Python 工具链，注重高性能、可扩展性和生产就绪度。提供详尽文档、示例和运维指南，支持容器化部署、集群化扩展与与现有服务无缝集成。
