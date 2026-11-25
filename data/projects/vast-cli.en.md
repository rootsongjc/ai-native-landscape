---
name: Vast.ai CLI
slug: vast-cli
homepage: https://vast.ai
repo: https://github.com/vast-ai/vast-cli
license: MIT
category: platform-infra
subCategory: gpu-cloud-marketplaces
tags:
  - GPU Marketplace
  - GPU Rental
  - CLI
description: 'The open-source Python CLI and API client for Vast.ai, a GPU rental marketplace matching hosts with on-demand and interruptible renters.'
author: Vast.ai
ossDate: '2019-01-29T00:44:09.000Z'
status: tracked
---

## Overview

vast-cli is the official command-line and Python client for the Vast.ai GPU marketplace. It lets renters search offers, launch and manage instances, and lets hosts list machines and set pricing. The marketplace service itself is commercial; this repository is its open-source client.

## Key Features

- Search marketplace offers with a query language over GPU model, VRAM, price, and reliability
- Create, manage, and destroy on-demand or interruptible (bid) instances
- Host-side commands for listing machines and setting prices
- Scriptable JSON output for automation

## Use Cases

- Automating GPU rental from scripts or CI
- Managing hosted machines on the marketplace

## Technical Details

- Python client over the Vast.ai REST API
- MIT-licensed client; the marketplace backend is proprietary
