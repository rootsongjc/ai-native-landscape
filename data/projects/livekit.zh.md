---
name: LiveKit
slug: livekit
homepage: https://docs.livekit.io
repo: https://github.com/livekit/livekit
license: Unknown
category: coding-devtools
subCategory: sdk-frameworks
tags:
  - Dev Tools
  - SDK
description: LiveKit 提供可扩展的实时视频、音频与数据堆栈，包含生产级服务器与多语言 SDK。
author: LiveKit
ossDate: '2020-09-30T06:49:46Z'
featured: false
status: tracked
---

LiveKit 是一个端到端的实时堆栈，基于 WebRTC 基础设施连接人类与 AI。它提供分布式 SFU 服务器、生产级媒体管道和多语言 SDK，暴露音频、视频、数据通道和流媒体能力，支持自托管和云托管两种部署模式。

## 核心特性

- **可扩展的 SFU 服务器**，面向多区域、高并发会议场景，支持选择性转发
- **跨平台 SDK**，覆盖 JavaScript、iOS、Android、Flutter、Unity 和 Rust，实现广泛的客户端兼容
- **生产级运维能力**，包括 JWT 认证、Webhook、录制导出和 RTMP/WHIP 流入
- **简便的部署方式**，支持单二进制、Docker 镜像和 Kubernetes 示例
- **gRPC 和 HTTP 控制 API**，支持 JSON 和 Protobuf 数据格式以实现灵活的编程集成

## 使用场景

- 构建多方视频会议、低延迟互动课堂和直播平台
- 通过将媒体流与 AI 服务结合，驱动语音助手和实时转写等实时 AI 应用
- 自托管部署满足合规要求，或使用 LiveKit Cloud 实现更快的上市速度
- 将 AI 智能体接入实时音视频流，实现交互式的多模态体验

## 技术特点

- 媒体优化包括 SVC、simulcast、AV1/VP9 编解码支持和内置抖动及延迟缓解
- 内置指标和兼容 Prometheus 的端点提供运维可观测性
- 采用 Apache-2.0 许可证开源，拥有活跃的社区和频繁的版本发布
