---
name: Zed
slug: zed
homepage: https://zed.dev
repo: https://github.com/zed-industries/zed
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: Zed 是由 Atom 与 Tree-sitter 核心团队打造的高性能代码编辑器，专注于本地极低延迟与多人实时协作。
author: Zed Industries
ossDate: '2021-02-20T03:01:06.000Z'
featured: false
status: tracked
---

> 本地优先、极致性能与实时协作，是现代开发者对编辑器的新期待。Zed 正在用 Rust 技术栈重新定义这一体验。

## 概述

Zed 是一款由 Atom 与 Tree-sitter（TS, Tree-sitter）核心作者团队构建的新一代高性能代码编辑器，强调本地极低延迟、多玩家实时协作以及现代语言工具链集成。Zed 使用 Rust 完整实现，并基于团队自研的 GPU 加速 UI 框架 gpui，旨在在本地提供接近“思维速度”的编辑体验。

## 设计目标

Zed 的核心目标包括：

- 在本地提供亚毫秒级响应，确保编辑体验极致流畅。
- 通过 LiveKit 与自建协作基础设施，实现具备文档级同步体验的多人实时编辑。
- 提供兼容大规模工程的项目导航、代码智能与结构化语言处理能力。
- 构建统一的终端、扩展与编辑体验，减少插件碎片化问题。

这些目标共同推动 Zed 成为面向人类与 AI 协作的下一代开发环境。

## 技术基础

Zed 的底层完全以 Rust 实现，系统架构围绕自研的 gpui 框架构建，通过 GPU 加速绘制界面，提供稳定高帧率渲染。语言解析与结构化编辑依赖 Tree-sitter，使其具备快速语法高亮、增量解析与代码结构操作能力。Zed 内置协作服务器组件，使用 LiveKit 作为实时通信层。

## 主要特性

以下是 Zed 的主要功能亮点：

- 高性能本地编辑，响应速度极快。
- 实时协作（multiplayer），支持多人同步编辑，体验接近 Google Docs。
- 基于 Tree-sitter 的语言支持，语法高亮与结构化编辑能力强。
- 内置终端，方便开发者一站式操作。
- 插件扩展体系，支持个性化功能拓展。
- 跨平台构建，覆盖 macOS、Linux、Windows。
- 系统级项目管理，适合大规模工程协作。

Zed 的多人协作功能尤其突出，适合结对编程或远程团队协作场景。

## 平台与安装

Zed 支持 macOS、Linux 与 Windows，可直接通过官网下载或通过 Linux 包管理器安装。当前版本尚未提供 Web 版本，相关进展可通过 GitHub 进行追踪。

## 开发与构建

Zed 项目为 macOS、Linux 与 Windows 提供详细的构建文档，用户可在本地从源码编译。Zed 支持本地运行协作服务，适合自托管场景测试。仓库内包含丰富的贡献者文档与脚本，涵盖 CI 流程、构建脚本、Nix 支持等内容。

## 许可证

Zed 采用多许可证结构，包含 AGPL、Apache 与 GPL 等许可证片段。项目通过 cargo-about 工具进行依赖许可证自动合规检查，确保第三方依赖满足开源合规要求。

## 定位总结

Zed 致力于构建一个本地优先、超高性能、深度协作的现代开发环境。其技术栈基于 Rust、GPU 加速渲染与 Tree-sitter 体系，在编辑器演进方向上体现显著的工程化与性能优势。
