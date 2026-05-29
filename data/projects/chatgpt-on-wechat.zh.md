---
name: ChatGPT on WeChat
slug: chatgpt-on-wechat
homepage: null
repo: https://github.com/zhayujie/chatgpt-on-wechat
license: Unknown
category: applications-products
subCategory: chat-interfaces
tags:
  - Chatbot
  - Tool
description: 将 ChatGPT 集成到微信的开源项目，提供在微信环境中与大语言模型交互的能力。
logo: ''
author: zhayujie
ossDate: '2022-08-07T08:33:41.000Z'
featured: false
thumbnail: ''
source: ''
status: tracked
---

ChatGPT on WeChat 是一个开源项目，旨在把 ChatGPT 的对话能力带入微信平台，让用户在熟悉的聊天环境中调用大语言模型完成问答、写作辅助与自动化交互。项目通过微信公众平台或个人号的消息接口与后端代理服务对接，适合想在微信生态内构建智能助手与自动化工具的开发者与产品团队。

## 主要特性

- 支持在微信消息中调用大语言模型进行多轮对话
- 提供后端代理与消息转发逻辑，易于二次部署和定制
- 开源实现，便于审计与自托管

## 使用场景

- 企业在微信中构建客服与自动回复机器人
- 个人/团队在微信群中集成智能问答与知识库查询
- 将对话式 AI 嵌入业务流程实现自动化助手

## 技术特点

- 使用 GitHub 开源仓库作为代码源，便于社区贡献与自托管部署
- 采用轻量代理层连接微信消息接口与 LLM 提供方，支持多种模型接入
- 配置与扩展点清晰，适合用于 PoC 到生产化的快速迭代
