import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { getRoot, normalizeRepoSlug, readProjectBySlug, resolveProjectTaxonomy, syncLocalizedProjectMarkdown } from './lib.mjs';

const root = getRoot();
const websiteRoot = path.resolve(root, '../..');
const langs = ['zh', 'en'];
const byRepo = new Map();

function readResources(lang) {
  const file = path.join(websiteRoot, 'data', lang, 'ai_resources.yaml');
  const doc = yaml.load(fs.readFileSync(file, 'utf8')) || {};
  return Array.isArray(doc.resources) ? doc.resources : [];
}

function firstNonEmpty(...values) {
  return values.find((value) => typeof value === 'string' && value.trim()) || '';
}

function readExistingProject(slug) {
  return readProjectBySlug(slug) || {};
}

for (const lang of langs) {
  for (const resource of readResources(lang)) {
    const repoSlug = normalizeRepoSlug(resource.github);
    if (!repoSlug) continue;

    if (!byRepo.has(repoSlug)) {
      byRepo.set(repoSlug, {
        repoSlug,
        locales: {},
      });
    }
    byRepo.get(repoSlug).locales[lang] = resource;
  }
}

let written = 0;
for (const record of byRepo.values()) {
  const zh = record.locales.zh;
  const en = record.locales.en;
  const primary = zh || en;
  const fallback = en || zh;
  const slug = firstNonEmpty(primary.slug, fallback.slug, record.repoSlug.split('/').pop())
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '');
  const existing = readExistingProject(slug);

  const project = {
    name: firstNonEmpty(existing.name, en?.title, zh?.title, primary.title, slug),
    slug,
    homepage: firstNonEmpty(existing.homepage, primary.link, fallback.link) || null,
    repo: firstNonEmpty(primary.github, fallback.github),
    license: firstNonEmpty(existing.license, 'Unknown'),
    category: firstNonEmpty(existing.category, primary.category_key, fallback.category_key),
    subCategory: firstNonEmpty(existing.subCategory, primary.category_label, fallback.category_label),
    tags: Array.from(new Set([...(existing.tags || []), ...(zh?.tags || []), ...(en?.tags || [])])).sort(),
    description: {
      zh: firstNonEmpty(existing.description?.zh, zh?.description, en?.description, primary.description, primary.title),
      en: firstNonEmpty(existing.description?.en, en?.description, zh?.description, fallback.description, fallback.title),
    },
    content: {
      zh: firstNonEmpty(existing.content?.zh, zh?.content, zh?.description, en?.content, en?.description),
      en: firstNonEmpty(existing.content?.en, en?.content, en?.description, zh?.content, zh?.description),
    },
    logo: firstNonEmpty(existing.logo),
    author: firstNonEmpty(primary.author, fallback.author),
    ossDate: firstNonEmpty(primary.oss_date, fallback.oss_date),
    featured: Boolean(primary.featured || fallback.featured),
    thumbnail: firstNonEmpty(primary.thumbnail, fallback.thumbnail),
    source: {
      zh: zh ? `data/zh/ai_resources.yaml#${zh.slug || slug}` : '',
      en: en ? `data/en/ai_resources.yaml#${en.slug || slug}` : '',
    },
    status: firstNonEmpty(existing.status, primary.featured || fallback.featured ? 'graduated' : 'sandbox'),
  };

  const resolvedTaxonomy = resolveProjectTaxonomy(project);
  project.category = resolvedTaxonomy.category;
  project.subCategory = resolvedTaxonomy.subCategory;

  syncLocalizedProjectMarkdown(project);
  written += 1;
}

console.log(`Imported ${written} GitHub projects from website AI resources.`);
