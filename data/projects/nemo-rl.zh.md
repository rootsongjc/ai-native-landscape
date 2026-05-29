---
name: NeMo RL
slug: nemo-rl
homepage: https://docs.nvidia.com/nemo/rl/latest/index.html
repo: https://github.com/nvidia-nemo/rl
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - Deployment
  - ML Platform
  - Training
description: NeMo RL 是一个面向大模型的可扩展后训练强化学习库，支持高性能分布式训练与多样化后端。
logo: ''
author: NVIDIA NeMo
ossDate: '2025-03-16T17:43:21Z'
featured: false
status: tracked
---

## 详细介绍

NeMo RL（NVIDIA NeMo RL）是 NVIDIA NeMo 生态中用于强化学习后训练（post-training）的可扩展工具库，旨在为大语言模型（LLM）及多模态模型提供高性能、可复现的训练与评估流水线。项目支持多种训练与生成后端（如 DTensor、Megatron、vLLM），并通过模块化子组件（如 `nemo_rl`、`examples`、`research`）满足研究与工程化部署需求。

## 主要特性

- 后训练（post-training）支持：包含 GRPO、DPO、SFT、RM 等训练范式与示例。
- 多后端兼容：支持 DTensor、Megatron Core、vLLM 等高性能训练/生成后端。
- 可扩展架构：模块化设计便于集成自定义环境、算法与并行策略。
- 企业级文档与示例：提供详尽的文档与实用示例，包含集群部署与性能调优指南。

## 使用场景

- 在大模型上进行强化学习微调与后训练，以提升模型在多回合任务与工具使用场景下的表现。
- 在集群或云环境中运行大规模训练实验，利用 Megatron 或 DTensor 达到长序列与大模型训练需求。
- 研究与教学：复现论文实验、比较算法效果、进行性能基准测试。

## 技术特点

- 基于 Python 实现，兼容主流深度学习工具链并支持分布式并行（TP/PP/CP/SP/FSDP 等）。
- 集成 Ray 用于任务调度与隔离，支持多环境并行训练与资源隔离。
- 提供命令行与配置驱动接口，并包含示例脚本用于快速上手与复现实验。
