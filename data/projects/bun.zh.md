---
name: Bun
slug: bun
homepage: https://bun.sh
repo: https://github.com/oven-sh/bun
license: Unknown
category: coding-devtools
subCategory: developer-utilities
tags:
  - Dev Tools
  - Programming
  - Tool
description: 一个集运行时、打包器、包管理器与测试工具于一体的高性能 JavaScript 平台，旨在显著加速开发与构建流程。
logo: ''
author: Oven
ossDate: '2021-04-14T00:48:17Z'
featured: false
status: tracked
---

## 详细介绍

Bun 是由 Oven 开发的高性能 JavaScript 平台，集成运行时、打包器、包管理器与测试工具，目标是提供一个极简且快速的开发体验。Bun 以单一二进制分发，注重启动速度、依赖安装与构建性能，适合用作本地开发、CI 构建以及边缘函数环境。更多信息请见官方网站 [bun.sh](https://bun.sh) 和项目仓库 [GitHub](https://github.com/oven-sh/bun)。

## 主要特性

- 一体化平台：同时提供运行时、打包、包管理和测试功能，减少工具链复杂度。  
- 高性能：优化的 I/O 与启动流程，显著缩短脚本执行与构建时间。  
- 兼容性：与 Node.js 常见 API 兼容，且对现代 ECMAScript 特性有良好支持。  
- 单文件分发：单个可执行文件便于安装与部署。

## 使用场景

Bun 适用于构建静态站点、开发本地脚本、加速前端构建流水线、在边缘或无服务器环境中运行轻量服务，以及在 CI 中提升安装与测试速度。它也常用于需要快速启动与高并发 I/O 的微服务与边缘函数场景。

## 技术特点

Bun 使用 Zig 等现代系统语言实现关键组件，以减少运行时开销并提升并发性能。它内置高性能 JavaScript 引擎和网络 I/O，提供原生的包管理与打包流程，支持对常见 npm 包的快速安装和解析。项目以开源许可发布，便于社区贡献与企业采用。
