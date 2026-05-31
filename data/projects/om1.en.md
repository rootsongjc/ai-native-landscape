---
name: OM1
slug: om1
homepage: null
repo: https://github.com/openmind/om1
license: Unknown
category: inference-serving
subCategory: sandboxes-runtimes
tags:
  - AI Agent
description: OpenMind's modular AI runtime for deploying multimodal agents across digital environments and physical robots
logo: ''
author: OpenMind
ossDate: '2025-01-08T21:23:40.000Z'
featured: false
status: tracked
---

## Overview

OM1 is a modular AI runtime developed by OpenMind for creating and deploying multimodal agents on digital platforms and physical robots (Humanoids, TurtleBot, quadrupeds, etc.). It ingests diverse inputs—camera, LIDAR, web data—and can produce actions like navigation, manipulation, and conversational responses.

## Key Features

- Modular design with Python-first interfaces and plugin-based hardware adapters (ROS2, Zenoh, CycloneDDS).
- Multimodal input processing and action outputs for motion, navigation, and speech.
- WebSim for local web-based debugging and pre-configured endpoints for common VLMs and LLMs.

## Use Cases

- Research and education: platform for robotics and multimodal agent experiments.
- Prototyping and development: quickly build perception→decision→action pipelines for real robots.
- Simulation and debugging: run complex examples locally with containerized setups and WebSim visualization.

## Technical Highlights

- Implemented with Python and C++ components, supports Docker and recommended Jetson/ macOS setups.
- Rich set of examples, configuration templates, and hardware adapters for rapid integration.
- MIT licensed with active community contributions and published documentation at docs.openmind.org.
