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

## 简介

HolmesGPT 是一个 CNCF 沙箱项目，作为 AI 驱动的站点可靠性工程（SRE）助手。它能够自动调查告警、分析多源可观测性数据、定位根因，并为云原生基础设施提供可操作的修复建议。通过集成 Prometheus、Kubernetes、AWS、Datadog 等主流工具，HolmesGPT 帮助 SRE 和运维团队显著提升故障响应效率，降低平均修复时间（MTTR）。

## 主要特性

HolmesGPT 提供与主流云原生和监控平台的多数据源集成，基于智能体循环架构实现自动分析和推理，以及自动收集上下文并生成修复方案的自动化调查能力。它支持自定义数据源和 Runbook，兼容 CLI 和 SaaS 部署方式，同时通过只读权限和自带 LLM API Key 的配置保障数据隐私与安全。

## 使用场景

HolmesGPT 适用于云原生环境中的自动化故障调查与根因分析、SRE 团队的告警响应与协作、多云与混合云部署的统一监控、自动化 Runbook 执行，以及 DevOps 和 ChatOps 场景中的智能助手。

## 技术特点

HolmesGPT 使用 Python 实现，采用可插拔工具集架构，通过智能体循环将 LLM 与多源可观测性数据结合进行智能推理。它支持 CLI 和 Web 界面灵活部署，作为 CNCF 沙箱项目拥有活跃的社区支持和完善的文档，遵循 Apache-2.0 许可协议。
