---
name: Handy
slug: handy
homepage: https://handy.computer/
repo: https://github.com/cjpais/handy
license: Unknown
category: models-modalities
subCategory: audio-speech
tags:
  - Utility
description: >-
  A free, open-source, extensible offline speech-to-text desktop application that runs Whisper and Parakeet models
  locally.
logo: ''
author: cjpais
ossDate: '2025-02-13T02:42:29.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

## Introduction

Handy is an open-source, cross-platform desktop app for offline speech-to-text. It runs Whisper and Parakeet models locally, focusing on privacy, ease of use, and extensibility across macOS, Windows, and Linux.

## Key features

- Local transcription with Whisper (various model sizes) and Parakeet V3, enabling offline usage without cloud services.
- Cross-platform desktop app built with Tauri (Rust backend + React frontend), offering shortcut-triggered recording, VAD, and clipboard paste.
- Clear build instructions and community contributions make it easy to extend and customize.

## Use cases

- Offline privacy-focused transcription (meeting notes, quick text input).
- Environments where cloud services are restricted or unavailable.
- A developer-friendly base for building local speech tooling.

## Technical highlights

- Tauri-based architecture with Rust for system integration and React/TypeScript for the settings UI.
- Uses whisper-rs and transcription-rs for local inference, with GPU acceleration where supported.
- MIT licensed with releases and installation guides in the repository.
