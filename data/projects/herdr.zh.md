---
name: herdr
slug: herdr
homepage: https://herdr.dev
repo: https://github.com/herdrdev/herdr
license: Apache-2.0
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Terminal Multiplexer
  - Coding Agent
  - Runtime
  - Rust
description: >-
  编码智能体的运行时：一个 Rust 编写的终端复用器，让智能体终端在后台服务器中持续
  运行，每个窗格标记“工作中/受阻/空闲”，智能体可通过 CLI 和 socket API 驱动它。
author: herdrdev
ossDate: '2026-03-27'
featured: false
status: tracked
---

## 简介

herdr 是编码智能体栖身的运行时：一个专为智能体工作流打造的终端复用器。分离会话或 SSH 断开后，终端仍在后台服务器中运行；每个窗格都标记着“工作中/受阻/空闲”，你无需再逐个寻找卡住的那个。它通过接管 claude code、codex、cursor、opencode、grok 等工具的终端来运行它们——不包装、也不替换它们。

## 主要特性

- 分离不停工：断开客户端后会话继续运行，重启后 herdr 恢复保存的布局并续接受支持的智能体会话
- 多机一窗：本地工作与已保存的 SSH 机器同处一个窗口，统一的智能体列表，各机器独立重连
- 不再寻找卡住的那个：每个窗格标记工作中/受阻/空闲，智能体停下来等你回答时 herdr 会明说
- 原生面向智能体：智能体通过 CLI 和 socket API 创建窗格、互相提示、等待另一个智能体真正受阻
- tmux 式前缀键与一等公民的鼠标操作（点击、拖拽、分屏）并存，按当下场景随手选择
- 插件扩展窗格与工作流；单一 Rust 二进制，没有 Electron

## 使用场景

- 在并行窗格中运行多个编码智能体，一眼看清哪个在工作、哪个受阻、哪个空闲
- 让长时间的智能体会话跨越 SSH 掉线、合盖休眠和机器重启而存活
- 编排多智能体协作：一个智能体创建并提示另一个智能体，并等待其受阻

## 技术特点

- 单一 Rust 二进制，由后台服务器持有终端：分离或 SSH 掉线不会终止会话；机器重启后 herdr 恢复保存的布局并续接受支持的智能体会话（原进程本身不跨重启存活）
- 智能体通过 CLI 和 socket API 驱动 herdr——创建窗格、向其他智能体发提示、等待另一个智能体真正受阻；配套的 agent skill 将这些能力打包给编码智能体
- 本地工作与已保存 SSH 机器共享一个窗口，具备统一智能体列表和按机器独立重连；对受支持的智能体采用“接管其终端”而非包装的方式运行
- 输入层同时提供 tmux 式前缀键和一等公民的鼠标交互（点击、拖拽、分屏）；插件系统通过市场扩展窗格与工作流
