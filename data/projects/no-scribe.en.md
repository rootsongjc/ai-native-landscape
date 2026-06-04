---
name: noScribe
slug: no-scribe
homepage: null
repo: https://github.com/kaixxx/noscribe
license: GPL-3.0
category: models-modalities
subCategory: audio-speech
tags:
  - Dev Tools
  - Utility
description: >-
  A local-first audio transcription and editing tool for qualitative research and journalism, built on Whisper and
  Pyannote.
author: Kai Dröge
ossDate: '2023-05-12T06:25:03.000Z'
featured: false
status: tracked
---

## Overview

noScribe is a local-first audio transcription and editing application for qualitative researchers and journalists. It leverages Whisper/faster-whisper and Pyannote to provide speaker separation and a visual editor for manual correction and export in multiple formats.

## Key Features

- Local processing with no cloud upload to preserve privacy;
- Multilingual recognition and speaker diarization with a dedicated noScribe Editor for fast corrections;
- Packaging and deployment options including native installers, Docker, and helm charts.

## Use Cases

- Transcribing and reviewing interviews for qualitative analysis;
- Journalists and researchers preparing transcripts and time-coded annotations;
- Offline transcription in privacy-sensitive or network-limited environments.

## Technical Highlights

- Built on Whisper ecosystem (faster-whisper) and Pyannote for diarization, with support for GPU acceleration and local model management;
- Modular architecture supporting custom models and scripted exports;
- Comprehensive README and documentation with model download and installation instructions.
