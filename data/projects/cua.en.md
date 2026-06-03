---
name: CUA
slug: cua
homepage: https://trycua.com
repo: https://github.com/trycua/cua
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Dev Tools
description: >-
  CUA provides an open-source infrastructure and toolchain for training and evaluating computer-use agents that operate
  full desktop environments (macOS, Linux, Windows).
author: TryCUA
ossDate: '2025-01-31T15:02:49.000Z'
featured: false
status: tracked
---
## Overview

CUA (Computer-Use Agents) is an open-source infrastructure designed to train, evaluate, and deploy agents capable of controlling desktop environments. The project includes sandboxes, an SDK, benchmarks, and tooling to reproduce agents' interactions with real applications and windows on macOS, Linux, and Windows, enabling researchers and engineers to perform experiments in a safe and reproducible environment.

## Key Features

- Provides reproducible sandbox environments and benchmark suites for assessing agent behavior and robustness on desktop tasks.
- Includes cross-platform SDKs and examples to reduce integration effort for running agents on real desktops.
- Supports containerized and virtualized deployments for easy scaling in CI/CD and experimental platforms.

## Use Cases

- Research and evaluation of operable desktop agents' interactive capabilities and safety testing.
- Validation of task automation, desktop application testing, or user-flow automation solutions in controlled environments.
- Building MLOps pipelines for desktop-operation agents to standardize training, evaluation, and deployment workflows.

## Technical Highlights

- Modular architecture with support for pluggable virtualization/sandbox backends and adapters.
- Emphasizes reproducible experiment workflows, with built-in benchmark metrics and logging to compare different agent policies.
- Compatible with mainstream containerization and virtualization tools to facilitate multi-platform performance and behavior testing.
