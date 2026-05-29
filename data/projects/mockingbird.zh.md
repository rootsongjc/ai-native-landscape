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

## 详细介绍

MockingBird 是一款面向研究与工程使用的开源语音克隆与实时语音生成工具，目标是在极短的时间内（例如 5 秒）克隆目标说话人的声音并生成任意文本的语音。项目基于 PyTorch 实现，兼容多种训练与推理后端，并提供可视化的工具箱、命令行接口与可选的 Web 服务接口，便于在实验室或小型生产环境中快速试验与部署。

## 主要特性

- 快速克隆：支持使用短时语音样本快速构建说话人表示并合成相似音色的语音。  
- 多平台与硬件支持：在 Windows、Linux（也可在 M1 macOS 上运行）与常见 GPU（如 T4、GTX 系列）上测试通过。  
- 丰富的工具链：包含预处理、训练、合成脚本以及可选的 Web 服务（`web.py`）与演示界面。  
- 社区模型与示例：提供社区共享的预训练模型与对比效果展示（Comparisons）。

## 使用场景

- 语音克隆研究与实验：快速验证声学模型与说话人建模方法的有效性。  
- 语音合成原型：在产品或演示中生成特定声音样例用于用户测试或内容制作。  
- 教学与示例：作为学习语音合成、vocoder 与声码器训练流程的实践项目。  

## 技术特点

- 基于 PyTorch 的模块化实现，包含 encoder、synthesizer 与 vocoder 等组件，便于替换与扩展。  
- 支持使用预训练编码器/声码器并仅训练合成器以加速上手和实验。  
- 提供针对不同平台的安装与运行指引（包含依赖安装、M1 Mac 的 Rosetta 方案等），并在 README 与 Wiki 中保留详细操作步骤。
