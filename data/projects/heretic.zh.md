---
name: Heretic
slug: heretic
homepage: null
repo: https://github.com/p-e-w/heretic
license: AGPL-3.0
category: training-optimization
subCategory: finetuning-alignment
tags:
  - CLI
  - Fine Tuning
  - Optimization
  - Tool
description: >-
  Heretic 是一个完全自动化的工具，可以在不进行昂贵的后训练的情况下，从基于 transformer 的语言模型中移除审查 (即"安全对齐")。它结合了定向消融 (也称为"abliteration") 的高级实现和基于 Optuna 的
  TPE 参数优化器，能够自动找到高质量的消融参数，同时最小化拒绝次数和与原始模型的 KL 散度，从而保留原始模型的智能水平。
author: Philipp Emanuel Weidmann
ossDate: '2025-03-16'
featured: false
status: tracked
---

## 详细介绍

Heretic 是一个开源的 Python 工具，专门用于从语言模型中移除安全审查机制。它基于先进的定向消融 (directional ablation) 技术，也被称为"abliteration"。与传统的手动调整不同，Heretic 实现了完全自动化的参数优化流程。

该工具的核心创新在于：

- **完全自动化**：无需理解 transformer 内部机制，任何会使用命令行的人都可以操作
- **智能参数优化**：使用 Optuna 的 TPE(Tree-structured Parzen Estimator) 优化器自动寻找最佳消融参数
- **质量保障**：通过共同最小化拒绝次数和与原始模型的 KL 散度，确保去除审查的同时保留模型智能
- **组件级优化**：对注意力输出投影和 MLP 下投影等不同组件使用不同的消融权重

## 主要特性

- **广泛的模型支持**：支持大多数密集模型，包括多模态模型和多种 MoE 架构
- **量化支持**：集成 bitsandbytes 量化，可显著降低 VRAM 需求
- **内置评估**：提供评估功能，可量化比较消融前后模型的性能
- **研究功能**：可选安装研究模式，支持残差向量可视化和几何分析
- **灵活配置**：提供丰富的配置选项，支持命令行和配置文件两种方式
- **多种输出选项**：处理完成后可保存模型、上传到 Hugging Face 或直接聊天测试

## 使用场景

- **模型研究**：为研究人员提供探索模型内部语义的工具
- **模型定制**：去除安全限制，获得完全响应的模型
- **性能优化**：通过自动参数优化，在去审查和模型质量之间找到最佳平衡
- **可解释性研究**：可视化残差向量在不同层的变换过程
- **教育学习**：理解语言模型的安全对齐机制和消融技术

## 技术特点

- **定向消融实现**：对每层支持的 transformer 组件识别相关矩阵，并使其与"拒绝方向"正交化
- **拒绝方向计算**：计算"有害"和"无害"示例提示的第一令牌残差之间的均值差
- **参数化控制**：
  - `direction_index`：拒绝方向索引，支持每层使用独立方向
  - `max_weight`/`min_weight`：描述消融权重核的形状和位置
  - 支持非整数方向索引，通过线性插值解锁更多方向空间
- **基准测试**：在 RTX 3090 上，使用默认配置对 Llama-3.1-8B-Instruct 进行去审查约需 45 分钟
- **许可证**：AGPL-3.0
