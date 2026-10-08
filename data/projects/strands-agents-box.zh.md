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
description: 面向 AI 智能体的开源沙箱引擎，结合操作系统级隔离、默认拒绝的 Dogwood 策略与凭证注入，密钥始终不进入智能体进程。基于 Rust 编写，目前支持 Apple 芯片 macOS。
author: strands-agents
ossDate: '2026-10-02T20:34:08Z'
featured: false
status: tracked
---

## 简介

Strands Box 是 Strands Agents 项目推出的面向 AI 智能体的开源沙箱引擎。它将操作系统级隔离与用 Dogwood 语言编写的语义化策略相结合，可精细控制智能体能访问哪些资源、以及在何种条件下执行操作。Box 与具体智能体框架无关：自选智能体程序或二进制，在 `box.toml` 中配置直接访问授权，在 `policy.dw` 中编写策略。

## 主要特性

- 文件、程序与网络访问限制由宿主操作系统强制执行，启动时报告已配置的授权
- 语义化与时序化 Dogwood 策略——策略引擎检查的操作默认拒绝，规则可依赖参数、历史动作与流逝时间
- Strands Shell、Monty Python 解释器、出口网关与 MCP broker 共享同一策略引擎和事件历史——通过一个解释器读取文件可以拒绝后续的出站 HTTP 请求
- 出口网关检查连接及 HTTP 请求（含方法和路径）；MCP 集成检查已配置的工具调用及其参数
- 凭证注入：网关用配置的 API 凭证或 AWS SigV4 签名为获准请求完成认证，智能体本身接触不到底层密钥

## 使用场景

- 在本地工作站上以最小权限运行编码智能体或自主智能体
- 对智能体的出口流量、工具调用和文件系统访问进行零信任管控
- 通过 OTLP JSON 格式的策略决策记录审计智能体行为

## 技术特点

- 基于 Rust 编写，目前支持 Apple 芯片 macOS 本地执行（通过 Seatbelt 实现 OS 沙箱），Linux 支持在规划中
- Dogwood Local Engine 及各强制执行组件运行在 Box 自有的可信进程中，位于智能体沙箱之外，策略无法被智能体进程内的代码绕过
- 外部程序（如 `git`、`cargo`）与本地 MCP 服务器在各自独立沙箱中启动并拥有按程序配置的文件授权，其网络流量默认经出口网关转发
- 策略决策以 OTLP JSON 遥测格式记录（`records.jsonl`），可用于审计与可观测性
