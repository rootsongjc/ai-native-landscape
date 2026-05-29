---
name: gpustack
slug: gpustack
homepage: https://gpustack.ai
repo: https://github.com/gpustack/gpustack
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Dev Tools
  - ML Platform
description: 面向 GPU 集群管理与训练与推理编排的开源平台，聚焦资源利用率与运维可观测性。
logo: ''
author: gpustack
ossDate: '2024-05-11T03:41:58.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

gpustack 是面向 GPU 资源管理与推理/训练编排的开源平台，致力于把分散在多台服务器或机架的 GPU 统一成可编排、可观测的计算池，从而提升模型训练与在线推理的利用率和运维效率。

## 详细介绍

gpustack 通过设备发现、资源抽象与集中调度，将异构 GPU 资源整合为统一的计算池。平台支持作业声明式提交、优先级与配额控制，并提供实时指标与告警链路，便于在大规模场景下进行容量规划与异常排查。对于需要同时管理训练与推理混合负载的团队，gpustack 能以最小人工干预实现资源隔离与弹性伸缩。

## 主要特性

- 资源池化与设备自动发现：自动识别 GPU 型号、内存与驱动，支持 CUDA/ROCm 等栈。
- 智能调度：基于作业需求、优先级与预留策略的调度器，提升资源利用率并减少等待时间。
- 可观测性：内置指标采集、作业视图与历史统计，支持 Prometheus/Grafana 集成。
- 插件化扩展：自定义调度策略、作业生命周期 Hook 与监控插件，便于与现有平台适配。

## 使用场景

- 研究/教学集群：集中管理多项目共享的 GPU 资源，避免显存/卡位冲突。
- 企业训练平台：对大规模分布式训练任务进行资源编排与成本控制。
- 在线推理集群：动态按负载分配推理实例，支持低延迟的 GPU 加速服务。

## 技术特点

gpustack 基于云原生设计理念，与 Kubernetes 及容器生态集成，提供 RESTful API 与 CLI 工具便于自动化；同时兼顾高可用与可扩展性，采用模块化组件（调度、监控、接入层）便于按需部署与灰度演进。项目使用 Apache-2.0 许可并在 GitHub 上开源，官网提供部署文档与社区支持。
