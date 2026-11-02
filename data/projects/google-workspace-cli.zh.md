---
name: gws
slug: google-workspace-cli
homepage: https://developers.google.com/workspace
repo: https://github.com/googleworkspace/cli
license: Apache-2.0
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - CLI
  - Google Workspace
  - AI Agents
  - Rust
description: 一个命令行工具覆盖全部 Google Workspace——Drive、Gmail、Calendar、Sheets、Docs、Chat、Admin 及所有 Workspace API——命令面由 Google Discovery Service 动态生成，并附带 40 多个智能体技能。
author: googleworkspace
ossDate: '2026-03-02'
featured: false
status: tracked
---

## 简介

gws（googleworkspace/cli）是一个覆盖全部 Google Workspace 的 CLI，同时面向人类与 AI 智能体。它不内置静态命令列表，而是在运行时读取 Google Discovery Service 动态构建整个命令面，因此新的 Workspace API 与方法会自动出现。每条命令都输出结构化 JSON，并附带 40 多个智能体技能，让 LLM 无需额外工具即可操作 Workspace。注意：这不是 Google 官方支持的产品。

## 主要特性

- 覆盖 Drive、Gmail、Calendar、Sheets、Docs、Chat、Admin 及所有其他 Workspace API，零样板代码
- 命令面在运行时由 Google Discovery Service 动态生成——新端点自动可用
- 每条命令输出结构化 JSON，`--page-all` 以 NDJSON 流式返回分页结果
- 每个资源都有 `--help`，`--dry-run` 预览请求，自动分页
- Schema 内省（`gws schema drive.files.list`）可查看任意方法的请求/响应结构
- 附带 40 多个 AI 智能体技能，智能体可直接管理 Workspace
- 多种认证方式：配合 gcloud 的 `gws auth setup`、手动 OAuth、预获取访问令牌、服务账号凭证

## 使用场景

- 在终端管理 Drive、Gmail、Calendar、Sheets 和 Chat，免去对照 REST 文档写 `curl`
- 在 CI 中借助结构化 JSON 输出编写 Workspace 管理与自动化脚本
- 让 AI 编码智能体通过该 CLI 与附带技能直接操作 Google Workspace
- 在写代码前探索并验证 Workspace API 的请求/响应结构

## 技术特点

- 使用 Rust 编写；可通过 GitHub Releases 预编译二进制、npm（`@googleworkspace/cli` 引导下载二进制）、`cargo install --locked`、Homebrew 或 Nix flake 安装
- 整个命令树在运行时由 Google Discovery Service 文档生成而非编译期固化，CLI 无需发版即可跟进新增或变更的 API 方法
- OAuth2 支持四条工作流：本地桌面交互式登录（gcloud 辅助配置）、Cloud Console 手动 OAuth、通过 `GOOGLE_WORKSPACE_CLI_TOKEN` 使用预获取访问令牌、以及通过 `GOOGLE_WORKSPACE_CLI_CREDENTIALS_FILE` 使用服务账号凭证做服务器间调用
- 面向智能体的工程细节：默认 JSON 输出、`--dry-run` 请求预览、`--page-all` NDJSON 分页流式输出、以及 `gws schema <method>` 的按方法 schema 内省
- 面向 v1.0 持续迭代，退出码与环境变量配置均有文档
