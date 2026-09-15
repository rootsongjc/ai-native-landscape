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
description: A coding-agent skill from Cloudflare that orchestrates isolated sub-agents through a six-phase security audit pipeline, producing independently verified, machine-readable findings.
author: Cloudflare
ossDate: '2026-06-18'
featured: false
status: tracked
---

## Overview

Security Audit Skill turns a coding agent into a security auditor. It orchestrates isolated sub-agents through a six-phase workflow — reconnaissance, coverage-led hunting, candidate validation, structured output, independent record verification, and target-neutral reporting — producing findings that are machine-readable and independently verified. It is the single-repo seed of the harness described in Cloudflare's "Build your own vulnerability harness" blog post.

## Key Features

- Six-phase audit pipeline: reconnaissance, coverage-led hunting, candidate validation, structured output, independent record verification, reporting
- Adversarial validation — the agent that finds an issue never verifies it; a fresh verifier attempts to disprove each candidate
- Domain-specific hunting playbooks covering memory safety, LLM/prompt injection, web/auth, client-side, supply chain, cloud, RPC, resource exhaustion, data isolation, and desktop/mobile
- Severity requires demonstrated impact (likelihood × impact), not checklist deviation
- Additive runs — repeated audits keep finding new vulnerabilities

## Use Cases

- Automating deep security audits of codebases with coding agents
- Producing machine-readable findings (findings.json) that feed downstream tooling
- Continuous security review where repeated runs accumulate coverage

## Technical Details

- Recon phase maps architecture, trust boundaries, and input surfaces into architecture.md and a coverage-ledger.json; hunter sub-agents work only from ledger units, with coverage critics identifying gaps
- Findings written as confirmed / needs_validation / rejected records validated against report-schema.json by zero-dependency Node.js validators (validate-findings.cjs, validate-coverage-ledger.cjs)
- Sub-agents run in OS-enforced sandboxes (no external networking, sanitized env, resource limits, restricted writes); without a sandbox, target code execution is withheld and leads stay as needs_validation
- Installed via `npx skills add`; runs land in `~/security-audit-skill/<repo-name>/run-<N>` with REPORT.md, FINDINGS-DETAIL.md, and NEEDS-VALIDATION.md outputs
