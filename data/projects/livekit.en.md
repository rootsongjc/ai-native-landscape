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
logo: ''
author: LiveKit
ossDate: '2020-09-30T06:49:46Z'
featured: false
status: tracked
---

## Overview

LiveKit is an end-to-end realtime stack for connecting humans and AI, built on WebRTC infrastructure. It provides a distributed SFU server, production-ready media pipeline, and multi-language SDKs that expose audio, video, data channels, and streaming capabilities for both self-hosted and cloud-hosted deployments.

## Key Features

LiveKit offers a scalable SFU designed for multi-region, high-concurrency conferencing with cross-platform SDKs covering JavaScript, iOS, Android, Flutter, Unity, and Rust. Production features include JWT authentication, webhooks, egress recording, and RTMP/WHIP ingress. Deployment is straightforward with a single binary, Docker images, and Kubernetes examples.

## Use Cases

Teams use LiveKit to build multi-party video conferencing, low-latency interactive classrooms, and live streaming platforms. It powers real-time AI applications such as voice assistants and live transcription by combining media streams with AI services. Organizations can self-host for compliance requirements or use LiveKit Cloud for faster time-to-market.

## Technical Details

LiveKit exposes gRPC and HTTP control APIs with JSON and Protobuf payloads for flexible integration. Media optimizations include SVC, simulcast, AV1/VP9 codec support, and built-in jitter and latency mitigation. Observability is provided through built-in metrics and Prometheus-compatible endpoints, and the project is open-sourced under Apache-2.0.
