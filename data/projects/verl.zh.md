---
name: verl
slug: verl
homepage: https://verl.readthedocs.io/en/latest/
repo: https://github.com/volcengine/verl
license: Unknown
category: platform-infra
subCategory: data-platforms
tags:
  - Data
  - Dev Tools
description: 用于大模型的强化学习训练框架，面向大规模 RLHF 与 agent 训练的可扩展项目。
author: 字节跳动
ossDate: '2024-10-31T06:11:15.000Z'
featured: false
status: tracked
---

## 简介

verl 是一个面向大模型的强化学习（RL）训练框架，提供高性能的 RLHF/agent 训练流水线，支持 FSDP、Megatron 等分布式后端。

## 主要特性

- 支持 PPO、GRPO、DAPO 等多种 RL 算法和训练配方
- 与 vLLM、SGLang、Hugging Face 等推理/模型生态集成
- 面向大规模多 GPU / 专家并行的可扩展实现

## 使用场景

- 训练基于 LLM 的对齐模型（RLHF）和代理（agent）
- 研究与复现强化学习训练配方与基线
- 在大规模集群上做模型性能与吞吐率调优

## 技术特点

- 支持 FSDP/FSDP2、Megatron、vLLM 后端与混合并行策略
- 可扩展的 recipe 与模块化训练流水线
- 丰富的示例、文档与社区贡献，适合生产化改造
