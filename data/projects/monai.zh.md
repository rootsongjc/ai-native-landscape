---
name: MONAI
slug: monai
homepage: https://monai.io/
repo: https://github.com/project-monai/monai
license: Unknown
category: coding-devtools
subCategory: sdk-frameworks
tags:
  - Dev Tools
  - Framework
description: 面向医疗影像的 AI 工具包，专注深度学习在医学图像处理与分析中的应用。
logo: ''
author: Project MONAI
ossDate: '2019-10-11T16:41:38.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

MONAI（Medical Open Network for AI）是一个面向医疗影像的深度学习工具包，提供从数据采集与预处理、模型构建到训练与推理的一整套组件与最佳实践。该项目由社区驱动，汇集了面向临床与科研的模块、教程和示例，旨在降低医疗影像 AI 的入门门槛，加速可复现研究与临床级应用的落地与迭代。

## 主要特性

- 丰富的数据预处理与增强管线，针对医学影像（CT、MR、超声等）进行专门优化，支持三维体数据与多通道输入。
- 基于 PyTorch 的模块化模型库，包含语义分割、分类、配准与重建等常见任务实现，便于扩展自定义网络与损失函数。
- 提供训练与评估脚手架、可复现性工具、基准测试与性能调优指南，支持多卡/分布式训练以适配科研与工程场景。

## 使用场景

MONAI 适用于医学影像研究与工程化场景，例如放射科影像分割、病灶检测、器官配准、影像配准与定量分析等。研究人员可以利用其标准化的数据管线快速搭建对照实验，工程团队可以在 MONAI 提供的训练与导出流程基础上，构建临床影像 AI 产品原型与在线/离线推理服务，同时借助社区贡献的示例实现模型迁移与验证。

## 技术特点

- 针对医学影像优化的数据加载与增强策略，包含体数据采样、切片与标签对齐，便于处理大体积医学图像。
- 与 PyTorch 紧密集成，提供易于扩展的模块化接口，支持自定义网络、损失、度量和训练循环。
- 注重可复现性与社区协作，项目包含详细文档、教程和 benchmark，便于在科研与生产环境中进行验证与质量控制。
