import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const root = path.resolve(process.cwd());
const dataDir = path.join(root, 'data');
const projectsDir = path.join(dataDir, 'projects');
const categoryFile = path.join(dataDir, 'categories.yaml');
const PROJECT_EXTENSIONS = ['.md', '.yaml', '.yml'];
const PROJECT_LANGS = ['zh', 'en'];

const TAG_PRIORITY_RULES = [
  { key: 'agent-frameworks', anyTags: ['agent framework', 'multi-agent'] },
  { key: 'mcp-tools', anyTags: ['mcp', 'a2a', 'ag-ui'] },
  { key: 'coding-agents', anyTags: ['vibe coding', 'code agent'] },
  { key: 'chat-interfaces', anyTags: ['chatbot', 'chat ui', 'copilot'] },
  { key: 'llm-routing-gateways', anyTags: ['ai gateway', 'ai gateways', 'llm router'] },
  { key: 'evaluation-benchmarks', anyTags: ['evaluation', 'benchmark'] },
  { key: 'observability-monitoring', anyTags: ['observability', 'observation', 'monitoring', 'analytics'] },
  { key: 'prompt-quality', anyTags: ['prompt engineering'] },
  { key: 'safety-guardrails', anyTags: ['safety', 'security'] },
  { key: 'finetuning-alignment', anyTags: ['finetune', 'fine tuning', 'fine tune', 'rlhf', 'alignment'] },
  { key: 'training-frameworks', anyTags: ['training'] },
  { key: 'audio-speech', anyTags: ['tts', 'audio'] },
  { key: 'image-video-generation', anyTags: ['image generation', 'video'] },
  { key: 'multimodal', anyTags: ['multimodal', 'vision'] },
  { key: 'vector-databases', anyTags: ['vector db'] },
  { key: 'knowledge-graphs', anyTags: ['knowledge graph'] },
  { key: 'agent-memory-context', anyTags: ['memory'] },
  { key: 'data-connectors', anyTags: ['connector'] },
  { key: 'retrieval-indexing', anyTags: ['rag', 'retrieval', 'search', 'indexing'] },
  { key: 'workflow-automation', anyTags: ['workflow', 'automation'], excludeTags: ['agent framework', 'agents', 'ai agent', 'orchestration', 'multi-agent'] },
  { key: 'low-code-builders', anyTags: ['low-code'] },
  { key: 'browser-automation', anyTags: ['browser automation', 'browser', 'chromium'] },
  { key: 'ide-cli-tools', anyTags: ['cli', 'ai terminal'] },
  { key: 'model-serving', anyTags: ['inference service', 'serving'] },
  { key: 'sandboxes-runtimes', anyTags: ['sandbox'] },
  { key: 'inference-runtimes', anyTags: ['runtime', 'inference', 'ai kernel library', 'disaggregation'] },
  { key: 'edge-local-inference', anyTags: ['edge'] },
  { key: 'cloud-native-ai', anyTags: ['cloud native', 'kubernetes'] },
  { key: 'data-platforms', allTags: ['data', 'dev tools'] },
  { key: 'data-platforms', anyTags: ['database'] },
  { key: 'deployment-operations', anyTags: ['deployment', 'ml platform', 'docker'] },
  { key: 'productivity-tools', anyTags: ['application', 'product', 'assistant', 'dashboard', 'visualization'], excludeTags: ['agent framework', 'agents', 'ai agent', 'mcp'] },
  { key: 'sdk-frameworks', anyTags: ['sdk', 'frameworks', 'application framework', 'middleware', 'project', 'python', 'java'] },
  { key: 'developer-utilities', anyTags: ['plugin', 'frontend', 'programming'] },
  { key: 'foundation-models', anyTags: ['llm', 'model', 'models', 'foundation model', 'embedding model'] },
];

const SUBCATEGORY_RULES = [
  {
    key: 'agent-orchestration',
    terms: ['agent orchestration', 'multi-agent', 'planner', 'swarm', 'orchestrator', 'orchestration framework', 'graph workflow'],
  },
  {
    key: 'agent-frameworks',
    terms: ['agent framework', 'agent sdk', 'autonomous agent', 'assistant framework'],
  },
  {
    key: 'mcp-tools',
    terms: ['mcp', 'model context protocol', 'tool registry', 'tooling protocol', 'a2a', 'ag-ui', 'tool protocol', 'agent protocol'],
  },
  {
    key: 'coding-agents',
    terms: ['code assistant', 'coding agent', 'ide copilot', 'pair programmer', 'software engineer agent', 'vibe coding', 'code editor'],
  },
  {
    key: 'ide-cli-tools',
    terms: ['cli', 'terminal', 'ide extension', 'vscode', 'command line', 'neovim', 'editor plugin'],
  },
  {
    key: 'browser-automation',
    terms: ['browser automation', 'playwright', 'selenium', 'rpa', 'web automation'],
  },
  {
    key: 'developer-utilities',
    terms: ['devtool', 'developer tool', 'lint', 'testing tool', 'productivity', 'notebook', 'jupyter', 'marimo'],
  },
  {
    key: 'chat-interfaces',
    terms: ['chatbot', 'chat', 'assistant ui', 'conversation', 'wechat bot', 'copilot app'],
  },
  {
    key: 'workflow-automation',
    terms: ['automation', 'workflow automation', 'agent workflow', 'task automation'],
  },
  {
    key: 'low-code-builders',
    terms: ['low-code', 'no-code', 'builder', 'visual builder'],
  },
  {
    key: 'productivity-tools',
    terms: ['notes', 'knowledge management', 'productivity', 'office assistant', 'workspace app'],
  },
  {
    key: 'agent-memory-context',
    terms: ['memory', 'context', 'state', 'session memory', 'long-term memory', 'context engineering'],
  },
  {
    key: 'vector-databases',
    terms: ['vector database', 'vector db', 'embedding store', 'qdrant', 'milvus', 'weaviate', 'lancedb'],
  },
  {
    key: 'retrieval-indexing',
    terms: ['retrieval', 'rerank', 'index', 'rag', 'chunk', 'search index'],
  },
  {
    key: 'document-processing',
    terms: ['ocr', 'pdf', 'document parsing', 'doc parser', 'extractor'],
  },
  {
    key: 'knowledge-graphs',
    terms: ['knowledge graph', 'graph rag', 'graph database', 'graph'],
  },
  {
    key: 'data-connectors',
    terms: ['connector', 'ingestion', 'etl', 'pipeline', 'sync'],
  },
  {
    key: 'evaluation-benchmarks',
    terms: ['benchmark', 'evaluation', 'eval', 'leaderboard', 'testing'],
  },
  {
    key: 'observability-monitoring',
    terms: ['observability', 'monitoring', 'tracing', 'telemetry', 'metrics'],
  },
  {
    key: 'prompt-quality',
    terms: ['prompt', 'prompt management', 'prompt testing', 'promptops'],
  },
  {
    key: 'safety-guardrails',
    terms: ['guardrail', 'safety', 'policy enforcement', 'moderation', 'security check'],
  },
  {
    key: 'training-frameworks',
    terms: ['training framework', 'distributed training', 'trainer', 'pytorch lightning', 'deepspeed'],
  },
  {
    key: 'finetuning-alignment',
    terms: ['finetune', 'sft', 'rlhf', 'alignment', 'preference optimization', 'dpo'],
  },
  {
    key: 'experiment-mlops',
    terms: ['mlops', 'experiment tracking', 'model registry', 'pipeline orchestration'],
  },
  {
    key: 'model-serving',
    terms: ['serving', 'serve', 'inference server', 'online serving'],
  },
  {
    key: 'llm-routing-gateways',
    terms: ['gateway', 'router', 'proxy', 'rate limit', 'policy', 'llm router', 'model gateway'],
  },
  {
    key: 'sandboxes-runtimes',
    terms: ['sandbox', 'runtime', 'vm', 'isolation', 'secure execution', 'code interpreter'],
  },
  {
    key: 'inference-runtimes',
    terms: ['inference runtime', 'kernel', 'engine', 'executor'],
  },
  {
    key: 'gpu-acceleration',
    terms: ['gpu', 'cuda', 'tensor', 'npu', 'accelerator', 'nccl'],
  },
  {
    key: 'edge-local-inference',
    terms: ['edge', 'on-device', 'local inference', 'browser inference'],
  },
  {
    key: 'cloud-native-ai',
    terms: ['kubernetes', 'cloud native', 'operator', 'cluster', 'distributed system'],
  },
  {
    key: 'data-platforms',
    terms: ['data platform', 'warehouse', 'lakehouse', 'metadata', 'catalog', 'database', 'storage', 'filesystem'],
  },
  {
    key: 'security-policy',
    terms: ['security', 'policy', 'rbac', 'compliance', 'audit'],
  },
  {
    key: 'deployment-operations',
    terms: ['deployment', 'devops', 'operations', 'release', 'helm'],
  },
  {
    key: 'model-toolkits',
    terms: ['quantization', 'model conversion', 'onnx', 'model toolkit', 'compression'],
  },
  {
    key: 'multimodal',
    terms: ['multimodal', 'vision-language', 'vlm'],
  },
  {
    key: 'audio-speech',
    terms: ['speech', 'voice', 'audio', 'asr', 'tts'],
  },
  {
    key: 'image-video-generation',
    terms: ['image generation', 'video generation', 'diffusion', 'text-to-image', 'text-to-video'],
  },
  {
    key: 'sdk-frameworks',
    terms: ['sdk', 'framework', 'library', 'api client'],
  },
  {
    key: 'optimization-simulation',
    terms: ['optimization', 'compiler', 'autotune', 'simulation'],
  },
  {
    key: 'desktop-clients',
    terms: ['desktop', 'electron', 'mac app', 'windows app', 'desktop client'],
  },
  {
    key: 'foundation-models',
    terms: ['foundation model', 'llm', 'model family', 'checkpoint', 'pretrained model'],
  },
];

const LEGACY_RULE_FALLBACK = {
  agents_orchestration: { category: 'agents', subCategory: 'agent-orchestration' },
  applications_products: { category: 'applications-products', subCategory: 'chat-interfaces' },
  data_retrieval: { category: 'rag-knowledge', subCategory: 'retrieval-indexing' },
  dev_tools_sdk: { category: 'coding-devtools', subCategory: 'sdk-frameworks' },
  evaluation_monitoring: { category: 'evaluation-observability', subCategory: 'evaluation-benchmarks' },
  ai_gateways: { category: 'inference-serving', subCategory: 'llm-routing-gateways' },
  inference_serving: { category: 'inference-serving', subCategory: 'model-serving' },
  models_foundation: { category: 'models-modalities', subCategory: 'foundation-models' },
  training_finetuning: { category: 'training-optimization', subCategory: 'training-frameworks' },
  vibe_coding: { category: 'coding-devtools', subCategory: 'coding-agents' },
};

let taxonomyCache = null;

export function getRoot() {
  return root;
}

function normalizeText(value) {
  return String(value || '').toLowerCase();
}

function projectSearchText(project) {
  return normalizeText([
    project.name,
    project.slug,
    project.category,
    project.subCategory,
    project.description?.en,
    project.description?.zh,
    ...(project.tags || []),
    project.repo,
  ].join(' | '));
}

function firstMatchingRule(text, validSubCategories) {
  for (const rule of SUBCATEGORY_RULES) {
    if (!validSubCategories.has(rule.key)) continue;
    if (rule.terms.some((term) => text.includes(term))) {
      return rule.key;
    }
  }
  return null;
}

function firstMatchingTagRule(tags, validSubCategories) {
  const normalizedTags = new Set((tags || []).map((tag) => normalizeText(tag)));
  for (const rule of TAG_PRIORITY_RULES) {
    if (!validSubCategories.has(rule.key)) continue;

    if (rule.allTags?.some((tag) => !normalizedTags.has(tag))) {
      continue;
    }

    const hasMatch = !rule.anyTags || rule.anyTags.some((tag) => normalizedTags.has(tag));
    if (!hasMatch) continue;

    if (rule.excludeTags?.some((tag) => normalizedTags.has(tag))) {
      continue;
    }

    return rule.key;
  }
  return null;
}

export function loadTaxonomy() {
  if (taxonomyCache) return taxonomyCache;

  const doc = yaml.load(fs.readFileSync(categoryFile, 'utf8')) || {};
  const categories = Array.isArray(doc.categories) ? doc.categories : [];
  const legacyAliases = doc.legacyAliases || {};

  const categoryMap = new Map();
  const subCategoryMap = new Map();
  const parentBySubCategory = new Map();

  for (const category of categories) {
    categoryMap.set(category.key, category);
    for (const sub of category.subcategories || []) {
      subCategoryMap.set(sub.key, sub);
      parentBySubCategory.set(sub.key, category.key);
    }
  }

  const normalizedAliases = Object.fromEntries(
    Object.entries(legacyAliases).map(([key, value]) => [key, Array.isArray(value) ? value : [value]]),
  );

  taxonomyCache = {
    categories,
    legacyAliases: normalizedAliases,
    categoryMap,
    subCategoryMap,
    parentBySubCategory,
  };
  return taxonomyCache;
}

export function loadCategories() {
  return loadTaxonomy().categories;
}

export function getCategory(categoryKey) {
  return loadTaxonomy().categoryMap.get(categoryKey);
}

export function getSubCategory(subCategoryKey) {
  return loadTaxonomy().subCategoryMap.get(subCategoryKey);
}

export function normalizeRepoSlug(repoUrl) {
  if (!repoUrl) return null;
  try {
    const normalized = String(repoUrl)
      .trim()
      .replace(/\.git$/, '')
      .replace(/^git@github.com:/i, 'https://github.com/')
      .replace(/^http:\/\//i, 'https://');
    const url = new URL(normalized);
    if (url.hostname.toLowerCase() !== 'github.com') return null;
    const repo = url.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
    return repo.includes('/') ? repo : null;
  } catch {
    return null;
  }
}

function inferredFromLegacy(project, taxonomy) {
  const legacy = LEGACY_RULE_FALLBACK[project.category];
  if (!legacy) return null;

  if (!taxonomy.categoryMap.has(legacy.category) || !taxonomy.subCategoryMap.has(legacy.subCategory)) {
    return null;
  }

  return { category: legacy.category, subCategory: legacy.subCategory, reason: 'legacy' };
}

function inferCategoryBySubCategory(subCategoryKey, taxonomy) {
  return taxonomy.parentBySubCategory.get(subCategoryKey) || null;
}

export function resolveProjectTaxonomy(project) {
  const taxonomy = loadTaxonomy();

  if (taxonomy.categoryMap.has(project.category) && taxonomy.subCategoryMap.has(project.subCategory)) {
    const expectedParent = inferCategoryBySubCategory(project.subCategory, taxonomy);
    if (expectedParent === project.category) {
      return {
        category: project.category,
        subCategory: project.subCategory,
        reason: 'explicit',
      };
    }
  }

  if (taxonomy.categoryMap.has(project.category) && !project.subCategory) {
    const firstSub = taxonomy.categoryMap.get(project.category)?.subcategories?.[0]?.key;
    return {
      category: project.category,
      subCategory: firstSub || DEFAULT_SUBCATEGORY,
      reason: 'category-default',
    };
  }

  if (taxonomy.subCategoryMap.has(project.subCategory)) {
    const category = inferCategoryBySubCategory(project.subCategory, taxonomy);
    return {
      category,
      subCategory: project.subCategory,
      reason: 'subcategory-parent',
    };
  }

  const tagMatch = firstMatchingTagRule(project.tags, new Set(taxonomy.subCategoryMap.keys()));
  if (tagMatch) {
    return {
      category: inferCategoryBySubCategory(tagMatch, taxonomy),
      subCategory: tagMatch,
      reason: 'tag',
    };
  }

  const searchText = projectSearchText(project);
  const subCategoryMatch = firstMatchingRule(searchText, new Set(taxonomy.subCategoryMap.keys()));
  if (subCategoryMatch) {
    return {
      category: inferCategoryBySubCategory(subCategoryMatch, taxonomy),
      subCategory: subCategoryMatch,
      reason: 'rule',
    };
  }

  const fromLegacy = inferredFromLegacy(project, taxonomy);
  if (fromLegacy) {
    return fromLegacy;
  }

  const projectLabel = project.slug || project.name || project.repo || 'unknown-project';
  throw new Error(`Unable to resolve taxonomy for ${projectLabel}`);
}

export function toScore(project) {
  const rawScore = project.score || {};
  const hasAuthoritativeScore = ['health', 'community', 'quality', 'sustainability'].some((key) => rawScore[key] !== undefined);
  const hasLegacyScore = ['activity', 'adoption', 'maintainability', 'openness'].some((key) => rawScore[key] !== undefined);
  let score = {};

  if (hasAuthoritativeScore) {
    score = {
      health: Number(rawScore.health || 0),
      activity: Number(rawScore.activity || 0),
      community: Number(rawScore.community || 0),
      popularity: Number(rawScore.popularity || 0),
      quality: Number(rawScore.quality || 0),
      sustainability: Number(rawScore.sustainability || 0),
    };
  } else if (hasLegacyScore) {
    score = {
      health: Number((((Number(rawScore.activity || 0) + Number(rawScore.adoption || 0) + Number(rawScore.maintainability || 0) + Number(rawScore.openness || 0)) / 20) * 100).toFixed(1)),
      activity: Number((Number(rawScore.activity || 0) * 20).toFixed(1)),
      community: Number((Number(rawScore.openness || 0) * 20).toFixed(1)),
      popularity: Number((Number(rawScore.adoption || 0) * 20).toFixed(1)),
      quality: Number((Number(rawScore.adoption || 0) * 20).toFixed(1)),
      sustainability: Number((Number(rawScore.maintainability || 0) * 20).toFixed(1)),
    };
  }

  const totalScore = Number.isFinite(score.health) ? Number(score.health.toFixed(1)) : null;

  const resolvedTaxonomy = resolveProjectTaxonomy(project);
  const category = getCategory(resolvedTaxonomy.category);
  const subCategory = getSubCategory(resolvedTaxonomy.subCategory);

  return {
    ...project,
    score,
    category: resolvedTaxonomy.category,
    subCategory: resolvedTaxonomy.subCategory,
    repoSlug: normalizeRepoSlug(project.repo),
    totalScore,
    scorePercent: totalScore === null ? null : Math.round(totalScore),
    taxonomyReason: resolvedTaxonomy.reason,
    categoryNameZh: category?.name?.zh || '',
    categoryNameEn: category?.name?.en || '',
    subCategoryNameZh: subCategory?.name?.zh || '',
    subCategoryNameEn: subCategory?.name?.en || '',
  };
}

export function loadProjects() {
  return loadProjectDocuments()
    .map((project) => toScore(project))
    .sort((a, b) => (b.totalScore ?? -1) - (a.totalScore ?? -1) || a.name.localeCompare(b.name));
}

function buildLegacyCategoryGroups(projects, taxonomy) {
  const groups = {};
  for (const legacyKey of Object.keys(taxonomy.legacyAliases)) {
    const mapped = new Set(taxonomy.legacyAliases[legacyKey] || []);
    groups[legacyKey] = projects.filter((project) => mapped.has(project.category));
  }
  return groups;
}

export function buildLandscapeIndex() {
  const taxonomy = loadTaxonomy();
  const projects = loadProjects();

  const byCategory = Object.fromEntries(taxonomy.categories.map((category) => [category.key, []]));
  const bySubCategory = {};

  for (const category of taxonomy.categories) {
    for (const subCategory of category.subcategories || []) {
      bySubCategory[subCategory.key] = [];
    }
  }

  for (const project of projects) {
    if (!byCategory[project.category]) byCategory[project.category] = [];
    byCategory[project.category].push(project);

    if (!bySubCategory[project.subCategory]) bySubCategory[project.subCategory] = [];
    bySubCategory[project.subCategory].push(project);
  }

  return {
    generatedAt: new Date().toISOString(),
    projectCount: projects.length,
    categories: taxonomy.categories,
    byCategory,
    bySubCategory,
    legacyByCategory: buildLegacyCategoryGroups(projects, taxonomy),
    projects,
  };
}

export function writeJson(relPath, data) {
  const abs = path.join(root, relPath);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

export function writeText(relPath, data) {
  const abs = path.join(root, relPath);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, data, 'utf8');
}

export function writeYaml(relPath, data) {
  const abs = path.join(root, relPath);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, yaml.dump(data, { lineWidth: 120, noRefs: true, sortKeys: false }), 'utf8');
}

export function listProjectFiles() {
  return fs.readdirSync(projectsDir)
    .filter((file) => PROJECT_EXTENSIONS.some((ext) => file.endsWith(ext)))
    .sort();
}

function localeFilenameInfo(filePath) {
  const base = path.basename(filePath);
  const match = base.match(/^(.*)\.(zh|en)\.md$/);
  if (!match) return null;
  return {
    slug: match[1],
    lang: match[2],
  };
}

export function listProjectFilesBySlug(slug) {
  const matcher = new RegExp(`^${slug}(?:\\.(?:zh|en))?\\.(?:md|yaml|yml)$`);
  return listProjectFiles().filter((file) => matcher.test(file));
}

function stripMarkdownFrontMatter(source) {
  const normalized = source.replace(/^\uFEFF/, '');
  if (!normalized.startsWith('---\n')) {
    return { data: {}, body: normalized };
  }

  const endIndex = normalized.indexOf('\n---\n', 4);
  if (endIndex === -1) {
    throw new Error('Invalid markdown front matter: missing closing delimiter');
  }

  const frontMatter = normalized.slice(4, endIndex);
  const body = normalized.slice(endIndex + 5);
  return {
    data: yaml.load(frontMatter) || {},
    body,
  };
}

function parseLocalizedMarkdownBody(body) {
  const normalized = String(body || '').trim();
  if (!normalized) return {};

  const marker = /<!--\s*lang:(zh|en)\s*-->/g;
  const matches = Array.from(normalized.matchAll(marker));
  if (matches.length === 0) {
    return { en: normalized };
  }

  const sections = {};
  for (let index = 0; index < matches.length; index += 1) {
    const current = matches[index];
    const next = matches[index + 1];
    const lang = current[1];
    const start = current.index + current[0].length;
    const end = next ? next.index : normalized.length;
    sections[lang] = normalized.slice(start, end).trim();
  }

  return sections;
}

function toProjectMarkdownBody(project) {
  const sections = [];
  const zh = project.content?.zh?.trim();
  const en = project.content?.en?.trim();

  if (zh) {
    sections.push('<!-- lang:zh -->');
    sections.push(zh);
  }

  if (en) {
    sections.push('<!-- lang:en -->');
    sections.push(en);
  }

  return sections.join('\n\n').trim();
}

export function readProjectFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const extension = path.extname(filePath);

  if (extension === '.md') {
    const { data, body } = stripMarkdownFrontMatter(source);
    const localized = localeFilenameInfo(filePath);
    if (localized) {
      return {
        ...data,
        slug: data.slug || localized.slug,
        description: typeof data.description === 'string'
          ? { [localized.lang]: data.description }
          : (data.description?.[localized.lang] ? { [localized.lang]: data.description[localized.lang] } : {}),
        source: typeof data.source === 'string'
          ? { [localized.lang]: data.source }
          : (data.source?.[localized.lang] ? { [localized.lang]: data.source[localized.lang] } : {}),
        content: body.trim() ? { [localized.lang]: body.trim() } : {},
      };
    }

    const content = parseLocalizedMarkdownBody(body);
    return Object.keys(content).length > 0 ? { ...data, content } : data;
  }

  return yaml.load(source) || {};
}

function mergeLocalizedObject(base = {}, incoming = {}) {
  return {
    ...base,
    ...Object.fromEntries(Object.entries(incoming).filter(([, value]) => value !== undefined && value !== null && value !== '')),
  };
}

function preferValue(current, next) {
  if (typeof next === 'boolean') return next;
  if (Array.isArray(next)) return next.length > 0 ? next : current;
  if (next !== undefined && next !== null && next !== '') return next;
  return current;
}

function mergeProjectDocumentsEntry(base, incoming) {
  if (!base) {
    return {
      ...incoming,
      tags: [...(incoming.tags || [])],
      description: { ...(incoming.description || {}) },
      content: { ...(incoming.content || {}) },
      source: { ...(incoming.source || {}) },
      score: { ...(incoming.score || {}) },
    };
  }

  return {
    ...base,
    name: preferValue(base.name, incoming.name),
    slug: preferValue(base.slug, incoming.slug),
    homepage: preferValue(base.homepage, incoming.homepage),
    repo: preferValue(base.repo, incoming.repo),
    license: preferValue(base.license, incoming.license),
    category: preferValue(base.category, incoming.category),
    subCategory: preferValue(base.subCategory, incoming.subCategory),
    tags: Array.from(new Set([...(base.tags || []), ...(incoming.tags || [])])),
    description: mergeLocalizedObject(base.description, incoming.description),
    content: mergeLocalizedObject(base.content, incoming.content),
    logo: preferValue(base.logo, incoming.logo),
    author: preferValue(base.author, incoming.author),
    ossDate: preferValue(base.ossDate, incoming.ossDate),
    featured: preferValue(base.featured, incoming.featured),
    thumbnail: preferValue(base.thumbnail, incoming.thumbnail),
    source: mergeLocalizedObject(base.source, incoming.source),
    status: preferValue(base.status, incoming.status),
    score: {
      ...(base.score || {}),
      ...(incoming.score || {}),
    },
  };
}

export function loadProjectDocuments() {
  const grouped = new Map();

  for (const file of listProjectFiles()) {
    const doc = readProjectFile(path.join(projectsDir, file));
    const slug = doc.slug || localeFilenameInfo(file)?.slug || path.basename(file, path.extname(file));
    grouped.set(slug, mergeProjectDocumentsEntry(grouped.get(slug), { ...doc, slug }));
  }

  return Array.from(grouped.values()).sort((a, b) => a.slug.localeCompare(b.slug));
}

export function readProjectBySlug(slug) {
  let merged = null;
  for (const file of listProjectFilesBySlug(slug)) {
    merged = mergeProjectDocumentsEntry(merged, readProjectFile(path.join(projectsDir, file)));
  }
  return merged || null;
}

function projectFrontMatterForLang(project, lang) {
  const frontMatter = {
    name: project.name,
    slug: project.slug,
    homepage: project.homepage ?? null,
    repo: project.repo,
    license: project.license || 'Unknown',
    category: project.category,
    subCategory: project.subCategory,
    tags: project.tags || [],
    description: project.description?.[lang] || project.description?.en || project.description?.zh || '',
    logo: project.logo || '',
    author: project.author || '',
    ossDate: project.ossDate || '',
    featured: Boolean(project.featured),
    thumbnail: project.thumbnail || '',
    source: project.source?.[lang] || project.source?.en || project.source?.zh || '',
    status: project.status,
  };

  if (project.score && Object.keys(project.score).length > 0) {
    frontMatter.score = project.score;
  }

  return frontMatter;
}

function writeMarkdownDocument(relPath, frontMatter, body) {
  const abs = path.join(root, relPath);
  const frontMatterText = yaml.dump(frontMatter, { lineWidth: 120, noRefs: true, sortKeys: false }).trimEnd();
  const parts = [`---\n${frontMatterText}\n---`];

  if (body && body.trim()) {
    parts.push(body);
  }

  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, `${parts.join('\n\n')}\n`, 'utf8');
}

export function writeProjectMarkdown(relPath, data) {
  const frontMatter = { ...data };
  delete frontMatter.content;
  writeMarkdownDocument(relPath, frontMatter, toProjectMarkdownBody(data));
}

export function syncLocalizedProjectMarkdown(project) {
  const desired = new Set();

  for (const lang of PROJECT_LANGS) {
    const relPath = `data/projects/${project.slug}.${lang}.md`;
    desired.add(path.basename(relPath));
    writeMarkdownDocument(relPath, projectFrontMatterForLang(project, lang), project.content?.[lang] || '');
  }

  for (const file of listProjectFilesBySlug(project.slug)) {
    if (!desired.has(file)) {
      fs.unlinkSync(path.join(projectsDir, file));
    }
  }
}
