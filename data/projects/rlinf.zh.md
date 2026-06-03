---
name: RLinf
slug: rlinf
homepage: null
repo: https://github.com/rlinf/rlinf
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - Framework
  - Training
description: RLinf 是一个灵活可扩展的开源强化学习基础设施，专为具身智能和智能体 AI 设计，支持 PPO、GRPO、SAC 等多种 RL 训练流程，可无缝扩展至大规模 GPU 集群。
author: RLinf Team
ossDate: '2025-08-15T00:00:00.000Z'
featured: true
status: tracked
---

## 详细介绍

RLinf 是一个灵活且可扩展的开源强化学习基础设施，专为具身智能和智能体 AI 设计。名称中的 "inf" 代表 Infrastructure（基础设施），强调其作为下一代训练系统骨干的定位；同时也代表 Infinite（无限），象征系统对开放式学习、持续泛化和智能发展无限可能的支持。该项目由清华大学团队主导开发，已发布 v0.2 版本，在生产环境中被多家领先企业和初创公司采用。

## 主要特性

- 高灵活性：支持多种 RL 训练流程（PPO、GRPO、SAC、DAPO 等），隐藏分布式编程复杂度。
- 高性能：混合执行模式在具身 RL 场景下相比现有框架实现最高 2.434 倍吞吐提升。
- 多后端集成：支持 FSDP + HuggingFace/SGLang/vLLM 快速原型开发，以及 Megatron + SGLang/vLLM 大规模高效训练。
- 全面的环境支持：覆盖 ManiSkill、LIBERO、RoboTwin、IsaacLab、CALVIN 等仿真器，以及 Franka、XSquare Turtle2 等真实机器人。
- 智能体 RL：支持 SearchR1、rStar2 等智能体在线强化学习，以及 WideSeek-R1 多智能体 RL。

## 使用场景

- 具身智能机器人的 RL 训练与微调，包括 VLA 模型（π₀、π₀.₅、OpenVLA 等）的策略优化。
- 真实世界机器人在线 RL 训练，支持 Franka、Turtle2 等硬件平台。
- 智能体 AI 的在线强化学习，如搜索推理（SearchR1、rStar2）和多智能体协作（WideSeek-R1）。
- 基于世界模型的 VLA 后训练，如 WoVR 和 Wan 世界模型驱动的 RL 微调。

## 技术特点

- 宏观到微观的流式转换架构，实现高效的大规模分布式 RL 训练。
- 支持全参数 SFT、LoRA SFT、VLM SFT 以及 DAgger、HG-DAgger 等多种训练范式。
- 提供 FUSCO 加速 MoE All-to-All 通信，以及 DSRL 扩散策略引导等前沿技术。
- 完善的 CI 测试覆盖，包括单元测试和端到端 RL 训练工作流测试。
- 可通过 PyPI 直接安装，也可使用提供的 Docker 镜像快速部署。
