---
name: Kepler
slug: kepler
homepage: https://sustainable-computing.io
repo: https://github.com/sustainable-computing-io/kepler
license: Apache-2.0
category: platform-infra
subCategory: gpu-observability-cost
tags:
  - GPU Monitoring
  - Cost Optimization
  - Kubernetes
description: 'CNCF 沙箱项目，以 Prometheus 导出器的形式度量 Kubernetes 负载在 CPU 与 GPU 上的能耗。'
author: Sustainable Computing
ossDate: '2022-02-01T19:48:56.000Z'
status: tracked
---

## 简介

Kepler（Kubernetes-based Efficient Power Level Exporter）在节点、Pod、容器和进程层面估算能耗，并以 Prometheus 指标导出。它读取 CPU 的 RAPL、GPU 的 NVML 等硬件功耗来源，为运维人员补上算力成本中的能耗维度。

## 主要特性

- 将能耗指标归属到节点、Pod、容器与进程
- 通过 RAPL 获取 CPU 功耗，通过 NVML 获取 GPU 功耗
- 提供 Prometheus 指标与 Grafana 仪表盘
- 支持以 Operator 和 Helm 部署

## 使用场景

- 跟踪 AI 负载的能耗成本
- 为集群输出可持续性指标

## 技术特点

- 使用 Go 编写，以 DaemonSet 形式部署
- 按资源利用率比例分摊功耗读数
