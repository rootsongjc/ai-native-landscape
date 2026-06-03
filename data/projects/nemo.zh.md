---
name: NeMo
slug: nemo
homepage: https://docs.nvidia.com/deeplearning/nemo/user-guide/docs/en/main/
repo: https://github.com/nvidia/nemo
license: Unknown
category: models-modalities
subCategory: multimodal
tags:
  - Framework
description: NVIDIA 的 NeMo 框架，覆盖语音、语音合成、多模态和大语言模型训练与微调。
author: NVIDIA
ossDate: '2019-08-05T20:16:42.000Z'
featured: false
status: tracked
---

NeMo 是 NVIDIA 开发的开源多领域 AI 框架，专注于语音识别（ASR）、语音合成（TTS）、多模态和大语言模型的训练与部署。它提供从数据预处理、模型训练到部署推理的全流程支持，帮助研究人员和工程师快速构建生产级 AI 应用。

## 模型集合

- 语音识别模型包括 Conformer、Citrinet，支持多语言 ASR 任务
- TTS 模型如 FastPitch、HiFi-GAN，提供自然流畅的语音合成能力
- NLP 领域支持 GPT、T5、BERT 等大语言模型的训练、微调和量化
- 多模态能力支持视觉-语言任务，结合图像理解与文本生成

## 训练与基础设施

- 基于 PyTorch Lightning 构建，提供一致的 API 接口和配置系统
- 开箱即用的多 GPU 和多节点分布式训练支持
- 混合精度训练、梯度累积和检查点管理等高效训练特性
- 容器化部署支持，提供 Docker 镜像和 Kubernetes 配置

## 生态集成

- 与 NVIDIA TAO Toolkit、Triton Inference Server 深度集成，形成完整 AI 工作流
- 丰富的预训练模型和教程，方便快速上手
- 高效的数据加载器和训练管理工具，支持大规模实验
- 支持百亿参数级别模型的训练和微调，为企业构建定制化 LLM 提供工具支持
