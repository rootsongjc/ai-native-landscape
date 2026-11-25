---
name: LightX2V
slug: lightx2v
homepage: https://lightx2v-en.readthedocs.io/en/latest/
repo: https://github.com/modeltc/lightx2v
license: Apache-2.0
category: models-modalities
subCategory: image-video-generation
tags:
  - Video Generation
  - Image Generation
  - Inference
  - Diffusion
  - Quantization
description: LightX2V 是一个轻量级的图像与视频生成推理框架，通过步数蒸馏、量化和并行等手段加速扩散模型推理，并支持多种硬件平台部署。
author: ModelTC
ossDate: '2025-03-24T10:27:56Z'
status: tracked
---

LightX2V 是 ModelTC 开发的轻量级图像与视频生成推理框架。它用一套推理栈支持多种生成模型，重点是让这些模型跑得更快、成本更低，使文生视频、图生视频、文生图和图像编辑等任务能够在团队现有的硬件上运行。

## 核心特性

- **一套框架支持多种模型**，包括 Wan、HunyuanVideo、Qwen-Image、LTX 等系列，覆盖文生视频、图生视频、文生图和图像编辑
- **步数蒸馏**：提供 4 步和 8 步蒸馏模型与 LoRA，无需 CFG 即可推理
- **量化**：支持 FP8、NVFP4 和 GGUF 等格式
- **显存与吞吐优化**：块级卸载、CFG 并行和分离式部署等
- **服务化 API**：可将模型作为服务运行，并提供 Docker 镜像简化环境搭建

## 使用场景

- 以更少的推理步数和更低的延迟提供图像与视频生成服务
- 在显存有限的 GPU 上运行大型视频模型
- 在非 NVIDIA 加速器和 AI PC 上部署生成模型

## 技术特点

- 同时支持自回归视频生成和双向扩散推理
- 支持 NVIDIA GPU 之外的平台，包括 AMD ROCm、昇腾、寒武纪、海光和 Intel AI PC
- 蒸馏和量化后的权重随框架一同发布在 Hugging Face
