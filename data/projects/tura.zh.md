---
name: Tura
slug: tura
homepage: https://turaai.net/
repo: https://github.com/Tura-AI/tura
license: AGPL-3.0
category: coding-devtools
subCategory: coding-agents
tags:
  - Coding Agent
  - Rust
  - Token Efficiency
  - Benchmark
  - CLI
description: 面向 AI 编程智能体的开源执行层，通过宏命令把环境检查、修改、构建与测试合并到更少的模型轮次中执行，并公开 DeepSWE 基准的全部产物。
author: Tura AI
ossDate: '2026-07-06'
featured: false
status: tracked
---

## 简介

Tura 是面向编程任务的开源 agent 运行时 harness。ReAct 会话中模型必须在每次工具结果后重新进入，反复携带系统提示与不断增长的上下文；Tura 把同样的任务变成运行时管理的命令图，让确定性执行无需再次模型往返地继续。其公开的 DeepSWE 对比显示：相比 Codex CLI，验证器成功率更高而轮次与 token 更少。

## 主要特性

- 单个宏工具 `command_run` 在一次 LLM 轮次内执行多步骤树（检查、打补丁、构建、测试、lint），而工具调用型 agent 需要五轮
- 逆向推理：不从当前状态推向目标，而是引导模型先估计目标前一状态再反向推理，在写代码前重建故障状态
- 上下文即运行时状态：task status、运行时提示与递归任务手册让活跃上下文限定在当前任务，而不是把技能与过期历史堆进同一个会话
- CLI 压缩把精确执行状态（代码位置、补丁、测试）保留在 `task_status.compact_context` 中，而不是只留一份松散摘要
- 多入口：交互式 TUI（`tura`）、直连 CLI（`tura exec`）、带回放/历史的 gateway 运行（`tura run`）、本地 HTTP/SSE gateway 与 Web GUI、桌面 GUI 工作区

## 使用场景

- 轮次数与 token 预算主导成本的长周期调试与整仓重写任务
- TUI 与 GUI 均支持 HTML 富文本的多会话并发编程工作
- 需要可复现基准证据的团队——每个会话的提示存档、逐轮工具调用、token 用量、补丁与验证器结果全部公开

## 技术特点

- Rust 代码库按 crate 组织（runtime、router、gateway、session_log、tools）并带 TUI 与 GUI 应用；npm 分发 `tura-ai` 包无 postinstall 生命周期脚本——wrapper 直接解析并启动平台包
- 公开基准产物覆盖 20 个 DeepSWE v1.1 任务 × 每个 agent 3 次运行，加重写与设计任务：Tura Balanced 验证器成功率 80.0% 对 Codex CLI 63.3%（+16.7 个百分点）、token 少 31.1%；Tura Direct token 少 77.5%、成功率相当的 65.0%
- DeepSeek 官方 mini-swe-agent 结果显示 High 与 Medium 推理档仅差 8%，说明单纯提高推理强度解释不了该优势；全部重复实验的 manifest 均已公开
- 压缩是带显式 `compact_context` 事件的 CLI 操作：基准会话压缩后平均 2.6 轮即恢复执行（Codex 未暴露等价事件，只能从 token 用量骤降估算为 5.4 轮）
- 提供商无关，并如实记录证据缺口：更广泛的 Anthropic/Gemini/本地提供商、UI 延迟与跨 OS 测量列入公开路线图与已知问题文档
- 会话持久化在 session DB 中，测试包含 runtime/session 等价性门禁；首次启动需配置 LLM 提供商——不内置任何凭据
