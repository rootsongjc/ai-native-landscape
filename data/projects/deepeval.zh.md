---
name: DeepEval
slug: deepeval
homepage: null
repo: https://github.com/confident-ai/deepeval
license: Apache-2.0
category: training-optimization
subCategory: evaluation-benchmarks
tags:
  - Evaluation
description: DeepEval：模型评测与基准工具（占位），请补充测试用例与说明。
author: confident-ai
ossDate: '2023-08-10T05:35:04.000Z'
featured: false
status: tracked
---
DeepEval 是一个面向 LLM 的开源评测框架，提供丰富的评测指标、基准与组件级评估功能，方便在本地或 CI 中对 RAG、对话和 Agent 应用进行自动化测试。DeepEval 同时支持与 Confident AI 平台联动以生成共享报告与可视化结果。

## 主要特性

- 丰富的评测指标：包含 G-Eval、RAG 相关指标（Answer Relevancy、Faithfulness、RAGAS 等）、Agent 指标与若干统计/对话指标。
- 灵活的评测方式：支持端到端与组件级评测，可通过装饰器追踪组件调用并对组件输出打分。
- 可扩展性强：支持自定义指标、合成数据生成、与 CI/CD 集成和多种外部框架（如 LlamaIndex、Hugging Face）。

## 使用场景

- 在 CI 中对 LLM 应用做回归测试与基准对比。
- 验证 RAG 管道的上下文检索质量与答案可信度。
- 对 Agent 或工具链进行任务完成度和工具调用正确性评估。

## 技术特点

- Python 实现（要求 Python>=3.9），可通过 pip 安装并在本地运行。
- 提供与主流库（LangChain、LlamaIndex、Hugging Face）的集成示例与扩展点。
- 支持本地 NLP 模型与云端 LLM 的混合评测，且可输出机器可读的测试结果以便统计分析。
