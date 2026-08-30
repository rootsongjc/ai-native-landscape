---
name: Omarchy
slug: omarchy
homepage: https://omarchy.org
repo: https://github.com/omacom/omarchy
license: MIT
category: coding-devtools
subCategory: developer-utilities
tags:
  - Linux
  - Arch Linux
  - Desktop Environment
  - Developer Environment
  - Coding Agent
  - Hyprland
  - Wayland
description: 由 DHH 打造的观点鲜明的 Arch Linux 桌面发行版，基于 Hyprland Wayland 合成器，将 AI 编程智能体视为一等公民，预置智能体启动器、订阅用量面板与崩溃诊断。
author: DHH (omacom)
ossDate: '2025-06-01T07:26:22Z'
featured: false
status: tracked
---

## 简介

Omarchy 是由 David Heinemeier Hansson（DHH）创建的 Linux 发行版，定位为美观、现代且观点鲜明（opinionated）的桌面系统。它在裸 Arch Linux 之上，围绕 Hyprland Wayland 合成器构建出一个平铺式桌面，让开发者无需折腾即可获得媲美 macOS 的工作站体验。尤为特别的是，它将 AI 编程智能体当作桌面的一等公民来设计。

## 主要特性

- 智能体中立的编程 CLI 支持：Claude Code、Codex、OpenCode、Copilot CLI、Crush、Grok、Pi、Oh My Pi、Antigravity、Ori 均以预配置的懒加载启动器形式内置，可指定默认智能体并通过全局快捷键拉起。
- 顶栏智能体面板，跨机器追踪订阅套餐、5 小时/每周限额消耗比例，以及按日、按模型的 token 用量。
- 自动崩溃诊断：监听 systemd-coredump，进程段错误时将崩溃信息连同内置 diagnose-crash 技能交给默认智能体分析。
- 内置 Omarchy 智能体技能（软链到 Claude Code、Codex、Pi、Antigravity 的技能目录），让智能体直接调整 Hyprland 配置、顶栏与主题。
- 完整安装器：默认全盘加密、支持双系统/剩余空间安装与无人值守批量安装，每次更新自动生成可引导的系统快照。
- 精选应用集：终端（Alacritty、Kitty、Foot、Ghostty）、Neovim、lazygit、tmux，主题系统可同步到各智能体 UI。

## 使用场景

- 从 Mac 或 Windows 迁移的开发者，希望获得开箱即用、无需折腾 Arch 的平铺式 Wayland 桌面工作站。
- 需要在同一环境中并行运行多个 AI 编程智能体，并共享主题、用量看板与智能体驱动的系统配置。
- 通过无人值守安装与配置盘，将 Omarchy 作为虚拟机和批量设备的可复用基础镜像。

## 技术特点

- 基于 Arch Linux 与 Hyprland Wayland 合成器；系统配置由仓库中版本化的配置树（`config/hypr`、终端、shell 与应用配置）组装而成，而非手工维护的 dotfiles。
- 智能体 CLI 是 `~/.local/bin` 下由 mise 管理的存根，首次运行时才下载，并通过 `omarchy update` 保持更新；新 CLI 可用 `omarchy-mise-install <package> [command-name]` 封装。
- 智能体用量面板由 `omarchy agent usage-update` 每 15 分钟重新生成记录，并可通过同步目录合并多台机器的用量。
- 崩溃监听挂接 systemd-coredump：通知会调用默认智能体并附带 diagnose-crash 技能；可按程序静默（`omarchy crash mute`）。
- 系统快照在每次更新时自动创建，通过 Limine 引导加载器选择引导/恢复，恢复根文件系统但保留 `/home`。
- ISO 安装器默认全盘加密，支持剩余空间双系统安装，也可从第二块配置盘完全无人值守安装。
