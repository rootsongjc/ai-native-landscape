---
name: Llamafile
slug: llamafile
homepage: https://mozilla-ai.github.io/llamafile/
repo: https://github.com/mozilla-ai/llamafile
license: Apache-2.0
category: applications-products
subCategory: productivity-tools
tags:
  - Application
  - Dev Tools
description: 以单文件声明为中心的规范，用于定义、分发与运行可复现的 LLM 应用。
author: Mozilla
ossDate: '2023-09-10T21:12:32Z'
featured: false
status: tracked
---

## 简介

Llamafile 将模型权重及其依赖打包为单个可执行文件，使得分发和运行 LLM 变得极其简单。通过将所有内容捆绑到一个自包含的二进制文件中，它消除了复杂的环境配置需求，并确保在本地机器、容器和云环境中保持一致的行为。

## 主要特性

- 单文件分发：将模型权重、运行时和依赖打包为一个可移植的可执行文件，无需额外安装。
- 跨平台支持：覆盖 macOS、Windows、Linux 和 FreeBSD，兼容 CPU 和 GPU 硬件配置。
- 内置推理服务器，提供与 OpenAI 兼容的 API 端点，可立即与现有工具和聊天界面集成。

## 使用场景

- 开发者可通过分发单个文件与团队共享 LLM 演示，无需配置基础设施或管理复杂的环境依赖。
- 在离线或资源受限的边缘环境中，llamafile 二进制文件的自包含特性使其成为理想的部署方案。
- CI/CD 流水线可利用 llamafile 标准化模型测试与验证流程，无需依赖外部 API 服务。

## 技术特点

- 基于 Mozilla 的 llama.cpp 引擎，利用 cosmo-libc 实现跨六个操作系统/架构组合的单二进制兼容。
- 支持通过 CUDA、Metal 和 Vulkan 后端进行 GPU 加速，并自动检测硬件、在需要时回退到 CPU 推理。
- 内置 HTTP 服务器，提供与 OpenAI 兼容的聊天补全 API，可与现有客户端库无缝集成。
