---
name: Triton Inference Server
slug: triton-inference-server
homepage: https://developer.nvidia.com/nvidia-triton-inference-server
repo: https://github.com/triton-inference-server/server
license: Unknown
category: inference-serving
subCategory: model-serving
tags:
  - Inference Service
description: Triton Inference Server：NVIDIA 高性能推理服务器，支持多种模型格式和多样化部署方式。
logo: ''
author: NVIDIA
ossDate: '2018-10-04T21:10:30.000Z'
featured: false
status: tracked
---

## 概述

Triton Inference Server（原名 TensorRT Inference Server）是 NVIDIA 推出的生产级推理服务器。它支持 TensorRT、ONNX、PyTorch 等多种后端，针对 GPU 加速和可扩展部署进行了优化。

## 主要特性

- 支持多种后端（TensorRT、ONNX Runtime、PyTorch、OpenVINO、Python 等）。
- 动态批处理、序列批处理、模型集成与模型管理 API。
- 提供性能分析工具（perf_analyzer、model_analyzer）及丰富的部署示例。

## 典型应用场景

- 数据中心和云环境中的大规模模型服务。
- NVIDIA Jetson 设备上的边缘和嵌入式部署。
- 对批处理、流水线和 GPU 加速有高性能需求的应用。

## 技术细节

- 提供 HTTP/REST 和 gRPC 推理协议，支持 C、C++、Java 和 Python 客户端库。
- 支持模型仓库、模型配置和自定义后端（C++/Python）。
- 推荐通过 Docker 镜像部署，并提供 Kubernetes/Helm 集成方案。
