---
name: Agent Sandbox
slug: agent-sandbox
homepage: https://agent-sandbox.sigs.k8s.io
repo: https://github.com/kubernetes-sigs/agent-sandbox
license: Unknown
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Agents
  - Orchestration
description: 一个由 Kubernetes SIGs 发起的智能体沙箱项目，旨在提供可扩展、安全的智能体执行与编排平台原型。
logo: ''
author: Kubernetes SIGs
ossDate: '2025-08-12T04:55:05Z'
featured: false
status: tracked
---

## 简介

Agent Sandbox 是由 Kubernetes SIGs 社区发起的实验性项目，旨在提供易于管理的隔离、有状态、单例工作负载，适合在 Kubernetes 上运行 AI 智能体运行时。它提供 Kubernetes 原生沙箱环境，用于安全、可扩展地运行、编排和管理自治智能体工作负载。

## 主要特性

- Kubernetes 原生集成，使用 CRD 和 Controller 模式表达与管理智能体生命周期。
- 容器与 Pod 级别的安全隔离，降低智能体执行时对宿主环境的风险。
- 可扩展编排，结合 Kubernetes 调度与自动扩缩容能力支持多智能体并行与协调执行。

## 使用场景

- 智能体运行时测试，在真实集群环境中验证行为与资源使用。
- 多智能体编排，评估分布式系统中协调与容错策略。
- 安全与合规评估，在隔离环境中测试智能体访问模式与安全策略。

## 技术特点

- 采用 Apache-2.0 许可，提供示例 manifests、控制器代码与运行时适配器。
- 原型优先设计，作为研究与验证平台评估不同运行时与编排策略。
- 支持在不同 Kubernetes 集群环境中复现与扩展实验。
