---
name: Apache YuniKorn
slug: yunikorn
homepage: https://yunikorn.apache.org/
repo: https://github.com/apache/yunikorn-core
license: Apache-2.0
category: platform-infra
subCategory: heterogeneous-compute-scheduling
tags:
  - Batch Scheduling
  - Job Queueing
  - Kubernetes
description: '面向 Kubernetes 上批处理、数据与机器学习负载的通用资源调度器，以层级队列与配额为核心。'
author: Apache Software Foundation
ossDate: '2019-06-13T15:18:08.000Z'
featured: false
status: tracked
---

## 简介

Apache YuniKorn 是独立的资源调度器，可替代默认 Kubernetes 调度器或与之并存，用于批处理类负载。它为运行 Spark、Ray 和 GPU 训练作业的集群带来层级队列、资源公平与 Gang 调度。

## 主要特性

- 支持保障配额与最大配额的层级队列
- 跨队列的公平、优先级与抢占策略
- Gang 调度，保证作业成员同时启动
- 支持 GPU 等扩展资源的调度

## 使用场景

- Kubernetes 上的多租户批处理与机器学习平台
- 将 YARN 风格的队列管理迁移到 Kubernetes

## 技术特点

- `yunikorn-core` 是与平台无关的调度核心，通过 Kubernetes shim 对接集群
- 使用 Go 编写，由 Apache 软件基金会治理
