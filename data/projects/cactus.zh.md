---
name: Cactus
slug: cactus
homepage: https://cactuscompute.com/docs
repo: https://github.com/cactus-compute/cactus
license: Unknown
category: applications-products
subCategory: productivity-tools
tags:
  - Dev Tools
  - LLM
  - Product
description: 面向手机的能效推理引擎与数值计算框架，优化 ARM CPU 执行以在移动设备上高效运行大模型。
logo: ''
author: cactus-compute
ossDate: '2025-04-23T14:33:43.000Z'
featured: false
status: tracked
---

## 简介

Cactus 是一款面向手机和可穿戴设备的低延迟 AI 推理引擎与数值计算框架，由 cactus-compute 开发。它针对 ARM CPU 进行了深度优化，能够在极低功耗和内存占用下运行大语言模型，实现在终端设备上的本地 AI 推理而无需依赖云端连接。

## 主要特性

针对 ARM 处理器的 CPU 优先优化，有效降低电池消耗和发热。统一的 Cactus Graph 和 Cactus Kernels 提供零拷贝计算图与 SIMD 优化内核，实现高吞吐推理。提供 Flutter、React Native 和 Kotlin 等跨平台 SDK，便于快速将端侧推理集成到各类移动应用中。

## 使用场景

在手机和可穿戴设备上直接运行轻量级或混合模式的 LLM 推理，用于聊天机器人、智能助手和快速生成任务，消除网络延迟。将高效深度学习推理嵌入移动应用，提供实时且保护隐私的 AI 体验。将 Hugging Face 模型转换并针对移动端进行性能验证与基准测试。

## 技术特点

提供与 OpenAI 兼容的 C API 及 FFI 绑定，支持跨多种编程语言集成。在部分工作负载中展现出优于 Llama.cpp 的 CPU-only 吞吐率和更小的模型体积。内置 Python 工具链用于模型转换、测试脚本和构建指南，降低上手门槛。
