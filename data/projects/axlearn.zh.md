---
name: AXLearn
slug: axlearn
homepage: https://apple.github.io/axlearn
repo: https://github.com/apple/axlearn
license: Apache-2.0
category: training-optimization
subCategory: training-frameworks
tags:
  - Framework
  - ML Platform
description: 基于 JAX/XLA 的可扩展深度学习库，支持大规模模型的开发、训练与部署。
author: Apple
ossDate: '2023-02-25T01:33:06.000Z'
featured: false
status: tracked
---
## 简介

AXLearn 是一套构建于 JAX 与 XLA 之上的可扩展深度学习库，采用面向对象的配置系统，便于组合模型模块并与 Flax、Hugging Face 等生态集成，支持大规模训练与分布式部署。

## 主要特性

- 可复用的模型组件与配置系统，简化复杂模型的构建。  
- 支持大规模并行训练与 GSPMD 风格的全局计算范式。  
- 丰富的 CLI 与基础设施工具，便于作业管理与数据处理。  

## 使用场景

- 训练数十亿至百亿参数的语言与视觉模型。  
- 在云或私有集群上运行大规模分布式训练作业。  
- 作为研究与工程团队的模型开发与基线实现框架。  

## 技术特点

- 基于 JAX/XLA，面向高效的 XLA 编译与加速。  
- 面向模块化配置，便于复现与实验管理。  
- 提供详尽文档（仓内 docs/ 目录），适配多种部署模式与硬件。
