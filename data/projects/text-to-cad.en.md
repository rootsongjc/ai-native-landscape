---
name: Text-to-CAD
slug: text-to-cad
homepage: https://www.cadskills.xyz
repo: https://github.com/earthtojake/text-to-cad
license: MIT
category: agents
subCategory: agent-frameworks
tags:
  - Agent Framework
  - Agents
  - CAD
  - Robotics
description: A collection of agent skills for CAD, robotics, and hardware design that let AI agents generate production-ready mechanical parts, 3D models, and robot descriptions from natural language.
author: earthtojake
ossDate: '2026-04-22T01:09:45Z'
featured: false
status: tracked
---

## Overview

Text-to-CAD is an open-source collection of agent skills that give AI coding agents the ability to design physical hardware. Built by Jake (earthtojake), the skills bridge natural-language prompts with parametric CAD kernels and robotics model formats, so an agent can produce manufacturable geometry and validated robot descriptions end to end.

## Key Features

- Generates CAD geometry in formats such as STEP, STL, 3MF, DXF, and GLB using the build123d and OpenCascade kernels
- Produces robotics description files including URDF, SDF, SRDF for mechanical assemblies and robot models
- Structured as composable agent skills that plug into existing AI coding workflows
- Targets mechanical engineering, robotics, and hardware design use cases from a single prompt

## Use Cases

- Turning a text spec into a parametric, manufacturable mechanical part
- Generating robot and assembly models with valid URDF/SDF descriptions
- Prototyping hardware designs inside an AI-assisted development loop

## Technical Details

- Built on the build123d parametric CAD library and OpenCascade geometry kernel
- Outputs span manufacturing formats (STEP/STL/3MF/DXF) and web formats (GLB) alongside robotics formats (URDF/SDF/SRDF)
- Distributed as agent skills, matching the SKILL.md capability module pattern used by modern AI coding agents
