---
name: OpenSpace
slug: openspace
homepage: https://open-space.cloud/
repo: https://github.com/HKUDS/OpenSpace
license: MIT
category: coding-devtools
subCategory: mcp-tools
tags:
  - MCP
  - Agent Skills
  - Skill Hub
  - Skill Evolution
  - Tool Registry
description: >-
  面向 AI 智能体的质量优先技能中心（Skill Hub）——支持在 Claude Code、Codex、Cursor、OpenClaw 与 nanobot 等智能体间浏览、导入、复用、进化与共享技能，以 MCP 服务形式接入，并依据真实任务结果对技能进行评估。
author: HKUDS
ossDate: '2026-03-24T08:01:49Z'
featured: false
status: tracked
---

## 简介

OpenSpace 是一个质量优先的技能中心（Skill Hub），以共享空间的形式接入 AI 智能体，用于浏览、导入、复用与共享技能。它不再让技能无序堆积却无从判断是否真正有效，而是记录真实任务结果——让有效的技能进化、失效的技能退役，并将经验提炼为更精炼的提示。可部署在组织自有基础设施内，使智能体学到的每项技能都成为可复用的内部资产。

## 主要特性

- 跨智能体的统一技能中心：Claude Code、Codex、Cursor、OpenClaw 与 nanobot 共享同一浏览、导入与复用技能的空间，无需在每个工具中重复构建。
- 基于真实任务的质量层：每项技能均依据真实任务结果评估，并留存端到端质量记录与证据驱动的进化轨迹。
- 可自托管的技能平台：部署于组织自有基础设施内，工作流保持内部闭环，数据不外泄。
- 技能进化引擎：通过受控改动优化有效技能、退役失效技能，使智能体逐次变强并消耗更少 Token。
- 多传输方式的 MCP 接入：支持独立 SSE、可流式 HTTP 与 stdio，便于远程主机通过 HTTP 接入、规避 stdio 超时。
- 带上下文的共享：技能共享时附带谱系、版本历史与真实任务验证证据，而非盲目上传。

## 使用场景

- 建立组织自有、可跨项目复用的内部技能库。
- 通过将真实任务结果反馈到技能选择，让智能体停止重复使用失效技能。
- 团队共享经过验证的技能，并附带质量证据与谱系。
- 从分层式技能中心浏览并拉取公开技能包。

## 技术特点

- Python 3.12+ 包，通过 `pip install -e .` 安装，提供 `openspace` CLI 与 Dashboard / TUI 体验。
- 以 MCP 服务形式向智能体暴露技能，支持 SSE、可流式 HTTP 与 stdio 三种传输方式。
- v2 新增基于包的技能浏览、技能质量摘要，以及将任务轨迹作为质量证据上传。
- 词法召回加语义重排，驱动技能包与技能检索。
- 采用 MIT 协议，由 HKUDS（香港大学数据科学实验室）维护。
