---
name: oMLX
slug: omlx
homepage: https://omlx.ai
repo: https://github.com/jundot/omlx
license: Unknown
category: inference-serving
subCategory: model-serving
tags:
  - Dev Tools
  - Inference
  - Serving
description: 面向 Apple Silicon 的 LLM 推理服务器，支持连续批处理和 SSD 缓存，可直接从 macOS 菜单栏管理。
author: jundot
ossDate: '2026-02-13'
featured: true
status: tracked
---

## 详细介绍

oMLX 是一个专为 Apple Silicon（M1/M2/M3/M4）设计的本地 LLM 推理服务器，通过连续批处理和分层 KV 缓存技术实现高性能推理。该项目的独特之处在于提供了原生 macOS 菜单栏应用，让用户可以便捷地管理服务、监控模型状态和下载模型，无需打开终端即可完全控制本地 LLM 部署。

oMLX 的核心创新在于其双层 KV 缓存系统——热缓存（RAM）和冷缓存（SSD）。当内存热缓存填满时，缓存块会以 safetensors 格式卸载到 SSD，下次请求匹配前缀时直接从磁盘恢复而非重新计算，即使服务器重启后缓存仍然有效。这种设计使本地 LLM 在实际编码工作中（如使用 Claude Code）变得实用。

该项目支持文本 LLM、视觉语言模型（VLM）、OCR 模型、嵌入模型和重排序模型，并提供 OpenAI 和 Anthropic API 的兼容接口。通过内置的管理面板，用户可以实时监控性能、管理模型、进行基准测试，并直接从 HuggingFace 搜索和下载模型。

## 主要特性

- **双层 KV 缓存**：内存热缓存 + SSD 冷缓存，支持跨重启的缓存持久化，即使对话中上下文变化，所有过往上下文仍保持缓存状态
- **连续批处理**：通过 mlx-lm 的 BatchGenerator 处理并发请求，prefill 和 completion 批次大小可配置
- **macOS 菜单栏应用**：原生 PyObjC 应用（非 Electron），支持启动/停止服务器、监控统计、崩溃自动重启和应用内自动更新
- **多模型服务**：在同一服务器内加载 LLM、VLM、嵌入和重排序模型，支持 LRU 驱逐、手动加载/卸载、模型固定和每模型 TTL
- **Claude Code 优化**：支持上下文缩放，使小上下文模型能与 Claude Code 配合使用，SSE keep-alive 防止长 prefill 期间读取超时
- **管理面板**：内置 Web UI，支持实时监控、模型管理、聊天、基准测试和每模型设置，完全离线运行，支持中英日韩四种语言
- **API 兼容性**：完全兼容 OpenAI 和 Anthropic API，支持流式使用统计、Anthropic 自适应思考和视觉输入
- **工具调用与结构化输出**：支持 mlx-lm 中所有可用的函数调用格式、JSON schema 验证和 MCP 工具集成

## 使用场景

- **本地 AI 编程助手**：与 Claude Code、Cursor 等 AI 编码工具配合，提供低延迟的本地模型推理
- **模型研究与实验**：研究人员可以方便地测试不同 MLX 模型的性能，内置基准测试工具提供准确的测量数据
- **隐私敏感应用**：在本地运行 LLM，确保数据不离开用户设备，适用于处理敏感信息
- **多模型部署**：同时运行多个不同类型的模型（LLM、VLM、嵌入模型等），构建复杂的 AI 应用
- **边缘 AI 服务**：在 Mac 设备上部署轻量级 AI 服务，为家庭或办公网络提供本地 AI 能力

## 技术特点

- **Apple Silicon 优化**：专门针对 Apple 芯片优化，充分利用 Metal 性能加速器
- **FastAPI 架构**：基于 FastAPI 构建服务器，提供高性能的异步 HTTP 接口
- **块级缓存管理**：受 vLLM 启发的基于块的 KV 缓存，支持前缀共享和写时复制（Copy-on-Write）
- **进程内存强制**：总内存限制（默认为系统 RAM - 8GB）防止系统级 OOM
- **模型自动发现**：从模型目录自动检测 MLX 格式的模型，支持两级目录组织结构
- **每模型配置**：可针对每个模型配置采样参数、聊天模板、TTL、模型别名和类型覆盖等
- **Apache 2.0 许可证**：完全开源，可自由使用和修改，基于 MLX、mlx-lm、mlx-vlm 等优秀项目构建
