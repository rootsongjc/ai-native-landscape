---
name: HolmesGPT
slug: holmesgpt
homepage: https://holmesgpt.dev/
repo: https://github.com/holmesgpt/holmesgpt
license: Unknown
category: platform-infra
subCategory: cloud-native-ai
tags:
  - AI Agent
description: 一款专为云原生环境设计的智能体平台，自动调查告警、定位根因并建议修复方案。
logo: ''
author: CNCF
ossDate: '2024-05-30T13:27:10Z'
featured: false
status: tracked
---

## 详细介绍

HolmesGPT 是一款由 CNCF 托管、面向云原生场景的智能体平台，能够自动调查云基础设施和应用的告警，分析多源观测数据，定位根因并提出修复建议。它集成了 Prometheus、Kubernetes、Slack、Jira 等主流工具，支持多种数据源和自动化运维场景，帮助 SRE 和运维团队提升故障响应效率，降低 MTTR。

## 主要特性

- 多数据源集成：支持 Prometheus、Kubernetes、AWS、Datadog、Loki、Helm 等主流云原生与监控平台
- 智能体循环：基于 agentic loop 自动分析、推理和建议
- 自动化调查与修复建议：自动收集上下文、分析根因并生成修复方案
- 丰富的工具集成与扩展能力：可自定义数据源和 Runbook，支持 CLI 与 SaaS 部署
- 数据隐私与安全：只读权限，支持自带 LLM API Key，保障数据安全

## 使用场景

- 云原生基础设施和应用的自动化故障调查与根因分析
- SRE 团队的告警响应与协作
- 多云与混合云环境的统一监控与事件处理
- 自动化 Runbook 执行与知识库集成
- DevOps、ChatOps 场景下的智能助手

## 技术特点

- 基于 Python 实现，支持插件式工具集成
- 采用 agentic loop 架构，结合 LLM 与多源观测数据
- 支持 CLI 与 Web 界面，灵活部署
- CNCF Sandbox 项目，社区活跃，文档完善
- 遵循 Apache-2.0 许可协议
