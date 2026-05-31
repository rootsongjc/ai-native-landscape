---
name: ClearML
slug: clearml
homepage: https://clear.ml/docs
repo: https://github.com/clearml/clearml
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - Deployment
  - ML Platform
  - Training
description: ClearML 是一个开源的 MLOps 平台，提供实验管理、数据管理、流水线与模型服务等能力。
logo: ''
author: ClearML
ossDate: '2019-06-10T08:18:32Z'
featured: false
status: tracked
---

## 详细介绍

ClearML 是一套开源的 MLOps 平台，覆盖实验管理、数据管理、流水线、编排、调度与模型服务等功能。它通过自动化的 CI/CD 能力和轻量化 agent 收集训练日志、指标与模型快照，帮助团队实现实验复现、模型版本管理与训练可观测性，同时支持云端和自托管部署。

## 主要特性

- 实验管理：自动记录运行参数、指标与模型快照，便于对比与回溯。
- 流水线与编排：内置管道与调度功能，支持任务编排与持续训练流程。
- 数据与模型管理：管理数据集、模型版本与工件（artifacts）。
- 部署与服务：支持模型打包与在线/批量服务化部署。

## 使用场景

ClearML 适用于科研团队与工程化团队的训练管理与生产化场景，例如实验追踪与对比、训练流水线自动化、训练资源监控，以及将训练结果快速投入推理与在线服务的流程中。

## 技术特点

- 开源许可：采用 Apache-2.0 许可，便于集成与二次开发。
- 框架兼容：兼容 PyTorch、TensorFlow、Transformers 等主流框架。
- 可扩展的 agent：通过轻量 agent 采集运行时数据并上报至后端存储。
- 工程化集成：支持与 CI/CD、容器化和 Kubernetes 等平台对接。
