---
name: I Have ADHD
slug: i-have-adhd
homepage: null
repo: https://github.com/ayghri/i-have-adhd
license: MIT
category: coding-devtools
subCategory: ide-cli-tools
tags:
  - Claude Code
  - Skill
  - Productivity
  - Developer Tools
description: A skill for coding agents that stops them from burying the answer, producing ADHD-friendly output that leads with the result.
author: ayghri
ossDate: '2026-05-13T20:42:06Z'
featured: false
status: tracked
---

## Overview

I Have ADHD is a Claude Code skill (installable as a plugin) that reshapes how coding agents respond. Instead of long preambles and buried conclusions, the agent is prompted to put the answer first and keep output scannable, making it easier to parse for readers with ADHD or anyone who wants the point up front.

## Key Features

- Forces the agent to lead with the result instead of burying it under explanation
- Reduces filler, hedging, and verbose preambles in agent replies
- Ships as a drop-in Claude Code skill/plugin that activates per session
- ADHD-friendly formatting that favors scannable, direct answers

## Use Cases

- Making coding agent output faster to scan during active development
- Helping neurodivergent users get to the answer without wading through preamble
- Standardizing terse, answer-first responses across coding sessions

## Technical Details

- Distributed as a Claude Code skill with plugin-style installation
- Works with agent harnesses that support the Agent Skills convention
- Lightweight instruction-based skill with no runtime dependencies
