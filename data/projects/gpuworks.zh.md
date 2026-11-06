---
name: GPUWorks
slug: gpuworks
homepage: https://gpuworks.ai/
repo: https://github.com/flitai-io/gpuworks
license: Apache-2.0
category: platform-infra
subCategory: cloud-native-ai
tags:
  - GPU Orchestration
  - MaaS
  - GPU Scheduling
  - Cloud Native
  - Model Serving
  - Multi-Cloud
description: 超轻量级 GPU 管理与 MaaS（模型即服务）平台，将自有服务器、公有云实例与私有云虚机统一为一个异构集群，支持 NVIDIA、AMD、昇腾、PPU、海光、Apple Silicon 混合调度，并通过 OpenAI 兼容端点对外提供模型服务。
author: Flit AI
ossDate: '2026-10-22'
featured: false
status: tracked
---

## 简介

GPUWorks 是一个超轻量级 GPU 管理与 MaaS（模型即服务）平台：整个控制面（含 Web UI）仅约 40 MB。一条命令即可接入自有 GPU 服务器、租用的云实例甚至 Mac，选好模型后 GPUWorks 会估算显存占用、挑选 GPU，启动 vLLM、SGLang 或任意推理模板定义的引擎，并通过统一的 OpenAI 兼容端点对外服务。NVIDIA、AMD、昇腾、T-Head PPU、海光与 Apple Silicon 节点可在同一集群中并存。

## 主要特性

- 经过验证的「模型 × 加速器」组合一键部署，内置目录包含 392 个模型的 1,235 份启动规格（覆盖 LLM、嵌入、重排、语音、图像、视频）
- 单一调度器管理异构加速器，调度时只将部署匹配到其启动规格支持的硬件上
- 公有云与私有云统一资源池：同步 RunPod、CompShare、AutoDL、Vast.ai、阿里云的实例或 ZStack Cloud 的虚机，与自有服务器一起调度
- 部署前给出显存估算与可解释的调度结果：权重、KV cache、引擎开销各占多少，选中哪些 GPU、其余为何被排除
- 通过 dGPU 硬内存配额实现多模型共享单卡，sleep/wake 机制让多个 vLLM 模型轮流使用同一组 GPU
- 支持多副本、多机张量/流水线并行与 PD 分离扩容；OpenAI 兼容网关提供最少请求、前缀亲和、故障转移等路由策略
- 完整可观测性（GPU/引擎指标、可搜索日志、支持 OTLP 导出的逐请求链路）、内置压测工具、AI 助手与只读 MCP 端点

## 使用场景

- 将自有服务器、租用云实例与私有云虚机组成混合 GPU 集群，作为统一资源池管理
- 在异构硬件上通过一个 OpenAI 兼容 API 服务开源模型（Qwen、DeepSeek、GLM、Kimi、Llama 等），无需手工调启动参数
- 用硬内存配额在单卡上共存多个模型，或由调度器在整集群内做放置决策
- 在气隙（air-gapped）或多区域环境中运行，从归档导入镜像与模型并在节点间同步

## 技术特点

- 服务端与 Agent 各为一个 Go 静态编译二进制（`CGO_ENABLED=0`）；服务端内嵌 Web UI（中英文）及全平台 Agent，全部状态存于单个 SQLite 文件
- Agent 通过 WebSocket 主动外连，节点无需开放入站端口（不可外连的节点可由服务端反向拨入）
- dGPU 共享通过厂商机制施加每实例硬内存配额：NVIDIA 用 HAMi-core、昇腾用 vCANN、PPU 用 HGGC、海光用 hy-smi 虚拟设备
- PD 分离推理：NVIDIA 上 vLLM + NIXL、昇腾上 vLLM-Ascend + Mooncake、PPU 上 SGLang/vLLM + Mooncake，支持单机或 RDMA 跨机
- 网关暴露 `/v1`（chat、completions、embeddings、rerank、audio、images、video、realtime），透传 `/v1/messages` 与 `/v1/responses`，支持 API Key 与按 Key 的 token 用量统计
- 阿里云实测：单服务器管理跨 7 个地域的 1,003 台租用 GPU 机器，4 分钟内完成 500+ 副本放置并运行，网关承载 2,000 并发请求，服务端峰值仅 9 核 CPU、1.6 GB 内存
