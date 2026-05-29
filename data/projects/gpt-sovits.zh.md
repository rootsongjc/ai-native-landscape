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

## 详细介绍

GPT-SoVITS 是一个功能丰富的开源 WebUI 项目，面向少样本语音转换（few-shot voice conversion）与文本到语音（TTS）场景。项目提供零样本（5s）和少样本（1min）两种使用模式，并集成了训练集切分、中文 ASR、文本标注等辅助工具，便于用户快速准备数据、微调模型与在本地或容器中部署。更多使用说明见项目文档与在线演示。

## 主要特性

- 零样本/少样本能力：支持以极短语音样本进行即时转换或用少量数据微调以提升音色相似度。  
- 跨语言推理：支持英、日、韩、粤等多种语言的推理与合成。  
- WebUI 工具链：内置分离、人声切片、ASR 与标注等工具，降低数据准备门槛。  
- 多种部署选项：支持本地运行、Docker 容器与 Hugging Face 演示部署，适配不同规模的试验与生产环境。

## 使用场景

- 语音克隆与合成原型：快速用示例音生成样本语音或产出演示内容。  
- 研究与模型开发：用于比较不同基线模型、微调策略与前端文本处理方法。  
- 工具链集成：将微调与推理能力集成到媒体制作或交互应用中。

## 技术特点

- 基于 PyTorch 的实现，兼容多版本与 CPU/多种 GPU（提供 Conda 安装与 Docker 脚本）。  
- 提供分发的预训练模型与 Hugging Face 演示以便快速验证效果。  
- 开源许可为 MIT，社区活跃并在 README/Wiki 中提供详尽的安装、训练与部署说明。
