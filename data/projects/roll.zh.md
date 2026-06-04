---
name: ROLL
slug: roll
homepage: https://alibaba.github.io/ROLL/
repo: https://github.com/alibaba/roll
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - Framework
description: 用于大规模强化学习优化与训练流水线的框架，支持多后端与 Agentic 训练。
author: Alibaba
ossDate: '2025-05-28T11:27:18.000Z'
featured: false
status: tracked
---

ROLL（Reinforcement Learning Optimization at Large scale）是阿里巴巴开发的开源大规模强化学习优化平台，专为 LLM 的 RLHF 训练和强化学习实验而设计。它提供从数据准备、模型训练到部署推理的完整工作流，支持多种分布式训练框架和推理后端。

## RLHF 训练流水线

- 完整的 RLHF 训练流程，包括奖励模型训练、PPO 策略优化、参考模型管理等关键步骤
- 支持 PPO、DPO、RLOO 等多种强化学习算法，满足不同实验需求
- 内置 Agentic 异步并行框架，高效管理多个模型的并行训练和推理
- 分布式数据处理能力，高效准备大规模 RLHF 数据集

## 后端与资源管理

- 后端无关设计，支持 Megatron-LM、DeepSpeed、vLLM 等多种分布式框架
- 智能 GPU 和内存资源分配，优化训练过程中的资源利用率
- 模块化流水线组件，各部分可独立替换和升级
- 支持 NVIDIA GPU、AMD GPU 等多种硬件加速方案

## 可观测性与运维

- 实时指标可视化和实验对比面板
- 检查点管理与断点续训支持，保障长时间训练任务的稳定性
- 高效的通信优化，在大规模分布式环境中稳定运行
- 详细的实验跟踪和监控工具，适用于生产级 RLHF 工作流
