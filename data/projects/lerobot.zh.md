---
name: LeRobot
slug: lerobot
homepage: https://huggingface.co/docs/lerobot
repo: https://github.com/huggingface/lerobot
license: Apache-2.0
category: models-modalities
subCategory: multimodal
tags:
  - Application
  - Multimodal
description: 面向真实世界机器学习与机器人学的开源库，提供数据集、预训练策略与仿真环境，方便复现实验与工程化部署。
author: Hugging Face
ossDate: '2024-01-26T15:50:41.000Z'
featured: false
status: tracked
---

## 详细介绍

LeRobot 是 Hugging Face 旗下面向机器人与仿真场景的开源库，目标是降低机器人学习与控制的门槛，为研究者和工程师提供端到端的工具链。项目集合了预训练策略、标准化数据集（LeRobotDataset 格式）、多种仿真环境与可复现的训练流水线，便于从模拟到真实机器人快速迭代实验。LeRobot 强调复现性与工程化，可直接在 Hugging Face Hub 上发布与共享模型与数据。

## 主要特性

- 预训练策略与示例：包含针对多种任务（如 PushT、ALOHA、SimXArm）优化的策略与训练配置。
- 数据集与可视化：提供 LeRobotDataset 格式、数据可视化工具与示例脚本，方便查看视频帧与机器人状态。
- 完整工具链：支持从本地仿真、训练、评估到上传 Hub 的端到端流程，并提供 PyPI 包与安装说明。

## 使用场景

- 机器人学研究：在仿真环境上快速复现实验并评估跨域迁移能力。
- 工程化开发：基于预训练策略与示例代码快速构建真实机器人控制流水线。
- 教学与入门：为学习者提供一套可运行的示例与数据集，降低上手成本。

## 技术特点

- 以 PyTorch 为基础实现，兼容最新深度学习工具链与 Hugging Face Hub 的模型/数据管理机制。
- 面向长期可复现性设计，训练配置、依赖与示例均开源并持续维护。
- Apache-2.0 许可与活跃社区贡献，适合研究与工程双向使用。
