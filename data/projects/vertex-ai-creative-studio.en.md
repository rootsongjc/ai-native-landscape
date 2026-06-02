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
status: tracked
---

## Overview

GenMedia Creative Studio is an open-source demo application built on Google Vertex AI that brings together the platform's multimodal generative models into interactive creative workflows. It integrates Imagen for image generation, Veo for video, Lyria for audio, and Chirp or Gemini TTS for text-to-speech, providing a unified interface for experimentation. The project serves as both a hands-on creative tool and a reference architecture for building production generative-media applications on GCP.

## Key Features

Multimodal generation capabilities span image, video, audio, and text-to-speech within a single application, enabling compound creative workflows that combine multiple output modalities. Production-ready deployment samples using Terraform, Cloud Build, and Cloud Run allow teams to reproduce the demo in their own GCP environment with minimal effort. A collection of experimental tools such as Promptlandia, virtual try-on, and character-consistency utilities supports prompt engineering and workflow composition research.

## Use Cases

Designers and content creators can use the studio as a rapid prototyping platform for generating and iterating on multimodal content. Teams conducting training or technical demonstrations can leverage it as a ready-made reference for Vertex AI's generative media capabilities. Developers building custom creative pipelines can extend the provided examples as a production starting point.

## Technical Details

The application is Apache-2.0 licensed and built with Mesop for the frontend UI and FastAPI for backend services, keeping the architecture approachable and easy to debug. It demonstrates canonical patterns for authenticating against and calling Vertex AI model endpoints, making it a practical reference for GCP integrations. The codebase is structured for readability and extensibility to encourage community contributions.
