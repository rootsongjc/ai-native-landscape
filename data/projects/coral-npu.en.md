---
name: Coral NPU
slug: coral-npu
homepage: https://developers.google.com/coral
repo: https://github.com/google-coral/coralnpu
license: Apache-2.0
category: inference-serving
subCategory: inference-runtimes
tags:
  - Edge
  - Inference
description: Coral NPU is an energy-efficient machine learning accelerator core for edge devices provided by Google Coral.
author: Google
ossDate: '2025-10-02T22:32:37Z'
featured: false
status: tracked
---
Coral NPU is a hardware accelerator for edge AI inference developed by Google Coral, supporting TensorFlow Lite models. It emphasizes co-optimized hardware architecture and software stack to deliver real-time inference under constrained power and compute budgets for edge devices.

## Hardware Acceleration

- Specialized operators and instruction-level optimizations that significantly improve inference throughput on battery-powered and embedded devices
- Low-latency execution for real-time visual and audio inference tasks
- Energy-efficient design enabling always-on edge AI workloads without draining device batteries

## Developer Tooling

- SDKs and drivers for rapid integration with existing edge hardware platforms
- Model conversion and quantization tools for porting TensorFlow Lite models to Coral hardware
- Compatible toolchain covering the full pipeline from model preparation to on-device deployment
- Comprehensive documentation maintained by Google and the open-source community

## Use Cases

- Local inference on edge AI agents in smart home and industrial sensor applications
- Low-latency visual inference such as object detection, face recognition, and pose estimation
- Offline speech recognition and keyword spotting without cloud connectivity
- On-site intelligence upgrades for industrial IoT devices in disconnected environments

## Technical Design

- Hardware-software co-design with runtime support for specific operators and instruction-level acceleration
- Optimized for TensorFlow Lite model format with quantization-aware inference paths
- Supports USB, PCIe, and M.2 form factors for flexible integration into diverse edge platforms
