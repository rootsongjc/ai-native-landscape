---
name: Transformer Engine
slug: transformer-engine
homepage: https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/index.html
repo: https://github.com/nvidia/transformerengine
license: Unknown
category: platform-infra
subCategory: deployment-operations
tags:
  - ML Platform
  - Optimization
description: NVIDIA 的 Transformer Engine，提供针对 Transformer 的高性能内核与混合精度支持。
logo: ''
author: NVIDIA
ossDate: '2022-09-20T15:20:26.000Z'
featured: false
status: tracked
---

Transformer Engine 是 NVIDIA 开发的高性能 Transformer 模型加速库，专门为大型 Transformer 模型的训练和推理提供优化的计算内核。该库支持 FP8（八位浮点）和混合精度计算，能够显著减少内存使用和提升计算速度，同时保持模型的精度。Transformer Engine 为训练超大规模语言模型提供了关键的性能优化。

## 核心功能

Transformer Engine 提供了针对 Transformer 架构优化的高性能计算内核，包括注意力机制、前馈网络、层归一化等关键组件。库内置了 FP8 自动混合精度训练支持，能够智能地管理不同层的精度选择，在性能和精度之间达到最佳平衡。Transformer Engine 支持注意力机制的多种优化策略，包括 FlashAttention 等先进算法，能够处理超长序列的训练任务。库提供了易用的 API 接口，可以与 PyTorch、JAX 等主流深度学习框架无缝集成。

## 技术特点

Transformer Engine 充分利用了 NVIDIA GPU 的 Tensor Core 硬件加速能力，特别是在 Hopper 架构上对 FP8 的原生支持。库采用了自适应的缩放策略，能够动态调整数值范围以防止溢出和下溢。Transformer Engine 支持多种后端实现，包括 CUDA、cuDNN、cuBLAS 等，并提供了丰富的配置选项供用户调优。库的设计注重易用性，开发者可以通过简单的 API 调用或替换原有的 Transformer 层来获得加速。

## 应用场景

Transformer Engine 主要应用于大语言模型的训练和推理，特别是在资源受限的情况下需要提高训练速度和降低内存使用的场景。对于需要在有限 GPU 上训练超大规模模型的团队，Transformer Engine 的 FP8 支持能够显著减少内存占用，使得更大的模型或更大的 batch size 成为可能。在推理服务中，Transformer Engine 能够提高吞吐量和降低延迟，减少部署成本。该库已经被集成到 Megatron-LM、NeMo 等主流大模型训练框架中，成为训练先进 LLM 的标准组件。
