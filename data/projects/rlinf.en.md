---
name: RLinf
slug: rlinf
homepage: null
repo: https://github.com/rlinf/rlinf
license: Unknown
category: training-optimization
subCategory: training-frameworks
tags:
  - Framework
  - Training
description: >-
  RLinf is a flexible and scalable open-source RL infrastructure designed for Embodied and Agentic AI, supporting PPO,
  GRPO, SAC and more, with seamless scaling to large GPU clusters.
logo: ''
author: RLinf Team
ossDate: '2025-08-15T00:00:00.000Z'
featured: true
status: tracked
---

## Overview

RLinf is a flexible and scalable open-source reinforcement learning infrastructure designed for Embodied and Agentic AI. The "inf" in RLinf stands for Infrastructure, highlighting its role as a robust backbone for next-generation training. It also stands for Infinite, symbolizing the system's support for open-ended learning, continuous generalization, and limitless possibilities in intelligence development. Led by the Tsinghua University team, the project has reached v0.2 and is adopted by leading companies and startups across AI infrastructure and robotics.

## Key Features

- High Flexibility: Supports diverse RL training workflows (PPO, GRPO, SAC, DAPO, etc.) while hiding distributed programming complexity.
- High Performance: Hybrid execution mode achieves up to 2.434x throughput compared to existing frameworks for embodied RL.
- Multiple Backend Integrations: FSDP + HuggingFace/SGLang/vLLM for rapid prototyping; Megatron + SGLang/vLLM for large-scale efficient training.
- Comprehensive Environment Support: Covers ManiSkill, LIBERO, RoboTwin, IsaacLab, CALVIN simulators, and Franka, XSquare Turtle2 real robots.
- Agentic RL: Supports SearchR1, rStar2 single-agent online RL, and WideSeek-R1 multi-agent RL.

## Use Cases

- Embodied AI robot RL training and fine-tuning, including VLA models (π₀, π₀.₅, OpenVLA, etc.) policy optimization.
- Real-world robot online RL training on hardware platforms like Franka and Turtle2.
- Agentic AI online reinforcement learning for search reasoning (SearchR1, rStar2) and multi-agent collaboration (WideSeek-R1).
- World model-based VLA post-training, such as WoVR and Wan world model-driven RL fine-tuning.

## Technical Highlights

- Macro-to-micro flow transformation architecture for efficient large-scale distributed RL training.
- Supports full-parameter SFT, LoRA SFT, VLM SFT, DAgger, HG-DAgger, and other training paradigms.
- FUSCO for accelerating MoE All-to-All communication and DSRL for diffusion policy steering.
- Comprehensive CI test coverage including unit tests and end-to-end RL training workflow tests.
- Installable via PyPI or quick deployment with provided Docker images.
