---
name: Coral NPU
slug: coral-npu
homepage: https://developers.google.com/coral
repo: https://github.com/google-coral/coralnpu
license: Apache-2.0
category: inference-serving
subCategory: inference-runtimes
tags:
  - Edge
  - Inference
description: Google Coral 提供的面向边缘设备的能效型机器学习加速器核心。
author: Google
ossDate: '2025-10-02T22:32:37Z'
featured: false
status: tracked
---
Coral NPU 是 Google Coral 开发的面向边缘 AI 推理的硬件加速器，支持 TensorFlow Lite 模型。它在硬件架构和软件栈上进行协同优化，旨在为边缘设备在受限功耗和计算资源下提供实时推理能力。

## 硬件加速能力

- 专用算子和指令级优化，显著提升电池供电与嵌入式设备上的推理吞吐量
- 低延迟执行，满足实时视觉和音频推理任务需求
- 高能效设计，支持边缘设备上持续运行的 AI 工作负载

## 开发者工具

- 提供 SDK 和驱动程序，便于快速集成到现有边缘硬件平台
- 模型转换和量化工具，支持将 TensorFlow Lite 模型移植到 Coral 硬件
- 兼容的工具链覆盖从模型准备到设备端部署的完整流水线
- 由 Google 和开源社区持续维护完善的开发者文档

## 使用场景

- 智能家居和工业传感器等边缘智能体的本地推理场景
- 目标检测、人脸识别、姿态估计等低延迟视觉推断
- 无需云连接的离线语音识别和关键词检测
- 断网环境下工业物联网现场设备的智能化升级

## 技术设计

- 软硬件协同设计，包含针对特定算子的运行时支持和指令级加速
- 针对 TensorFlow Lite 模型格式优化，支持量化感知推理路径
- 支持 USB、PCIe 和 M.2 等多种形态规格，灵活集成到多样化边缘平台
