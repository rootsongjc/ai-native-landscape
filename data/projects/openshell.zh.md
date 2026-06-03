---
name: OpenShell
slug: openshell
homepage: null
repo: https://github.com/nvidia/openshell
license: Unknown
category: training-optimization
subCategory: safety-guardrails
tags:
  - Agents
  - CLI
  - Safety
  - Sandbox
description: NVIDIA OpenShell 是面向自主 AI 智能体的安全、私密运行时环境，通过声明式 YAML 策略提供沙箱隔离执行，保护用户数据、凭证与基础设施免受未授权访问。
author: NVIDIA
ossDate: '2026-02-24'
featured: true
status: tracked
---

## 详细介绍

OpenShell 是 NVIDIA 开发的安全、私密运行时环境，专为自主 AI 智能体设计。它通过容器化沙箱隔离执行环境，防止未经授权的文件访问、数据泄露和不受控制的网络活动。所有出站连接均由策略引擎拦截，根据声明式 YAML 策略决定允许、路由或拒绝。

项目采用 Agent-first 设计理念，内置智能体技能，支持 Claude Code、OpenCode、Codex、GitHub Copilot 等主流 AI 编程助手。底层基于 K3s Kubernetes 集群（运行在单个 Docker 容器内），无需额外安装 Kubernetes。

## 主要特性

- **沙箱隔离**：每个沙箱运行在独立容器中，具备策略驱动的出口路由
- **声明式策略**：通过 YAML 文件定义文件系统、网络、进程和推理策略
- **多层防护**：文件系统、网络、进程、推理四层策略域纵深防御
- **凭证管理**：Provider 机制自动发现和注入 API 密钥，凭证不泄露到沙箱文件系统
- **GPU 支持**：实验性 GPU 直通功能，支持本地推理和微调工作负载
- **终端 UI**：实时终端仪表盘，类似 k9s 的键盘驱动界面
- **热加载策略**：网络和推理策略可在运行时热更新，无需重启沙箱

## 使用场景

- 为 AI 编程助手提供安全隔离的执行环境
- 在受控网络策略下运行自主智能体
- 保护 API 密钥和凭证不被智能体泄露
- 通过策略引擎实现合规审计和数据防泄漏
- 利用 GPU 直通进行本地模型推理

## 技术特点

- 底层使用 K3s Kubernetes 集群，封装在单个 Docker 容器中
- 网关组件作为控制平面 API，协调沙箱生命周期并充当认证边界
- 隐私路由器实现感知隐私的 LLM 路由，保持敏感上下文在沙箱计算节点
- 静态策略（文件系统、进程）在创建时锁定，动态策略（网络、推理）支持热加载
- 支持 BYOC（自带容器）和社区沙箱目录
