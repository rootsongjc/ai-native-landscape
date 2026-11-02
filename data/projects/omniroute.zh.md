---
name: OmniRoute
slug: omniroute
homepage: https://omniroute.online
repo: https://github.com/cheaper-inference/OmniRoute
license: MIT
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - LLM Routing
  - Token Optimization
  - Free Tier
description: >-
  免费的 MIT 协议 AI 网关：把 380 家提供商（150+ 含免费额度）和 1400+ 模型汇聚到
  一个端点之后，供 Claude Code、Codex、Cursor、Cline、Copilot 使用，具备配额感知
  自动降级和叠加式 token 压缩。
author: cheaper-inference
ossDate: '2026-02-13'
featured: false
status: tracked
---

## 简介

OmniRoute 是一个自带账号（bring-your-own-account）的 AI 网关，把数百家提供商（其中 150+ 提供免费额度）编目在单一端点之后。Claude Code、Codex、Cursor、Cline、Copilot 等编码工具只需接入一次，即可路由到 Kimi、Claude、GPT、Gemini、GLM、DeepSeek、MiniMax 等模型；配额耗尽时自动降级切换，编码不会因限流而中断。

## 主要特性

- 一个端点接入 380 家提供商、约 1475 个唯一对话模型 ID
- 编目 34 个周期性池中的 485 条免费额度记录，经审计的免费 token 总量约每月 16.2 亿，实时展示在仪表盘上
- 配额感知的自动降级（Quota-Share）配合实时配额遥测，限额触发时自动在提供商之间轮换
- 网关层叠加 RTK + Caveman 压缩，节省 15–95% 的 token
- 模态桥接让视觉、音频、视频走同一路由
- 支持 npm 包、Docker 容器、桌面应用或 PWA 运行；私有且本地优先

## 使用场景

- 把多个免费额度叠加在单一端点之后，让 Claude Code 或 Cursor 在提供商限流之间持续编码
- 通过网关级压缩削减编码智能体的 token 开销
- 借助模型发现 API 和仪表盘查找、对比可用模型与免费配额

## 技术特点

- 配额感知调度（Quota-Share）跟踪每个提供商的剩余预算并在免费额度间自动轮换流量；实时遥测在 `/dashboard/free-tiers` 页面展示已用/剩余配额，其预算计算按池去重并每两周重新审计
- 在网关层叠加 RTK 与 Caveman 压缩，请求到达提供商之前剥离 15–95% 的 token，对编码工具完全透明
- 除 MCP 和 A2A 接口外，提供面向服务器部署的 `serve --headless` 无头模式，以及供程序化模型查询的 `/v1/models/query` 发现 API
- 通过 npm、Docker Hub、Electron 桌面版和 PWA 分发，全部本地优先，提供商凭据保留在本机
