---
name: GenMedia Creative Studio
slug: vertex-ai-creative-studio
homepage: https://cloud.google.com/vertex-ai
repo: https://github.com/googlecloudplatform/vertex-ai-creative-studio
license: Unknown
category: models-modalities
subCategory: audio-speech
tags:
  - Application
  - Audio
  - Image Generation
  - Multimodal
  - TTS
  - Video
description: GenMedia Creative Studio 是一个基于 Vertex AI 的生成媒体演示应用，展示图像、视频、音频与文本到语音等多模态能力。
author: Google Cloud
ossDate: '2024-08-15T20:28:49Z'
featured: false
status: tracked
---

GenMedia Creative Studio 是一个基于 Google Vertex AI 的开源演示应用，将平台的多模态生成模型整合为可交互的创作工作流。它集成了 Imagen 图像生成、Veo 视频生成、Lyria 音频生成以及 Chirp 或 Gemini TTS 语音合成能力，提供统一的实验界面。该项目既是创意工具，也是构建 GCP 生成媒体应用的参考架构。

## 多模态生成

- 基于 Imagen 的图像生成，支持提示词工程与风格控制
- 基于 Veo 的视频生成，支持运动与场景构图
- 基于 Lyria 的音频生成与音乐创作
- 基于 Chirp 和 Gemini TTS 模型的文本到语音合成

## 创意工具与实验

- Promptlandia 交互式提示词工程探索
- 虚拟试穿与角色一致性工具支持视觉工作流
- 组合多种输出模态的复合创作工作流
- 统一界面支持跨模态的快速迭代与实验

## 部署与架构

- 前端采用 Mesop 框架、后端采用 FastAPI，架构简洁易调试
- 基于 Terraform、Cloud Build 与 Cloud Run 的生产级部署示例
- 展示与 Vertex AI 模型端点鉴权与调用的标准模式
- Apache-2.0 许可开源，代码结构注重可读性与社区贡献
