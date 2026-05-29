---
name: Sandbox Runtime
slug: sandbox-runtime
homepage: null
repo: https://github.com/anthropic-experimental/sandbox-runtime
license: Unknown
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Dev Tools
  - Sandbox
description: 一个轻量级的沙箱工具，用于在操作系统层面对任意进程实施文件系统与网络访问限制。
logo: ''
author: Anthropic
ossDate: '2025-10-20T02:52:10.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 简介

Sandbox Runtime 是一个由 Anthropic Experimental 发布的轻量级沙箱工具，旨在在操作系统级别为任意进程强制实施文件系统与网络访问限制，而无需完整容器化。该项目强调低运行时开销、易于集成与可审计的策略表达，适用于对第三方二进制、脚本或插件进行最小权限运行的需求场景。

设计上，Sandbox Runtime 通过利用操作系统的命名空间与权限机制提供隔离能力，避免了完整容器化带来的资源与运维复杂性。其配置以策略为中心，便于在 CI/CD、开发与边缘部署等不同环境下复用与审计。

## 主要特性

- 操作系统层面的文件系统访问控制与网络限制。
- 无需容器即可隔离进程，降低部署复杂度与资源占用。
- 支持细粒度的策略配置，便于在不同环境中复用与审计。

## 使用场景

- 在 CI/CD 中对第三方构建步骤进行隔离，减少安全风险。
- 对插件、脚本或不受信任工作负载做短期运行隔离。
- 在资源受限的边缘或开发环境中替代重型容器方案。

## 技术特点

- 使用操作系统提供的权限与命名空间机制实现沙箱能力，保证性能与兼容性。
- 以 TypeScript 实现，便于与现代开发工具链集成与扩展。
- 提供策略化的访问控制规则与日志审计点，便于安全团队进行合规检查与故障排查。
- Apache-2.0 许可证，便于企业与开源社区采用与贡献。
