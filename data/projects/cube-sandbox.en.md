---
name: CubeSandbox
slug: cube-sandbox
homepage: 'https://cubesandbox.com'
repo: https://github.com/tencentcloud/CubeSandbox
license: Apache-2.0
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Sandbox
  - Container
  - Agent
  - MicroVM
description: A high-performance, hardware-isolated sandbox service for AI agents built on RustVMM and KVM, with E2B SDK compatibility and sub-60ms cold starts.
author: Tencent Cloud
ossDate: '2026-04-10'
featured: false
status: tracked
---

## Overview

CubeSandbox is an instant, concurrent, secure, and lightweight sandbox service designed specifically for AI agents. Built on RustVMM and KVM, it provides true kernel-level isolation where each agent runs with its own dedicated guest OS kernel — eliminating container escape risks inherent in shared-kernel approaches like Docker.

## Key Features

- Sub-60ms cold start for fully serviceable sandboxes via resource pool pre-provisioning and snapshot cloning
- Ultra-low memory overhead below 5MB per instance using CoW technology and a Rust-rebuilt stripped runtime
- Hardware-level kernel isolation with dedicated guest OS per sandbox, plus eBPF-based network security (CubeVS)
- Drop-in E2B SDK compatibility — swap one URL to migrate from closed-source sandboxes
- Event-level snapshot, clone, and rollback at hundred-millisecond granularity via CubeCoW engine
- Single-node and multi-node cluster deployment, validated at Tencent Cloud production scale

## Use Cases

- Secure code execution for AI coding agents and LLM-generated code
- Browser automation in isolated environments
- Reinforcement learning training environments (SWE-Bench, etc.)
- High-density multi-tenant agent hosting on bare-metal infrastructure

## Technical Details

- Built on RustVMM virtualization with KVM hardware acceleration
- Copy-on-Write (CubeCoW) snapshot engine for instant cloning and state rollback
- eBPF-powered CubeVS for inter-sandbox network isolation and egress filtering
- Available as PyPI package (`cubesandbox`) for Python integration
