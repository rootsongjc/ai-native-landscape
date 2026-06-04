---
name: Roboflow Inference
slug: roboflow-inference
homepage: https://inference.roboflow.com/
repo: https://github.com/roboflow/inference
license: Unknown
category: inference-serving
subCategory: model-serving
tags:
  - Dev Tools
  - Inference
  - Workflow
description: Roboflow Inference 是一个面向计算机视觉的推理与工作流平台，支持本地与云端部署、视频流工作流与丰富的模型集成。
author: Roboflow
ossDate: '2023-07-31T17:00:40.000Z'
featured: false
status: tracked
---

## 简介

Roboflow Inference 能将任何计算机或边缘设备变为计算机视觉（CV）服务中心，支持模型自托管、托管 API、以及基于可组合 Workflows 的视频与图像处理流水线。

## 主要特性

- Workflows：可组合的流水块，支持模型串联、筛选与可视化等常见操作。
- 多模型与硬件支持：集成预训练/基础模型并支持 GPU、Jetson、Raspberry Pi 等设备。
- 部署灵活：提供本地 server、Docker、托管 API 与企业级一键部署选项。

## 使用场景

- 实时视频分析：摄像头流的对象检测、跟踪与告警场景。
- 工业与制造：在受限网络环境下进行边缘部署与设备管理。
- 原型与生产：从 notebook 快速验证到可监控的生产系统迁移。

## 技术特点

- 主要用 Python 实现，项目包含 SDK（inference_sdk）、CLI 与丰富示例。
- 支持 OpenAPI/REST 接口，易于与外部系统与通知通道（Webhook、邮件、Twilio）集成。
- 核心组件可在 CI 中调用，便于将评估与监控纳入研发流程。
