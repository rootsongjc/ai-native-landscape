---
name: VibeVoice
slug: vibevoice
homepage: null
repo: https://github.com/microsoft/vibevoice
license: Unknown
category: models-modalities
subCategory: audio-speech
tags:
  - TTS
  - Utility
description: >-
  Explore VibeVoice, a cutting-edge TTS framework for long, expressive audio synthesis. Ideal for research, media
  prototyping, and academic evaluation.
logo: ''
author: Microsoft
ossDate: '2025-08-25T13:24:01.000Z'
featured: false
status: tracked
---

VibeVoice is a research-oriented long conversational TTS framework that can synthesize expressive, multi-speaker audio for extended durations (minutes to tens of minutes). It uses continuous speech tokenizers and a next-token diffusion approach to improve efficiency and fidelity for long-form synthesis. The repository's README notes that the project has been temporarily disabled to mitigate out-of-scope usage—please prioritize safety and compliance when experimenting.

## Key Features

- Long conversational synthesis: capable of generating up to ~90 minutes of multi-speaker audio while preserving speaker consistency and natural turn-taking.
- Continuous speech tokenizers: ultra-low frame-rate (7.5Hz) tokenizers designed for efficiency and audio fidelity.
- Demo examples and project page: includes example videos and demos showcasing multilingual and cross-lingual scenarios.

## Use Cases

- Research and development: study long-form TTS, dialogue modeling, and multi-speaker consistency.
- Media prototyping: research prototypes for podcasts or audio dramas (use with caution and disclosure).
- Academic evaluation: benchmark TTS performance on long-context and multi-speaker tasks.

## Technical Highlights

- LLM-driven dialogue understanding with a next-token diffusion head for acoustic detail.
- Efficiency optimizations for long sequences (caching and low-frame-rate tokenizers).
- Open research release with explicit risk guidance in the README (Deepfake/disinformation risks); recommended for research-only use with safeguards.
