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
description: Deep-Live-Cam 是一个开源的实时面部替换与虚拟形象（avatar）工具，支持离线运行并面向内容创作者与流媒体使用场景。
author: hacksider
ossDate: '2023-09-24T13:19:31Z'
featured: false
status: tracked
---
Deep-Live-Cam 是一个开源的 AI 驱动视频处理工具，仅需单张图片即可实现实时换脸和一键视频深度伪造。它强调离线和本地化运行，让创作者和主播无需将视频上传到云端即可用虚拟形象替换摄像头画面。

## 实时换脸能力

- 在实时摄像头流上提供低延迟的人脸替换和表情驱动控制
- 仅需单张参考图片即可快速生成替换效果，无需长时间模型训练
- 时序一致性模块，确保视频帧间输出稳定
- 支持加载和训练自定义人脸模型，打造特定虚拟形象

## 隐私与离线设计

- 隐私优先架构，完全支持离线使用，无任何云端依赖
- 所有处理在本地消费级 GPU 上运行，视频数据不离开本机
- 核心功能无需注册账号或连接互联网
- 适用于视频不可外传的敏感环境

## 使用场景

- VTuber、主播和短视频创作者的实时虚拟形象和换脸特效
- 影视后期快速预览人脸替换效果，辅助最终渲染决策
- 隐私保护场景下的匿名直播，隐藏真实身份
- 无网络环境下的合成与跟踪算法研究

## 技术实现

- 基于现代生成对抗网络（GAN）和时序跟踪模块构建，兼顾视觉质量和时序稳定性
- 提供模型转换、量化和优化工具，适配不同硬件能力
- 包含快速上手指南、预训练模型和活跃的第三方集成社区
