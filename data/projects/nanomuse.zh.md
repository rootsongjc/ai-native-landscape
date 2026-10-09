---
name: nanoMuse
slug: nanomuse
homepage: https://nanomuse.cn/
repo: https://github.com/nano-muse/nanoMuse
license: GPL-3.0-or-later
category: applications-products
subCategory: desktop-clients
tags:
  - Personal Agent
  - GUI Agent
  - Computer Use
  - MCP
  - Cross-Device
  - LLM
description: >-
  开源的个人智能体，覆盖 Android、iPhone/iPad、Windows/macOS/Linux 与浏览器，所有设备共享同一账号。
  它替你做事而不是回答问题：应用关闭后继续工作、记得你的偏好，并在任何不可逆操作前先询问。
author: nano-muse
ossDate: '2026-09-23'
featured: false
status: tracked
---

## 简介

nanoMuse 是一个开源的个人智能体，运行在你的手机、电脑和浏览器中，所有设备共享一个账号和相同的会话。它借鉴 Meta Muse 的思路，以行动代替对话：通过 Shell、浏览器、MCP 服务器和技能执行任务，开启 "Hands" 后还能直接操作手机上的应用和电脑上的窗口，覆盖所有从未提供 API 的软件。手机应用、桌面应用、Web 控制台以及连接它们的 relay 全部在同一个 GPL-3.0-or-later 仓库中，可以完全自托管。

## 主要特性

- 替你做事：以 Linux Shell、浏览器、MCP 服务器和技能为工具，并可基于屏幕操控手机应用和桌面窗口，覆盖没有 API 的软件
- 先询问：删除、发送、支付等操作前暂停确认；登录和验证码交还给用户，点按完成后继续
- 跨设备接力：在手机上说一句，任务在电脑上执行；`@Mac …` 可把任务路由到指定设备，审批回到你手中的设备
- 持续运行：按计划检查目标、应用关闭后仍运行例程、每天早晨为你生成一份信息流
- 记得你：智能体的身份、对你的了解和唤醒时间都是可读可编辑的 Markdown 文件
- 任意模型：社区 relay 提供免费额度，也可使用十八家提供商（OpenRouter、OpenAI、Gemini、DeepSeek 等）的自有密钥，或已付费的 ChatGPT、Claude、Kimi 订阅
- 融入聊天应用：在飞书、钉钉、企业微信和 Telegram 中应答

## 使用场景

- 跨手机和电脑的个人任务自动化，包括仅有图形界面、没有 API 的应用
- 自托管私有智能体：在单台 VPS 上运行自己的 relay，数据不出家门
- 定时例程和后台目标持续运行，即使应用已关闭
- 团队成员通过日常使用的 IM 应用访问同一个智能体

## 技术特点

- 每台设备运行独立的智能体：手机应用内嵌基于 proot 的 Alpine Linux 沙箱，提供 Shell、浏览器和 MCP 支持，构建于 OpenMinis（GPL-3.0）之上
- 桌面应用是 DeepSeek Harness 的插件，使用其 Python 运行时；GUI 操作能力移植自字节跳动的 UI-TARS-desktop，采用 ScreenMarker 风格的可视化标记
- relay 架构：登录后的各设备智能体在 relay 上会合并可互相请求协作，会话文本经 relay 传输，而文件和截图保留在生成它们的设备上
- 确认机制为一等公民：不可逆操作需要按单次、单会话或永久粒度授权，密码和验证码始终由用户手动输入
- 通过 `scripts/self-host.sh` 或 Docker Compose 自托管；智能体的形象和头像由图像与视频模型生成
