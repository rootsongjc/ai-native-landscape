---
name: MockingBird
slug: mockingbird
homepage: null
repo: https://github.com/babysor/mockingbird
license: Unknown
category: models-modalities
subCategory: audio-speech
tags:
  - Application
  - Audio
  - TTS
description: 一个开源的语音克隆与实时语音生成工具，主打在数秒内克隆声音并支持边训练边在线合成。
logo: ''
author: babysor
ossDate: '2021-08-07T03:53:39Z'
featured: false
status: tracked
---

## 简介

MockingBird 是一个开源的语音克隆与实时语音合成工具，仅需五秒钟的音频样本即可复制目标说话人的声音。项目基于 PyTorch 构建，采用模块化的编码器-合成器-声码器流水线，提供预处理、训练和推理组件，并附带演示工具箱和可选的 Web 服务接口，便于快速实验和本地部署。

## 主要特性

快速语音克隆从短音频片段构建说话人嵌入，并以接近实时的方式生成音色和韵律相似的合成语音。跨平台支持覆盖 Windows 和 Linux，在 Tesla T4、GTX 系列等 GPU 上经过测试，并提供 Apple M1 硬件的文档化解决方案。丰富的工具链包括训练脚本、交互式演示工具箱、Web 服务接口，以及社区共享的预训练模型和并排质量对比。

## 使用场景

研究人员使用 MockingBird 在受控实验中验证说话人建模和语音转换方法。产品团队用它快速原型化需要特定声音的语音应用和演示，无需从零构建 TTS 系统。教育工作者将其作为 TTS 流水线、声码器架构和模型训练流程的实践教学平台。

## 技术特点

PyTorch 代码库将编码器、合成器和声码器清晰分离，各模块可独立替换或扩展。可复用预训练的编码器和声码器而仅训练合成器，显著缩短实验周期。详细的平台安装指南、完善的 README 文档和社区 Wiki 降低了新用户的上手门槛。
