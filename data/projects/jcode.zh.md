---
name: jcode
slug: jcode
homepage: https://jcode.sh
repo: https://github.com/1jehuang/jcode
license: MIT
category: coding-devtools
subCategory: coding-agents
tags:
  - Coding Agent
  - Rust
  - Terminal
  - Multi-Agent
description: >-
  用 Rust 编写的高性能编码 Agent 运行时（harness），面向重度多 Agent 开发工作流——
  可以并行运行数十个 Agent，每个额外会话仅占用极少内存，启动近乎瞬时。
author: 1jehuang
ossDate: '2026-01-05'
featured: false
status: tracked
---

## 简介

jcode 是一个用 Rust 编写的高性能编码 Agent 运行时（harness），为重度多 Agent 工作流的开发者设计。它的核心卖点是资源效率：并行运行数十个 Agent 也不会压垮机器——项目基准测试显示，每个额外的无头会话仅增加约 3.3 MB 内存，首次输入延迟约 19 毫秒。服务器管理的 Swarm 模式让同一仓库内的多个 Agent 相互协作、发现冲突编辑并互发消息；self-dev 模式则允许 jcode 修改、重建并热加载自己的二进制。

## 主要特性

- 极低的会话边际成本：项目公开基准测试中，每个额外无头会话约 3.3 MB 内存、约 19 毫秒首输入延迟，而其他 CLI 编码 Agent 为 79–194 MB 与 0.6–3.5 秒
- Swarm 模式：两个及以上 Agent 共享仓库时由服务器统一管理——若 Agent A 编辑了 Agent B 读过的文件，B 会收到通知，可以查看 Diff 或选择忽略
- Agent 间消息：可单发私信、向服务器上所有 Agent 广播，或只发给同一仓库的 Agent；Agent 还能自行孵化自己的 Swarm，主体随之变为协调者
- Self-dev 模式：Agent 编辑、构建并测试 jcode 自身源码，随后重载自己的二进制并在既有会话中继续工作，全程自动
- 终端 UI：内联图片渲染、内联 LaTeX、会话恢复菜单、提示缓存失效提醒
- 支持多家服务商的 OAuth 登录，包括 Claude OAuth 与 OpenAI Codex OAuth

## 使用场景

- 在同一仓库或跨仓库并行运行大量编码 Agent，而不出现内存暴涨或卡顿
- 需要自动冲突检测与结构化消息传递的多 Agent 团队协作
- 让 Agent 迭代工具自身源码实现定制（self-dev）

## 技术特点

- 以 Rust 编写，采用客户端–服务器会话架构：服务器承载会话与 Swarm 协调，仓库基准脚本测得每个额外无头会话约 3.3 MB（首个会话约 71.3 MB）
- Swarm 协调由服务器中介：服务器跟踪各 Agent 读过的文件，在文件被编辑时推送失效通知；消息支持私信、仓库范围与全局广播，可有头或无头运行
- Self-dev 基础设施覆盖完整闭环——编辑、构建、测试、重载自身二进制——并在之后继续既有会话，Agent 因此能改进承载它运行的环境本身
- 通过 curl 安装脚本分发（macOS 与 Linux）；服务商认证支持 Claude OAuth、OpenAI Codex OAuth 等
