---
name: GPT-SoVITS
slug: gpt-sovits
homepage: https://rentry.co/GPT-SoVITS-guide#/
repo: https://github.com/rvc-boss/gpt-sovits
license: Unknown
category: models-modalities
subCategory: audio-speech
tags:
  - Application
  - Audio
  - TTS
description: GPT-SoVITS 是一个开源少样本语音转换与 TTS WebUI，支持跨语言推理与工程化部署。
logo: ''
author: RVC-Boss
ossDate: '2024-01-14T18:05:21Z'
featured: false
status: tracked
---

## 简介

GPT-SoVITS 是一个开源的少样本语音克隆与文本转语音（TTS）项目，仅需一分钟的语音数据即可训练出高质量的 TTS 模型。它支持仅用 5 秒参考音频进行零样本推理，以及一分钟数据进行少样本微调，使语音克隆对各类用户都触手可及。项目提供完整的 WebUI，集成数据集准备、模型训练与部署等工具。

## 主要特性

GPT-SoVITS 提供零样本和少样本语音克隆能力，支持英、日、韩、粤、中等多种语言的跨语言推理。其 WebUI 集成了人声分离、自动数据集切分、ASR 与文本标注等工具以简化数据准备流程，同时支持通过本地运行、Docker 容器和 Hugging Face 演示进行灵活部署。

## 使用场景

GPT-SoVITS 非常适合快速语音克隆原型与演示，可在短时间内生成目标语音样本用于展示或测试。它同样服务于研究人员评估微调策略与模型变体，以及内容创作者希望将高质量语音合成集成到媒体制作工作流中的需求。

## 技术特点

GPT-SoVITS 基于 PyTorch 构建，提供 Conda 和 Docker 安装脚本，支持多种 CUDA 和 CPU 环境。项目通过 Hugging Face 分发预训练模型和公开演示以便快速验证效果，采用 MIT 开源许可，仓库活跃维护，提供详尽的安装、训练与部署文档。
