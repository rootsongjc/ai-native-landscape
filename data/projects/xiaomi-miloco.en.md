---
name: Xiaomi Miloco
slug: xiaomi-miloco
homepage: null
repo: https://github.com/XiaoMi/xiaomi-miloco
license: Unknown
category: applications-products
subCategory: workflow-automation
tags:
  - AI Agent
  - Smart Home
  - Home Automation
description: >-
  Xiaomi's open-source AI solution for whole-home intelligence that uses Mi Home camera video and audio as a
  full-modal perception gateway and the in-house MiMo large model as its brain, running as an Agent plugin on
  OpenClaw to orchestrate home devices for a proactive, personalized experience.
author: Xiaomi
ossDate: '2025-11-06T13:01:59Z'
featured: false
status: tracked
---
## Overview

Xiaomi Miloco is Xiaomi's open-source AI solution for the future of whole-home intelligence. It uses the video and audio streams from Mi Home cameras as a full-modal perception gateway, the in-house MiMo large model as its intelligent brain, and runs as an Agent plugin on top of OpenClaw to orchestrate whole-home devices. Miloco 2.0 perceives what happens at home, makes proactive decisions based on common sense, breaks down vague long-term goals into trackable household tasks, recognizes family members, and draws on home memory to deliver personalized service.

## Key Features

- General common sense with no preset rules — automatically detects hazards and raises tiered alerts (e.g. a child playing with knives, an elderly person falling)
- Identity recognition fusing face and body-posture signals, with proactive registration of new family members
- Home memory distilling long-term habits and preferences to inform proactive decisions and reminders
- Household tasks that upgrade single condition-triggered rules into complex, long-running automations (conditional automation, scheduled reminders, habit tracking)
- Proactive intelligence that observes, reasons, and intervenes like a butler who knows the family
- Home dashboard web UI for a real-time overview of the home, devices, family profiles, and event history

## Use Cases

Proactive whole-home automation: turning lights on when someone enters, reminding family members to take medicine, tracking daily exercise, and tuning the home to each member's comfort. Safety monitoring of children and elderly via camera perception with tiered alerts. Personalized service for each recognized family member based on learned habits.

## Technical Details

Runs as an Agent plugin on the OpenClaw agent platform and orchestrates Mi Home devices. Multimodal perception via Mi Home camera streams; reasoning via Xiaomi's MiMo models (MiMo-v2.5 for perception, MiMo-v2.5-pro for the Agent). Recommends a 24/7 host with ≥4GB RAM and ≥256GB storage (Mac mini recommended) on macOS or Linux. Released under a custom Xiaomi non-commercial license.
