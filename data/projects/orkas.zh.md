---
name: Orkas
slug: orkas
homepage: https://orkas.ai
repo: https://github.com/Orkas-AI/Orkas
license: MIT
category: applications-products
subCategory: desktop-clients
tags:
  - Desktop App
  - Local-First
  - Multi-Agent
  - BYO Keys
  - Agent Marketplace
  - MCP Client
  - Self-Evolving Agents
description: 开源的本地优先多智能体桌面应用：指挥官 LLM 负责规划、调度专家子智能体，并将你已安装的编码 CLI 作为本地会话驱动，自带 key、无厂商锁定。
author: Orkas-AI
ossDate: '2026-04-29'
featured: false
status: tracked
---

## 简介

Orkas 是开源的本地优先 AI 桌面应用：描述一个目标，指挥官 LLM 规划工作、亲自处理通用部分，并以并行或串行方式协调专家智能体。应用首发内置九个专家智能体（市场中另有 30 个），还能把你已安装的编码 CLI——Claude Code、Codex、OpenCode、OpenClaw、Hermes——作为本地会话纳入同一指挥官调度。对话、文件、API key、知识库和自定义智能体全部留在本地磁盘；模型调用从你的机器直连提供商，不经 Orkas 服务器。支持 macOS、Windows 和 Linux。

## 主要特性

- 指挥官理解上下文、将目标拆解为步骤、选择智能体/技能/连接器/工具，在没有更合适的专家时亲自完成分析、写作、调研与文件工作
- 首次启动即就绪的九个内置专家智能体——DeepResearcher、ContentWriter、PptMaker、ProductDeveloper、OfficeWorker、VideoStudio、ImageStudio、UIDesigner、SeoGeoAgent——各自拥有独立的技能、记忆与工具
- 驱动开源生态：将外部 CLI 智能体（Claude Code、Codex、OpenCode、OpenClaw、Hermes）作为本地会话接入，由同一指挥官协调
- 本地优先设计——对话、文件、API key、知识库与自定义智能体不离开磁盘；模型调用机器直连提供商，不经过 Orkas 服务器
- 无厂商锁定——跨智能体混用提供商（Claude、OpenAI、Gemini、DeepSeek、Kimi、GLM、Qwen、MiniMax、Doubao 或本地端点）
- 越用越强的智能体——每个智能体拥有私有技能与记忆，通过任务后反思与技能结晶持续改进

## 使用场景

- 在一个聊天中跑通"调研 → 撰写 → 交付"流水线（"调研前 5 名竞品、写成报告、做成演示文稿"），成品文件直接落盘
- 非开发者通过桌面 GUI 驾驭一支 AI 专家团队，无需碰终端
- 从单一桌面界面协调已有的编码 CLI 安装，代替来回切换终端会话

## 技术特点

- 跨平台桌面应用（macOS / Windows / Linux），基于 JavaScript/Electron 构建，MIT 协议，自带模型 key、机器直连提供商调用
- 指挥官 + 专家架构：通用指挥官 LLM 分解目标，将工作派发给基于共享计划并行或串行运行的专家子智能体
- 外部编码 CLI 以本地会话方式启动而非重新实现——Orkas 编排的是你已安装的二进制程序
- 每个智能体拥有私有技能与记忆，通过任务后反思与技能结晶（从已完成工作中蒸馏出可复用技能）实现自我进化
- 提供 30 个可安装智能体的市场；支持 MCP 客户端完成工具集成
