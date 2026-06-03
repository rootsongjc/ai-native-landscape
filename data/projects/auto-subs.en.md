---
name: AutoSubs
slug: auto-subs
homepage: https://tom-moroney.com/auto-subs/
repo: https://github.com/tmoroney/auto-subs
license: MIT
category: models-modalities
subCategory: audio-speech
tags:
  - Application
  - Audio
  - Video
description: Generate accurate, editable subtitles locally or integrated with DaVinci Resolve.
author: Tom Moroney
ossDate: '2023-03-15T01:51:06Z'
featured: false
status: tracked
---
AutoSubs is an AI-powered desktop application for on-device subtitle generation that connects directly to DaVinci Resolve, Premiere, and After Effects. It offers multilingual transcription, speaker diarization, and a visual subtitle editor, all running locally without cloud dependency for maximum privacy.

## Transcription & Translation

- Fast, accurate multilingual speech-to-text with automatic language detection
- Speaker diarization that identifies and separates different speakers
- English translation with flexible multi-line subtitle display options
- Multiple speech recognition and diarization models to choose from

## Visual Subtitle Editor

- Per-speaker styling with customizable fonts, colors, and positioning
- Precise timing adjustments with waveform visualization
- Multiple export formats including SRT, ASS, VTT, and DaVinci Resolve native
- Batch processing for long-form content and multi-episode projects

## Video Editor Integration

- Direct connection to DaVinci Resolve for sending styled subtitles to timelines
- Premiere Pro and After Effects plugin support
- Round-trip workflows preserving subtitle styling and timing
- Real-time preview within the editing environment

## Technical Design

- Rust backend for high performance and low memory footprint
- Tauri/TypeScript cross-platform frontend for Windows, macOS (Intel and Apple Silicon), and Linux
- One-click installers with no Python or command-line setup required
- Fully on-device processing with no data sent to external servers
