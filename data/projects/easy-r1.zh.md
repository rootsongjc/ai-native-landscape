---
name: EasyR1
slug: easy-r1
homepage: https://verl.readthedocs.io/en/latest/index.html
repo: https://github.com/hiyouga/easyr1
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - ML Platform
  - Training
description: EasyR1 是一个高效、可扩展的多模态强化学习训练框架，基于 veRL 设计并支持大模型与视觉 - 语言模型的训练与评估。
logo: ''
author: hiyouga
ossDate: '2025-02-22T04:17:31Z'
featured: false
status: tracked
---

## 简介

EasyR1 是一个基于 veRL 的高效、可扩展多模态强化学习训练框架，专为推理模型优化。它集成了 HybridEngine 与 vLLM SPMD 等工程化优化，支持大规模语言模型与视觉-语言模型的 RL 训练与评估。

## 主要特性

- 多模态模型支持：兼容文本与视觉-文本模型及其数据集格式。
- 可扩展训练引擎：采用 HybridEngine 与分布式策略，支持多节点与多卡场景。
- 丰富的算法：内置 GRPO、DAPO、Reinforce++ 等算法及 padding-free training 等优化技巧。
- 工程与监控：提供 Docker 镜像及 Wandb、MLflow、Tensorboard 实验追踪集成。

## 使用场景

- 通过 RL 策略优化提升大模型的多模态推理能力。
- 训练与评估奖励模型，复现 RL 基线以验证研究假设。
- 在多节点集群上运行大规模实验，进行性能基准测试与生产部署验证。

## 技术特点

- 支持 vLLM SPMD 与自定义并行策略以降低显存瓶颈。
- 提供数据集示例与模型合并脚本，便于 Hugging Face 检查点互操作。
- 容器化部署方案与 Ray 多节点示例脚本，支持云原生执行。
