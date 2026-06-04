---
name: MockingBird
slug: mockingbird
homepage: null
repo: https://github.com/babysor/mockingbird
license: MIT
category: models-modalities
subCategory: audio-speech
tags:
  - Application
  - Audio
  - TTS
description: >-
  An open-source voice cloning and real-time speech generation toolkit that can clone a speaker from a short sample and
  synthesize arbitrary speech.
author: babysor
ossDate: '2021-08-07T03:53:39Z'
featured: false
status: tracked
---

MockingBird is an open-source voice cloning and real-time speech synthesis toolkit that can replicate a target speaker's voice from as little as five seconds of audio. Built in PyTorch with a modular encoder-synthesizer-vocoder pipeline, it provides preprocessing, training, and inference components alongside a demo toolbox and optional web server.

## Fast Voice Cloning

- Builds a speaker embedding from short audio clips and generates synthetic speech with similar timbre and prosody in near real-time
- Pretrained encoders and vocoders can be reused while training only the synthesizer, significantly reducing time to results
- Community-shared pretrained models with side-by-side quality comparisons help users choose the best configuration

## Cross-Platform and Tooling

- Cross-platform support covers Windows and Linux with tested GPU configurations including Tesla T4 and GTX series
- Documented workarounds for Apple M1 hardware lower the barrier for macOS users
- Comprehensive tooling includes training scripts, an interactive demo toolbox, and a web server interface for rapid experimentation

## Modular Architecture

- PyTorch codebase cleanly separated into encoder, synthesizer, and vocoder modules that can be independently replaced or extended
- Detailed platform-specific setup guides, extensive README documentation, and a community wiki support newcomers
- Ideal for researchers validating speaker modeling methods, product teams prototyping speech-enabled applications, and educators teaching TTS pipelines
