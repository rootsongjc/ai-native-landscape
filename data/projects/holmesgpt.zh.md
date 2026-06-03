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
author: CNCF
ossDate: '2024-05-30T13:27:10Z'
featured: false
status: tracked
---

HolmesGPT 是一个 CNCF 沙箱项目，作为 AI 驱动的站点可靠性工程（SRE）助手。它能够自动调查告警、分析多源可观测性数据、定位根因，并为云原生基础设施提供可操作的修复建议。

## 主要特性

- 与 Prometheus、Kubernetes、AWS、Datadog 等主流云原生和监控平台的多数据源集成
- 基于智能体循环架构，将 LLM 与多源可观测性数据结合进行自动分析和推理
- 自动收集上下文、定位根因并生成修复方案的自动化调查能力
- 支持自定义数据源和 Runbook 以扩展调查能力
- 通过只读权限和自带 LLM API Key 的配置保障数据隐私与安全

## 部署方式

- CLI 命令行工具，支持直接在终端进行快速故障排查
- SaaS 部署选项，适合团队协作工作流
- 可插拔工具集架构，便于添加新数据源和集成

## 使用场景

- 云原生环境中的自动化故障调查与根因分析
- SRE 团队的告警响应与协作排障
- 多云与混合云部署的统一监控
- 常见修复流程的自动化 Runbook 执行
- DevOps 和 ChatOps 场景中的智能助手
