---
name: OpenMontage
slug: open-montage
homepage: null
repo: https://github.com/calesthio/OpenMontage
license: AGPL-3.0
category: models-modalities
subCategory: image-video-generation
tags:
  - Video Generation
  - Image Generation
  - Agent
  - Text-to-Speech
  - Remotion
description: 首个开源的智能体视频生产系统，将 AI 编程助手变成完整的视频工作室，自动完成调研、脚本、素材生成、剪辑与最终合成。
author: Calesthio
ossDate: '2026-03-29T15:23:22Z'
featured: false
status: tracked
---

## 简介

OpenMontage 是首个开源的智能体视频生产系统，可将 AI 编程助手（Claude Code、GitHub Copilot、Cursor）变成完整的视频工作室。用自然语言描述需求，智能体即可通过 12 条流水线和 52 个工具完成调研、脚本、素材生成、剪辑与最终合成。

## 主要特性

- 12 条生产流水线与 52 个工具，覆盖图像视频、真实素材合成及动画短片等多种形态。
- 超过 500 项智能体技能，覆盖调研、脚本、配音、剪辑与渲染全流程。
- 多供应商素材生成（Veo、Kling、FLUX、Stable Diffusion、gpt-image-1），配合 ElevenLabs、OpenAI、Google Chirp3-HD 等语音合成。
- 通过 Remotion 完成最终合成与渲染，并使用 WhisperX 生成逐字字幕。

## 使用场景

- 用一句自然语言提示制作电影级预告片、动画短片和产品广告。
- 从免费素材库与开放档案中检索真实运动镜头并剪辑成完整视频。
- 端到端生成品牌营销与社交内容，几乎无需手工处理素材。

## 技术特点

- 基于 Python 的智能体系统，采用 AGPL-3.0 协议开源。
- 直接运行于现有 AI 编程助手内部，而非独立应用。
- 提供定制（atelier）与流水线两种模式，兼顾模板化与完全自定义场景。
