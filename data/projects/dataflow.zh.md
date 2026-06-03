---
name: DataFlow
slug: dataflow
homepage: https://opendcai.github.io/DataFlow-Doc/
repo: https://github.com/opendcai/dataflow
license: Apache-2.0
category: platform-infra
subCategory: data-platforms
tags:
  - Data
  - Dev Tools
description: 面向领域化训练与检索增强生成的高质量数据准备与流水线平台。
author: OpenDCAI
ossDate: '2024-10-13T14:45:45Z'
featured: false
status: tracked
---
DataFlow 是一个开源的数据准备平台，利用最新的基于 LLM 的操作符和流水线进行 AI 数据工程。它能将 PDF、文本和低质量 QA 等噪声数据源转化为适合预训练、监督微调和 RAG 工作流的高质量数据集。

## 模块化操作符

- 操作符结合规则方法、深度模型和大语言模型，构建多样化的数据处理单元
- 文本处理操作符覆盖清洗、去重、规范化和格式抽取
- 生成校验操作符，根据质量标准验证 LLM 产出的内容
- 可扩展的操作符框架，支持添加自定义数据处理逻辑

## 流水线编排

- 可复用的流水线定义，覆盖从数据抽取到质量评估的全生命周期
- 多维度评分与过滤机制，提升下游模型效果
- 支持 GPU 加速处理和大规模流水线的分布式执行
- 与 vLLM 和 Hugging Face 数据集生态的集成接口

## 使用场景

- 医疗、金融、法律等领域专业数据的清洗与标注
- 从原始企业文档和网页抓取构建 SFT 和微调数据集
- 为 RAG 系统构建高质量知识库条目，自动质量评分
- 将自动化数据管道嵌入到现有 MLOps 工作流中

## 部署

- 以 Python 为主实现，支持 Docker 部署以确保环境可复现
- GPU 加速支持，提升基于 LLM 操作符的吞吐量
- 采用 Apache-2.0 许可证，社区活跃贡献新操作符和流水线模板
