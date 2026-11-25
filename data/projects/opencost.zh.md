---
name: OpenCost
slug: opencost
homepage: https://opencost.io
repo: https://github.com/opencost/opencost
license: Apache-2.0
category: platform-infra
subCategory: gpu-observability-cost
tags:
  - FinOps
  - Cost Optimization
  - Kubernetes
description: '厂商中立的 CNCF 项目，用于实时监控并分摊 Kubernetes 负载与云支出成本，包括 GPU 成本。'
author: OpenCost
ossDate: '2019-03-27T21:49:05.000Z'
status: tracked
---

## 简介

OpenCost 实时度量并分摊 Kubernetes 负载的基础设施成本。它按命名空间、负载和标签拆分 CPU、内存、存储、网络与 GPU 成本，常被用作 GPU 成本分摊与展示的基础。

## 主要特性

- 按集群、命名空间、控制器、Pod 和标签实时分摊成本
- 在 CPU、内存、存储、网络之外支持 GPU 成本分摊
- 对接主流云账单，并支持为自建集群自定义定价
- 提供 Prometheus 指标、API 和内置界面

## 使用场景

- 向各团队展示其 GPU 负载的成本
- 发现闲置或过度配置的加速器资源

## 技术特点

- 实现了开放的 OpenCost Kubernetes 成本监控规范
- CNCF 孵化项目，使用 Go 编写，最初由 Kubecost 创建
