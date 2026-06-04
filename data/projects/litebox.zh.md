---
name: LiteBox
slug: litebox
homepage: https://aka.ms/litebox
repo: https://github.com/microsoft/litebox
license: Unknown
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Dev Tools
  - Runtime
  - Safety
description: 一个面向安全的 library OS，支持内核与用户态受限执行，用于将宿主接口最小化并降低攻击面。
author: Microsoft
ossDate: '2024-12-11T01:23:27Z'
featured: false
status: tracked
---

LiteBox 是微软开发的面向安全的 library OS，通过最小化宿主接口来降低沙箱工作负载的攻击面。它支持内核态和用户态的受限执行，可在 Windows 上运行未经修改的 Linux 程序、为 AI 生成代码提供沙箱，以及运行在 SEV SNP 和 OP-TEE 等硬件隔离环境中。

## 核心设计原则

- **最小化的宿主接口**，大幅缩小沙箱应用的攻击向量
- **可插拔的北向/南向平台模型**，实现跨多种执行环境的灵活互操作
- **强隔离与可审计性**，通过系统调用重写和运行时隔离在用户态和内核态强制执行约束
- **机密计算支持**，兼容 SEV SNP、LVBS 和 OP-TEE 等硬件隔离平台
- **快照与运维工作流**，用于受限执行环境中的状态管理

## 使用场景

- 在 Windows 上运行未经修改的 Linux 程序，提升跨平台兼容性
- 为云和边缘环境中安全执行第三方或 AI 模型生成的代码提供沙箱
- 作为 SEV SNP、LVBS 和 OP-TEE 等机密计算平台上硬件隔离执行的可信运行时基础
- 在云和边缘环境中以最小信任边界隔离多租户工作负载

## 技术特点

- 主要使用 Rust 和 C 组件实现，优先确保最小依赖和高可审计性
- 库级 OS 设计通过最小契约与宿主系统集成，而非完整内核接口
- 同时支持用户态和内核态的受限执行，提供统一的隔离机制
