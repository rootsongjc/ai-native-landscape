---
name: LTX-2
slug: ltx-2
homepage: https://ltx.io
repo: https://github.com/Lightricks/LTX-2
license: Unknown
category: models-modalities
subCategory: image-video-generation
tags:
  - Video Generation
  - Audio Video
  - Diffusion
  - LoRA
description: >-
  Lightricks 出品的 LTX-2 官方 Python 推理与 LoRA 训练包。LTX-2 是首个基于 DiT 的音视频基础模型，
  在单一模型内生成音画同步的视频。
author: Lightricks
ossDate: '2026-01-03'
featured: false
status: tracked
---

## 简介

LTX-2 是 Lightricks 推出的首个基于 DiT 的音视频基础模型，把现代视频生成的核心能力收进一个模型：音画同步、高保真、多种性能档位与开放访问。本仓库是官方 Python 推理与 LoRA 训练包，运行发布在 Hugging Face 上的 LTX-2.5 权重，覆盖从少步数的快速蒸馏路径到生产级 DFR（Diffusion Fidelity Rendering）路径的多条流水线。

## 主要特性

- 单一 DiT 模型生成音画同步内容，提供快速与生产质量两种模式
- 多条流水线：快速起步的 DistilledPipeline、生产级的 DFR，以及 TI2Vid、Keyframe、A2Vid、IC-LoRA、DubIt 等路径
- Hugging Face 上按组件单文件分发权重——transformer、文本编码器、VAE、上采样器、LoRA 按流水线所需下载
- 默认 1024×1536、24 fps 输出，支持 UHD 4K 与多轮时序上采样
- 推理之外同时支持 LoRA 训练

## 使用场景

- 从文本提示生成带同步音频的对白或说话人视频
- 通过 DFR 与细节 IC-LoRA、空间上采样器完成生产级文/图生视频
- 关键帧条件视频与配音等工作流

## 技术特点

- 22B 扩散 transformer 提供 dev 与 distilled 两个版本；蒸馏版步数大幅减少，同时驱动 DFR、IC-LoRA 与 DubIt 流水线
- 文本编码采用为 LTX 微调、内置投影层的 Gemma 4 12B 权重；加载时会按版本号（`gemma4-12b-ltx-v1`）校验编码器与训练时一致
- 视频解码可选基于邻域注意力的扩散 VAE（`NADiffusionDecoder`）——Linux/CUDA 下配合 `natten` extra 最快，其他平台回退到 Triton 或 eager 实现——或更轻量的卷积解码器
- DFR 复用蒸馏 transformer，叠加细节 IC-LoRA 生成额外关键帧并做空间细节增强；显存受限时可加 `--quantization fp8-cast` 与 `--offload cpu|disk`；依赖经 `uv sync --extra natten` 管理，权重通过 Hugging Face CLI 下载
