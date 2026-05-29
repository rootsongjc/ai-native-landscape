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
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

EasyR1 是一个高效且可扩展的多模态强化学习（RL）训练框架，基于 veRL 的设计理念，针对大规模语言模型与视觉 - 语言模型的 RL 训练进行了工程化优化。项目集成了 HybridEngine 与 vLLM 的 SPMD 能力，提供对多种模型（如 Llama3、Qwen2/3 系列及其 VL 变体）的支持，并通过 Docker 与示例脚本降低上手门槛。

## 主要特性

- 多模态模型支持：兼容文本与视觉 - 文本模型，并支持对应的数据集格式与示例。
- 可扩展训练引擎：采用 HybridEngine 与分布式训练策略，支持多节点与多卡场景。
- 丰富的算法与技巧：内置 GRPO、DAPO、Reinforce++ 等强化学习算法与训练技巧（如 padding-free training）。
- 工程与监控：提供 Docker 镜像、日志/实验追踪（Wandb、Mlflow、Tensorboard）与容器化部署示例。

## 使用场景

EasyR1 适用于需要在大模型上进行强化学习与策略优化的研究与工程场景，包括多模态推理能力强化、知识推理任务的策略训练、以及需要在多节点环境运行的长序列训练。团队可用其复现基准、快速验证算法与在真实集群上做性能测试。

## 技术特点

- 支持 vLLM SPMD 与自定义并行策略以降低显存瓶颈。
- 提供多种数据集示例与模型合并脚本，便于在 Hugging Face 格式与本地检查点间转换。
- 面向生产的容器化流程与多节点运行指南，包含 Ray 集群与多节点示例脚本。
- 开源并采用 Apache-2.0 许可，社区活跃且有大量基于 EasyR1 的研究复现项目。
