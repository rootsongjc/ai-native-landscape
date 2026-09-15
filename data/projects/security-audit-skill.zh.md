---
name: Security Audit Skill
slug: security-audit-skill
homepage: null
repo: https://github.com/cloudflare/security-audit-skill
license: MIT
category: training-optimization
subCategory: safety-guardrails
tags:
  - Security Audit
  - Coding Agent
  - Claude Code
  - Agent Skills
  - Vulnerability Detection
description: Cloudflare 出品的编码智能体技能，通过隔离的子智能体编排六阶段安全审计流水线，产出经独立验证的机器可读安全发现。
author: Cloudflare
ossDate: '2026-06-18'
featured: false
status: tracked
---

## 简介

Security Audit Skill 将编码智能体转变为安全审计员。它通过六阶段工作流编排隔离的子智能体——侦察、覆盖率驱动的漏洞狩猎、候选验证、结构化输出、独立记录验证、目标中立报告——产出机器可读且经独立验证的安全发现。该项目是 Cloudflare 博客文章"Build your own vulnerability harness"中所述漏洞挖掘框架的单仓库种子版本。

## 主要特性

- 六阶段审计流水线：侦察、覆盖率驱动狩猎、候选验证、结构化输出、独立记录验证、报告
- 对抗式验证——发现问题的智能体绝不自行验证，由全新验证者尝试推翻每个候选发现
- 覆盖内存安全、LLM/提示注入、Web/认证、客户端、供应链、云、RPC、资源耗尽、数据隔离、桌面/移动等领域的专项狩猎手册
- 严重性必须以已证明的影响（可能性 × 影响）为准，而非清单式偏差
- 多次运行可叠加——重复审计持续发现新漏洞

## 使用场景

- 用编码智能体自动化执行深度代码库安全审计
- 产出机器可读的发现文件（findings.json），接入下游工具链
- 持续安全审查，多次运行累积覆盖率

## 技术特点

- 侦察阶段将架构、信任边界、输入面映射为 architecture.md 与 coverage-ledger.json；狩猎子智能体仅从账本单元出发工作，覆盖率评审者负责发现盲区
- 发现以 confirmed / needs_validation / rejected 三类记录写入 findings.json，由零依赖 Node.js 验证器（validate-findings.cjs、validate-coverage-ledger.cjs）按 report-schema.json 校验
- 子智能体运行于操作系统强制隔离的沙箱（无外部网络、净化环境变量、资源限制、受限写入）；无沙箱时目标代码执行被扣留，线索停留在 needs_validation 状态
- 通过 `npx skills add` 安装；运行结果落在 `~/security-audit-skill/<repo-name>/run-<N>`，输出 REPORT.md、FINDINGS-DETAIL.md 与 NEEDS-VALIDATION.md
