---
name: HarnessRouter
slug: harnessrouter
homepage: https://harnessrouter.ai/
repo: https://github.com/HarnessRouter/harnessrouter
license: Apache-2.0
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - Agent Harness
  - Coding Agent
  - Unified API
  - Self Hosted
  - Open Protocol
description: 自托管的智能体 harness 统一接口层：通过一个兼容 OpenAI Responses 的 API 运行 Codex、Claude Code 等 26 种 harness，实现开放标准统一 Harness 协议（UHP）。
author: HarnessRouter
ossDate: '2026-08-09T20:19:14Z'
featured: false
status: tracked
---

## 简介

HarnessRouter 是把 Codex、Claude Code、OpenCode、Gemini CLI 等现有智能体 harness 变成即插即用智能体后端的基础设施层。产品后端只需调用一个兼容 OpenAI Responses 的 API，通过 `metadata.harness_id` 选择 harness，即可运行任务、获取结果、随时切换 harness，无需为每个 harness 单独做集成。社区版可自托管，使用自有模型提供商密钥，无需注册账号。

## 主要特性

- **一次集成接入多种 harness**：Codex、Claude Code、Hermes、Pi、DeepSeek Harness、OpenCode、Qwen Code、Gemini CLI、Cline、goose、Aider、OpenHands 等 26 种 harness 汇聚在一个统一 API 之后，可按请求切换
- **覆盖智能体完整生命周期**：启动任务、通过 `previous_response_id` 续接会话、SSE 流式接收进展、上传和获取文件、取消任务，以及查看结构化错误与执行轨迹
- **成本与时延优化**：同一任务在不同 harness × 模型配置下的公开基准测试显示成本差距达 99.8%（223 对 0.47 credits），八种配置间端到端时延相差 3.2 倍
- **配置与观测控制台**：从一句话描述自动生成智能体配置（指令、harness、模型、技能、插件、工具），可回放录制的示例运行，工作区内呈现每个任务及其完整记录
- **自带密钥的自托管**：一条 Docker 命令启动，在控制台填入提供商密钥，数据库、文件、密钥、工作区等全部状态保存在本地卷中

## 使用场景

- **产品内嵌智能体能力**：应用通过调用 Responses API 并按任务选择 harness，为幻灯片、表格、仪表盘、视频生成等功能提供智能体后端，无需逐一集成各 harness CLI
- **harness 成本/时延调优**：同一任务在不同 harness 与模型配置间做基准测试，将生产流量路由到成本最低或速度最快的后端
- **私有化智能体基础设施**：在自有基础设施上运行编码智能体，使用自有提供商密钥，具备按会话隔离的工作区和可对接现有可观测体系的链路追踪

## 技术特点

- 实现统一 Harness 协议（UHP）——一个公开的版本化契约，其任务面刻意与 OpenAI Responses API 兼容，现有 Responses SDK、流式解析器和 UI 组件可直接对接 UHP 服务端；仓库内含 Apache-2.0 参考实现、机器可读的 OpenAPI/JSON Schema 以及一致性测试套件
- 单容器架构：Console 监听 :3000 作为唯一对外端口，以同源代理方式转发到 Gateway（:8080，Responses API 与 harness 生命周期）和 Runner（:8081，在会话工作区中执行 harness），两者均绑定容器内回环地址
- 会话之间使用独立工作区和操作系统用户而非独立容器；Runner 以 root 运行以管理每会话用户，Console 与 Gateway 以非特权方式运行
- W3C Trace Context 传播：请求携带的 `traceparent`/`tracestate` 头会让任务的模型调用成为调用方链路的子 Span；不合法的 trace 头被丢弃而非拒绝，`baggage` 永不读取
- 通过 `Idempotency-Key` 实现幂等：相同键重试返回首次请求的结果而不重复执行，首次仍在运行时重试会等待，键被不同请求体复用时返回 409
- 密钥处理：harness 的 `env` 映射在每一轮解析 `$headers.*` 引用或通过 `PUT /v1/mcp-secrets/{ref}` 存储的 `vault:` 密钥，经引用传入的值会从响应、流、链路和存储记录中脱敏
- OpenAPI 规范由路由自动生成，经 `/v1/openapi.json` 提供，`/v1/docs` 提供可浏览版本
