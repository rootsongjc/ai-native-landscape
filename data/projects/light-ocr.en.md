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
description: A fast, fully offline OCR toolkit for Node.js and C++ built on PP-OCRv6 and ONNX Runtime, returning text, confidence scores, and coordinates with CoreML and WebGPU acceleration.
author: arcships
ossDate: '2026-07-14'
featured: false
status: tracked
---

## Overview

light-ocr is a fast, fully offline OCR toolkit for Node.js and C++. Built on PP-OCRv6 and ONNX Runtime, it recognizes text in PDF, JPEG, PNG, or raw pixel data directly on the machine, returning lines in reading order with confidence scores and quadrilateral coordinates. The npm package carries the model, OCR runtime, PDFium renderer, and a Chinese fallback font through platform packages — no postinstall scripts, no first-run downloads, no Python at runtime.

## Key Features

- One `npm install @arcships/light-ocr` delivers working OCR across six prebuilt platforms (macOS Apple Silicon/Intel, Linux x64/arm64, Windows x64/arm64)
- CLI (`recognize`, `detect`, `document`, `info`, `doctor`) plus Node.js API in CommonJS, ESM, and TypeScript from the same package
- PDF and multi-page OCR built in: matching PDFium binary and checksum-pinned Noto Sans SC fallback font ship in the platform package, so PDFs referencing non-embedded Chinese fonts render before OCR
- Hardware acceleration by default: Core ML on macOS 15+ Apple Silicon, WebGPU through Vulkan on Linux x64, WebGPU through D3D12 on Windows x64, CPU elsewhere
- Accepts decoded `GRAY8`/`RGB8`/`BGR8`/`RGBA8` pixel buffers when the application already decodes images; optional `tiled` mode preserves small dense text in high-resolution images
- Versioned output contract (`schemaVersion: 1`) with automatic EXIF orientation correction and streaming JSONL for multi-page jobs

## Use Cases

- Local OCR in Node.js applications, CLIs, and desktop software without sending images to a cloud API
- PDF document pipelines needing text plus per-line confidence and coordinates for downstream extraction
- Receipts and forms field extraction via region-of-interest recognition
- Native C++ integrations linking the `light_ocr::core` CMake static-library target

## Technical Details

- PP-OCRv6 Small (~30 MB) is the stable default; Tiny (~6.3 MB, 49 languages) and Medium (~139 MB) tiers ship as opt-in preview packages under the `next` tag, all sharing the same API, types, result schema, and error model
- C++17 core with a Node-API v8 binding; recognition runs off the JavaScript main thread with queueing, cancellation, and explicit cleanup
- Measured same-device speedups (v0.3.0): 2.30–2.85× end-to-end on Apple M4 Max via Core ML with 95.91–97.67% less OCR-process CPU time, 5.70× on an RTX 5060 Ti (Linux, Vulkan), 2.44× on a Radeon 780M (Windows, D3D12); both WebGPU runs were byte-identical to CPU FP32 across all 14 test images
- Downstream macOS packagers may re-sign the native binaries; the loader accepts a re-signed Mach-O when its code signature verifies and its signing identity matches the host app (same TeamIdentifier or both ad-hoc), while other platforms keep the strict size + SHA-256 gate
- Ships an Agent Skill (`.agents/skills/local-ocr/SKILL.md`) covering when to use OCR versus a multimodal model, detect-then-recognize workflows for large images, and verifying multimodal output against deterministic OCR
