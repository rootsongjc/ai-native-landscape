---
name: Deep-Live-Cam
slug: deep-live-cam
homepage: https://deeplivecam.net/
repo: https://github.com/hacksider/deep-live-cam
license: AGPL-3.0
category: models-modalities
subCategory: image-video-generation
tags:
  - Multimodal
  - Video
description: Deep-Live-Cam is an open-source real-time face swap and avatar tool that runs offline for creators and streamers.
author: hacksider
ossDate: '2023-09-24T13:19:31Z'
featured: false
status: tracked
---
Deep-Live-Cam is an open-source AI-powered video manipulation tool that provides real-time face swap and one-click video deepfake using only a single image. It emphasizes offline, local execution, enabling creators and streamers to replace webcam feeds with virtual personas without uploading video to cloud services.

## Real-Time Face Replacement

- Low-latency face replacement and expression-driven control on live webcam streams
- Quick swap from a single reference image without lengthy model training
- Temporal consistency modules that maintain stable output across video frames
- Support for loading and training custom face models for specific personas

## Privacy and Offline Design

- Privacy-first architecture enabling full offline usage without any cloud dependency
- All processing runs locally on consumer GPUs, no video data leaves the machine
- No account registration or internet connection required for core functionality
- Suitable for sensitive environments where video cannot be uploaded externally

## Use Cases

- VTubers, streamers, and short-form video creators for live avatars and real-time face effects
- Film post-production for rapid face replacement previews before final rendering
- Privacy-preserving streaming to mask real identity during live broadcasts
- Offline research on synthesis and tracking algorithms without cloud infrastructure

## Technical Implementation

- Built on modern GAN-based generators and temporal tracking modules balancing visual quality with stability
- Model conversion, quantization, and optimization tools to adapt to different hardware capabilities
- Quickstart guides, pre-trained models, and an active community with third-party integration examples
