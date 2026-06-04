---
name: HAMi
slug: hami
homepage: https://project-hami.io
repo: https://github.com/project-hami/hami
license: Apache-2.0
category: inference-serving
subCategory: model-serving
tags:
  - Deployment
  - Inference Service
  - Middleware
description: HAMi 是一款面向异构 AI 计算的虚拟化中间件，提供统一的资源抽象、调度与管理能力，便于在多种加速器与集群环境中部署 AI 工作负载。
author: Project-HAMi
ossDate: '2021-09-14T11:51:49.000Z'
featured: false
status: tracked
---

## 详细介绍

HAMi（Heterogeneous AI Computing Virtualization Middleware）是一款用于在多种异构加速器与集群环境中统一管理和调度 AI 计算资源的中间件。它通过抽象化硬件差异、提供一致的资源接口和虚拟化能力，简化了对 GPU、NPU、Ascend 等加速卡的编排和隔离，提升了集群资源利用率与运行效率。

## 主要特性

- 统一资源抽象：对不同厂商和型号的加速器提供一致的资源表示与能力发现。
- 异构调度与隔离：支持基于拓扑、性能和租户隔离的智能调度策略。
- 集群友好：可与 Kubernetes 等编排系统集成，支持弹性伸缩与多租户场景。
- 开源许可：采用 Apache-2.0 许可，便于社区协作与企业采用。

## 使用场景

- 大规模训练与推理集群：在包含多种加速器的集群中统一调度训练作业与推理服务。
- 云原生部署：与容器编排平台集成，为 AI 服务提供加速器虚拟化能力。
- 边缘与混合云：在异构边缘设备与私有云中协调资源以满足性能与成本平衡。

## 技术特点

- 虚拟化中间件架构：通过抽象层将底层硬件能力暴露为可编程的接口，降低上层框架的适配成本。
- 支持多种后端与插件：便于接入不同厂商驱动与监控采集器。
- 社区驱动的开发与生态：活跃的开源社区与丰富的集成示例，推进跨平台互操作性。
