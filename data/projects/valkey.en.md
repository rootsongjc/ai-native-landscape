---
name: Valkey
slug: valkey
homepage: https://valkey.io
repo: https://github.com/valkey-io/valkey
license: Unknown
category: platform-infra
subCategory: data-platforms
tags:
  - Database
description: A high-performance distributed key-value database optimized for caching and real-time workloads.
author: Valkey Project
ossDate: '2024-03-22T00:42:17Z'
featured: false
status: archived
---

## Detailed Introduction

Valkey is a high-performance distributed key-value database optimized for caching and real-time workloads. It preserves the familiarity of Redis while offering native data structures, a modular plugin system, and flexible persistence and replication strategies to meet high-concurrency, low-latency requirements. The project is community-driven and hosted on GitHub with documentation and releases available on the official site.

## Main Features

- Redis protocol compatibility for easy migration and ecosystem interoperability.
- Rich native data structures and extension points for custom modules and access patterns.
- Optimized execution paths and optional memory allocators to improve throughput and reduce latency.
- Support for TLS, RDMA, and cross-platform builds (Linux, macOS, *BSD) for enterprise deployments.

## Use Cases

- High-concurrency caching and session stores that require minimal access latency and high throughput.
- Real-time counters, leaderboards, and ephemeral state management.
- System migrations that require Redis compatibility but demand scalable performance.
- Deployments in distributed environments that benefit from module extensions or specialized transports (e.g., RDMA).

## Technical Features

- Modular architecture and plugin system for extending commands and data structures.
- Multiple build options (Makefile / CMake) and platform support to integrate into CI/CD pipelines.
- Comprehensive test and benchmark suites, with runtime tuning options for production workloads.
- Community-driven development; source hosted on GitHub (see `oss_date` frontmatter) with an active contributor base.

## Summary

Valkey is an open-source key-value database engineered for production use, suitable for caching and real-time systems with strict latency and throughput requirements. Visit the project homepage or repository to learn more.
