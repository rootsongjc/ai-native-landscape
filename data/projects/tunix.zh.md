---
name: Tunix
slug: tunix
homepage: https://pypi.org/project/tunix/
repo: https://github.com/google/tunix
license: Apache-2.0
category: training-optimization
subCategory: finetuning-alignment
tags:
  - FineTune
  - Framework
  - ML Platform
  - Training
description: Tunix 是一个基于 JAX 的 LLM 后训练库，提供高效的微调、强化学习训练与知识蒸馏工具。
author: Google
ossDate: '2025-09-30T00:00:00+08:00'
featured: false
status: tracked
---

## 简介

Tunix 是一个面向 LLM 后训练（post-training）的 JAX 原生库，旨在简化模型微调、偏好学习与强化学习训练流程，支持分布式与 TPU 加速的训练场景。

## 主要特性

- 支持全量权重微调与参数高效微调（LoRA / Q-LoRA）。
- 提供 PPO、GRPO、Token-level GSPO 等强化学习算法与 DPO 偏好微调方法。
- 高度模块化与可组合的组件设计，便于扩展训练流水线与算法。
- 针对 TPU 与分布式环境做了性能优化。

## 使用场景

- 在学术或工程中对 LLM 进行后训练与蒸馏以提升特定任务性能。
- 使用 TPUs 或多卡集群做大规模微调与 RL 训练实验。
- 构建可复现的训练示例与教学教程。

## 技术特点

- 基于 JAX/Flax 实现，兼容常见模型与训练范式，提供详尽的示例 notebooks。
- 支持从 PyPI 安装或直接从 GitHub 源码运行，采用 Apache-2.0 许可证。
