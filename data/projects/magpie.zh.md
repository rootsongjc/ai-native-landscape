---
name: magpie
slug: magpie
homepage: https://usemagpie.ai
repo: https://github.com/yetone/magpie
license: MIT
category: inference-serving
subCategory: llm-routing-gateways
tags:
  - AI Gateway
  - LLM Routing
  - Model Switching
  - CLI
description: 本地网关加菜单栏应用，把所有编码智能体的模型管理集中一处——Claude Code 跑 Kimi、Codex 跑 DeepSeek——按智能体切换模型、随处复用订阅，并在账号与服务商之间自动故障切换。
author: yetone
ossDate: '2026-09-23'
featured: false
status: tracked
---

## 简介

magpie 是"所有智能体的模型，集中一处"：一个本地网关加菜单栏应用，管理你的每个编码智能体用什么模型。从一个列表里为任意智能体挑选任意模型（Claude Code 跑 Kimi、Codex 跑 DeepSeek、Gemini CLI 跑 GLM、OpenCode 用你的 ChatGPT 订阅），magpie 会以原子方式改写智能体自身的配置。一个网关服务所有智能体，配额耗尽时自动切到你的下一个账号或服务商，智能体永远不会看到报错。它支持 80 多个智能体，可运行于 macOS、Windows、Linux、Docker 和 Termux。

## 主要特性

- 从一个可搜索列表为任意智能体选择任意模型；智能体自身配置文件以原子方式编辑，注释、顺序和格式保持不变
- 一个 provider 到处用：API key、本地模型，或你已登录的 Claude、ChatGPT、Copilot、Gemini、Grok 订阅
- 路由分组在配额耗尽时于模型与服务商之间故障切换；同一服务商多账号轮换
- Profile 把所有智能体的配置保存为一个名字（如"Budget""Focus"），一键整体切换
- 可选密文脱敏：密钥、密码和邮箱在请求离开电脑前于本机掩码，回复时再还原
- 桌面应用之外提供完整 CLI 与 TUI（`magpie provider add`、`magpie claude deepseek/...`、`magpie quota`、`magpie tui`），还支持 `magpie tool generate_image` 等直接工具调用

## 使用场景

- 让多个编码智能体用你实际付费的模型或订阅，而不是被各家厂商绑定
- 通过跨账号、跨服务商的故障切换，让长时间的智能体会话挺过配额限制
- 用一条命令在整套配置 Profile（如"Budget"与"Focus"）之间整体切换
- 通过标准 OpenAI/Anthropic/Gemini 环境变量，把任何支持自定义 base URL 的工具指向同一个本地网关

## 技术特点

- `127.0.0.1:3425` 上的本地网关同时支持四种协议——OpenAI Chat Completions、OpenAI Responses、Anthropic Messages 与 Gemini——并在其间互译，覆盖流式输出、工具调用与推理内容
- 切换模型时以原子方式改写智能体自身的配置文件（保留注释、顺序与格式），而非在智能体背后做代理；订阅发现通过读取各智能体的登录文件与 macOS Keychain 完成，可随时关闭
- 路由分组将多个模型与服务商串成链并支持智能路由；配额耗尽时由该服务商的下一个账号接管，智能体不会看到报错
- 可选的端上密文脱敏在请求离开本机之前把密钥、密码、邮箱从提示中改写掉，并在回复中还原（默认关闭）
- 使用 Go 编写（`go install github.com/yetone/magpie@latest`）；以签名、公证、自更新的桌面应用分发，另有 TUI、Web UI、CLI、Docker 镜像和 Termux 构建
