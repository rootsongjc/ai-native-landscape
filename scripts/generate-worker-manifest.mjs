/**
 * Generate a manifest of AI OSS projects for the ai-oss-rank-worker.
 *
 * Reads landscape project data and outputs a JSON manifest compatible
 * with the worker's ManifestProject type. Published at:
 *   https://landscape.jimmysong.io/data/ai-projects-manifest.json
 *
 * Output: public/data/ai-projects-manifest.json
 */

import { loadProjects, writeJson } from './lib.mjs';

const SUPPORTED_LANGS = ['zh', 'en'];

function detectLocales(project) {
  const locales = [];
  for (const lang of SUPPORTED_LANGS) {
    const hasDescription = project.description?.[lang];
    const hasContent = project.content?.[lang];
    if (hasDescription || hasContent) {
      locales.push(lang);
    }
  }
  return locales.length > 0 ? locales : SUPPORTED_LANGS;
}

function makePagePath(lang, slug) {
  return `/${lang}/projects/${slug}/`;
}

function transformProject(project) {
  const locales = detectLocales(project);
  const name = project.name || project.slug;
  const slug = project.slug;
  const repo = project.repoSlug || '';

  const titles = {};
  const slugs = {};
  const pagePaths = {};
  const tags = {};
  const featured = {};
  const ossDates = {};
  const sources = {};

  for (const lang of locales) {
    titles[lang] = name;
    slugs[lang] = slug;
    pagePaths[lang] = makePagePath(lang, slug);
    tags[lang] = project.tags || [];
    featured[lang] = Boolean(project.featured);
    if (project.ossDate) {
      ossDates[lang] = project.ossDate;
    }
    sources[lang] = `data/projects/${slug}.${lang}.md`;
  }

  return {
    repo,
    github: project.repo || '',
    locales,
    titles,
    slugs,
    pagePaths,
    tags,
    featured,
    ossDates,
    sources,
  };
}

function main() {
  const projects = loadProjects();

  const manifest = projects
    .filter((p) => p.repoSlug)
    .map(transformProject)
    .sort((a, b) => a.repo.localeCompare(b.repo));

  const payload = {
    generatedAt: new Date().toISOString(),
    projectCount: manifest.length,
    projects: manifest,
  };

  writeJson('public/data/ai-projects-manifest.json', payload);
  console.log(`Generated worker manifest with ${payload.projectCount} projects → public/data/ai-projects-manifest.json`);
}

main();
