---
name: Detectron2
slug: detectron2
homepage: https://detectron2.readthedocs.io/
repo: https://github.com/facebookresearch/detectron2
license: Unknown
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - Dev Tools
description: Facebook AI Research 的下一代目标检测与分割库，提供高性能的检测/分割算法与丰富的基准模型。
logo: ''
author: Facebook
ossDate: '2019-09-05T21:30:20.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Detectron2 是 Facebook AI Research（FAIR）提供的下一代目标检测与分割库，支持包括 panoptic segmentation、DensePose、Cascade R-CNN、PointRend、ViTDet 等在内的多种先进算法，兼顾研究与工程化部署。

## 主要特性

- 模块化且可扩展的代码架构，便于在其上构建研究项目与自定义模块。
- 丰富的模型库与基准（Model Zoo），包含多种预训练权重与评估脚本。
- 支持导出为 TorchScript 或用于生产的格式，以便部署与加速。

## 使用场景

- 计算机视觉研究：快速复现实验、比较不同检测/分割方法的表现。
- 工程化部署：在生产环境中部署高性能检测/分割模型。
- 教学与基准测试：用于教学示例、实验室与竞争性评测。

## 技术特点

- 支持最新的检测与分割算法（如 ViTDet、PointRend、Mask R-CNN 扩展等）。
- 优化的训练与推理流水线，支持分布式训练与多种加速后端。
- 详尽的文档与教程（ReadTheDocs）以及活跃的社区与 Model Zoo。
