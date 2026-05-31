---
name: cagent
slug: cagent
homepage: https://www.docker.com
repo: https://github.com/docker/cagent
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Dev Tools
  - Runtime
description: 用于构建和运行轻量级智能体的容器化运行时，由 Docker 工程团队开发。
logo: ''
author: Docker
ossDate: '2025-09-01T12:14:45Z'
featured: false
status: tracked
---

## 详细介绍

cagent 是 Docker 工程团队推出的容器化智能体构建与运行时，旨在简化从构建到部署轻量级智能体的工作流。它提供可扩展的守护进程与工具链，支持容器化部署、资源隔离与遥测，便于在云原生与边缘环境运行智能体并保持可观测性。

## 主要特性

- 统一的智能体构建器与运行时，支持容器镜像与本地调试。
- 原生容器资源隔离与调度支持，兼容 Kubernetes 部署模式。
- 内置监控与遥测接口，便于与 Prometheus/Grafana 集成。

## 使用场景

适用于在云原生或边缘环境中托管自治任务、数据采集器或轻量型智能体，开发团队可用它快速构建、迭代与部署智能体服务，实现稳定的运行、资源隔离与性能观测。

## 技术特点

基于 Go 语言实现，强调低开销与可扩展性，采用容器化与守护进程模式，支持与现有 CI/CD 与监控生态（如 Prometheus）集成，方便在生产环境中进行编排与运维。
