---
name: Coral NPU
slug: coral-npu
homepage: https://developers.google.com/coral
repo: https://github.com/google-coral/coralnpu
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Edge
  - Inference
description: Google Coral 提供的面向边缘设备的能效型机器学习加速器核心。
logo: ''
author: Google
ossDate: '2025-10-02T22:32:37Z'
featured: false
status: tracked
---

## 详细介绍

Coral NPU 是 Google Coral 提供的机器学习加速器核心，专为低功耗边缘设备上的高效推理而设计。该项目在硬件架构和软件栈上进行协同优化，目标是在受限能耗与计算资源下实现实时或近实时的机器学习推理能力。Coral NPU 的开源仓库包括与架构相关的工具链、运行时支持和示例代码，方便开发者将模型移植并在边缘设备上运行。

## 主要特性

- 面向边缘：优化能效以适配电池供电与嵌入式设备。
- 高效推理：专用算子与硬件加速器提升模型推理吞吐与延迟表现。
- 开源许可：采用 Apache-2.0 许可证，便于工业与研究使用。
- 开发者友好：提供 SDK、驱动与示例，支持快速上手与模型部署。

## 使用场景

- 边缘智能体（使用术语“智能体”）的本地推理需求，例如家庭与工业传感器。
- 低延迟的视觉推断，如目标检测与人脸识别。
- 离线语音识别与自然交互，降低对云端依赖。
- 工业物联网（IIoT）与现场设备的智能化升级。

## 技术特点

- 硬件与软件协同：包括针对特定算子优化的指令集与运行时支持。
- 兼容性工具链：提供模型转换、量化与部署工具以适配边缘资源。
- 支持模型压缩与量化策略，降低内存与计算占用。
- 社区维护与文档：官方文档与示例位于开发者站点，仓库持续接受贡献与问题反馈。
