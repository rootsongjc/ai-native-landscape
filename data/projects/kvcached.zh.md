---
name: kvcached
slug: kvcached
homepage: https://yifanqiao.notion.site/Solve-the-GPU-Cost-Crisis-with-kvcached-289da9d1f4d68034b17bf2774201b141
repo: https://github.com/ovg-project/kvcached
license: Unknown
category: inference-serving
subCategory: model-serving
tags:
  - Inference
  - Serving
description: 将操作系统风格的虚拟内存抽象带入 LLM 系统，提供弹性按需的 KV 缓存分配，从而提升 GPU 在动态负载下的利用率。
author: OVG Project
ossDate: '2025-05-27T17:34:02.000Z'
featured: false
status: tracked
---

## 简介

kvcached 是一个面向 LLM 服务/训练的 KV 缓存守护进程，通过将虚拟化的 KV 地址空间与物理 GPU 内存解耦，实现弹性按需的 KV 缓存分配。该机制允许在负载高峰时动态回填物理内存、减小常驻内存占用，从而显著提升 GPU 多模型部署与共置场景下的利用率和成本效率。

## 主要特性

- 弹性 KV 缓存：按需分配与回收 KV 缓存内存，匹配实时负载。
- GPU 虚拟内存抽象：将逻辑 KV 地址与物理 GPU 内存隔离，支持运行时映射与回填。
- 多引擎支持：与主流推理引擎（如 SGLang、vLLM）集成，支持容器与 Docker 化部署。

## 使用场景

- 多模型并行部署：多种 LLM 在同一 GPU 上弹性共享 KV 缓存，降低整体硬件成本。
- Serverless 型推理：模型按需启动与回收，KV 缓存随请求动态分配，适合突发性流量场景。
- GPU 共置与混合工作负载：在推理与训练或视觉任务共存的环境中，更好地协调内存资源。

## 技术特点

- 支持按页/分区的运行时内存回填与回收策略。
- 提供 CLI 与运维工具用于内存限额控制与监控。
- 优化后的 KV 张量布局与基准工具，展示在多模型负载下的延迟与吞吐提升。
