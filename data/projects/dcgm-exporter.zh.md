---
name: NVIDIA DCGM Exporter
slug: dcgm-exporter
homepage: https://docs.nvidia.com/datacenter/dcgm/latest/gpu-telemetry/dcgm-exporter.html
repo: https://github.com/NVIDIA/dcgm-exporter
license: Apache-2.0
category: platform-infra
subCategory: gpu-observability-cost
tags:
  - GPU Monitoring
  - GPU Telemetry
  - Prometheus
description: '基于 NVIDIA Data Center GPU Manager（DCGM）的 Prometheus 导出器，用于采集 NVIDIA GPU 遥测数据。'
author: NVIDIA
ossDate: '2021-08-11T15:40:37.000Z'
featured: false
status: tracked
---

## 简介

DCGM Exporter 借助 DCGM 以 Prometheus 格式暴露 NVIDIA GPU 指标。在 Kubernetes 中，它能把 GPU 指标关联到使用该设备的 Pod 和容器，是仪表盘、告警与弹性伸缩所用 GPU 利用率数据的事实标准来源。

## 主要特性

- 提供利用率、显存、温度、功耗与硬件错误等指标
- 在 Kubernetes 中按 Pod 与容器归属指标
- 通过 CSV 采集配置文件自定义指标集
- 随 NVIDIA GPU Operator 分发，并提供参考 Grafana 仪表盘

## 使用场景

- 使用 Prometheus 与 Grafana 监控 GPU 集群
- 基于 GPU 利用率驱动弹性伸缩或成本分摊

## 技术特点

- 使用 DCGM Go 绑定实现的 Go 导出器
- 可作为 DaemonSet 或独立容器运行
