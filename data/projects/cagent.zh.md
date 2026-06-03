---
name: cagent
slug: cagent
homepage: https://www.docker.com
repo: https://github.com/docker/cagent
license: Apache-2.0
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Dev Tools
  - Runtime
description: 用于构建和运行轻量级智能体的容器化运行时，由 Docker 工程团队开发。
author: Docker
ossDate: '2025-09-01T12:14:45Z'
featured: false
status: tracked
---
cagent 是由 Docker 工程团队开发的 AI 智能体构建器与运行时，使开发者能够利用 Docker 的容器基础设施来构建和运行 AI 智能体。它提供了从智能体构建到部署的统一工作流，借助容器化实现资源隔离、弹性伸缩，并与云原生和边缘环境无缝集成。

## 统一构建器与运行时

- 统一的智能体构建器与运行时，支持容器镜像和本地调试，加速开发迭代
- 原生容器资源隔离与调度能力，完全兼容 Kubernetes 部署模式
- 基于 Go 语言实现，注重低开销与可扩展性，采用容器化与守护进程模式保障生产可靠性
- 经过实战检验的容器编排模式确保生产环境稳定运行

## 可观测性与集成

- 内置遥测与监控接口，可与 Prometheus 和 Grafana 集成，实现生产级可观测性
- 支持与现有 CI/CD 流水线和监控生态集成，无需额外工具开销
- 面向生产编排设计，支持可扩展的多智能体部署
- 提供大规模智能体生命周期管理的运维工具链

## 部署场景

- 在云原生或边缘环境中托管自治 AI 智能体、数据采集器或轻量级任务执行器
- 快速构建、迭代和部署智能体服务，同时保持稳定运行和性能可观测
- 将 AI 智能体工作负载无缝集成到现有 Docker 和 Kubernetes 基础设施中
- 支持完整资源隔离和调度保障的多智能体部署
