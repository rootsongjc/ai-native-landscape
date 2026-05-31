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
logo: ''
author: LiveKit
ossDate: '2020-09-30T06:49:46Z'
featured: false
status: tracked
---

## 详细介绍

LiveKit 是一套面向开发者的实时堆栈，提供分布式的 WebRTC SFU、生产级服务端、以及丰富的客户端与服务端 SDK。它将实时音视频、数据通道和流媒体功能以工程化方式暴露给应用，支持自托管与云托管两种部署模式，并提供示例应用与在线演示，帮助开发者快速将实时体验集成到产品中。

## 主要特性

- 可扩展的 SFU：支持分布式与多区域部署，面向高并发会议场景。
- 丰富的 SDK：提供 JavaScript、iOS、Android、Flutter、Unity、Rust 等跨平台 SDK 与示例。
- 生产级能力：支持 JWT 认证、WEBHOOK、模拟发布、录制（Egress）与流入（Ingress）。
- 部署便捷：单二进制、Docker 与 Kubernetes 示例，适配云原生环境。

## 使用场景

适用于多人视频会议、低延迟交互式课堂、实时多人游戏、远程协作与将语音/视频与 AI 服务（如语音助手、实时转写）结合的混合场景。团队可以选择自托管以满足合规或性能需求，也可以使用 LiveKit Cloud 快速上线。

## 技术特点

- 多协议支持：通过 gRPC/HTTP 暴露控制接口，支持 JSON 与 Protobuf 数据格式。
- 性能优化：针对媒体转发与网络抖动进行优化，支持 SVC、simulcast 与 AV1/VP9 编解码。
- 可观察性与运维：内置指标与日志，支持 Prometheus 等监控方案。
- 开源生态：采用 Apache-2.0 许可，拥有活跃社区与示例仓库（包括 Agents 与扩展）。
