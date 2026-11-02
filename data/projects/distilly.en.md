---
name: distilly
slug: distilly
homepage: null
repo: https://github.com/titanwings/distilly
license: MIT
category: training-optimization
subCategory: prompt-quality
tags:
  - Agent Skills
  - Knowledge Distillation
  - Personas
  - Claude Code
description: >-
  Distills a person's experience, judgment, voice, and ways of working into a portable, source-grounded
  Person Profile packaged as an Agent Skill that any compatible agent or bot can install and invoke.
  Formerly Colleague Skill.
author: titanwings
ossDate: '2026-03-30'
featured: false
status: tracked
---

## Overview

Distilly, formerly Colleague Skill, is a person-modeling layer for AI agents. It turns materials you provide — chat messages, documents, interviews, and public sources — into a reusable Person Profile built from observable experience, decision patterns, expression, and ways of working, then packages each profile as an Agent Skill for supported hosts to install. It deliberately does not claim to clone the person behind the material; every statement in a profile traces back to its sources.

## Key Features

- Three character families, each with its own source-collection strategy, analysis dimensions, and profile structure: colleague (work skill plus persona), relationship (expression patterns, emotional triggers, conflict and repair patterns), and celebrity (a six-dimension research toolchain)
- Broad data-source coverage: Lark API, DingTalk, Slack, public X posts, WeChat history exports, PDF/images, Lark JSON exports, `.eml`/`.mbox` email, and Markdown or direct paste
- Native local Skill discovery across eight agent hosts, including Claude Code, Codex, OpenClaw, Hermes Agent, DeepSeek Harness, Pi, Grok Build, and OpenCode
- Self-profiling flow: a short interview builds your own profile, keeps the full profile local, and adds a summary to the file your agent reads every session

## Use Cases

- Preserving the playbook and working context of a departing colleague, mentor, or teammate as a skill team agents can still consult
- Carrying a persona into personal agents instead of starting from zero (Grok Bot saved skills today; Meta Muse and OpenAI Dots profile handoff planned)
- Researching a public figure or favorite author into a skill that answers questions grounded in their observable decisions and expression

## Technical Details

- Implemented as an Agent Skill following the agentskills.io standard: the creator skill is named `distilly` and installs into each host's skills directory; generated profiles are emitted as skills named `{character}-{slug}`
- The celebrity pipeline runs a six-dimension research toolchain (works, interviews, decisions, expression DNA, external evaluations, timeline) that chains subtitle extraction, transcript cleanup, research merge, and a quality-check pass
- Collection differs per family: Lark and Slack pull messages through their APIs, DingTalk falls back to browser collection because its API lacks message history, WeChat reads SQLite exports produced by WeChatMsg or PyWxDump, and celebrity research can draw on metered third-party X access
- Owner profile data stays local at `~/.distilly/owner/profile.md`, with only a short summary appended to the host's per-session context file (`~/.claude/CLAUDE.md` for Claude Code, `USER.md` for OpenClaw); Python 3.9+ tooling
