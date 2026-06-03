---
name: SkyRL
slug: skyrl
homepage: https://skyrl.readthedocs.io/en/latest/
repo: https://github.com/novasky-ai/skyrl
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - ML Platform
  - Simulator
  - Training
description: 一个面向大语言模型（LLM）的模块化全栈强化学习（RL）库，用于训练长时程、真实环境任务。
author: NovaSky-AI
ossDate: '2025-04-22T17:33:31Z'
featured: false
status: tracked
---

SkyRL 是由 NovaSky-AI 开发的模块化全栈强化学习库，专注于为大语言模型在长时程、真实世界任务上构建可扩展的训练与评估流水线。它将环境构建、高性能训练框架、智能体抽象和部署工具整合为一个统一的平台，兼顾可复现研究与工程化落地。

## 主要特性

- 拆分为 skyrl-agent、skyrl-train、skyrl-gym 等独立子包，可灵活组合和扩展各模块
- 提供配置化实验管理以支持集群和云基础设施上的大规模分布式训练
- 内置丰富的 Gymnasium 兼容工具使用环境集合，覆盖真实多步任务场景
- 通过命令行和配置驱动接口，方便地在本地或云端启动实验
- 在 Apache-2.0 许可下附带完善的文档与示例

## 使用场景

- 训练需要在多轮交互中持续推理的对话和工具使用智能体
- 在真实、长时程环境中对强化学习算法进行基准测试和对比
- 学术研究中复现已发表成果和构建新基线
- 通过 LLM 智能体动手实验教授强化学习概念

## 技术特点

- 基于 Python 构建，兼容主流深度学习框架和分布式训练工具链
- 强调性能与可扩展性，适应大规模训练工作负载
- 内置监控模块支持导出指标以实现实验的完全可复现
- 开箱即用支持本地集群和云基础设施部署
