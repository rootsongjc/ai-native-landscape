---
name: ZeroClaw
slug: zeroclaw
homepage: https://www.zeroclawlabs.ai/
repo: https://github.com/zeroclaw-labs/zeroclaw
license: Unknown
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Agents
  - CLI
  - Framework
  - Runtime
description: ZeroClaw 是一个用 Rust 编写的快速、小型且完全自主的 AI 助手基础设施，可在任意位置部署、自由替换所有组件。
logo: ''
author: zeroclaw-labs
ossDate: '2026-02-19T00:00:00Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## 详细介绍

ZeroClaw 是一个全自主的 AI 智能体工作流运行时操作系统——基础设施层面抽象了模型、工具、内存与执行，使智能体能够一次构建、随处运行。项目采用 100% Rust 编写，使用 trait 驱动架构，实现了默认安全、完全可替换的运行时环境。与 OpenClaw 等方案相比，ZeroClaw 在发布版本中将常用 CLI 和状态工作流的内存占用控制在几 MB 的范围内，可在约 $10 的低成本硬件上流畅运行，且冷启动时间接近瞬时。

## 主要特性

- 精简运行时：发布版本的常见工作流在几 MB 内存包络中运行，远低于同类方案。
- 成本高效：专为低成本开发板和轻量云实例设计，无重型运行时依赖。
- 快速冷启动：单一二进制 Rust 运行时使命令和守护进程启动接近瞬时。
- 便携式架构：通过单一可执行文件实现 ARM、x86 与 RISC-V 的跨平台工作流。
- 全方位可替换：核心系统均基于 trait 实现，提供商、渠道、工具、内存、隧道等均可通过配置替换，无需修改代码。
- 默认安全：采用配对认证、严格沙箱、显式允许列表、工作区作用域等安全设计。
- 无锁定依赖：支持 OpenAI 兼容提供商与自定义端点，避免厂商锁定。

## 使用场景

- 边缘场景：在树莓派、香橙派等低成本单板机上运行自主智能体。
- 个人/团队助理：通过 Telegram、Discord、Slack 等多渠道接入的消息助手与任务自动化。
- 开发与运维：本地 gateway/daemon 模式支持 shell、文件、git 等工具的编排与执行。
- 混合云部署：支持 OpenRouter、Ollama、vLLM、llama.cpp 等多种提供商的统一接入。
- 教学与原型：低成本、低门槛的智能体运行时，适合教学演示与快速原型验证。

## 技术特点

- 完整内存系统：内置基于 SQLite 的向量存储、FTS5 关键词检索、加权混合搜索与嵌入缓存，无需外部向量数据库。
- 70+ 集成：支持 Telegram、Discord、Slack、Mattermost、iMessage、Matrix、Signal、WhatsApp、Lark、钉钉、QQ、Nostr、Email、IRC 等多种渠道，以及浏览器、http_request、screenshot、composio 等工具生态。
- 身份与技能系统：支持 OpenClaw（Markdown）与 AIEOS v1.1（JSON）两种身份格式，提供 TOML 清单式的技能加载器。
- 运行时适配：支持 Native 与 Docker 沙箱运行时，可配置网络模式、内存限制、CPU 限制与只读根文件系统。
- 安全与观测：Gateway 绑定 localhost 并强制配对认证，支持 Noop/Log/Multi 观察者模式，提供 health/pair/webhook 等 API 端点。
- 服务管理：systemd 用户级或 OpenRC 系统级服务管理，支持一键安装、启动、停止、状态查询与卸载。
