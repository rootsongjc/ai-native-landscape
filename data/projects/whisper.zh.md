---
name: OpenAI Whisper
slug: whisper
homepage: null
repo: https://github.com/openai/whisper
license: MIT
category: models-modalities
subCategory: audio-speech
tags:
  - Speech Recognition
  - ASR
  - Audio
  - Multilingual
  - Transformer
description: 基于大规模弱监督训练的鲁棒语音识别系统，支持 100+ 语言的转录和翻译，达到业界领先的准确率。
author: OpenAI
ossDate: '2022-09-16'
featured: true
thumbnail: ''
source: ''
status: tracked
---

## 简介

OpenAI Whisper 是在 680,000 小时多语言数据上训练的通用语音识别模型。在英语语音识别方面接近人类水平的鲁棒性和准确率，支持 100 多种语言的转录和翻译。Whisper 已成为开源语音转文字的行业标准。

## 主要特性

- 多语言语音识别，支持 100+ 语言
- 同时支持转录和翻译能力
- 五种模型规模：tiny (39M) 到 large (1.5B) 参数
- 对口音、背景噪声和技术语言具有鲁棒性
- 内置时间戳和语言检测

## 使用场景

- 会议、讲座和播客的语音转录
- 构建语音驱动的 AI 应用和智能体
- 为视频内容创建字幕和说明
- 多语言内容本地化和翻译

## 技术特点

- 编码器 - 解码器 Transformer 架构，在 680K 小时音频上训练
- 使用弱监督在多样化互联网音频数据上训练
- 提供五种规模：tiny、base、small、medium、large
- 作为众多下游项目（whisper.cpp、faster-whisper 等）的基础
