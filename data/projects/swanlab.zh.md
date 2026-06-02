---
name: SwanLab
slug: swanlab
homepage: https://swanlab.cn
repo: https://github.com/swanhubx/swanlab
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - Dashboard
  - ML Platform
  - Visualization
description: SwanLab 是一个开源、现代化的模型训练追踪与可视化工具，支持云端与自托管部署。
logo: ''
author: SwanHubX
ossDate: '2023-11-24T08:54:45Z'
featured: false
status: tracked
---

## 简介

SwanLab 是一个开源的模型训练追踪与可视化平台，帮助机器学习团队监控、对比和复现训练过程。它原生集成 PyTorch、Transformers、LLaMA Factory、veRL、Swift、Ultralytics、MMEngine、Keras 等主流框架，通过统一的仪表盘管理实验，支持云端和自托管两种部署方式。

## 主要特性

SwanLab 自动采集损失、精度和 GPU 利用率等训练指标，并通过多维度图表和对比视图在仪表盘上实时展示。它提供超参数记录、模型版本管理和实验并行对比等实验管理功能，提升复现性。内置的框架适配器只需一行代码即可接入主流深度学习框架，同时支持云端和私有部署两种模式。

## 使用场景

研究团队使用 SwanLab 跟踪和对比模型开发过程中的实验，用自动化指标采集替代手动记录。企业 ML 团队将其部署在训练流水线中，大规模监控任务健康度和资源使用。MLOps 工程师将 SwanLab 集成到 CI/CD 工作流中，在预发布和生产环境中保持训练运行的可观测性。

## 技术特点

SwanLab 基于 Apache-2.0 许可，提供可扩展的 SDK 适配器，无需重构代码即可接入现有训练循环。它支持实时指标流式传输至云端或自托管仪表盘，并提供可配置的实验产物存储后端。平台强调轻量级集成和快速部署，团队可在数分钟内为训练工作流添加可观测能力。
