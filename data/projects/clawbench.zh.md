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
ossDate: '2026-04-10'
featured: false
status: tracked
---

## 简介

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

## 技术特点

- 以 `clawbench-eval` 包分发（uv / pipx / pip 安装），提供 `clawbench-run`、`clawbench-batch`、`clawbench-rescore`、`clawbench-analyze`、`clawbench-reproduce` 等命令行入口；仓库根为 uv 包，`./run.sh` 一键克隆配置运行
- 容器隔离的 harness 执行环境，自动探测 Docker 或 Podman（可用 `CONTAINER_ENGINE` 强制指定），每个任务在独立容器中对真实网站运行
- 每个（任务 × 模型）组合产出五层轨迹：视频、动作截图、HTTP 流量、浏览器操作、智能体消息；V1/V2 原始轨迹以数据集形式发布在 HuggingFace（NAIL-Group/ClawBenchV1Trace、TIGER-Lab/ClawBenchV2Trace），支持 `rescore` 对历史运行重新评分
- 评分依赖请求拦截与任务专属评测 schema，默认阻断不可逆操作；新任务以 JSON spec + rubric 形式贡献
- 方法论见 arXiv:2604.08523，在线排行榜托管于 HuggingFace Spaces（TIGER-Lab），任务浏览器支持搜索、过滤与分类
