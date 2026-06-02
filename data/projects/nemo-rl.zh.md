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

## 简介

NeMo RL 是 NVIDIA NeMo 生态中的可扩展后训练强化学习工具库，面向大语言模型与多模态模型提供高性能、可复现的训练与评估流水线。项目通过模块化组件设计，兼顾学术研究与生产部署的需求。

## 主要特性

支持 GRPO、DPO、SFT、奖励建模等多种后训练范式，并提供开箱即用的示例配置。兼容 DTensor、Megatron Core、vLLM 等多种高性能训练与生成后端，实现高效分布式训练。采用可扩展的模块化架构，支持自定义环境、算法与并行策略的灵活集成。

## 使用场景

对大模型进行强化学习微调与后训练，提升多轮对话与工具调用场景下的表现。在集群或云环境中运行大规模训练实验，利用 Megatron 或 DTensor 满足长序列与大模型训练需求。用于学术研究与教学，复现论文实验、对比算法效果并开展性能基准测试。

## 技术特点

基于 Python 实现，支持张量并行、流水线并行、上下文并行、序列并行及 FSDP 等高级分布式并行策略。集成 Ray 进行任务调度与资源隔离，支持多环境并行训练。提供配置驱动接口与命令行工具，附带示例脚本便于快速上手与实验复现。
