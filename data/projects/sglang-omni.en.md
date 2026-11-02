---
name: sglang-omni
slug: sglang-omni
homepage: https://sgl-project.github.io/sglang-omni/
repo: https://github.com/sgl-project/sglang-omni
license: Apache-2.0
category: inference-serving
subCategory: model-serving
tags:
  - Speech
  - Multimodal
  - Model Serving
  - Realtime
description: >-
  A multi-stage serving runtime for omni, speech, and TTS models from the SGLang project, designed for
  multi-stage decoding across heterogeneous stages and exposed through OpenAI-compatible endpoints.
author: sgl-project
ossDate: '2026-01-07'
featured: false
status: tracked
---

## Overview

SGLang-Omni is a multi-stage serving runtime for omni, speech, and TTS models from the SGLang project. Its design target is multi-stage decoding: generation split across heterogeneous stages with different compute patterns, dependency structures, and resource needs. SGLang-Omni owns the pipeline topology, stage lifecycle, inter-stage transport, model-family integration layer, and OpenAI-compatible serving surface, while composing with SGLang for high-performance autoregressive scheduling and model execution where applicable.

## Key Features

- Multi-stage runtime that models generation as coordinated stages: preprocessing, encoders, autoregressive engines, talkers, decoders, vocoders, and aggregators
- Stage-specialized scheduling, from SGLang-backed autoregressive engines to lightweight preprocessing and streaming vocoder loops
- OpenAI-compatible API surface: multimodal chat, speech generation, batch speech, streaming speech, uploaded voices, and transcription
- Serves omni chat (Qwen3-Omni, MiniCPM-o 4.5, Ming-Omni), native full-duplex conversation over `/v1/realtime`, cascaded ASR-LLM-TTS voice assistants, TTS (Higgs Audio v3, MOSS-TTS, Fish Audio Drama 3, Qwen3-TTS), music generation (MiniMax Music 3), ASR, speaker diarization, and speech translation
- Day-0 support cadence for new speech and audio models; the Voxt Mac voice-input tool integrates it for local speech recognition

## Use Cases

- Serving native full-duplex voice agents with live listening, speaking, and interruption
- Composing cascaded ASR, LLM, and TTS services into streaming, turn-based conversations with VAD, history, and turn taking
- Running one runtime for an organization's speech recognition, text-to-speech, music, and omni-model workloads

## Technical Details

- Pipeline topology, stage lifecycle, inter-stage transport, model-family integration, and the serving API are owned by SGLang-Omni; autoregressive stages compose with SGLang's scheduler and execution engine
- A control plane coordinates requests while a relay data plane moves tensor payloads across shared-memory, NCCL, NIXL, and Mooncake backends
- NVIDIA CUDA is the default backend with full model coverage; Apple Silicon (Torch MPS) and Intel XPU (PyTorch XPU) are experimental with model-specific end-to-end support
- Endpoints include `/v1/audio/speech` (batch, streaming, uploaded voices), `/v1/audio/transcriptions` (with speaker labels and timestamps via `response_format=verbose_json` for MOSS-TD), and `/v1/realtime` for full-duplex conversation; installable from PyPI as `sglang-omni`
