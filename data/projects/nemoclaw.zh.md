---
name: NemoClaw
slug: nemoclaw
homepage: null
repo: https://github.com/nvidia/nemoclaw
license: Unknown
category: training-optimization
subCategory: safety-guardrails
tags:
  - Agents
  - CLI
  - Safety
  - Sandbox
description: NVIDIA NemoClaw 是一个开源参考技术栈，用于在 NVIDIA OpenShell 安全运行时中更安全地运行 OpenClaw 常驻智能体，提供引导式入驻、加固蓝图、状态管理和路由推理。
logo: ''
author: NVIDIA
ossDate: '2026-03-15'
featured: true
status: tracked
---

## 详细介绍

NemoClaw 是 NVIDIA 推出的开源参考技术栈，旨在简化在 OpenShell 安全运行时中运行 OpenClaw 常驻智能体的流程。它基于 NVIDIA Agent Toolkit 中的 OpenShell 运行时，在沙箱隔离环境中为自主智能体提供额外的安全防护层。

NemoClaw 在 OpenShell 运行时之上增加了引导式入驻（onboarding）、加固蓝图（hardened blueprint）、状态管理、OpenShell 管控的通道消息传递、路由推理以及分层保护机制。项目处于 Alpha 阶段，自 2026 年 3 月 16 日起提供早期预览。

## 主要特性

- **引导式入驻**：通过向导式流程自动创建沙箱、配置推理和 applying 安全策略
- **加固蓝图**：预配置的安全基线，包含 Landlock、seccomp 和网络命名空间隔离
- **状态管理**：完整的主机端状态追踪和沙箱生命周期管理
- **路由推理**：支持 NVIDIA Endpoints、Ollama 等多种推理后端
- **分层防护**：文件系统、网络、进程、推理四层策略域纵深防御
- **网络策略**：声明式 YAML 网络策略，支持静态和动态规则变更
- **多平台支持**：Linux、macOS (Apple Silicon)、DGX Spark、Windows WSL2

## 使用场景

- 在安全隔离环境中运行 OpenClaw 常驻 AI 智能体
- 通过 NVIDIA NIM Endpoints 使用 Nemotron 等模型进行路由推理
- 利用加固蓝图实现合规要求的沙箱安全配置
- 在 DGX Spark 等边缘设备上部署本地 AI 智能体
- 通过声明式网络策略控制智能体的出站访问

## 技术特点

- 基于 OpenShell K3s 容器集群提供沙箱隔离
- TypeScript 插件架构，通过 Commander CLI 扩展
- 蓝图 YAML 定义网络策略和安全配置
- 支持 Landlock、seccomp、网络命名空间等多重内核级隔离机制
- 推理路由支持 NVIDIA Endpoints 和本地 Ollama 模型
- 一键安装脚本，无需 sudo 权限（Docker 除外）
