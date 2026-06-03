---
name: AReaL
slug: areal
homepage: https://inclusionai.github.io/AReaL/
repo: https://github.com/inclusionai/areal
license: Apache-2.0
category: training-optimization
subCategory: finetuning-alignment
tags:
  - Framework
  - RLHF
  - Training
description: 一个面向大规模推理与智能体模型的全异步强化学习训练系统，强调可扩展性与工程复现能力。
author: 蚂蚁集团
ossDate: '2025-02-24T07:23:43Z'
featured: false
status: tracked
---
AReaL 是一个面向大规模推理模型与智能体训练的全异步强化学习系统，由 inclusionAI 社区维护并与蚂蚁集团、清华等学术机构合作开发。项目提供从算法到系统的协同设计，使训练在单节点到千卡级集群间平滑扩展。

## 核心能力

- **全异步训练流水线**，解耦回放与训练，最大化硬件利用率
- **丰富的算法库**，包括 GRPO、GSPO、LitePPO，并提供可复现的实验配置
- **多后端支持**，兼容 Ray、Megatron、PyTorch FSDP 分布式训练框架
- **可组合的智能体回放**，支持工具调用、多步推理与 RAG 式工作流
- **AReaL-lite** 轻量模式，适用于资源受限环境下的快速原型验证

## 研究与复现

- 公开数据集、训练模型与完整训练方案，配合源代码发布
- 标准化基准配置，便于 RL 算法横向对比
- Apache-2.0 开源许可，提供完整文档便于工程化集成
- 与清华大学等学术机构联合开发

## 应用场景

- 在 GPU 集群上高效训练大规模推理与智能体模型
- 构建多回合智能体或搜索智能体，利用异步回放加速迭代
- 开发工具集成的推理管道，在快速迭代中验证效果
- 使用 AReaL-lite 在有限资源下快速试验新算法
