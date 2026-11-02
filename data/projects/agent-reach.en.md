---
name: Agent-Reach
slug: agent-reach
homepage: null
repo: https://github.com/Panniantong/Agent-Reach
license: MIT
category: rag-knowledge
subCategory: data-connectors
tags:
  - Data Connector
  - CLI
  - MCP
  - Web Scraping
description: >-
  A CLI that gives AI agents access to platforms they cannot reach on their own
  — Twitter/X, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu, Xueqiu and more
  — returning clean structured data with zero API fees.
author: Panniantong
ossDate: '2026-02-24'
featured: false
status: tracked
---

## Overview

Agent Reach lets CLI agents such as Claude Code, Codex, and OpenClaw reach the parts of the internet their built-in search and web reading cannot touch: login-walled platforms, content inside videos, Chinese platforms with poor general-search coverage, and sources that need cleaning into structured data. It pre-installs and pre-tests the tools behind each platform, so an agent gets at them with a single command.

## Key Features

- One CLI surface for many platforms: `agent-reach <channel> <action>`, with `agent-reach read <url>` auto-selecting the channel from the link
- Default channels with no credentials needed: bilibili (search, video info, subtitles), v2ex, github (repos, issues, PRs with comments), youtube (subtitles, speech-to-text), and general web search/reading as fallback
- Login-walled channels: xiaohongshu, xueqiu, boss, linkedin, reddit; experimental: twitter, facebook, instagram
- Video and podcast transcription for YouTube and Xiaoyuzhou
- Login-required platforms run in Agent Reach's own dedicated background browser; first use copies the site's login from Chrome without touching the password vault or altering the original browser

## Use Cases

- Let an agent search XiaoHongShu notes, X/Twitter feeds, or job listings behind login walls
- Pull subtitles and transcripts from Bilibili and YouTube videos, and transcribe Xiaoyuzhou podcasts
- Fetch structured data from Xueqiu quotes, V2EX threads, and GitHub repositories for analysis

## Technical Details

- Python 3.10+ CLI where every channel exposes typed actions (search, video info, hot lists, subtitles, thread reading) returning structured data the agent consumes directly
- Login-walled platforms use a dedicated background browser that never opens windows; on first use of a site it copies that site's cookie session from the user's Chrome, leaving the original browser unchanged and never reading the password store
- Channels are tiered by credential needs: default channels work with nothing installed beyond the CLI, optional channels require a login or a Groq/OpenAI key for speech transcription, and experimental channels (twitter, facebook, instagram) are clearly marked
- Designed to plug into any agent — Claude Code, Codex, Hermes Agent, OpenClaw — as a plain CLI the agent shells out to
