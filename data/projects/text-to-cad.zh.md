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
description: 面向 CAD、机器人和硬件设计的智能体技能集合，让 AI 智能体用自然语言直接生成可制造的零件、3D 模型与机器人描述文件。
author: earthtojake
ossDate: '2026-04-22T01:09:45Z'
featured: false
status: tracked
---

## 简介

Text-to-CAD 是一套开源智能体技能集合，赋予 AI 编码智能体设计实体硬件的能力。由 Jake（earthtojake）构建，将自然语言指令与参数化 CAD 内核及机器人模型格式打通，使智能体能够端到端地产出可制造的几何体和经过校验的机器人描述文件。

## 主要特性

- 基于 build123d 与 OpenCascade 内核，输出 STEP、STL、3MF、DXF、GLB 等格式的 CAD 几何体
- 生成 URDF、SDF、SRDF 等机器人描述文件，覆盖机械装配与机器人模型
- 以可组合的智能体技能形式提供，可直接接入现有 AI 编码工作流
- 面向机械工程、机器人与硬件设计场景，单条提示即可驱动

## 使用场景

- 将文本规格转化为参数化、可制造的机械零件
- 生成带有效 URDF/SDF 描述的机器人与装配模型
- 在 AI 辅助开发流程中快速原型化硬件设计

## 技术特点

- 基于 build123d 参数化 CAD 库与 OpenCascade 几何内核
- 输出覆盖制造格式（STEP/STL/3MF/DXF）、Web 格式（GLB）以及机器人格式（URDF/SDF/SRDF）
- 以智能体技能形式分发，契合现代 AI 编码智能体使用的 SKILL.md 能力模块规范
