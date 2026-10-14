---
name: NVIDIA Run:ai
slug: run-ai
homepage: https://docs.nvidia.com/run-ai/
repo: https://github.com/dsx-ai-factory/run-ai
license: Apache-2.0
category: platform-infra
subCategory: cloud-native-ai
tags:
  - GPU Orchestration
  - Kubernetes
  - AI Workload Management
  - GPU Scheduling
  - Multi-Cluster
  - MCP
description: 开源的 Kubernetes AI 工作负载与 GPU 编排平台，融合 GPU 感知调度、分数 GPU 分配、配额、治理与可观测性，帮助组织在多团队、多集群间高效共享 GPU 资源。
author: NVIDIA
ossDate: '2026-08-25'
featured: false
status: tracked
---

## 简介

NVIDIA Run:ai 是开源的 Kubernetes AI 工作负载与 GPU 编排平台，用于管理共享的 AI 基础设施。它在本地、云端或混合 Kubernetes 环境中提供一致的方式运行开发、训练和推理工作负载，将 GPU 调度、资源管理、工作负载编排、治理与可观测性融为一体，让组织在团队与集群之间高效共享 GPU 容量。该仓库为 monorepo，包含控制面与集群服务、集群内 Kubernetes operator/控制器、安装器、CLI、MCP 服务器、文档及共享客户端包。

## 主要特性

- 通过内置 KAI Scheduler 实现 AI 感知 GPU 调度——在 Kubernetes 之上提供公平份额、抢占、装箱、优先级与拓扑感知放置
- 动态 GPU 分配支持分数 GPU，多个工作负载可共享同一块 GPU，容量被动态复用
- 资源配额与层级策略，跨部门与项目分配 GPU 资源并强制执行组织级规则
- 多集群管理——单一控制面集中管理多个互联 Kubernetes 集群的工作负载、资源与配置
- AI 工作负载管理：工作区、训练、分布式训练与推理均为一等公民，并可扩展支持其他 Kubernetes 工作负载类型
- 基于角色的访问控制与治理，覆盖集群、节点、GPU、工作负载与平台活动的监控与可观测性
- 通过 Web UI、CLI、REST API 以及 MCP 服务器（供智能体驱动的基础设施交互）进行操作

## 使用场景

- 在多团队间共享同一套 Kubernetes GPU 资源池，兼顾公平份额保障、抢占与按部门配额
- 将开发工作区、训练、分布式训练与推理运行在同一共享 GPU 池上，利用分数分配提升利用率
- 对多集群、混合（本地/云）AI 基础设施进行集中治理与 GPU 利用率观测

## 技术特点

- 双组件架构部署于 Kubernetes：控制面（集中资源管理、工作负载提交、监控分析）连接一个或多个 Run:ai 集群；集群内 operator/控制器在原生 Kubernetes 调度之上扩展 GPU 感知能力
- 调度层运行于开源 KAI Scheduler 之上，在 `kube-scheduler`、Volcano、Kueue 能力之外补充公平份额、抢占、分数 GPU 与配额层级；GPU Operator/Network Operator 仍为节点级互补组件
- 定位在 Kubernetes/OpenShift 之上，与 ML 平台（Kubeflow、Ray、Argo Workflows）互补——平台提交工作负载，Run:ai 负责调度并治理其消耗的 GPU 容量；集成 Training Operator、LeaderWorkerSet、Knative、KServe 等工作负载类型
- Go monorepo，捆绑安装器（`runai-installer` CLI + 配置 YAML、预检、引导式部署）、CLI、MCP 服务器、共享客户端库与本地开发环境
- 支持在 Kubernetes 或 OpenShift 上联网或气隙（air-gapped）环境部署，可自托管并公开 API 参考
