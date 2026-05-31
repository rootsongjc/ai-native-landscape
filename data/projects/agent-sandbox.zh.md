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

## 详细介绍

Agent Sandbox 是由 Kubernetes Special Interest Groups (SIGs) 社区发起的实验性项目，目标是提供一个用于运行、编排与管理自治智能体（agents）的沙箱环境。项目关注与 Kubernetes 原生生态的深度集成，探索如何在集群环境中安全、可扩展地调度智能体工作负载。

## 主要特性

- Kubernetes 原生集成：使用 CRD/Controller 模式或其他 Kubernetes 原生机制来表达与管理智能体生命周期。
- 安全隔离：在容器或 Pod 级别提供隔离策略，减少智能体执行时对宿主环境的风险。
- 可扩展编排：支持多智能体并行与协调执行，结合 Kubernetes 的调度与扩缩容能力。
- 原型与可实验性：作为研究与验证平台，便于社区评估不同智能体运行时与策略。

## 使用场景

- 智能体运行时测试：在真实集群环境中验证智能体运行时的行为与资源使用。
- 多智能体编排：评估多智能体系统在分布式环境中的协调与容错能力。
- 安全与合规评估：在隔离环境中测试智能体对外部系统的访问模式与安全策略。

## 技术细节

该项目托管在 GitHub（kubernetes-sigs/agent-sandbox），采用 Apache-2.0 许可。项目提供示例 manifests、控制器代码与运行时适配器，方便社区在不同集群环境中复现与扩展。更多信息请访问项目主页或源码仓库。
