---
name: Strix
slug: strix
homepage: https://strix.ai
repo: https://github.com/usestrix/strix
license: Apache-2.0
category: platform-infra
subCategory: security-policy
tags:
  - AI Security
  - Penetration Testing
  - Agent Framework
  - Red Teaming
description: 开源 AI 渗透测试工具，通过自主安全 Agent 发现并修复应用中的漏洞。
author: usestrix
ossDate: '2025-08-05T21:28:30Z'
featured: false
status: tracked
---

## 简介

Strix 是开源的 AI 渗透测试工具，使用自主安全 Agent 发现并修复应用中的漏洞。它将 LLM 推理与攻击安全工作流结合，支持漏洞赏金、CTF 竞赛、红队演练和持续安全自动化。

## 主要特性

- 端到端渗透测试的自主 AI Agent。
- 不仅报告漏洞，还能发现并修复。
- 支持漏洞赏金、CTF、红队和安全自动化工作流。
- 在安全工程社区有很强的影响力。

## 使用场景

- Web 应用的 AI 驱动渗透测试。
- 开发流水线中的持续自动化安全扫描。
- 借助 Agent 辅助漏洞赏金挖掘和 CTF 竞赛。

## 技术特点

- Agent 动态运行目标代码，并以可用的 PoC 验证发现，避免静态扫描器的误报。
- 多 Agent 编排：多个 AI 渗透测试员协作并横向扩展，覆盖侦察、利用、验证全流程。
- 基于 Docker 的沙箱执行；通过单一环境变量配置即可对接任意 LLM 厂商（OpenAI、Anthropic、Google）。
- 自动为发现的问题生成补丁与合规级渗透测试报告；可接入 GitHub Actions 阻断有漏洞的 PR。
