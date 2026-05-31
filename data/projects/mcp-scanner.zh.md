---
name: MCP Scanner
slug: mcp-scanner
homepage: https://www.cisco.com/site/us/en/products/security/ai-defense/index.html
repo: https://github.com/cisco-ai-defense/mcp-scanner
license: Unknown
category: training-optimization
subCategory: safety-guardrails
tags:
  - Dev Tools
  - Safety
description: 用于扫描 MCP 服务器与工具以发现潜在安全问题的检测工具，支持多引擎分析与可定制报告。
logo: ''
author: Cisco AI Defense
ossDate: '2025-09-24T01:02:24.000Z'
featured: false
status: tracked
---

## 简介

mcp-scanner 是由 Cisco AI Defense 提供的安全检测工具，专注于扫描 MCP（Model Context Protocol）服务器、工具、提示与资源，发现提示注入、命令注入、敏感信息泄露等安全风险。它将多种检测引擎（YARA、LLM-as-judge、Cisco AI Defense 分析）组合为可独立或联合运行的管线，既适合离线审计，也支持以 API/服务形式集成到 CI/CD 流水线中。

## 主要特性

- 多引擎分析：YARA 规则、基于 LLM 的判决器与 Cisco AI Defense 引擎可组合使用。
- 多模式运行：支持 CLI、REST API 服务与 SDK 调用，方便自动化与集成。
- 可定制规则与报告：支持自定义 YARA 规则、细粒度认证配置与多种输出格式以便审计。

## 使用场景

- 对外开放的 MCP 服务的安全巡检与合规审计。
- 在开发/发布流水线中嵌入安全扫描，防止工具或提示被滥用。
- 安全团队进行事件调查与基线检测时作为快速分析工具。

## 技术特点

- 基于 Python 实现，提供异步 REST API、可扩展的 Analyzer 插件接口与并行基准工具。
- 支持 OAuth 与 Bearer Token 等多种认证方式，并能对接云端 LLM 提供者以增强检测能力。
- 提供完整文档与基准套件，便于复现测试与性能评估。
