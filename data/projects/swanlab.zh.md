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

## 详细介绍

SwanLab 是一款面向模型训练生命周期的开源平台，提供训练日志采集、指标可视化、模型版本管理与实验对比功能，支持云端与自托管部署。它兼容 PyTorch、Transformers、LLaMA Factory、veRL、Swift、Ultralytics、MMEngine、Keras 等生态，旨在帮助工程团队在模型训练与调优阶段实现可观测性与复现能力。

## 主要特性

以下是 SwanLab 的核心能力：

- 训练追踪：采集训练过程中的损失、精度、资源使用等关键指标并实时展示。
- 可视化仪表盘：提供多维度图表与对比视图，便于发现训练趋势与异常。
- 实验管理：支持模型版本管理、超参记录与实验对比，提升复现性。
- 多框架兼容：直接接入常见深度学习框架与工程工具链。

## 使用场景

SwanLab 适用于需要对模型训练过程进行集中监控与分析的场景，例如研究团队的实验管理、企业级训练流水线的质量监控、以及需要将训练指标纳入 MLOps 流程的生产化部署环境。

## 技术特点

- 开源与可扩展：基于 Apache-2.0 许可，易于定制与二次开发。
- 工程化接入：提供与主流训练框架的适配器，便于在现有 CI/CD 与训练流水线中集成。
- 可部署性：支持云端与私有部署，满足数据合规与性能需求。
- 实时性与可观测性：强调训练过程的实时指标采集与可视化展示，帮助快速定位问题。
