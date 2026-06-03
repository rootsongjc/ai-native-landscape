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
author: gpustack
ossDate: '2024-05-11T03:41:58.000Z'
featured: false
status: tracked
---

GPUStack 是一个开源的 GPU 集群管理器，能够配置和编排 vLLM、SGLang 等推理引擎，用于高性能 AI 模型部署。它将异构 GPU 资源统一为可编排的计算池，提供设备发现、资源抽象与集中调度，帮助团队提升 GPU 利用率并实现全面的运维可观测性。

## 资源管理

- 跨 CUDA 和 ROCm 栈的自动资源池化与设备发现
- 识别各 GPU 的型号、内存与驱动信息以优化部署
- 异构 GPU 支持，在单一集群中组合 NVIDIA 和 AMD 硬件
- 资源抽象层简化多 GPU 编排

## 智能调度

- 基于作业需求和优先级的调度策略
- 按请求负载动态分配 GPU，实现高性价比推理服务
- 多租户隔离，支持跨项目安全共享 GPU
- 可扩展的插件机制，用于自定义调度器和监控集成

## 可观测性与运维

- 内置指标采集与 Prometheus/Grafana 集成
- RESTful API 和 CLI 支持自动化运维管理
- 模块化架构支持调度器、监控和接入层的独立部署
- 云原生设计，与容器生态集成

## 支持的工作负载

- 多项目间安全共享 GPU 的研究和教学集群
- 编排大规模分布式训练的企业训练平台
- 需要低延迟、高吞吐推理服务的在线推理集群
- Apache-2.0 许可，提供完善的社区文档
