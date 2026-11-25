---
name: Runpod Python SDK
slug: runpod-python
homepage: https://www.runpod.io
repo: https://github.com/runpod/runpod-python
license: MIT
category: platform-infra
subCategory: gpu-cloud-marketplaces
tags:
  - GPU Cloud
  - Serverless
  - SDK
description: 'The open-source Python library for the Runpod GPU cloud, covering the platform API and the serverless worker SDK.'
author: Runpod
ossDate: '2022-12-09T21:35:48.000Z'
status: tracked
---

## Overview

runpod-python is the official Python SDK for Runpod, a GPU cloud offering on-demand pods and serverless GPU endpoints. It wraps the Runpod API for managing pods and endpoints and provides the worker SDK used to implement serverless handlers. The cloud service itself is commercial; this repository is its open-source SDK.

## Key Features

- API client for creating and managing GPU pods and endpoints
- Serverless worker SDK with handler-based job processing
- Synchronous and asynchronous endpoint invocation
- Local testing support for serverless workers

## Use Cases

- Packaging a model as a serverless GPU endpoint
- Automating GPU pod lifecycle from Python

## Technical Details

- Python package published on PyPI as `runpod`
- MIT-licensed SDK; the Runpod platform is proprietary
