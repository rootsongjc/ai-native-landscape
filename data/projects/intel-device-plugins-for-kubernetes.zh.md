---
name: Intel Device Plugins for Kubernetes
slug: intel-device-plugins-for-kubernetes
homepage: https://intel.github.io/intel-device-plugins-for-kubernetes/
repo: https://github.com/intel/intel-device-plugins-for-kubernetes
license: Apache-2.0
category: platform-infra
subCategory: heterogeneous-compute-scheduling
tags:
  - Device Plugin
  - Heterogeneous Computing
  - Kubernetes
description: '一组 Kubernetes 设备插件及 Operator，将 Intel GPU、FPGA、QAT 等加速器暴露为可调度资源。'
author: Intel
ossDate: '2018-05-14T22:30:06.000Z'
featured: false
status: tracked
---

## 简介

该项目为 Intel 硬件提供设备插件，使 Kubernetes 负载可以申请 Intel GPU 及其他加速器。Operator 负责插件的部署管理，GPU 插件支持多个容器共享同一设备。

## 主要特性

- 提供 Intel GPU、FPGA、QAT、SGX、DSA、DLB、IAA 等设备插件
- 通过 Operator 声明式部署并管理生命周期
- GPU 插件支持设备共享模式
- 与 Node Feature Discovery 集成进行节点打标

## 使用场景

- 在 Kubernetes 中使用 Intel GPU 运行推理或媒体负载
- 管理多厂商加速器混合集群

## 技术特点

- 使用 Go 实现 Kubernetes 设备插件接口
- 各插件以 DaemonSet 形式运行在具备对应硬件的节点上
