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
description: Security scanner for AI agent skills by NVIDIA that detects vulnerabilities, malicious patterns, and security risks across 64 vulnerability patterns in 16 categories.
logo: ''
author: NVIDIA
ossDate: '2026-03-21T00:28:43Z'
featured: false
status: tracked
---

## Overview

SkillSpector is a security scanner for AI agent skills built by NVIDIA. It answers "Is this skill safe to install?" by detecting vulnerabilities, malicious patterns, and security risks before installation. Research shows 26.1% of skills contain vulnerabilities and 5.2% show likely malicious intent.

## Key Features

- 64 vulnerability patterns across 16 categories including prompt injection, data exfiltration, privilege escalation, and supply chain risks.
- Two-stage analysis: fast static analysis with optional LLM semantic evaluation.
- Multi-format input: scan Git repos, URLs, zip files, directories, or single files.
- Risk scoring with 0-100 score, severity labels, and clear recommendations.

## Use Cases

- Audit AI agent skills before installing them in Claude Code, Codex CLI, or Gemini CLI.
- Scan skill repositories for supply chain attacks and malicious patterns.
- Integrate security scanning into CI/CD pipelines for agent skill development.

## Technical Details

- NVIDIA official project, Apache 2.0 licensed.
- Live vulnerability lookups via OSV.dev with offline fallback.
- Outputs terminal, JSON, Markdown, and SARIF reports.
