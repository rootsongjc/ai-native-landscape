---
name: Kueue
slug: kueue
homepage: https://kueue.sigs.k8s.io
repo: https://github.com/kubernetes-sigs/kueue
license: Apache-2.0
category: platform-infra
subCategory: heterogeneous-compute-scheduling
tags:
  - Job Queueing
  - Batch Scheduling
  - Kubernetes
description: 'Kubernetes 原生的作业排队系统，负责配额管理，并决定批处理、AI 与 HPC 作业何时被准入集群。'
author: Kubernetes SIGs
ossDate: '2022-02-16T05:52:19.000Z'
featured: false
status: tracked
---

## 简介

Kueue 是一组用于在 Kubernetes 上进行作业排队的 API 与控制器。它依据配额和公平共享决定作业何时启动或被抢占，Pod 的具体放置仍交给常规调度器。它被广泛用于在多个团队之间共享 GPU 资源。

## 主要特性

- ClusterQueue 与 LocalQueue，可按资源规格设置配额
- 同一 Cohort 内的配额借用与抢占，支持公平共享
- 用资源规格（Resource Flavor）描述不同 GPU 型号、竞价与按需等差异
- 集成 Job、JobSet、Kubeflow、Ray 等负载 API
- 通过 MultiKueue 跨集群分发作业

## 使用场景

- 以保障配额加可借用配额的方式在团队间共享 GPU 集群
- 在加速器紧张时对训练作业排队

## 技术特点

- 工作在准入层，与 kube-scheduler 互补而非替代
- Kubernetes SIG Scheduling 子项目，使用 Go 编写
