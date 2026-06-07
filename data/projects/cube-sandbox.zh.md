---
name: CubeSandbox
slug: cube-sandbox
homepage: 'https://cubesandbox.com'
repo: https://github.com/tencentcloud/CubeSandbox
license: Apache-2.0
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Sandbox
  - Container
  - Agent
  - MicroVM
description: 基于 RustVMM 和 KVM 构建的高性能硬件隔离沙箱服务，兼容 E2B SDK，冷启动低于 60ms，专为 AI 智能体设计。
author: Tencent Cloud
ossDate: '2026-04-10'
featured: false
status: tracked
---

## 简介

CubeSandbox 是一款即时、并发、安全且轻量的沙箱服务，专为 AI 智能体设计。基于 RustVMM 和 KVM 构建，提供真正的内核级隔离——每个智能体运行在独立的客户机 OS 内核上，彻底消除 Docker 共享内核方式中的容器逃逸风险。

## 主要特性

- 通过资源池预分配和快照克隆技术实现低于 60ms 的全功能沙箱冷启动
- 基于 CoW 技术和 Rust 重构的精简运行时，单实例内存开销低于 5MB
- 硬件级内核隔离，配合 eBPF 驱动的 CubeVS 实现沙箱间网络安全隔离
- 原生兼容 E2B SDK 接口，替换一个 URL 即可从闭源沙箱零成本迁移
- CubeCoW 引擎支持百毫秒级事件快照、克隆和回滚
- 支持单节点和集群部署，已在腾讯云生产环境大规模验证

## 使用场景

- AI 编程智能体和 LLM 生成代码的安全执行环境
- 隔离环境中的浏览器自动化
- 强化学习训练环境（SWE-Bench 等）
- 裸机基础设施上的高密度多租户智能体托管

## 技术特点

- 基于 RustVMM 虚拟化和 KVM 硬件加速构建
- 写时复制（CubeCoW）快照引擎，支持即时克隆和状态回滚
- eBPF 驱动的 CubeVS 实现沙箱间网络隔离和出站流量过滤
- 提供 PyPI 安装包（cubesandbox），支持 Python 集成
