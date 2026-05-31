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
logo: ''
author: NovaSky-AI
ossDate: '2025-04-22T17:33:31Z'
featured: false
status: tracked
---

## 详细介绍

SkyRL 是由 NovaSky-AI 发起的模块化全栈强化学习库，聚焦于为大语言模型（LLM）构建可扩展的训练与评估流水线。项目包含多个子模块（如 `skyrl-agent`、`skyrl-train`、`skyrl-gym`），覆盖环境构建、训练框架、代理层与工具化部署，旨在支持长时程、多回合、真实环境任务的可复现研究与工程化落地。

## 主要特性

- 模块化组件：拆分成训练、代理与环境等子库，便于组合与扩展。
- 可复现训练流水线：提供高性能训练栈与配置化实验管理，支持大规模训练场景。
- 丰富环境库：`skyrl-gym` 提供面向工具使用（tool-use）的 Gymnasium 接口环境集合。
- 开源与协作：采用 Apache-2.0 许可，并提供详尽文档与示例以便社区贡献。

## 使用场景

- 在多回合对话或工具使用任务上训练长时程代理与策略。
- 在多回合对话或工具使用任务上训练长时程代理与策略。
- 比较与评估不同训练算法与模型在真实环境中的表现。
- 作为教学与研究平台，用于复现实验、基线构建与性能调优。

## 技术特点

- 基于 Python 实现，兼容常见深度学习与分布式训练工具链，强调性能与可扩展性。
- 提供命令行与配置化接口，便于在云或本地集群上运行大规模训练。
- 集成监控与评估模块，支持导出实验指标与复现关键结果。
