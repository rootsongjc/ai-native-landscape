---
name: ONNX Runtime
slug: onnxruntime
homepage: https://onnxruntime.ai
repo: https://github.com/microsoft/onnxruntime
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Dev Tools
  - Inference
description: ONNX Runtime 是一个跨平台的高性能机器学习推理与训练加速器，支持从 PyTorch、TensorFlow 等导出的模型在多种硬件上高效运行。
author: Microsoft
ossDate: '2017-05-01T00:00:00.000Z'
featured: false
status: tracked
---

## 简介

ONNX Runtime（由 Microsoft 维护）是一个面向生产环境的高性能机器学习推理与训练运行时，目标是在多种硬件与操作系统上提供可预测且高效的模型执行能力。它通过对计算图的优化、融合与后端加速（包括 CPU、NVIDIA/AMD GPU 以及专用加速器）来提升吞吐与降低延迟，支持从 PyTorch、TensorFlow/Keras 以及常见的机器学习库导出的模型格式。

## 主要特性

- 跨平台与异构硬件支持：兼容多种 CPU、GPU 与加速器，便于在不同运行环境中统一部署。
- 图优化与转换：对模型计算图进行裁剪、融合与变换以减少计算开销并提升运行效率。
- 推理与训练双向支持：不仅优化推理场景，还提供针对分布式训练的性能提升与工具链支持。

## 使用场景

- 生产化模型服务：将训练好的模型部署为高并发低延迟的在线推理服务，提升用户体验并节约计算成本。
- 异构集群部署：在存在不同硬件能力的环境中统一运行与调度模型，降低运维复杂度。
- 批量离线推理与数据处理：用于大规模预处理、特征提取或离线推理任务，提升数据流水线效率。

## 技术特点

- 与 ONNX 生态紧密集成，提供多语言绑定与丰富示例，便于与现有数据科学与工程流程衔接。
- 活跃的社区与稳定的发布节奏，包含性能调优示例与部署方案，适合企业级生产环境的长期维护。
