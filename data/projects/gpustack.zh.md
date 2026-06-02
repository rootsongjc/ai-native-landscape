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
status: tracked
---

## 简介

GPUStack 是一个开源的 GPU 集群管理器，能够配置和编排 vLLM、SGLang 等推理引擎，用于高性能 AI 模型部署。它将异构 GPU 资源统一为可编排的计算池，提供设备发现、资源抽象与集中调度，帮助团队提升 GPU 利用率并实现全面的运维可观测性。

## 主要特性

GPUStack 提供自动资源池化与设备发现功能，能够识别 CUDA 和 ROCm 栈下各 GPU 的型号、内存与驱动信息。它支持基于作业需求和优先级的智能调度策略，内置指标采集与 Prometheus/Grafana 集成，并提供可扩展的插件机制用于自定义调度器和监控集成。

## 使用场景

GPUStack 适合需要在多项目间安全共享 GPU 的研究和教学集群、编排大规模分布式训练的企业训练平台，以及需要按请求负载动态分配 GPU 以实现低延迟、高性价比推理服务的在线推理集群。

## 技术特点

GPUStack 基于云原生设计理念，与容器生态集成，提供 RESTful API 和 CLI 工具支持自动化运维。其模块化架构支持调度器、监控和接入层的独立部署，采用 Apache-2.0 许可，并提供完善的社区文档。
