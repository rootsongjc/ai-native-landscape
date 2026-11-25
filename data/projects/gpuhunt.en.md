---
name: gpuhunt
slug: gpuhunt
homepage: https://pypi.org/project/gpuhunt/
repo: https://github.com/dstackai/gpuhunt
license: MPL-2.0
category: platform-infra
subCategory: gpu-cloud-marketplaces
tags:
  - GPU Marketplace
  - GPU Cloud
  - Python
description: 'A Python library and catalog that aggregates GPU instance prices, regions, and specs across cloud providers and GPU marketplaces.'
author: dstack
ossDate: '2023-08-23T06:53:10.000Z'
status: tracked
---

## Overview

gpuhunt provides programmatic access to GPU pricing data from major clouds and GPU-focused providers. Its catalog covers prices, locations, CPU, RAM, GPU models, and spot (interruptible) offers, and is the pricing backend used by dstack.

## Key Features

- Unified query API with filters for GPU vendor, model, VRAM, price, and spot availability
- Covers hyperscalers as well as GPU clouds and marketplaces
- Mix of a prebuilt offline catalog and online provider queries
- Usable as a standalone library independent of dstack

## Use Cases

- Comparing GPU prices across providers before provisioning
- Building cost-aware provisioning or brokering logic

## Technical Details

- Python package published on PyPI
- Per-provider collectors normalize offers into one catalog schema
