---
name: BoxLite
slug: boxlite
homepage: https://boxlite.ai
repo: https://github.com/boxlite-ai/boxlite
license: Unknown
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Agents
  - Deployment
  - Sandbox
description: 一个用于嵌入、沙箱运行与交付智能体的轻量化运行时与容器化工具集。
logo: ''
author: BoxLite Labs
ossDate: '2025-12-07T22:49:32Z'
featured: false
status: tracked
---

## 简介

BoxLite 是一个面向 AI 智能体的计算基座，轻量到可以在笔记本上运行，同时具备弹性扩展到云端的能力。它提供可嵌入的运行时与容器化沙箱，帮助开发者在受控环境中隔离、调试并部署智能体工作负载。项目采用 Rust 实现，强调最小运行时依赖、高性能与强安全边界。

## 主要特性

BoxLite 提供基于容器化和进程隔离的受控沙箱运行环境以降低运行时风险，支持将智能体功能嵌入已有应用实现轻量化部署。兼容 OCI 镜像与容器化工作流便于与现有 CI/CD 集成，采用 Rust 实现以最小化运行时依赖并提高执行效率与安全性。

## 使用场景

适用于本地与 CI 的智能体行为沙箱测试，以便在生产前复现与调试问题。也适合在受限或边缘环境中以小体积镜像运行智能体推理或自动化任务，以及将智能体功能作为嵌入组件供上层应用调用以加速原型与交付。

## 技术特点

BoxLite 基于 Rust 开发，采用 Apache-2.0 许可，聚焦容器化沙箱、镜像化交付与最小运行时。仓库主题包括 ai-agents、sandbox、containers 与 serverless，适合需要隔离、安全边界和轻量部署的智能体场景。
