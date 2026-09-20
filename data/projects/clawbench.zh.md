---
name: ClawBench
slug: clawbench
homepage: https://claw-bench.com
repo: https://github.com/TIGER-AI-Lab/ClawBench
license: Apache-2.0
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Benchmark
  - Evaluation
  - AI Agent
  - Browser Automation
description: ClawBench 是一个开源基准，用于评测浏览器 AI 智能体在真实线上网站上完成日常任务的能力，并提供隔离运行环境与五层执行轨迹。
author: TIGER-AI-Lab
ossDate: '2026-04-10T01:59:17.000Z'
featured: false
status: tracked
---

## 项目概述

ClawBench 评测浏览器智能体能否在真实线上网站上完成日常任务。其 V1 套件包含来自 144 个网站的 153 项任务，V2 新增 130 项任务，并提供包含 20 项任务的 Lite 套件以支持快速评测。

## 主要特性

- 在隔离容器中针对真实网站运行每项任务。
- 支持可互换的智能体 Harness，便于比较模型与浏览器控制栈。
- 为每次运行记录视频、动作截图、HTTP 流量、浏览器操作和智能体消息。
- 使用请求拦截与任务专属评测模式判断结果，并默认阻止不可逆操作。

## 使用场景

- 在真实在线工作流中评测浏览器智能体与计算机操作智能体。
- 使用可复现的任务定义和可检查轨迹比较模型与 Harness。
- 诊断由推理、浏览器控制、网站变化或智能体 Harness 行为导致的失败。
