---
name: nanoMuse
slug: nanomuse
homepage: https://nanomuse.cn/
repo: https://github.com/nano-muse/nanoMuse
license: GPL-3.0-or-later
category: applications-products
subCategory: desktop-clients
tags:
  - Personal Agent
  - GUI Agent
  - Computer Use
  - MCP
  - Cross-Device
  - LLM
description: >-
  An open-source personal agent for every device you own — Android, iPhone/iPad, Windows/macOS/Linux,
  and the browser. It does things instead of answering questions, keeps working while the app is closed,
  remembers you, and asks before anything you cannot undo.
author: nano-muse
ossDate: '2026-09-23'
featured: false
status: tracked
---

## Introduction

nanoMuse is an open-source personal agent that runs on the phone in your pocket, the computer on your desk, and in the browser, all sharing one account and the same conversations. In the style of Meta's Muse, it acts rather than chats: it operates a shell, a browser, MCP servers, and — with "Hands" on — the apps on your phone and the windows on your computer through their screens, covering everything that never had an API. The phone app, desktop app, web console, and the relay that joins them all live in one GPL-3.0-or-later repository that you can self-host.

## Key Features

- Does things: Linux shell, browser, MCP servers and skills as tools, plus screen-based control of phone apps and desktop windows for apps without APIs
- Asks first: pauses before deleting, sending, or paying; hands logins and CAPTCHAs back to the user and resumes when you tap Done
- Cross-device: say it on the phone and it runs on your PC; `@Mac …` routes a task to another device, with approvals returning to the device in your hand
- Keeps going: goals checked on a schedule, routines that run while the app is closed, and a feed written for you each morning
- Remembers you: identity, knowledge about you, and wake schedules are Markdown files you can read and edit
- Any model: free allowance on the community relay, your own key at eighteen providers (OpenRouter, OpenAI, Gemini, DeepSeek, and more), or a plan you already pay for
- Lives in your chat apps: answers in Feishu, DingTalk, WeCom, and Telegram

## Use Cases

- Personal task automation across phone and computer, including GUI-only apps that have no API
- Self-hosting a private agent: run your own relay on a single VPS so nothing leaves your house
- Scheduled routines and background goals that continue while the apps are closed
- Reaching one agent from the IM apps a team already uses

## Technical Highlights

- Each device runs its own agent: the phone app embeds Alpine Linux under a proot sandbox with a shell, browser, and MCP support, built on OpenMinis (GPL-3.0)
- The desktop app is a plugin of DeepSeek Harness using its Python runtime; the GUI hands are a port of ByteDance's UI-TARS-desktop operator with ScreenMarker-style visual markers
- A relay joins the devices: signed-in agents meet there and can ask each other for things, with conversation text transiting the relay while files and screenshots stay on the device that made them
- Confirmation semantics are first-class: irreversible actions require per-instance, per-chat, or permanent approval, and passwords or codes are always typed by the user
- Self-hostable via `scripts/self-host.sh` or Docker Compose; the agent's persona and avatar are generated with image and video models
