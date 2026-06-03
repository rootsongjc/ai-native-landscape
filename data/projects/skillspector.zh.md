---
name: SkillSpector
slug: skillspector
homepage: null
repo: https://github.com/nvidia/skillspector
license: Apache-2.0
category: training-optimization
subCategory: safety-guardrails
tags:
  - Security
  - Safety
  - Agent Skills
  - Vulnerability Scanner
description: NVIDIA 出品的 AI Agent 技能安全扫描器，覆盖 16 大类 64 种漏洞模式，检测恶意模式和安全风险。
author: NVIDIA
ossDate: '2026-03-21T00:28:43Z'
featured: false
status: tracked
---

## 简介

SkillSpector 是 NVIDIA 构建的 AI Agent 技能安全扫描器。它回答"这个技能安全吗？"——在安装前检测漏洞、恶意模式和安全风险。研究表明 26.1% 的技能包含漏洞，5.2% 有明显恶意意图。

## 主要特性

- 16 大类 64 种漏洞模式，覆盖提示注入、数据泄露、权限提升和供应链风险。
- 两阶段分析：快速静态分析 + 可选 LLM 语义评估。
- 多格式输入：扫描 Git 仓库、URL、zip 文件、目录或单文件。
- 0-100 风险评分，带严重级别标签和明确建议。

## 使用场景

- 在安装 Claude Code、Codex CLI 或 Gemini CLI 的技能前进行安全审计。
- 扫描技能仓库检测供应链攻击和恶意模式。
- 将安全扫描集成到 Agent 技能开发的 CI/CD 流水线中。

## 技术特点

- NVIDIA 官方项目，Apache 2.0 协议。
- 通过 OSV.dev 实时漏洞查询，支持离线降级。
- 输出终端、JSON、Markdown 和 SARIF 格式报告。
