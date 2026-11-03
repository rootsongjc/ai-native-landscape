---
name: freelm
slug: freelm
homepage: https://shahriarlabs.com/products/freelm/
repo: https://github.com/shihabshahrier/freelm
license: MIT
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - LLM Router
  - AI Gateway
  - OpenAI Compatible
  - Failover
  - Free Tier
description: >-
  freelm 是一个 LLM 路由器：用用户自己的 key，把 Gemini、Groq、OpenRouter、Cerebras、Mistral、NVIDIA NIM、Cloudflare Workers AI
  等提供商的官方免费额度汇聚到一个 OpenAI 兼容接口之后。它可以作为 Python 或 TypeScript 库在进程内运行，也可以用 `freelm serve`
  作为本地服务，按实测延迟与按模型配额路由请求，对各类失败分类处理并竞速慢提供商——设计上只走免费额度。
author: shihabshahrier
ossDate: '2026-06-07'
featured: false
status: tracked
---
## 详细介绍

freelm 把 Google Gemini、Groq、OpenRouter、Cloudflare Workers AI、Z.ai、Cohere、Mistral、NVIDIA NIM 和 Kilo 的免费额度汇聚成一个 OpenAI 兼容的 LLM——可在 Python 或 TypeScript 代码中使用，也可以作为本地 `/v1` 端点供任意工具调用。它是 LiteLLM 或 OpenRouter 账号的免费、轻量替代：轮换你自己的 key，在限流、故障和模型下线时跨提供商转移，把慢提供商与下一家并行竞速（挂起的提供商代价约 6 秒，而非 60 秒失败——数字来自可复现基准测试），并自动发现今天哪些模型免费。

它是库而非需要照看的服务：key 从用户环境直达各提供商，没有中继、控制台或管理端口。CLI 甚至可以在完全无 key 的情况下工作，回落到无密钥的公共端点。

## 主要特性

- **统一 OpenAI 兼容接口**：`freelm serve` 在本地 `/v1` 端点暴露汇聚的免费额度，含流式、工具调用与故障转移——OpenAI SDK、LangChain、LlamaIndex、Continue、Cline、OpenCode 都能直接指向它
- **库优先**：以 Python（`pip install freelm`）或 TypeScript（`npm install freelm`，零依赖）库的形式在进程内使用，两种语言行为一致
- **实测路由**：每个请求按实测延迟和按模型配额路由；模型别名 `auto`、`chat:fast`、`large`、`tools` 帮你挑具体 id
- **失败分类处理**：限流、鉴权失败、模型下线、连接挂起分别归类，各自采取正确的恢复策略
- **慢提供商竞速**：慢的尝试与下一家提供商并行竞速，把挂起代价从 60 秒失败降到约 6 秒
- **Key 诊断**：`freelm doctor` 对每个 key 发一个极小请求，准确告知哪里坏了、怎么修
- **无 key 可用**：未配置任何 key 时，CLI 回落到无密钥公共端点（Kilo Gateway 免费路由、OVHcloud AI Endpoints 匿名层）并明确说明

## 使用场景

- **零成本原型**：用自己的 key 在汇聚的免费额度上跑智能体或应用原型，无需注册账号或配置计费
- **即插即用的免费后端**：通过 `freelm serve` 给任何 OpenAI 兼容工具（Continue、Cline、Roo Code、OpenCode、LangChain）接上免费 LLM 后端
- **高可用的轻量部署**：自动故障转移与慢提供商竞速，扛住单一提供商的限流与故障
- **边缘与 Workers 部署**：把零依赖的 TypeScript 构建打包进 Cloudflare Workers 或边缘运行时

## 技术特点

- **双语言实现**：Python（一个运行时依赖，Python 3.9+）与 TypeScript（零运行时依赖，Node 20+）路由行为一致；TS 版可打包到 Workers/边缘环境
- **可复现基准**：故障转移数字来自仓库内的基准脚本（`benchmarks/`），而非厂商宣传
- **仅免费约束**：设计上在 OpenRouter 拒绝付费模型 id，保证路由池只走免费额度
- **Key 直通架构**：无中继、控制台或管理端口——用户 key 从环境变量直达各提供商
- **服务端与 Docker 交付**：`freelm serve` 以本地服务运行同一套路由（默认 4000 端口），另发布 Docker 镜像
- **2026 年 6 月起发布于 PyPI 与 npm**，当前 0.5.x 版本
