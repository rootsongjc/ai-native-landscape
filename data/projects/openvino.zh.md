---
name: OpenVINO
slug: openvino
homepage: https://docs.openvino.ai/
repo: https://github.com/openvinotoolkit/openvino
license: Unknown
category: inference-serving
subCategory: inference-runtimes
tags:
  - Dev Tools
  - Inference
description: OpenVINO：Intel 提供的推理优化工具套件，专注于在 Intel 硬件上加速深度学习模型的推理。
logo: ''
author: OpenVINO
ossDate: '2018-10-15T10:54:40.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

OpenVINO 是 Intel 提供的开源推理加速与优化工具套件，帮助开发者将深度学习模型在 CPU、GPU 与 AI 加速器上高效部署与推理。

## 主要特性

- 跨平台推理：支持 CPU（x86/ARM）、Intel GPU 与 NPU 等多种设备。
- 广泛框架兼容：兼容 PyTorch、TensorFlow、ONNX、Keras 等主流模型格式，并支持 Hugging Face/Optimum 集成。
- 性能优化工具链：提供模型转换、量化、剪枝与基准测试工具，方便部署前的性能调优。

## 使用场景

- 视觉与语音推理：物体检测、图像分割、语音识别等对实时性有要求的场景。
- 生成式 AI 与 LLM 推理：在受限硬件上提升大模型推理性能与吞吐量。
- 边缘与云端部署：从嵌入式设备到数据中心的模型部署与性能优化。

## 技术特点

- 丰富的 API：提供 C++、Python、C 与 NodeJS 等语言接口，支持编译/运行时优化流程。
- GenAI 支持：专门的 GenAI 工作流和示例，便于在 OpenVINO 上运行 LLM 与生成式管道。
- 生态与示例：包含官方教程、notebooks 与社区扩展（如 OpenVINO Tools、模型服务器、示例仓库等）。
