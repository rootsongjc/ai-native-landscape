# AI Native Landscape

**中文** | [English](./README.md)

> 人工精选、多维评分的 AI Native 开源项目生态目录 — 涵盖 Agent、MCP、RAG、AI Runtime、基础设施等方向。

**线上地址**：[landscape.jimmysong.io](https://landscape.jimmysong.io)

## 功能特性

- **全景图浏览** — 卡片视图与热力图，支持分类筛选、搜索、排序
- **全部项目目录** — 在 `/projects/` 搜索、筛选、排序并分页浏览全部项目，筛选条件可通过 URL 分享
- **项目详情页** — 评分、GitHub 指标、中英双语描述（`/projects/<slug>/`）
- **作者页面** — 点击项目详情中的作者，查看本站收录的该作者全部项目（`/authors/<slug>/`），包括归档项目。按规范作者字段匹配（忽略大小写和多余空格），不按 GitHub 仓库所属组织推断。
- **分类导航** — 按技术领域浏览，支持子分类锚点和可分享的标签筛选（`/categories/<key>/`）
- **评分体系** — 5 维度评估（活跃度、社区、影响力、持续性 → 综合健康度）
- **中英双语** — 完整的中文（zh）和英文（en）支持
- **数据导出** — JSON 和 CSV 格式
- **社区协作** — 通过 GitHub Issue 提交新项目

## 快速开始

```bash
npm install
npm run build
npm run dev
```

访问 `http://127.0.0.1:4173/`

## 项目结构

```plaintext
ai-landscape/
├── data/
│   ├── projects/          # 双语 Markdown 文件（.en.md、.zh.md）
│   ├── categories.yaml    # 二级分类体系（大类 → 子类）
│   └── schema.project.json # 项目数据 JSON Schema 校验
├── scripts/               # 构建、校验、迁移、导出脚本
├── src/
│   ├── components/        # Astro 组件（ProjectDetail、LandscapeGrid 等）
│   ├── layouts/           # BaseLayout，含 SEO meta 标签
│   ├── lib/               # 共享工具函数、UI 文案、评分逻辑
│   ├── pages/             # 文件路由（首页、projects/[slug]、categories/[key]）
│   └── styles/            # 全局 CSS，支持亮色/暗色主题
├── public/                # 静态资源（OG 图片、favicon、manifest）
└── docs/                  # 项目文档
```

## 数据模型

每个项目由一对 Markdown 文件组成，包含 YAML frontmatter：

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `name` | ✅ | 项目名称 |
| `slug` | ✅ | URL 标识符 |
| `repo` | ✅ | GitHub 仓库地址 |
| `category` | ✅ | 一级分类 key（如 `agents`、`rag-knowledge`） |
| `description` | ✅ | 双语 `{en, zh}` 一句话描述 |
| `subCategory` | | 二级分类 |
| `homepage` | | 项目官网 |
| `license` | | 开源协议 |
| `tags` | | 标签数组 |
| `author` | | 作者或组织 |
| `ossDate` | | 开源日期 |
| `status` | | 参考状态（`tracked`、`recommended` 等） |
| `score` | | 评分维度（可选，运行时从 API 获取） |

### 评分体系

评分（0–100）通过外部 API 实时获取并在客户端缓存：

| 维度 | 衡量内容 |
| --- | --- |
| **health** | 综合健康度（加权合成） |
| **activity** | 提交频率、发布节奏、Issue 响应速度 |
| **community** | 贡献者数量、PR 合并速度、讨论活跃度 |
| **quality** | Star 数、Fork 数、被依赖关系 |
| **sustainability** | 维护年限、团队稳定性、路线图 |

## 常用脚本

| 命令 | 说明 |
| --- | --- |
| `npm run validate` | 校验所有项目数据 |
| `npm run build:index` | 构建搜索索引 |
| `npm run export` | 导出项目为 JSON/CSV |
| `npm run refresh:scores` | 补采超过 7 天或任一语言缺失的指标与评分，并验证持久化结果 |
| `npm run generate:og` | 生成所有项目的 OG 图片 |
| `npm run build` | 完整构建流程（校验 → 索引 → 导出 → OG → Astro 构建） |
| `npm run dev` | 启动开发服务器 `127.0.0.1:4173` |

### 保持 GitHub 指标及时更新

补采命令使用 Node.js 24.5+（CI 使用 Node.js 24），并支持代理环境变量。
`npm run refresh:scores -- --dry-run` 仅检查采集时间，不修改数据。
执行 `npm run refresh:scores` 会通过评分 Worker 补采过时或缺失的 GitHub
指标及评分，不改变人工维护的介绍、分类和项目状态。可使用
`--repo project-hami/hami` 检查单个仓库、`--max-age-days 3` 调整时效阈值，
或 `--report result.json` 保存检查与执行结果；重新运行会跳过已成功刷新的项目。

`Refresh stale project scores` 工作流每天 UTC 03:00（北京时间 11:00）
检查中英文数据，也支持手动触发。每次采集后都会通过读取接口确认数据已经更新；
失败或未实际处理的仓库会导致非零退出，并记录在上传的 JSON 报告中。
未包含在已部署 Worker 清单中的仓库，需要先发布清单才能采集。

## 部署（Cloudflare Pages）

- **构建命令**：`npm ci && npm run build`
- **输出目录**：`dist`
- **生产域名**：`landscape.jimmysong.io`

## AI 智能搜索 Skill

用自然语言搜索 600+ 精选开源 AI 项目，直接在你的 AI 编程工具中使用。

### Claude Code 安装

```bash
npx skills add rootsongjc/ai-native-landscape --skill landscape-search
```

### Cursor、Copilot、Codex、Cline、Aider 安装

```bash
npx landscape-search
```

启动交互式安装器，选择你的 AI 编程工具即可。详见 [`packages/landscape-search/`](./packages/landscape-search/)。

### 安装后使用

用自然语言提问，例如：

> "帮我找一个支持 MCP 协议的 Agent 框架"
> "推荐一些轻量级 RAG 工具"

### 维护者专用（需克隆本仓库）

以下 skill 仅在本仓库内可用：

| Skill | 功能 |
| ----- | ---- |
| **`/landscape-add`** | 从 GitHub URL 或 Issue 添加新项目 |
| **`/landscape-update`** | 同步单个项目的 GitHub 元数据 |
| **`/landscape-sync`** | 批量同步所有项目的 GitHub 元数据 |
| **`/landscape-batch`** | 批量导入项目（JSON、CSV、URL 列表） |
| **`/landscape-archive`** | 归档或停用项目 |
| **`/landscape-health`** | 对所有项目运行健康检查 |
| **`/landscape-report`** | 生成统计与分析报告 |

## 贡献指南

参见 [贡献指南](./docs/contributing.md)，了解如何添加项目和提交修改。

## 文档

- [项目架构](./docs/architecture.md) — 组件结构与数据流
- [贡献指南](./docs/contributing.md) — 如何添加项目与提交变更
- [部署指南](./docs/deployment.md) — CI/CD 与 Cloudflare Pages 配置

## 许可证

本项目采用 [Apache License 2.0](./LICENSE) 开源协议。
