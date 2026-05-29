---
name: NCCL
slug: nccl
homepage: https://developer.nvidia.com/nccl
repo: https://github.com/nvidia/nccl
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - AI Kernel Library
  - Inference
description: 针对多 GPU 环境的高性能集合通信库，优化 PCIe、NVLink、NVSwitch 与 RDMA 网络下的带宽与延迟。
logo: ''
author: NVIDIA
ossDate: '2015-06-01T00:00:00.000Z'
featured: false
status: tracked
---

## 简介

NCCL（NVIDIA Collective Communication Library）是一套为 GPU 设计的高性能集合通信例程库，提供 all-reduce、all-gather、reduce、broadcast、reduce-scatter 以及点对点通信模式。它针对 PCIe、NVLink、NVSwitch 与基于 RDMA 的网络（如 InfiniBand）进行优化，能够高效地在单机或多机环境中进行多 GPU 间的数据交换与模型并行通信。

## 主要特性

- 高带宽通信：在多种互连（PCIe、NVLink、NVSwitch、InfiniBand）上达到高吞吐量。
- 丰富的集合操作：支持 all-reduce、all-gather、reduce、broadcast、reduce-scatter 等常见通信原语。
- 可扩展性：支持任意数量的 GPU，适用于单进程或多进程（如 MPI）场景。
- 跨语言绑定与工具链：包含对多种语言/框架的集成示例与测试套件（例如 nccl-tests）。

## 使用场景

- 分布式训练：在数据并行或模型并行训练中作为底层通信层，显著提升梯度聚合与参数同步效率。
- 多 GPU 推理：在大规模推理集群中协调模型并行或分布式推理任务的数据传输。
- 高性能计算（HPC）：需要在 GPU 间进行高带宽低延迟通信的科学计算与工程模拟。

## 技术特点

- 面向 GPU 的通信优化：针对 CUDA 环境和 GPU 互连链路做低级别优化。
- 自动拓扑适配：能够利用可用互连拓扑（如 NVLink）来选择最优通信路径。
- 轻量级接口：提供易于集成的 C/C++ 接口及构建脚本，支持通过 Make/CMake 构建与打包。
