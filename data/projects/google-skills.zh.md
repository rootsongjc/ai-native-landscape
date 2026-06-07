---
name: Google Agent Skills
slug: google-skills
homepage: 'https://agentskills.io'
repo: https://github.com/google/skills
license: Apache-2.0
category: coding-devtools
subCategory: mcp-tools
tags:
  - Google
  - Google Cloud
  - Agent Skills
  - Tool Protocol
description: Google 产品和技术的 Agent Skills 合集，涵盖 BigQuery、Cloud Run、GKE 等 Google Cloud 服务。
author: Google
ossDate: '2026-03-31'
featured: false
status: tracked
---

## 简介

Google Agent Skills 是一个面向 AI 智能体的可复用技能开源仓库，专注于 Google 产品和技术。遵循 Agent Skills 协议规范，这些技能可通过简单的 CLI 命令安装，为智能体提供关于 Google Cloud 服务、API 和最佳实践的结构化知识。

## 主要特性

- 通过 `npx skills add google/skills` 一键安装
- 覆盖主要 Google Cloud 服务：BigQuery、Cloud Run、GKE、Cloud SQL、AlloyDB、Firebase
- Agent Platform API 技能：Gemini、托管智能体、技能注册中心
- Google Cloud 架构框架指导技能（安全、可靠性、成本优化等）
- Google Cloud 入门和认证配方

## 使用场景

- 为编程智能体提供 Google Cloud 最佳实践和服务知识
- 引导智能体完成 Google Cloud 入门、认证和架构评审
- 使智能体能够使用 Gemini API 和 Agent Platform 能力
- 通过智能体交互提供网络可观测性和卓越运营指导

## 技术特点

- 基于 Agent Skills 协议规范（agentskills.io）构建
- 技能以 Markdown 文档形式提供，智能体可作为结构化上下文消费
- 支持从仓库中选择性安装单个技能
