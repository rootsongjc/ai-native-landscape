---
name: noScribe
slug: no-scribe
homepage: null
repo: https://github.com/kaixxx/noscribe
license: Unknown
category: models-modalities
subCategory: audio-speech
tags:
  - Dev Tools
  - Utility
description: 面向质性研究和记者的本地化音频转录与编辑工具，基于 Whisper 与 Pyannote 提供说话人分离与可视化编辑功能。
author: Kai Dröge
ossDate: '2023-05-12T06:25:03.000Z'
featured: false
status: tracked
---

## 简介

noScribe 是一个面向质性研究和新闻采访的本地化音频转录与编辑工具，利用 Whisper、faster-whisper 与 Pyannote 实现高质量的语音识别与说话人分离，并内置图形化编辑器以便人工校对与导出多种格式的转录结果。

## 主要特性

- 本地运行、无云回传，保护数据隐私；
- 支持多语言识别与说话人分离，提供可视化的 noScribe Editor 进行快速校对；
- 提供便捷的安装包（Windows/Mac/Linux）与 Docker、Helm 等部署示例。

## 使用场景

- 质性研究与访谈记录的自动转录与人工校对；
- 记者、学者对音视频资料的快速整理与时间轴标注；
- 在无网络或对隐私敏感的环境下执行离线转录任务。

## 技术特点

- 基于 OpenAI Whisper 生态（faster-whisper）与 Pyannote 说话人识别，支持本地模型加速与 GPU 加速方案；
- 模块化设计，支持自定义模型、脚本化导出与与第三方工具集成；
- 文档与示例完善（README、ReadTheDocs 链接），包含安装与模型下载说明，便于上手与生产部署。
