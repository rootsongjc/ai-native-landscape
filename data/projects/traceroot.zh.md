---
name: TraceRoot
slug: traceroot
homepage: https://traceroot.ai
repo: https://github.com/traceroot-ai/traceroot
license: Apache-2.0
category: training-optimization
subCategory: observability-monitoring
tags:
  - Observability
  - AI Agent
  - LLM Observability
  - Debugging
  - Evaluation
description: TraceRoot 是面向 AI Agent 的开源可观测与自我改进层，自动检测生产环境故障，结合源码与 GitHub 历史定位根因，提交修复 PR 并通过评测验证每一处修复。
author: TraceRoot AI
ossDate: '2025-07-22T19:50:15.000Z'
featured: false
status: tracked
---

## 简介

TraceRoot 是面向 AI Agent 的开源可观测与自我改进层。它通过 LLM-as-judge 检测器监控生产链路中的幻觉、工具调用失败、逻辑错误与安全问题，自动结合生产源码与 GitHub 提交历史定位故障根因并提交修复 PR；确认的故障进一步转化为黄金数据集与离线评测，形成随版本迭代持续增强 Agent 的闭环。

## 主要特性

- LLM-as-judge 检测器筛查生产链路中的幻觉、工具/逻辑失败、安全违规与意图漂移，支持 Slack 和邮件告警
- Agentic Debugging 连接生产源码沙箱，定位精确到失败代码行，并与 GitHub 提交、PR、Issue 关联
- 一键将生产故障转为黄金数据集，可在 Claude Code、Codex、Cursor 等编码 Agent 内通过 CLI 或 SDK 运行离线评测
- 基于 OpenTelemetry 兼容协议采集 LLM 调用、Agent 行为与工具使用链路，自动降噪突出高价值追踪

## 使用场景

- 生产环境 AI Agent 监控，无需人工逐条排查链路即可发现故障
- 定位由代码变更、工具不稳定或模型升级引发的 Agent 回归问题
- 从真实生产故障构建评测数据集，发布前验证每一处修复
- 需要自部署、无厂商锁定的团队级 Agent 可观测方案

## 技术特点

- 核心采用 Apache-2.0 许可，企业版功能隔离在 `ee/` 目录下单独授权
- 链路采集兼容 OpenTelemetry 协议，提供 Python/TypeScript SDK，对 LangChain、LlamaIndex、CrewAI、AutoGen、OpenAI Agents SDK、Claude Agent SDK、Pydantic AI、Vercel AI SDK 等框架自动插桩
- 根因分析由 AI 调试器在包含生产源码的沙箱中执行，交叉引用 GitHub 提交与 PR 历史将故障归因到具体变更
- BYOK 模式支持 OpenAI、Anthropic、Gemini、xAI、DeepSeek、OpenRouter、Kimi、GLM 等模型供应商
- 支持 Docker Compose 本地部署，生产环境可通过 Helm + Terraform 部署到 Kubernetes
