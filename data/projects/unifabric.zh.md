---
name: Unifabric
slug: unifabric
homepage: null
repo: https://github.com/unifabric-io/unifabric
license: Apache-2.0
category: platform-infra
subCategory: cloud-native-ai
tags:
  - Observability
  - Networking
  - RDMA
  - Kubernetes
  - Cloud Native
description: 面向 AI 集群高速网络的云原生可观测性系统，覆盖 RDMA、RoCE/InfiniBand 和 NVLink，并将网络流量归因到 Kubernetes 工作负载。
author: unifabric-io
ossDate: '2026-04-19T15:41:54Z'
featured: false
status: tracked
---

## 简介

Unifabric 为云原生 AI 集群的三张高速网络提供可观测性：跨节点 GPU 通信的 scale-out 网络（RoCE 或 InfiniBand）、节点内 GPU 互联的 scale-up 网络（NVLink）以及高速存储网络。它实时发现物理组网拓扑，采集 RDMA 流量指标并归因到 Pod，主动探测网络健康，并以统一的 Kubernetes 资源模型（CRD、Node 标签和指标）呈现结果，不受硬件厂商限制。

## 主要特性

- **拓扑发现**：实时探测 scale-out、scale-up 和存储网络中主机、交换机等设备之间的连接，发布 `Topology` CRD，并在 Grafana 中交互式呈现整个组网
- **面向调度的分层 Node 标签**：将每个节点在网络中的位置（leaf、spine 等层级）写入 Node 标签，Kueue TAS、Volcano 和 KAI Scheduler 可直接消费，把通信密集型任务放置在同一交换机域内
- **高速网络流量可观测**：通过读取网卡计数器和交换机指标采集 RDMA 吞吐、拥塞和错误指标，并将交换机侧 RDMA 流量关联到具体 Pod 和工作负载
- **网络健康检查**：持续采集 LLDP 就绪状态、交换机连通性和探测结果，在工作负载报错之前主动暴露链路和配置问题

## 使用场景

- **训练/推理变慢定位**：当任务变慢时，在工作负载层面关联链路上的 RDMA 指标（交换机、Pod 网卡），找到通信热点和带宽占用方
- **大规模集群巡检**：持续掌握链路和交换机健康状况，无需逐台设备排查
- **拓扑感知调度**：将组网拓扑标签输出给 Kueue/Volcano，缩短通信路径，提升训练和推理效率

## 技术特点

- 通过 eBPF 探针挂载到 verbs 库的提交路径，为 CPU 发起的 RDMA 通信重建 Pod 级 RDMA 流（谁和谁通信、何时、每次发送多少），无需修改应用——绕开 RDMA 绕过内核协议栈、网卡只暴露聚合计数器的限制
- 拓扑发现基于 LLDP，支持通用 SONiC RoCE 交换机，并支持 NVIDIA Spectrum-X 及从 NVIDIA Topograph 导入的 InfiniBand 拓扑；裸金属和云环境均可运行
- 以 Kubernetes CRD、Node 标签和指标形式暴露结果，配套预置 Grafana 仪表盘
- NVLink 流量指标和主动网络路径探测（链路劣化检测）在路线图中
