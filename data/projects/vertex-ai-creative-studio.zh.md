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

## 详细介绍

GenMedia Creative Studio 是一个基于 Vertex AI 的生成媒体演示应用，旨在把多模态生成能力组合成可交互的创作工作流。项目展示了图像（Imagen）、视频（Veo）、音频（Lyria）、语音（Chirp / Gemini TTS）等模型的联动示例，并提供用于试验和扩展的示例工作流与演示界面。

## 主要特性

- 多模态生成：整合图像、视频、音频与文本到语音的生成能力，支持复合创作场景。
- 可部署示例：包含 Terraform、Cloud Build 与 Cloud Run 的部署样例，便于在 GCP 上复现演示环境。
- 实验集合：提供一组实验性工具（如 Promptlandia、虚拟试穿、角色一致性等）用于提示词优化与工作流编排。

## 使用场景

- 创意探索：为设计师与内容创作者提供快速原型生成与灵感实验平台。
- 教学与演示：作为 Vertex AI 多模态能力的教学样例，用于内部培训或技术演示。
- 定制化工作流：可作为构建行业级创作流水线的起点，通过示例扩展特定业务流程。

## 技术特点

- 开源示例：代码以 Apache-2.0 许可开源，便于阅读与二次开发。
- 基于 Mesop 与 FastAPI：前端交互与后端服务使用 Mesop 框架与 FastAPI 组合，方便扩展与调试。
- 与 Vertex AI 集成：示例展示了对 Vertex AI 模型与服务（包括模型端点与鉴权）的接入模式与最佳实践。
