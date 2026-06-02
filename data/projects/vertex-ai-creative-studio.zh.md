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
logo: ''
author: Google Cloud
ossDate: '2024-08-15T20:28:49Z'
featured: false
status: tracked
---

## 简介

GenMedia Creative Studio 是一个基于 Google Vertex AI 的开源演示应用，将平台的多模态生成模型整合为可交互的创作工作流。它集成了 Imagen 图像生成、Veo 视频生成、Lyria 音频生成以及 Chirp 或 Gemini TTS 语音合成能力，提供统一的实验界面。该项目既是创意工具，也是构建 GCP 生成媒体应用的参考架构。

## 主要特性

单一应用内覆盖图像、视频、音频与文本到语音的多模态生成能力，支持组合多种输出模态的复合创作工作流。基于 Terraform、Cloud Build 与 Cloud Run 的生产级部署示例，可在自有 GCP 环境中以最小成本复现。Promptlandia、虚拟试穿、角色一致性等实验工具集支持提示词优化与工作流编排研究。

## 使用场景

设计师与内容创作者可将其作为快速原型平台，生成并迭代多模态内容。技术培训或演示场景下，可作为 Vertex AI 生成媒体能力的现成参考案例。开发者可基于提供的示例扩展，构建定制化的行业级创作流水线。

## 技术特点

应用以 Apache-2.0 许可开源，前端采用 Mesop 框架、后端采用 FastAPI，架构简洁且易于调试。项目展示了与 Vertex AI 模型端点鉴权与调用的标准模式，是 GCP 集成的实用参考。代码结构注重可读性与可扩展性，鼓励社区贡献。
