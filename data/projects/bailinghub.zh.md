---
name: BailingHub
slug: bailinghub
homepage: https://www.bailinghub.com
repo: https://github.com/bailinghub/bailinghub
license: Apache-2.0
category: platform-infra
subCategory: security-policy
tags:
  - A2B
  - Tool Governance
  - Control Plane
  - Human in the Loop
description: 基于 Agent 能力合约（ACC）的开源 A2B 控制平面，让 Agent 安全接入已有业务系统。
author: bailinghub
ossDate: '2026-07-09T09:08:51Z'
featured: false
status: tracked
---

## 简介

BailingHub（百灵中枢）是开源的 A2B（Agent-to-Business）控制平面，让 AI Agent 安全接入已有业务系统。它基于从 OpenAPI 规范派生的 Agent 能力合约（ACC），在 Agent 触碰生产系统前强制执行工具治理、审计追踪和人工审批。

## 主要特性

- 基于 Agent 能力合约（ACC）的 A2B 控制平面，构建于 OpenAPI 之上。
- 面向 Agent 访问业务系统的工具治理与权限控制。
- Agent 对业务系统每次操作的完整审计追踪。
- 人工在环审批工作流，支持自托管。

## 使用场景

- 安全地授权 Agent 访问内部业务系统。
- 在企业环境中治理和审计 Agent 工具使用。
- 为敏感 Agent 操作强制人工审批门禁。

## 技术特点

- Agent 能力合约由已有 OpenAPI 规范生成，向 Agent 暴露遗留 API 无需重写。
- 控制平面架构：Agent 不直接触碰业务系统——每次调用都经过治理与授权的合约端点。
- Agent 对业务系统的每次操作都进入审计追踪；敏感操作需人工在环审批。
- 自托管部署让 Agent 与业务系统间的流量留在企业边界内。
