---
name: VibeVoice
slug: vibevoice
homepage: null
repo: https://github.com/microsoft/vibevoice
license: MIT
category: models-modalities
subCategory: audio-speech
tags:
  - TTS
  - Utility
description: 用于生成长对话式文本到语音的研究型框架，擅长多说话人长时段合成。仓库目前因安全与滥用风险被项目方暂时禁用，使用时请注意合规与伦理要求。
author: Microsoft
ossDate: '2025-08-25T13:24:01.000Z'
featured: false
status: tracked
---

VibeVoice 是一个面向研究的长对话文本到语音（TTS）框架，能够生成多说话人、长时段（可达数十分钟）且具有表现力的对话音频。项目采用连续语音 tokenizer 与 next-token diffusion 架构，以提升长序列生成的效能与音频质量。项目方已在 README 中指出仓库已被暂时禁用以防范不当使用，请在研究或测试中优先考虑合规与风险控制。

## 主要特性

- 支持长对话合成：可合成接近 90 分钟的多说话人音频并保持说话人一致性与自然的回合切换。
- 连续语音 tokenizer：低帧率（7.5Hz）设计以提高效率并保留音频细节。
- 多模态与演示：包含示例视频与项目页面展示多语言与跨语言示例。

## 使用场景

- 研究与开发：用于探索长格式语音合成、对话建模与多说话人一致性问题。
- 媒体与内容制作研究：生成长对话式播客或音频剧本的研究原型（须注意合规）。
- 学术评估：用于对比 TTS 模型在长序列与多说话人场景下的性能。

## 技术特点

- next-token diffusion 与 LLM 驱动的对话理解，用于建模对话流与语境保持。
- 针对长序列的效率优化（缓存与低帧率 tokenizer）。
- 开源研究框架但 README 明确列出风险与限制（包括潜在 Deepfake 风险），建议仅限研究用途并遵守相关法规。
