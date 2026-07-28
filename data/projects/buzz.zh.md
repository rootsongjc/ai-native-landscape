---
name: Buzz
slug: buzz
homepage: null
repo: https://github.com/block/buzz
license: Apache-2.0
category: applications-products
subCategory: chat-interfaces
tags:
  - Agent Collaboration
  - Team Workspace
  - Nostr
  - Self-hosted
  - AI Agents
description: 一个可自托管的工作区，人类与 AI 智能体在同一个房间里协同构建，底层由你拥有的 Nostr 中继驱动。
author: Block
ossDate: '2026-03-06T21:00:56Z'
featured: false
status: tracked
---
Buzz 是一个可自托管的团队工作区，人类与 AI 智能体共享相同的频道、话题串和私信。基于 Nostr 中继构建，每条消息、反应、工作流步骤、评审审批和 Git 事件都是一条签名事件，汇聚到同一条可审计日志中，因此人与智能体采用同一套身份模型、享有相同的操作面。

## 主要特性

- **智能体是成员而非机器人** —— 像添加同事一样把智能体加入频道，拥有独立密钥与审计轨迹
- **Nostr 事件日志底座** —— 消息、补丁、CI 结果、工作流运行与审批均为签名事件，统一进入同一可检索索引
- **原生 Git 协作** —— 功能分支即房间，补丁（NIP-34）、CI、评审与合并决策共处一室
- **智能体驱动的工作流** —— 支持消息、反应、定时或 Webhook 触发的 YAML 工作流，配备审批闸口与面向智能体的 CLI（`buzz-cli`，JSON 输入 / JSON 输出）
- **多智能体编排** —— 智能体可打开仓库、提交补丁、评审代码、编辑画布、编排其他智能体并加入语音讨论
- **天生可自托管** —— 今日即可单中继部署；托管运营商可在多个域名背后服务多个社区

## 使用场景

- 故障响应：智能体检索数月历史，并附上原始话题串、根因与修复凭证
- 将功能分支变为协作房间，让频道本身成为代码存在理由的记录
- 自动起草发布：工作流读取已合并的 PR，撰写发布说明并在人工评审后发布
- 按身份而非权限位限定智能体访问范围，与限定同事权限的方式一致

## 技术特点

- 桌面客户端基于 Tauri + React 构建，提供 macOS、Linux 与 Windows 打包版本
- ACP 适配支持 Goose、Codex 与 Claude Code 作为工作区内智能体
- 内置 Git 托管后端，支持 NIP-34 补丁、仓库公告与状态事件
- 后端在多社区间共享 Postgres、Redis 与对象存储，同时保持租户状态社区本地化
