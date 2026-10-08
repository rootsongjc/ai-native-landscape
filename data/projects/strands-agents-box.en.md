---
name: Strands Box
slug: strands-agents-box
homepage: https://strandsagents.com
repo: https://github.com/strands-agents/box
license: Apache-2.0
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - Sandbox
  - Security
  - Policy
  - Rust
  - MCP
  - AI Safety
description: An open source sandbox engine for AI agents that combines OS-level isolation with default-deny Dogwood policies and credential injection, keeping secrets outside the agent process. Written in Rust, currently supporting macOS on Apple silicon.
author: strands-agents
ossDate: '2026-10-02T20:34:08Z'
featured: false
status: tracked
---

## Overview

Strands Box is an open source sandbox engine for AI agents from the Strands Agents project. It combines operating-system isolation with semantic policies written in Dogwood, so you can control what agents can access and the conditions under which they can act. Box is harness-agnostic: you choose the agent program or binary to run, configure its direct access in `box.toml`, and write its policies in `policy.dw`.

## Key Features

- File, program, and network restrictions enforced by the host OS, with configured grants reported at startup
- Semantic and temporal Dogwood policies — operations checked by the policy engine are denied by default, and rules can depend on arguments, earlier actions, and elapsed time
- One policy engine and shared event history across Strands Shell, Monty for Python, the egress gateway, and the MCP broker — a file read through one interpreter can deny a later outbound HTTP request
- Egress gateway checks connections and HTTP requests including method and path; MCP integration checks configured tool calls and their arguments
- Credential injection that authenticates permitted requests with API credentials or AWS SigV4 signing without exposing secrets to the agent

## Use Cases

- Running coding or autonomous agents with least privilege on a local workstation
- Zero-trust control over agent egress, tool calls, and filesystem access
- Auditing agent behavior through recorded policy decisions in OTLP JSON

## Technical Details

- Written in Rust; currently supports local execution on macOS with Apple silicon (OS sandboxing via Seatbelt), with Linux support planned
- The Dogwood Local Engine and enforcement components run in Box's own trusted process outside the agent sandbox, so enforcement cannot be bypassed from within the agent
- External programs (e.g., `git`, `cargo`) and local MCP servers are launched in their own sandboxes with per-program file grants, and their network traffic routes through the egress gateway by default
- Policy decisions are recorded as OTLP JSON telemetry (`records.jsonl`) for audit and observability
