---
name: New Term Radar
slug: new-term-radar
homepage: https://pypi.org/project/new-term-radar/
repo: https://github.com/zhuyansen/new-term-radar
license: MIT
category: applications-products
subCategory: productivity-tools
tags:
  - AI Trends
  - SEO
  - Keyword Research
  - Google Trends
  - MCP
  - Agent Skills
description: A Python CLI, three Agent Skills, a Claude Code plugin, and an MCP server that catch new AI model, product, and repo names where they first appear (X, Hugging Face trending, GitHub breakout repos, directory sitemaps), then size the search demand behind each name with Google Ads volume and Google Trends to label each keyword prioritize, watch, or skip.
author: Yansen Zhu
ossDate: '2026-10-12'
featured: false
status: tracked
---

## Overview

New Term Radar produces a daily report of names that are starting to surge in AI — new models, products, tools, and repos — caught where they are said first, before they show up in keyword tools. It is built for people who make pages, posts, or products around new terms: SEO for AI tool sites, newsletters, and directories that want to know about a name the day it appears instead of two weeks later. Every lead is re-checked after 14 days against Google Trends, and the tool reports its own hit rate.

## Key Features

- Six signal sources ordered by emergence: X first-mentions from followed accounts (60-day window), Hugging Face trending models and Spaces, GitHub breakout repos, and new-URL term extraction from directory sitemaps
- GitHub breakout detection flags repos under 14 days old averaging 200+ stars a day (or +400 since yesterday) and adds the search variants people use
- Sitemap diffing surfaces words shared by several new URLs on a site that its older URLs rarely carried
- Keyword sizing with Google Ads search volume and Google Trends, labeling each lead prioritize, watch, or skip
- Self-verification: every lead is re-checked after 14 days against Google Trends and the tool reports its own hit rate
- Runs as a CLI, three Agent Skills, a Claude Code plugin, and an MCP server

## Use Cases

- Building SEO pages or posts around new AI terms before keyword tools list them
- Newsletters and AI tool directories tracking new models and repos on day one
- Agent-driven research: query the radar from Claude Code or any MCP client without leaving the conversation

## Technical Details

- Reads signals in emergence order — social first-mention, Hugging Face trending, GitHub breakout, sitemap diffusion — and uses Google Trends only as the final verification step, inverting the usual keyword-tool pipeline that starts from search volume
- Hugging Face signal groups quantised copies and a model's own demo Space under the base model name to avoid duplicate leads
- Sitemap analysis compares new-URL vocabulary against older URLs on the same site to isolate genuinely new terms
- 14-day deferred re-check loop scores past leads against Trends curves and publishes the hit rate
- Free signals (Hugging Face, GitHub, sitemaps) run with no API key on the Python standard library; paid lookups (X posts, search volumes, Trends) go through the user's own AIsa API key
- Distributed via PyPI, the official MCP Registry, and a Claude Code plugin manifest, with skills/ and tests/ shipped in the repo
