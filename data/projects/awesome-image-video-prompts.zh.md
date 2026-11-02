---
name: Awesome Image & Video Prompts
slug: awesome-image-video-prompts
homepage: https://agentcraft.dev/en/prompts/
repo: https://github.com/ai-boost/awesome-image-video-prompts
license: GPL-3.0
category: models-modalities
subCategory: image-video-generation
tags:
  - Prompts
  - Image Generation
  - Video Generation
  - Prompt Engineering
description: >-
  面向主流 AI 图像与视频模型（GPT Image、Nano Banana、Seedance、Kling、Veo、Wan、MiniMax）的开源提示词合集，超过 2,200
  条可复制即用的提示词，每条均原文引用自出处，并配以它实际生成的结果展示。另附用 ffmpeg 让智能体剪辑视频的配方，全部内容可在在线画廊中搜索筛选。
author: ai-boost
ossDate: '2023-11-09'
featured: false
status: tracked
---
## 详细介绍

Awesome Image & Video Prompts 是一个双语维护的提示词库，覆盖 Artificial Analysis 视频竞技场领先的图像与视频模型——Seedance、MiniMax H3、Kling、Veo、Wan、Gemini Omni、GPT Image、Nano Banana。每条提示词都原文引自模型官方指南、模型卡或创作者在 X 上附视频发布的原帖，并展示它实际生成的结果，标注出处与链接。项目自 2023 年起维护（前身为 Awesome-GPTs），现收录 952 条视频提示词与 1,277 条图像提示词，另有五条用 ffmpeg 让智能体剪辑视频的配方。

提示词按"想做什么"而非按模型分组，同一个"电影感短片"或"产品图"意图可以找到各模型下可用的提示词。agentcraft.dev 在线画廊支持按类别和标签搜索、筛选与复制。

## 主要特性

- **出处可验证的提示词**：每条均原文引用自模型官方指南或创作者原帖，标注模型与生成方式（文生视频、参考图生视频），附原帖链接、点赞数与日期
- **结果配对展示**：每条提示词旁展示其真实输出——GIF/JPG 动图预览可点击跳转到带声音的原始帖子
- **按意图组织**：视频提示词分为电影感、动作、科幻奇幻、动漫、广告、对话、音乐、vlog、自然、动物、特效等类；图像提示词分为海报、信息图、UI 样机、产品图、人像、角色、插画、漫画、照片转艺术、建筑、地图、拼贴、照片编辑等类
- **跨类别标签浏览**：统一标签体系（镜头运动、硬切、角色参考、蒙太奇等）支持跨类别检索
- **智能体视频剪辑配方**：五条用 ffmpeg 让智能体剪辑视频的配方，另含指南、技能与智能体 3D 工作流
- **双语可搜索**：英文与简体中文 README 及镜像内容页，agentcraft.dev 在线画廊支持搜索、筛选、复制

## 使用场景

- **提示词参考库**：为具体图像或视频任务找到经过验证、注明出处的提示词，无需从零编写
- **模型对比**：观察同一创作意图在 Seedance、Kling、Veo、Wan、MiniMax 等模型下的提示词写法差异
- **学习提示词结构**：研究官方指南与头部创作者如何组织分镜列表、时间块与镜头指令
- **智能体视频工作流**：参照 ffmpeg 配方让编程智能体自动化视频剪辑步骤

## 技术特点

- **内容即数据的组织方式**：提示词按类别存放于 `pages/en/` 与 `pages/zh/` 的 markdown 文件中，每条带锚点（`#model-slug`），供索引页、标签页与画廊深度链接
- **原文引用与署名模型**：提示词以引用文本形式存于可折叠块中，附结构化元数据——模型名、生成方式、来源 URL、点赞数与抓取日期——而非转述改写
- **预览资源管线**：`previews/` 中的动图与静帧预览为每条提示词配对真实输出，同时作为跳转原帖的缩略图
- **标签索引**：`pages/en/tags.md` 定义跨类别标签词表，每条提示词上的标签片均引用自该词表
- **历史延续**：项目定位转向图像与视频提示词后，原 Awesome-GPTs 列表保留于 `legacy/awesome-gpts.md`
- **持续维护机制**：README 中的日期式"最近新增"变更日志记录持续策展
