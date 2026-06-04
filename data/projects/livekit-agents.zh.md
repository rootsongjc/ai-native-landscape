---
name: LiveKit Agents
slug: livekit-agents
homepage: https://docs.livekit.io/agents/
repo: https://github.com/livekit/agents
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - AI Agent
  - TTS
  - Utility
description: 用于构建实时、多模态语音 agent 的框架，集成 WebRTC 和可扩展插件生态。
author: LiveKit
ossDate: '2023-10-19T23:00:55.000Z'
featured: false
status: tracked
---

## 简介

LiveKit Agents 是一个面向实时语音与多模态的 agent 框架，适用于需要 WebRTC 支持与低延迟交互的场景，提供调度、测试与扩展插件机制。

## 主要特性

- 内置任务调度与分发（dispatch），支持并发会话管理
- 丰富的实时媒体支持（WebRTC、telephony）和插件化集成
- 原生测试框架与示例，便于创建稳定的 agent

## 使用场景

- 电话客服、语音机器人与实时会议助手
- 需要低延迟音视频交互的多模态应用
- 通过 LiveKit 生态进行客户端与服务器协同开发

## 技术特点

- 基于 LiveKit 的 WebRTC 基础设施，支持多平台客户端
- Python 实现，具备丰富插件（STT、TTS、LLM）支持
- Apache-2.0 许可，适合自托管与企业部署
