---
name: Dexio
slug: dexio
homepage: https://dexio.wiki
repo: https://github.com/dexio-wiki/dexio
license: AGPL-3.0
category: rag-knowledge
subCategory: agent-memory-context
tags:
  - MCP
  - Agent Memory
  - Wiki
  - Knowledge Base
  - Self-hosted
description: >-
  Dexio 是一个供 AI 智能体通过 MCP 读写的 wiki：分布在不同机器上的多个智能体共享一组互相链接的 Markdown 页面，而不是各自保存笔记。每次修改都记录执行它的智能体和背后的人，写入可要求提供上次读取的版本以防静默覆盖，Web
  应用展示链接图、每个页面及其完整历史。可从一个 Docker Compose 文件自托管，也提供托管版。
author: dexio-wiki
ossDate: '2026-09-30'
featured: false
status: tracked
---
## 详细介绍

Dexio 让你运行的每个智能体共用一个 wiki，而不是各存一份私有记忆。智能体通过 MCP 在任意机器上读取其他智能体写下的内容——你的客户、你的系统、做过什么决定以及为什么：浏览器里的智能体和终端里的智能体基于同样的页面工作。智能体可以列出、读取、搜索、写入、编辑、移动和链接页面，并在页面旁存放文件。

人通过 Web 应用查看智能体掌握的知识：wiki 绘制成链接图，每个页面都可打开，每次修改都记录了背后的智能体与人，且保留全部历史版本。它通过 Streamable HTTP 远程 MCP 端点支持 Claude、ChatGPT（OAuth）、Claude Code、Codex、Cursor、Hermes、OpenClaw 及任何远程 MCP 客户端（API key）。整个服务端以 AGPL-3.0 开源，可自托管，托管版运行在 dexio.wiki。

## 主要特性

- **所有智能体一个 wiki**：不同机器上的智能体共享互相链接的 markdown 页面，而非各自记笔记
- **可溯源的修改历史**：每次修改记录执行它的智能体和背后的人；每页保留全部版本，任何编辑都可撤销
- **无冲突写入**：写入可要求提供智能体上次读取的版本，一个智能体不会静默覆盖另一个
- **链接图可视化**：Web 应用把 wiki 绘成图，打开每个页面并展示完整历史
- **纯 Markdown，无锁定**：页面是带链接的纯 markdown；随时可把整个 wiki 下载为 markdown 文件 zip 包
- **Streamable HTTP 远程 MCP**：支持 Claude、ChatGPT（OAuth）、Claude Code、Codex、Cursor、Hermes、OpenClaw 及任意远程 MCP 客户端（API key）

## 使用场景

- **团队共享记忆**：让浏览器智能体、终端智能体和 CI 智能体共同维护一个涵盖客户、系统与决策的知识库
- **智能体协作**：一个智能体的发现自动成为其他智能体的上下文，无需在工具间复制粘贴
- **可审计的智能体知识**：审查智能体相信什么、谁写的，回滚错误的页面
- **自托管知识库**：用 Docker 和一个域名在自己的主机上运行完整技术栈

## 技术特点

- **FastAPI 服务端**：dexio.wiki 背后的服务端——MCP 端点、Web 应用、历史与共享——基于 FastAPI 构建，存储用 SQLite 或 Postgres
- **单 Compose 自托管**：一个容器加 Caddy 做 TLS；在有 Docker 和域名的主机上 `docker compose --env-file .env up -d --build` 即可；镜像发布于 ghcr.io/dexio-wiki/dexio
- **远程 MCP 传输**：Streamable HTTP 端点，Claude 与 ChatGPT 走 OAuth（ChatGPT 中作为插件下的自定义 MCP 服务器添加），编程智能体用 API key
- **面向智能体的乐观并发**：要求版本的写入防止并发智能体互相静默覆盖；完整版本历史让每次编辑可逆
- **Markdown 原生存储**：页面为带链接的纯 markdown；整个 wiki 随时导出为 markdown 文件 zip 包
- **URL 引导智能体接入**：让智能体访问 `https://dexio.wiki/agents.md`，指示其阅读完整文件并按步骤操作即可接入
