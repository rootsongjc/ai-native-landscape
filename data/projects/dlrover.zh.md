---
name: DLRover
slug: dlrover
homepage: https://pypi.org/project/dlrover/
repo: https://github.com/intelligent-machine-learning/dlrover
license: Apache-2.0
category: training-optimization
subCategory: training-frameworks
tags:
  - Dev Tools
  - Framework
  - ML Platform
description: DLRover 是一个自动化的分布式深度学习系统，提供弹性调度、闪电检查点与自动伸缩，简化大规模模型在 Kubernetes/Ray 上的训练与运维。
author: Intelligent Machine Learning
ossDate: '2022-06-24T09:31:07.000Z'
featured: false
status: tracked
---
## 详细介绍

DLRover 是一款面向工业级大规模训练的自动化分布式深度学习系统，旨在减少训练中断、提高资源利用率并加快故障恢复，支持在 Kubernetes 或 Ray 集群上无缝运行。

## 主要特性

- 故障恢复与容错：自动诊断并重启失败进程，减少训练中断时间。
- Flash Checkpoint：将检查点异步持久化并支持内存级快速恢复，秒级恢复大模型训练状态。
- 自动伸缩与调度：按需扩缩容、动态分片以缓解慢节点和提升吞吐。

## 使用场景

- 大规模 LLM / 模型训练的生产化编排与运维。
- 在 K8s/Ray 集群上需要弹性调度、容错与快速恢复的分布式训练任务。
- 需要减少 I/O 开销与加快 checkpoint/恢复流程的场景。

## 技术特点

- 以 Python 为主实现，辅以 Go/C++ 等组件，支持多种训练框架与并行库（DDP、FSDP、DeepSpeed、Megatron-LM）。
- 提供丰富的教程与示例（弹性调度、节点检测、Flash Checkpoint 等），便于集成到现有训练流水线。
