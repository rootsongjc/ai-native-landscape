---
name: LightGBM
slug: lightgbm
homepage: https://lightgbm.readthedocs.io/
repo: https://github.com/microsoft/lightgbm
license: Unknown
category: inference-serving
subCategory: gpu-acceleration
tags:
  - Utility
description: 高效的梯度提升树（GBDT）框架，支持分布式训练与 GPU 加速，广泛应用于排序、分类和大规模数据场景。
logo: ''
author: Microsoft
ossDate: '2016-08-05T05:45:50.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

LightGBM（Light Gradient Boosting Machine）是微软与社区维护的高性能梯度提升树框架，针对大规模数据与高性能训练进行了优化，支持并行、分布式与 GPU 加速，常用于分类、回归与排序等任务。文档与快速入门详见官方文档站点。

## 主要特性

- 训练速度快、内存占用低，适合大规模数据训练
- 支持并行与分布式训练，以及 GPU 加速（CUDA）
- 灵活的参数配置与丰富的调参工具生态（Optuna、FLAML 等）
- 提供 Python、R 等多语言接口，便于在生产环境部署
- 广泛的社区与大量成功竞赛实例支持

## 使用场景

- 大规模表格数据的分类与回归
- 排序与学习排序任务（搜索、推荐）
- 竞赛与特征工程密集型场景
- 需要高性能训练与快速推理的线上服务

## 技术特点

- 实现语言：C++ 为核心，提供 Python/R 绑定
- 支持 GPU（CUDA）和多机分布式训练
- 丰富的示例与教程，文档中心：<https://lightgbm.readthedocs.io/>
- 与自动化调参工具（Optuna、FLAML）和部署工具链（Treelite、Hummingbird）有良好兼容
