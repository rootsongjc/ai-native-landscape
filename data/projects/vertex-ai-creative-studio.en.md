---
name: GenMedia Creative Studio
slug: vertex-ai-creative-studio
homepage: https://cloud.google.com/vertex-ai
repo: https://github.com/googlecloudplatform/vertex-ai-creative-studio
license: Apache-2.0
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
author: Google Cloud
ossDate: '2024-08-15T20:28:49Z'
featured: false
status: tracked
---

GenMedia Creative Studio is an open-source demo application built on Google Vertex AI that brings together the platform's multimodal generative models into interactive creative workflows. It integrates Imagen for image generation, Veo for video, Lyria for audio, and Chirp or Gemini TTS for text-to-speech, providing a unified interface for experimentation. The project serves as both a hands-on creative tool and a reference architecture for building production generative-media applications on GCP.

## Multimodal Generation

- Image generation powered by Imagen with prompt engineering and style controls
- Video generation using Veo for motion and scene composition
- Audio generation and music creation through Lyria
- Text-to-speech synthesis with Chirp and Gemini TTS models

## Creative Tools and Experiments

- Promptlandia for interactive prompt engineering exploration
- Virtual try-on and character-consistency utilities for visual workflows
- Compound creative workflows that combine multiple output modalities
- Unified interface for rapid iteration and experimentation across modalities

## Deployment and Architecture

- Built with Mesop for the frontend UI and FastAPI for backend services
- Production-ready deployment samples using Terraform, Cloud Build, and Cloud Run
- Canonical patterns for authenticating against and calling Vertex AI model endpoints
- Apache-2.0 licensed with code structured for readability and community contributions
