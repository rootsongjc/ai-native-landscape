---
name: SwanLab
slug: swanlab
homepage: https://swanlab.cn
repo: https://github.com/swanhubx/swanlab
license: Unknown
category: training-optimization
subCategory: experiment-mlops
tags:
  - Dashboard
  - ML Platform
  - Visualization
description: SwanLab 是一个开源、现代化的模型训练追踪与可视化工具，支持云端与自托管部署。
author: SwanHubX
ossDate: '2023-11-24T08:54:45Z'
featured: false
status: tracked
---

SwanLab 是一个开源的模型训练追踪与可视化平台，帮助机器学习团队监控、对比和复现训练过程。它原生集成 PyTorch、Transformers、LLaMA Factory、veRL、Swift、Ultralytics、MMEngine、Keras 等主流框架，通过统一的仪表盘管理实验，支持云端和自托管两种部署方式。

## 主要特性

- 自动采集损失、精度和 GPU 利用率等训练指标，通过多维度图表实时展示
- 提供超参数记录、模型版本管理和实验并行对比等实验管理功能
- 内置框架适配器只需一行代码即可接入主流深度学习框架
- 双模式部署，同时支持云端托管和私有化自托管仪表盘
- 可配置的实验产物和检查点存储后端

## 使用场景

- 跟踪和对比模型开发过程中的实验，用自动化指标采集替代手动记录
- 在企业 ML 训练流水线中大规模监控任务健康度和资源使用
- 在 CI/CD 工作流中保持预发布和生产环境训练运行的可观测性
- 分布式研究团队之间的协作式实验评审

## 技术特点

- 基于 Apache-2.0 许可，提供可扩展的 SDK 适配器，无需重构代码即可接入现有训练循环
- 支持实时指标流式传输至云端或自托管仪表盘
- 强调轻量级集成和快速部署，团队可在数分钟内添加可观测能力
- 可配置的实验产物存储后端，灵活管理实验数据
