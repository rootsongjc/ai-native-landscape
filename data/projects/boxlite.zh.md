---
name: BoxLite
slug: boxlite
homepage: https://boxlite.ai
repo: https://github.com/boxlite-ai/boxlite
license: Apache-2.0
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Agents
  - Deployment
  - Sandbox
description: 一个用于嵌入、沙箱运行与交付智能体的轻量化运行时与容器化工具集。
author: BoxLite Labs
ossDate: '2025-12-07T22:49:32Z'
featured: false
status: tracked
---
BoxLite 是一个面向 AI 智能体的计算基座，轻量到可以在笔记本上运行，同时具备弹性扩展到云端的能力。它提供可嵌入的运行时与容器化沙箱，帮助开发者在受控环境中隔离、调试并部署智能体工作负载。项目采用 Rust 实现，强调最小运行时依赖与强安全边界。

## 沙箱执行

- 基于容器化和进程隔离的受控沙箱运行环境，降低运行时风险
- 安全执行不受信任或实验性的智能体代码
- 智能体任务与宿主系统之间建立强安全边界

## 可嵌入运行时

- 支持将智能体功能作为轻量组件直接嵌入已有应用
- 最小运行时占用，适合受限与边缘环境部署
- 以 OCI 兼容的小体积镜像运行智能体推理或自动化任务

## 容器工作流集成

- 兼容 OCI 镜像，无缝对接 CI/CD 流水线
- 镜像化交付确保构建可复现、部署一致性
- 支持本地与 CI 环境测试，便于在生产前复现与调试问题

## 技术基础

- 基于 Rust 开发，运行时开销极低、执行效率高
- 采用 Apache-2.0 许可，聚焦容器化沙箱与最小运行时
- 面向无服务器、边缘计算与需要隔离的轻量部署场景
