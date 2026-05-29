---
name: MAI-UI
slug: mai-ui
homepage: https://tongyi-mai.github.io/MAI-UI-blog
repo: https://github.com/tongyi-mai/mai-ui
license: Unknown
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - Application
  - Chat UI
  - Multimodal
  - UI
description: >-
  A GUI-centric agent framework supporting models ranging from 2B to 235B to build interactive agent experiences for
  real-world tasks.
logo: ''
author: Tongyi-MAI
ossDate: '2025-12-15T07:53:22Z'
featured: false
status: tracked
---

## Overview

MAI-UI is a GUI-centric agent framework designed to deploy foundation model capabilities as interactive agent experiences in real-world scenarios. It supports models ranging from small (2B) to extra-large scale (235B), with engineering support for device-cloud collaboration, GUI event awareness, and multimodal inputs, enabling models to cooperate with external systems through visual controls to complete tasks.

## Key Features

- Multi-scale model support: Adapts models from 2B to 235B to meet different compute and latency requirements.
- GUI-aware: Incorporates UI events and control states as first-class context inputs to improve interaction accuracy.
- Device-cloud collaboration: Designed for local devices and cloud models to work together, balancing response speed and capability boundaries.
- Multimodal support: Combines text, images, and UI interaction information for decision-making.

## Use Cases

- Intelligent desktop assistant: Understands user intent through UI behavior and automates repetitive operations in desktop or web applications.
- Interpretable embedded assistant: Embed explainable operational agents into industry applications to improve business process efficiency.
- Device coordination scenarios: Coordinate UI and models on IoT or edge devices to complete interactive tasks.

## Technical Highlights

- Treats events and UI state as first-class inputs, optimizing context construction and prompt engineering.
- Supports multimodal context fusion to enhance understanding of mixed visual and textual scenarios.
- Focuses on engineering-grade deployment and runtime adaptation, including latency/compute stratification schemes and model routing strategies.
