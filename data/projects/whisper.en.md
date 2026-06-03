---
name: OpenAI Whisper
slug: whisper
homepage: null
repo: https://github.com/openai/whisper
license: MIT
category: models-modalities
subCategory: audio-speech
tags:
  - Speech Recognition
  - ASR
  - Audio
  - Multilingual
  - Transformer
description: Robust speech recognition via large-scale weak supervision, supporting transcription and translation across 100+ languages with state-of-the-art accuracy.
logo: ''
author: OpenAI
ossDate: '2022-09-16'
featured: true
thumbnail: ''
source: ''
status: tracked
---

## Overview

OpenAI Whisper is a general-purpose speech recognition model trained on 680,000 hours of multilingual data. It approaches human-level robustness and accuracy in English speech recognition, and supports transcription and translation across over 100 languages. Whisper has become the industry standard for open-source speech-to-text.

## Key Features

- Multilingual speech recognition supporting 100+ languages
- Simultaneous transcription and translation capabilities
- Five model sizes ranging from tiny (39M) to large (1.5B) parameters
- Robust to accents, background noise, and technical language
- Built-in timestamping and language detection

## Use Cases

- Transcribing meetings, lectures, and podcasts
- Building voice-enabled AI applications and agents
- Creating subtitles and captions for video content
- Multi-language content localization and translation

## Technical Details

- Encoder-decoder Transformer architecture trained on 680K hours of audio
- Trained using weak supervision on diverse internet audio data
- Available in five sizes: tiny, base, small, medium, large
- Serves as foundation for numerous downstream projects (whisper.cpp, faster-whisper, etc.)
