---
name: MockingBird
slug: mockingbird
homepage: null
repo: https://github.com/babysor/mockingbird
license: MIT
category: models-modalities
subCategory: audio-speech
tags:
  - Application
  - Audio
  - TTS
description: 一个开源的语音克隆与实时语音生成工具，主打在数秒内克隆声音并支持边训练边在线合成。
author: babysor
ossDate: '2021-08-07T03:53:39Z'
featured: false
status: tracked
---

MockingBird 是一个开源的语音克隆与实时语音合成工具，仅需五秒钟的音频样本即可复制目标说话人的声音。项目基于 PyTorch 构建，采用模块化的编码器-合成器-声码器流水线，提供预处理、训练和推理组件，并附带演示工具箱和可选的 Web 服务接口。

## 快速语音克隆

- 从短音频片段构建说话人嵌入，以接近实时的方式生成音色和韵律相似的合成语音
- 可复用预训练的编码器和声码器而仅训练合成器，显著缩短实验周期
- 社区共享的预训练模型和并排质量对比帮助用户选择最佳配置

## 跨平台与工具链

- 跨平台支持覆盖 Windows 和 Linux，在 Tesla T4、GTX 系列等 GPU 上经过测试
- 提供 Apple M1 硬件的文档化解决方案，降低 macOS 用户上手门槛
- 丰富的工具链包括训练脚本、交互式演示工具箱和 Web 服务接口，便于快速实验

## 模块化架构

- PyTorch 代码库将编码器、合成器和声码器清晰分离，各模块可独立替换或扩展
- 详细的平台安装指南、完善的 README 文档和社区 Wiki 支持新用户快速入门
- 适用于研究人员验证说话人建模方法、产品团队原型化语音应用、教育工作者教授 TTS 流水线
