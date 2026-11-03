---
name: backlink-guard
slug: backlink-guard
homepage: https://pypi.org/project/backlink-guard/
repo: https://github.com/zhuyansen/backlink-guard
license: MIT
category: applications-products
subCategory: productivity-tools
tags:
  - SEO
  - Backlinks
  - MCP
  - Agent Skills
  - Productivity
description: >-
  backlink-guard checks a link source — directory, awesome list, or guest-post site — before you submit your site to
  it, giving each site an action (skip, look first, free only, low value, submit) and a verdict with the evidence,
  against Google's link spam policies. It verifies listings once live, audits your own backlink profile, and surfaces
  the sites linking to competitors but not to you — usable as a CLI, an agent skill, a Claude Code plugin, and an MCP
  server.
author: zhuyansen
ossDate: '2026-10-13'
featured: false
status: tracked
---
## Overview

backlink-guard is an SEO tool that tells you where not to send your site, and when to slow down. Before you submit to a directory, awesome list, or guest-post site, it vets the source: each site gets an action (skip, look first, free only, low value, or submit) plus a verdict with the evidence it was read from, judged against Google's link spam policies. After a link goes live it verifies whether the listing is followed and where the link sits, audits your own backlink profile for spam patterns, lists backlinks landing on dead or badly redirected pages with a suggested 301, and finds the pages that rank for your keywords, the sites linking to your competitors but not to you, and who Google's AI Overviews and AI assistants cite.

It runs as a CLI, an agent skill, a Claude Code plugin, and an MCP server with ten tools, published on the official MCP Registry and skills.sh. It never submits anything on its own.

## Key Features

- **Source Vetting Before Submission**: Actions (skip, look first, free only, low value, submit) with link policy, value, and verdict findings, each quoting the text or numbers it was read from
- **Live Listing Verification**: Checks whether a listing is followed and where the link sits once it goes live
- **Backlink Profile Audit**: Flags the patterns Google calls link spam in your own profile, including sites one operator runs (shared templates and analytics accounts)
- **Lost Backlink Recovery**: `lost` lists backlinks landing on 404s or bad redirects, each with a suggested 301
- **Competitor and AI-Answer Intelligence**: Finds pages ranking for your keywords, sites linking to competitors but not to you, and which sites AI Overviews and AI assistants cite
- **Agent-First Packaging**: CLI, agent skill, Claude Code plugin, and MCP server (10 tools); page checks need no API key

## Use Cases

- **Directory Submission Decisions**: Vet a list of candidate directories in one run before spending submissions — free-only where a site sells followed links, skip parked domains
- **Backlink Cleanup**: Periodically audit your profile for link-spam patterns and fix dead or misredirected target pages with suggested 301s
- **Link Gap Analysis**: See which sites link to competitors but not to you, and which sources AI answers cite for your keywords
- **Agent-Driven SEO Workflows**: Let Claude Code or any MCP client run vetting and audits as part of a larger agent workflow

## Technical Details

- **Zero-Dependency Python**: Python 3.10+ with no dependencies; `uvx backlink-guard vet …` runs without installing
- **Tiered Evidence Model**: No-key mode reads the sites' own pages (dead, parked, link-selling, link-exchange, outbound-link, shared-template, analytics-account, Wayback first-copy checks); paid signals (ratings, visits, index status, spam scores, search history, backlinks, AI answers) go through the user's own Glasser/AIsa key, optionally GoAnyAPI
- **Deterministic Verdict Rules**: One avoid finding makes an avoid verdict, two caution findings make caution, risk scores 3 per avoid and 1 per caution; rules were validated on a held-out set of 100 never-seen sites (37 of 40 Ahrefs-marked spam sites kept from "submit" in 0.4.1)
- **Cross-Site Operator Detection**: Sites sharing page templates or analytics/ads accounts — with each other or with earlier checks on the same machine — are flagged as one operator's, with a prefilled report for the shared spam-link list when the list lacks them
- **Four Delivery Surfaces**: Same core as a CLI, an agent skill (security-graded on Agent Skills Hub), a Claude Code plugin, and a 10-tool MCP server registered at io.github.zhuyansen/backlink-guard
- **No Submission Side Effects**: The tool never submits anything; it reads, judges, and reports
