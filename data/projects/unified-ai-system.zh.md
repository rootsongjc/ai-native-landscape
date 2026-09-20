---
name: Unified AI System
slug: unified-ai-system
homepage: https://happy520ai.github.io/unified-ai-system/
repo: https://github.com/happy520ai/unified-ai-system
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - LLM Routing
  - MCP
  - Virtual Keys
  - Self-Hosted
  - Guardrails
description: Apache-2.0 自托管 AI 网关与 MCP 服务器，在 OpenAI、Anthropic、Gemini API 前面提供虚拟密钥、预算、缓存、护栏、反向 MCP 治理与不调用提供商的确定性提示词增强。
author: happy520ai
ossDate: '2026-04-27'
featured: false
status: tracked
---

## 简介

Unified AI System 是自托管、协议优先的 AI 网关与 MCP 控制平面。Codex、Cursor、Cline、VS Code、Claude Code、Gemini CLI、OpenCode、Continue 及通用 stdio 客户端保持原生协议接入，网关在真实提供商之前叠加虚拟密钥、预算、缓存、护栏、可观测性与审计。项目 fake-provider 优先：所有功能都可在零凭据下体验，确定性提示词增强路径完全不调用模型提供商。

## 主要特性

- 一个端点提供 OpenAI / Anthropic / Gemini 兼容 API：`/v1/chat/completions`（SSE 流式、工具调用、图像/音频输入）、原生 Anthropic 流式与 prompt-caching 透传的 `/v1/messages`、原生 Gemini 入站 `:generateContent` 系列、Responses API 与模型发现——保留 SDK，只改 base URL
- 虚拟 `uai-` 密钥带周期性 token 预算（日/月窗口）、每密钥请求上限、软预算告警、花费归因与即时吊销；消费方永不持有提供商密钥
- 响应缓存支持字节一致的 JSON/SSE 重放，外加可选的词法近似相似层（接入真实 embedding 端点可获得语义级匹配）
- 确定性、纯本地的护栏：粘贴密钥阻断、PII 脱敏、注入措辞告警、禁用词与长度限制——实测开销低于 0.2 ms，每条规则运行时可配
- 反向 MCP 治理将上游 Streamable HTTP 与 stdio MCP server 聚合到一个经认证、审计、白名单的入口之后，REST→MCP 可把任意 OpenAPI 3 规范变成受治理工具
- A2A v1.0 网关，支持可选的 Agent Card/JWKS 签名验证与租户范围任务执行

## 使用场景

- 给 MCP 兼容的编程客户端（Codex、Cursor、Cline）一个受治理、可审计的模型提供商入口
- 向队友或服务发放带预算的虚拟密钥，而不共享提供商凭据
- 在提示词到达模型前做确定性增强——补充执行要求、输出要求与完成标准，附 `providerCalled=false` 证据
- 运行跨主机配额、幂等与审计链的多实例部署

## 技术特点

- 提示词增强按设计为确定性、不调用提供商；浏览器 Prompt Lab 在本地渲染增强结果，无需账号、API key 或网络调用，已发布的 Docker 镜像可运行同一证明并输出可见证据
- 提供商治理采用三重门白名单矩阵，运行时凭据默认仅存内存；可选 AES-256-GCM 加密持久化（主密钥单独保护）、哈希虚拟密钥、请求成本防护、熔断与降级链
- 安全姿态：JWT 认证、RBAC、带审计哈希链的租户隔离，由可重复的 23 项攻击在线安全回归验证；OIDC SSO（授权码 + PKCE + JWKS 验签）与 SCIM 2.0 用户供给
- 可观测性：面向聊天的 Prometheus 指标（按模型 token、缓存命中率、TTFT 直方图、护栏命中）+ 可选 Langfuse 导出与每密钥花费报表；`GET /api/overview` 提供终端优先的紧凑快照
- 多实例模式：默认同主机 SQLite；显式 PostgreSQL 模式覆盖跨主机配额、响应幂等、dispatch tombstone、租约与终结栅栏、共享 HMAC 审计链——破坏性 CI 演练证明 WAL 回放、单备库自动故障切换、桥接栅栏与基于 LSN 的 PITR 恢复
- 已发布单节点基准（fake provider）：chat JSON p50 15.6 ms、SSE TTFT p50 2.8 ms、并发 8 下 402 req/s、缓存命中比未命中快 5.6×；加权路由分流与影子流量支持运行时配置
