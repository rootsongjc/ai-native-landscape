---
name: Aider
slug: aider
homepage: https://aider.chat/
repo: https://github.com/aider-ai/aider
license: Unknown
category: coding-devtools
subCategory: coding-agents
tags:
  - Vibe Coding
description: 基于终端的 AI 结对程序员，通过自然语言命令帮助你编写、编辑和管理代码，支持 Git 集成和多种大语言模型。
logo: ''
author: Aider
ossDate: '2023-05-09T18:57:49.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

Aider 是一款强大的终端 AI 结对编程工具，支持多种主流大语言模型，包括 Claude 3.7 Sonnet、DeepSeek R1 & Chat V3、OpenAI o1、o3-mini 和 GPT-4o 等，同时也可以连接本地模型。它能够智能地映射和理解你的整个代码库，支持超过 100 种编程语言，包括 Python、JavaScript、Rust、Ruby、Go、C++、PHP、HTML、CSS 等。

Aider 的一大特色是无缝的 Git 集成，它会自动提交更改并生成合理的提交信息。你可以在喜欢的 IDE 或编辑器中使用 Aider，只需在代码中添加注释即可请求更改。此外，它还支持图片和网页的上下文理解，以及语音转代码功能，让你可以通过语音请求新功能、测试用例或修复 bug。

Aider 还提供了代码质量保障功能，每次修改后都会自动进行代码检查和测试，并能修复检测到的问题。对于那些喜欢使用网页界面的开发者，Aider 也提供了便捷的复制粘贴功能，方便在浏览器中与 LLM 交互。

快速开始使用：

```bash
# 安装
python -m pip install aider-install
aider-install

# 进入项目目录
cd /to/your/project

# 选择模型并配置
aider --model deepseek --api-key deepseek=<key>  # DeepSeek
aider --model sonnet --api-key anthropic=<key>   # Claude 3.7 Sonnet
aider --model o3-mini --api-key openai=<key>     # o3-mini
```

更多详细信息请参考官方文档，包括安装指南、使用教程、视频教程、LLM 连接配置、故障排除等。社区资源丰富，包括 LLM 排行榜、GitHub 仓库、Discord 社区、发布说明和博客等。
