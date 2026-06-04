---
name: MLX-VLM
slug: mlx-vlm
homepage: null
repo: https://github.com/blaizzy/mlx-vlm
license: MIT
category: training-optimization
subCategory: finetuning-alignment
tags:
  - Dev Tools
  - FineTune
  - Inference
  - LLM
description: 基于 MLX 的本地化多模态推理与微调工具，支持图像、音频与视频的视觉语言模型在 Mac 与通用硬件上的高效运行与训练。
author: Blaizzy
ossDate: '2024-04-16T15:10:12.000Z'
featured: false
status: tracked
---

## 详细介绍

MLX-VLM 是基于 MLX 的多模态推理与微调套件，目标是在 Mac（包括 Apple Silicon）以及通用 CPU/GPU 环境上，提供图像/音频/视频与文本联合推理与微调能力。项目包含命令行工具、Gradio 聊天界面、FastAPI 服务与 Python 接口，便于在本地搭建可复现的多模态应用与实验环境。

## 主要特性

- 支持多模态输入：图像、音频、视频与文本联合处理。
- 多种使用方式：CLI、Python API、Gradio 聊天 UI 与 FastAPI 服务接口。
- 支持微调方法（LoRA、QLoRA）与常见模型盘（例如 mlx-community 下的模型）。
- 针对 Apple Silicon 与本地推理进行了优化，提供示例与配置帮助用户快速上手。

## 使用场景

- 在本地或私有环境中进行 VLM（Vision-Language Model）推理与多模态对话实验。
- 使用 CLI 或服务部署快速搭建图像问答、图像 + 音频分析与视频摘要等功能原型。
- 在资源受限设备上做微调或少量数据适配（使用 LoRA/QLoRA 策略）。

## 技术特点

- 以 Python 实现，依赖 MLX 生态的模型与处理器（支持加载 mlx-community 的模型）。
- 提供多种运行模式（本地推理、服务器模式、Gradio 演示），并包含示例与文档以便复现。
- 采用 MIT 许可证，社区活跃、发布频繁，支持多平台与硬件后端。
