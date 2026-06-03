---
name: Flox
slug: flox
homepage: https://flox.dev
repo: https://github.com/flox/flox
license: GPL-2.0
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Dev Tools
  - Sandbox
description: 一个以 Nix 为核心、可复现且可分享的开发环境与包管理工具。
author: Flox
ossDate: '2022-12-22T15:52:43Z'
featured: false
status: tracked
---
Flox 为软件开发生命周期提供确定性基础，以 Nix 为核心驱动可复现、可分享的开发环境。它通过环境分层与依赖替换，确保本地开发、CI 管道与镜像构建之间的运行时一致性，从根本上消除"在我电脑上能跑"的问题。

## 可复现环境

- 分层机制确保不同机器上依赖的一致性
- 确定性构建，无论宿主系统如何都产生相同结果
- 环境隔离，无需依赖传统容器边界
- 访问 Nixpkgs 目录，获取海量开源软件包

## 分享与协作

- 环境打包与分享，简化团队协作与新成员上手
- 单命令激活环境，新成员即刻开始工作
- 版本锁定的依赖确保所有协作者运行相同的技术栈
- 可移植环境，兼容 Linux、macOS 和 CI 平台

## CI/CD 与部署

- 多目标镜像导出，无缝集成 CI/CD
- 将环境构建为可部署的容器镜像或其他工件
- 替换或覆盖特定依赖，无需重新构建整个环境
- 友好的命令行工具简化环境创建、安装与激活

## 技术基础

- 以 Rust 编写，兼顾性能与可靠性
- 借助 Nix 包生态实现软件包管理与环境隔离
- 层化环境模型，支持依赖覆盖与组合
- 许可证为 GPL-2.0
