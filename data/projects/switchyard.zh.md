---
name: NeMo Switchyard
slug: switchyard
homepage: null
repo: https://github.com/NVIDIA-NeMo/Switchyard
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - LLM Routing
  - Gateway
  - Rust
  - NVIDIA
description: NVIDIA NeMo 团队推出的 Rust LLM 流量代理与库，跨厂商路由请求并在 OpenAI 与 Anthropic API 之间做协议转换。
author: NVIDIA-NeMo
ossDate: '2026-05-19T19:06:33Z'
featured: false
status: tracked
---

## 简介

Switchyard 是 NVIDIA NeMo 团队推出的 Rust LLM 流量代理与库。它跨厂商路由请求，在 OpenAI Chat、Anthropic Messages 和 OpenAI Responses API 格式之间做协议转换，记录运营指标，并提供类型化、可组合的路由算法。让 Claude Code、Codex 等编程代理继续说原生 API，后端由 vLLM、NVIDIA NIM 或 Ollama 等开源模型服务。

## 主要特性

- OpenAI Chat、Anthropic Messages、OpenAI Responses 格式间协议转换。
- 多后端路由：随机、LLM 分类器、信号驱动阶段路由器或自定义算法。
- Prometheus 指标覆盖请求、错误、延迟、Token 与路由开销。
- 可作为启动器、独立代理服务器或嵌入式 Rust 库使用。

## 使用场景

- 让 Claude Code 或 Codex CLI 运行在开源模型之上。
- 跨模型分流做 A/B 基准测试。
- 在 Rust 应用中嵌入自定义 LLM 路由。

## 技术特点

- Rust 编写；路由算法类型化且可组合，自定义策略可直接插入同一代理。
- 三种使用模式：包装 Claude Code / Codex CLI / OpenClaw 的启动器、独立代理服务器、嵌入式库。
- 路由策略含随机、LLM 分类器、信号驱动阶段路由及用户自写算法。
- Prometheus 指标覆盖请求、错误、延迟、Token 及路由开销本身。
- Pre-alpha 阶段，v1.0 前 API 可能变化。
