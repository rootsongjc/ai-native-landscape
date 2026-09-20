---
name: light-ocr
slug: light-ocr
homepage: https://github.com/arcships/light-ocr#readme
repo: https://github.com/arcships/light-ocr
license: Apache-2.0
category: rag-knowledge
subCategory: document-processing
tags:
  - OCR
  - ONNX Runtime
  - PP-OCRv6
  - CoreML
  - WebGPU
  - Node.js
description: 面向 Node.js 与 C++ 的快速、完全离线 OCR 工具包，基于 PP-OCRv6 与 ONNX Runtime，输出识别文本、置信度与坐标，支持 CoreML 与 WebGPU 加速。
author: arcships
ossDate: '2026-07-14'
featured: false
status: tracked
---

## 简介

light-ocr 是面向 Node.js 与 C++ 的快速、完全离线 OCR 工具包。它基于 PP-OCRv6 与 ONNX Runtime，在本机直接识别 PDF、JPEG、PNG 或原始像素数据中的文本，按阅读顺序返回文本行、置信度与四边形坐标。npm 包通过平台包携带模型、OCR 运行时、PDFium 渲染器与中文字体兜底——无 postinstall 脚本、无首跑下载、运行时不需要 Python。

## 主要特性

- 一条 `npm install @arcships/light-ocr` 即可在六个预编译平台（macOS Apple Silicon/Intel、Linux x64/arm64、Windows x64/arm64）上获得可用 OCR
- CLI（`recognize`、`detect`、`document`、`info`、`doctor`）与 Node.js API（CommonJS、ESM、TypeScript）同包提供
- 内置 PDF 与多页 OCR：匹配的 PDFium 二进制与校验和固定的 Noto Sans SC 兜底字体随平台包分发，引用未内嵌中文字体的 PDF 也能先渲染再识别
- 默认硬件加速：macOS 15+ Apple Silicon 走 Core ML，Linux x64 走 Vulkan 上的 WebGPU，Windows x64 走 D3D12 上的 WebGPU，其余平台走 CPU
- 应用已解码图像时可直接传入 `GRAY8`/`RGB8`/`BGR8`/`RGBA8` 像素缓冲；可选 `tiled` 模式保留高分辨率图像中的细小密集文本
- 版本化输出契约（`schemaVersion: 1`），自动纠正 EXIF 方向，多页任务支持流式 JSONL 输出

## 使用场景

- Node.js 应用、CLI 与桌面软件的本地 OCR，图像不出本机、不调用云 API
- 需要"文本 + 每行置信度 + 坐标"供下游抽取的 PDF 文档流水线
- 通过感兴趣区域识别完成收据与表单的字段抽取
- 原生 C++ 集成，链接 `light_ocr::core` CMake 静态库目标

## 技术特点

- PP-OCRv6 Small（约 30 MB）为稳定默认；Tiny（约 6.3 MB、49 种语言）与 Medium（约 139 MB）以 `next` 标签的预览包提供，三者共用同一 API、类型、结果 schema 与错误模型
- C++17 核心 + Node-API v8 绑定；识别在 JavaScript 主线程之外运行，支持排队、取消与显式清理
- 实测同机提速（v0.3.0）：Apple M4 Max 走 Core ML 端到端 2.30–2.85×、OCR 进程 CPU 时间减少 95.91–97.67%；RTX 5060 Ti（Linux、Vulkan）5.70×；Radeon 780M（Windows、D3D12）2.44×；两次 WebGPU 运行在全部 14 张测试图上与 CPU FP32 字节一致
- 下游 macOS 打包者可对原生二进制重签名：当 Mach-O 代码签名校验通过且签名身份与宿主应用一致（同 TeamIdentifier 或同为 ad-hoc）时加载器放行，其他平台保持严格的体积 + SHA-256 校验门槛
- 附带 Agent Skill（`.agents/skills/local-ocr/SKILL.md`），覆盖何时用 OCR 而非多模态模型、大图的 detect-then-recognize 流程，以及用确定性 OCR 校验多模态输出
