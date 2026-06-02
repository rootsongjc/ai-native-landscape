---
name: LiteBox
slug: litebox
homepage: https://aka.ms/litebox
repo: https://github.com/microsoft/litebox
license: Unknown
category: training-optimization
subCategory: safety-guardrails
tags:
  - Dev Tools
  - Runtime
  - Safety
description: 一个面向安全的 library OS，支持内核与用户态受限执行，用于将宿主接口最小化并降低攻击面。
logo: ''
author: Microsoft
ossDate: '2024-12-11T01:23:27Z'
featured: false
status: tracked
---

## 简介

LiteBox 是微软开发的面向安全的 library OS，通过最小化宿主接口来降低沙箱工作负载的攻击面。它支持内核态和用户态的受限执行，可在 Windows 上运行未经修改的 Linux 程序、为 AI 生成代码提供沙箱，以及运行在 SEV SNP 和 OP-TEE 等硬件隔离环境中。

## 主要特性

LiteBox 将宿主接口缩减到最小，显著缩小沙箱应用的攻击面。其可插拔的北向/南向平台模型实现了跨多种执行环境的灵活互操作。设计上强调强隔离、可审计性和对机密计算硬件的支持。

## 使用场景

企业使用 LiteBox 在 Windows 上运行未经修改的 Linux 程序，以提升跨平台兼容性。它为在云和边缘环境中安全执行第三方或 AI 模型生成的代码提供沙箱，而不危及宿主系统安全。它还可作为 SEV SNP、LVBS 和 OP-TEE 平台上硬件隔离执行的可信运行时基础。

## 技术特点

LiteBox 主要使用 Rust 和 C 组件实现，优先确保最小依赖和高可审计性。系统调用重写和运行时隔离机制在用户态和内核态都强制执行受限运行。库级 OS 设计通过最小契约与宿主系统集成，支持快照和运维工作流。
