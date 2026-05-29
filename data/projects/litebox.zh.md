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
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

LiteBox 是微软开发的面向安全的 library OS，旨在为内核与用户态场景提供受限的运行环境并将宿主接口最小化以降低攻击面。它通过将宿主能力封装为明确的 Platform 接口，实现北向（North）与南向（South）平台的可插拔对接，并支持在 SEV SNP、OP-TEE、Windows 等平台运行受限程序或将 Linux 应用沙箱化。

## 主要特性

- 最小化宿主接口，显著减少攻击面。
- 支持多种平台与运行时（内核/用户态、SEV SNP、OP-TEE 等）。
- 提供可移植的 North/South 接口以简化互操作性。
- 注重可审计性与强隔离，便于安全验证与合规。

## 使用场景

- 将未修改的 Linux 程序在 Windows 上运行，以实现跨平台兼容。
- 在云或边缘环境中对第三方或模型生成代码进行沙箱执行以降低风险。
- 在需要硬件隔离（如 SEV SNP）或受限执行环境时提供可信运行时基础。

## 技术特点

- 用 Rust/C 组合实现，强调无冗余依赖与高可审计性。
- 提供系统调用重写与运行时隔离机制，允许在用户态或内核级别实现受限执行。
- 设计为库级 OS，可与上层宿主以最小契约方式集成，支持序列化/镜像等运维场景。
