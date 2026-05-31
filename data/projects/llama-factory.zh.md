---
name: LLaMA Factory
slug: llama-factory
homepage: https://llamafactory.readthedocs.io/
repo: https://github.com/hiyouga/llama-factory
license: Unknown
category: models-modalities
subCategory: foundation-models
tags:
  - Data
  - LLM
description: 用于微调 LLaMA 模型的综合框架，支持多种训练方法、高效算法和易于使用的界面，适用于研究和生产环境。
logo: ''
author: hiyouga
ossDate: '2023-05-28T10:09:12.000Z'
featured: false
status: tracked
---

LLaMA Factory 是一个简单易用且高效的大语言模型（Large Language Model）训练与微调平台。通过 LLaMA Factory，可以在无需编写任何代码的前提下，在本地完成上百种预训练模型的微调，框架特性包括：

- 模型种类：LLaMA、LLaVA、Mistral、Mixtral-MoE、Qwen、Yi、Gemma、Baichuan、ChatGLM、Phi 等等。
- 训练算法：（增量）预训练、（多模态）指令监督微调、奖励模型训练、PPO 训练、DPO 训练、KTO 训练、ORPO 训练等等。
- 运算精度：16 比特全参数微调、冻结微调、LoRA 微调和基于 AQLM/AWQ/GPTQ/LLM.int8/HQQ/EETQ 的 2/3/4/5/6/8 比特 QLoRA 微调。
- 优化算法：GaLore、BAdam、DoRA、LongLoRA、LLaMA Pro、Mixture-of-Depths、LoRA+、LoftQ 和 PiSSA。
- 加速算子：FlashAttention-2 和 Unsloth。
- 推理引擎：Transformers 和 vLLM。
- 实验监控：LlamaBoard、TensorBoard、Wandb、MLflow、SwanLab 等等。
