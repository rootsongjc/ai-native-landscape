---
name: Volcano
slug: volcano
homepage: https://volcano.sh/
repo: https://github.com/volcano-sh/volcano
license: Unknown
category: platform-infra
subCategory: cloud-native-ai
tags:
  - Dev Tools
  - Orchestration
description: Volcano 是一个 CNCF 下的 Kubernetes 原生批处理调度系统，专为 AI/大数据/HPC 等批量与弹性任务提供高级调度能力。
author: volcano-sh
ossDate: '2019-06-01T00:00:00.000Z'
featured: false
status: tracked
---

## 简介

Volcano 是一个面向 Kubernetes 的批处理调度系统，扩展了 kube-scheduler 的能力以支持批量作业、弹性训练与高性能计算场景。它在大规模 AI/ML 与大数据作业调度方面提供丰富的策略与插件生态，便于集群资源的高效利用。

## 主要特性

- 丰富的调度策略与插件化设计，支持拓扑感知、优先级与抢占等功能。
- 与 Spark、Flink、MPI、Horovod 等框架集成良好。
- 支持 Helm 一键安装与 YAML 快速部署。

## 使用场景

- 大规模离线训练与批处理作业的统一调度。
- 提升 GPU/CPU 资源利用率，避免碎片化。
- 与云厂商/厂内平台集成做为自定义调度器。

## 技术特点

- 基于 Kubernetes CRD 与控制器扩展，兼容云原生生态。
- 面向生产的高可用与扩展性设计。
