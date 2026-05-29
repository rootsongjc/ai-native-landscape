---
name: GenMedia Creative Studio
slug: vertex-ai-creative-studio
homepage: https://cloud.google.com/vertex-ai
repo: https://github.com/googlecloudplatform/vertex-ai-creative-studio
license: Unknown
category: models-modalities
subCategory: audio-speech
tags:
  - Application
  - Audio
  - Image Generation
  - Multimodal
  - TTS
  - Video
description: >-
  GenMedia Creative Studio is a demo web application built on Vertex AI showcasing image, video, audio, and
  text-to-speech generation capabilities.
logo: ''
author: Google Cloud
ossDate: '2024-08-15T20:28:49Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Detailed Introduction

GenMedia Creative Studio is a demo application built on Vertex AI that assembles multimodal generative capabilities into interactive creative workflows. It showcases image (Imagen), video (Veo), audio (Lyria), and text-to-speech (Chirp / Gemini TTS) integrations, and provides example workflows and interfaces for experimentation and extension.

## Main Features

- Multimodal generation: integrates image, video, audio and text-to-speech generation for compound creative scenarios.
- Deployable examples: includes Terraform, Cloud Build and Cloud Run deployment samples to reproduce the demo on GCP.
- Experiments collection: provides experimental tools (e.g., Promptlandia, virtual try-on, character consistency) for prompt optimization and workflow composition.

## Use Cases

- Creative exploration: a rapid prototyping and inspiration platform for designers and content creators.
- Teaching and demos: a reference example to demonstrate Vertex AI's multimodal capabilities for training or presentations.
- Custom workflows: a starting point for building production creative pipelines by extending the provided examples.

## Technical Characteristics

- Open source: the code is Apache-2.0 licensed and intended for reading and extension.
- Mesop & FastAPI: combines Mesop for UI patterns with FastAPI for backend services to simplify development and debugging.
- Vertex AI integration: demonstrates common patterns for integrating Vertex AI models, endpoints, and authentication.
