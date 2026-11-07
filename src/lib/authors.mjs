import { createHash } from 'node:crypto';

export function projectAuthorKey(project) {
  return (project.author || '').trim().replace(/\s+/g, ' ').toLowerCase();
}

export function buildAuthors(projects) {
  const groups = new Map();
  for (const project of projects) {
    const key = projectAuthorKey(project);
    if (!key) continue;
    if (!groups.has(key)) {
      const name = project.author.trim().replace(/\s+/g, ' ');
      groups.set(key, {
        key,
        name,
        names: {
          en: project.authorLocalized?.en || name,
          zh: project.authorLocalized?.zh || name,
        },
        projects: [],
      });
    }
    groups.get(key).projects.push(project);
  }

  const authors = [...groups.values()];
  const usedSlugs = new Set();
  authors.forEach((author) => {
    const base = author.key.normalize('NFKC').replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '') || 'author';
    const suffix = createHash('sha256').update(author.key).digest('hex').slice(0, 12);
    // Lossy slugs need a stable suffix so distinct author names never merge.
    author.slug = base === author.key ? base : `${base}-${suffix}`;
    if (usedSlugs.has(author.slug)) throw new Error(`Duplicate author URL: ${author.slug}`);
    usedSlugs.add(author.slug);
    author.projects.sort((a, b) => a.name.localeCompare(b.name));
  });
  return authors.sort((a, b) => a.name.localeCompare(b.name));
}
