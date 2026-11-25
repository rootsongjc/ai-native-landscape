---
name: Koordinator
slug: koordinator
homepage: https://koordinator.sh
repo: https://github.com/koordinator-sh/koordinator
license: Apache-2.0
category: platform-infra
subCategory: heterogeneous-compute-scheduling
tags:
  - GPU Scheduling
  - Batch Scheduling
  - Kubernetes
description: '基于 QoS 的 Kubernetes 调度系统，支持微服务、大数据与 AI 负载混部，并提供精细化的 GPU 与异构设备调度。'
author: Koordinator
ossDate: '2022-03-16T07:14:48.000Z'
featured: false
status: tracked
---

## 简介

Koordinator 是 CNCF 沙箱项目，为负载混部扩展了 Kubernetes 调度能力。面向 AI 负载，它提供设备感知调度，包括 GPU 共享、GPU 与 RDMA 网卡联合分配、Gang 调度和弹性配额，并支持多厂商加速器。

## 主要特性

- 面向混部负载的 QoS 等级与资源超卖
- 支持 GPU、RDMA 等异构加速设备的调度
- Gang 调度、弹性配额与网络拓扑感知放置
- 通过 koordlet 实现节点级隔离与干扰抑制

## 使用场景

- 在共享集群上同时运行在线服务与 AI 作业
- 调度需要拓扑对齐设备的 GPU 作业

## 技术特点

- 基于 Kubernetes 调度框架构建，并配有节点代理
- 源自阿里巴巴大规模混部实践
