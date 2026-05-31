---
name: OpenMAIC
slug: openmaic
homepage: null
repo: https://github.com/thu-maic/openmaic
license: Unknown
category: agents
subCategory: agent-orchestration
tags:
  - Agents
  - Application
  - Framework
description: >-
  OpenMAIC 是一个开源 AI 平台,通过多智能体编排将任何主题或文档转变为丰富的交互式课堂体验。该平台支持一键生成课程、AI
  教师和同学实时互动、丰富的场景类型(幻灯片、测验、交互式模拟和项目式学习),并支持白板绘图和语音讲解,可导出为 PPTX 或 HTML 格式。
logo: ''
author: THU-MAIC (清华大学)
ossDate: '2025-03-16'
featured: false
status: tracked
---

## 详细介绍

OpenMAIC (Open Multi-Agent Interactive Classroom) 是由清华大学 MAIC 团队开发的开源 AI 教育平台。该平台基于多智能体编排技术,能够将任何主题或文档转变为沉浸式的交互式课堂体验。系统通过 AI 教师和 AI 同学的协作,实现幻灯片讲解、实时讨论、互动测验、模拟实验和项目式学习等多种教学场景。

核心技术架构采用 Next.js + React + TypeScript 构建,使用 LangGraph 实现多智能体状态机编排,支持 OpenAI、Anthropic、Google Gemini、DeepSeek 等多种 LLM 提供商。平台已发表 JCST 2026 论文《From MOOC to MAIC: Reimagine Online Teaching and Learning through LLM-driven Agents》。

## 主要特性

- **一键课程生成**：描述学习主题或上传参考材料，AI 自动构建完整课程大纲和场景内容
- **多智能体课堂**：AI 教师和同学进行实时讲授、讨论和互动，支持圆桌辩论和问答模式
- **丰富场景类型**：
  - 幻灯片讲解：语音旁白、聚光灯效果和激光笔动画
  - 互动测验：单选、多选、简答题，实时 AI 评分和反馈
  - 交互式模拟：基于 HTML 的物理模拟器、流程图等可视化实验
  - 项目式学习 (PBL)：角色扮演，与 AI 智能体协作完成结构化项目
- **白板与语音**：智能体在共享白板上实时绘制图表、公式和概念图，支持文本转语音 (TTS) 和语音识别
- **导出功能**：可导出为可编辑的 PowerPoint (.pptx) 或独立的交互式 HTML 页面
- **OpenClaw 集成**：支持从飞书、Slack、Telegram 等 20+ 消息应用直接生成课堂

## 使用场景

- **在线教育**：为教师和学生提供智能化的在线教学工具，自动生成课程内容和互动环节
- **自主学习**：学习者可以根据自己的兴趣和需求，快速生成个性化学习内容
- **企业培训**：将企业文档和培训材料转化为交互式培训课程
- **知识分享**：将论文、报告等文档转化为易于理解的互动式讲解
- **教学研究**：探索 LLM 驱动的智能体在教育场景中的应用

## 技术特点

- **两阶段生成流程**：大纲生成 → 场景内容生成，确保课程结构化和内容质量
- **LangGraph 编排**：状态机管理智能体轮次和讨论流程，支持 28+ 动作类型
- **播放引擎**：状态机驱动课堂播放和实时交互 (idle → playing → live)
- **多模态输出**：支持语音、白板绘图、聚光灯、激光笔等多种表现形式
- **可扩展架构**：基于 Next.js App Router，模块化设计，易于扩展和定制
- **国际化支持**：界面支持中文和英文
- **部署灵活**：支持 Vercel 一键部署或 Docker 容器化部署
- **高级文档解析**：可选集成 MinerU 提供复杂表格、公式和 OCR 解析
- **许可证**：AGPL-3.0，商业许可请联系 thu_maic@tsinghua.edu.cn
