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
description: LiveKit provides a scalable realtime stack with a production-ready server and multi-language SDKs.
author: LiveKit
ossDate: '2020-09-30T06:49:46Z'
featured: false
status: tracked
---

LiveKit is an end-to-end realtime stack for connecting humans and AI, built on WebRTC infrastructure. It provides a distributed SFU server, production-ready media pipeline, and multi-language SDKs that expose audio, video, data channels, and streaming capabilities for both self-hosted and cloud-hosted deployments.

## Key Features

- **Scalable SFU server** designed for multi-region, high-concurrency conferencing with selective forwarding
- **Cross-platform SDKs** covering JavaScript, iOS, Android, Flutter, Unity, and Rust for broad client compatibility
- **Production-grade operations** including JWT authentication, webhooks, egress recording, and RTMP/WHIP ingress
- **Straightforward deployment** via a single binary, Docker images, and Kubernetes examples
- **gRPC and HTTP control APIs** with JSON and Protobuf payloads for flexible programmatic integration

## Use Cases

- Building multi-party video conferencing, low-latency interactive classrooms, and live streaming platforms
- Powering real-time AI applications such as voice assistants and live transcription by combining media streams with AI services
- Self-hosted deployments for compliance requirements or LiveKit Cloud for faster time-to-market
- Connecting AI agents to live audio and video feeds for interactive, multimodal experiences

## Technical Highlights

- Media optimizations include SVC, simulcast, AV1/VP9 codec support, and built-in jitter and latency mitigation
- Built-in metrics and Prometheus-compatible endpoints provide operational observability
- Open-sourced under Apache-2.0 with an active community and regular releases
