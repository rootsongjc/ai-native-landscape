---
name: AgentENV
slug: agentenv
homepage: https://kvcache-ai.github.io/AgentENV/
repo: https://github.com/kvcache-ai/AgentENV
license: MIT
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Agent Environment
  - Sandbox
  - MicroVM
  - Firecracker
  - Agentic RL
description: 分布式智能体环境运行平台，支撑 Kimi K3 的智能体强化学习训练。
author: kvcache-ai
ossDate: '2026-07-23T02:48:07Z'
featured: false
status: tracked
---

## 简介

AgentENV（AENV）是开源的分布式智能体环境运行平台，可在多机上大规模运行基于 Firecracker 的微虚拟机环境，支撑 Kimi K3 的智能体强化学习训练。

## 主要特性

- **跨环境大规模运行**：通过 overlaybd 按需加载 OCI 镜像，集群级运行海量 Firecracker 环境；本地磁盘作为有界缓存淘汰冷数据，镜像可超出磁盘容量且无需预热每台主机
- **闲置环境低成本**：基于快照的环境启动或恢复低于 50 ms，暂停低于 100 ms；闲置环境释放 CPU 与内存，新任务到达时再恢复
- **原生快照与 Fork**：在高强度磁盘修改下增量完成内存与文件系统快照低于 100 ms；运行中的环境可 fork 为多个独立沙箱，支撑并行智能体工作流
- **长期高密度**：通过 ublk 提供高性能 I/O 并共享宿主机页缓存；内存气球机制回收可回收的客户机内存，维持高超额分配
- **E2B 兼容 API**：将 `E2B_API_URL` 指向服务端，即可直接使用标准 E2B Python / TypeScript SDK，无需改动代码

## 使用场景

- 大规模智能体强化学习训练
- 通过环境 Fork 实现并行智能体工作流
- 面向编程智能体的高密度沙箱化代码执行
- 需要快照持久化的长期运行智能体环境

## 技术特点

- 基于 Firecracker 微虚拟机，需 Linux 内核 6.8+ 及 `/dev/kvm` 访问权限
- 快照可持久化到 S3 兼容对象存储或共享分布式文件系统
- 提供 `aenv` CLI 与服务端，支持 systemd、Docker、Docker Compose 或 Kubernetes 部署
