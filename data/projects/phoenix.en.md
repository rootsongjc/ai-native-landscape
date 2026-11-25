---
name: Phoenix
slug: phoenix
homepage: https://arize.com/docs/phoenix
repo: https://github.com/Arize-ai/phoenix
license: Elastic-2.0
category: training-optimization
subCategory: observability-monitoring
tags:
  - Observability
  - Tracing
  - Evaluation
  - OpenTelemetry
  - LLMOps
description: >-
  Phoenix is Arize AI's observability and evaluation platform for LLM applications and agents, covering
  OpenTelemetry-based tracing, evals, datasets and experiments, and prompt management.
author: Arize AI
ossDate: '2022-11-09T23:44:35Z'
status: tracked
---

## Overview

Phoenix, built by Arize AI, is an observability and evaluation platform for LLM applications and agents. It collects traces over OpenTelemetry, lets you run evaluations against them, and keeps datasets, experiments, and prompts in one place so a change to an application can be measured rather than guessed at. It runs on a laptop, in a notebook, in a container, or as a hosted service.

## Key Features

- Tracing built on OpenTelemetry and the OpenInference conventions, with auto-instrumentation for common frameworks and model providers
- Evaluation with LLM-based and code-based evaluators for retrieval relevance, answer quality, and other criteria
- Datasets and experiments: versioned example sets for comparing prompts, models, and retrieval settings side by side
- Prompt playground and prompt management, including versioning and replaying traced calls with modified prompts
- Self-hosted deployment through pip, Docker, or Kubernetes

## Use Cases

- Debugging agent and RAG pipelines by inspecting each span of a request
- Regression testing a prompt or model change against a fixed dataset before release
- Tracking latency, token usage, and evaluation scores of an application in production

## Technical Highlights

- Vendor-neutral instrumentation: traces are standard OTLP, so they can be sent to other backends as well
- Python and TypeScript clients
- Source-available under the Elastic License 2.0, which is not an OSI-approved open-source license
