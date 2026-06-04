---
name: TorchTitan
slug: torchtitan
homepage: https://pytorch.org/
repo: https://github.com/pytorch/torchtitan
license: BSD-3-Clause
category: training-optimization
subCategory: training-frameworks
tags:
  - ML Platform
description: 面向生成式模型预训练与分布式优化的 PyTorch 平台参考实现。
author: PyTorch
ossDate: '2023-12-13T01:51:37.000Z'
featured: false
status: tracked
---

TorchTitan 是 PyTorch 官方提供的生产级大规模模型训练平台，专为生成式模型的预训练和分布式优化而设计。它提供完整的参考实现，展示如何利用 PyTorch 的分布式训练能力构建生产级模型训练系统，内置 Llama 3.1 等主流模型的训练示例。

## 并行策略

- FSDP2（完全分片数据并行），在数千个 GPU 上实现内存高效的分布式训练
- Tensor Parallel，将单个模型层拆分到多个设备上
- Context Parallel，处理训练中的超长序列长度
- Pipeline Parallel，将模型深度分区到多个阶段
- 可组合的并行策略，允许按工作负载灵活组合

## 训练基础设施

- 完整的训练脚本和配置系统，支持灵活的超参数调整
- 高效的数据加载器和检查点管理，支持断点续训和容错恢复
- 混合精度训练、梯度检查点和激活函数检查点等内存优化技术
- 性能监控和调优工具，帮助优化训练吞吐量

## 工程设计

- 深度集成 PyTorch 2.x 分布式原语，实现最大性能
- 模块化架构，团队可按需选择和组合并行策略
- 代码注重可读性和可维护性，同时适合学习与二次开发
- 支持单机多卡、多节点集群和云环境等多种运行场景
