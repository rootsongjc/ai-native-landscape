---
name: GPT-SoVITS
slug: gpt-sovits
homepage: https://rentry.co/GPT-SoVITS-guide#/
repo: https://github.com/rvc-boss/gpt-sovits
license: MIT
category: models-modalities
subCategory: audio-speech
tags:
  - Application
  - Audio
  - TTS
description: GPT-SoVITS 是一个开源少样本语音转换与 TTS WebUI，支持跨语言推理与工程化部署。
author: RVC-Boss
ossDate: '2024-01-14T18:05:21Z'
featured: false
status: tracked
---

GPT-SoVITS 是一个开源的少样本语音克隆与文本转语音（TTS）项目，仅需一分钟的语音数据即可训练出高质量的 TTS 模型。它支持仅用 5 秒参考音频进行零样本推理，以及一分钟数据进行少样本微调，使语音克隆对各类用户都触手可及。

## 语音克隆能力

- 仅需 5 秒参考音频即可进行零样本推理
- 一分钟目标语音数据即可完成少样本微调
- 跨语言推理支持英、日、韩、粤、中等多种语言
- 高质量语音合成，满足生产使用需求

## WebUI 与数据管道

- 完整的 WebUI 集成所有训练和推理工作流
- 内置人声分离，从混合音频中提取语音
- 自动数据集切分，准备训练数据
- ASR 与文本标注工具简化数据准备流程

## 部署方式

- 本地运行，完全掌控训练和推理过程
- Docker 容器部署，确保可复现和可移植
- Hugging Face 演示，无需本地安装即可快速验证
- Conda 和 Docker 安装脚本，支持多种 CUDA 和 CPU 环境

## 研究与生产

- 基于 PyTorch 构建，通过 Hugging Face 分发预训练模型
- 适合快速语音克隆原型与演示
- 支持研究人员评估微调策略与模型变体
- MIT 开源许可，活跃维护的文档覆盖完整工作流
