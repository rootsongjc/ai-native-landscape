#!/usr/bin/env node
/**
 * triage-submission.mjs — Check project submissions against the inclusion standards.
 *
 * Usage:
 *   GITHUB_TOKEN=... node scripts/triage-submission.mjs --number 48 [--dry-run]
 *   GITHUB_TOKEN=... node scripts/triage-submission.mjs --all-open [--dry-run]
 *
 * Handles submission issues and pull requests that add files under data/projects/.
 * Every decision comes from GitHub API fields and the local catalog. Submitted text and
 * pull request contents are only read as data, never executed.
 */

import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';
import { loadProjects } from './lib.mjs';
import { INCLUSION, SITE } from '../src/lib/landscape.mjs';

export const MARKER = '<!-- landscape-triage -->';
const dayMs = 86400000;
const projectFile = /^data\/projects\/([a-z0-9-]+)\.(en|zh)\.md$/;
const reservedOwners = new Set([
  'orgs', 'sponsors', 'user-attachments', 'features', 'apps', 'marketplace', 'topics',
  'collections', 'settings', 'login', 'about', 'pricing', 'enterprise',
]);
const maintainerAssociations = new Set(['OWNER', 'MEMBER', 'COLLABORATOR']);
// Requirements a maintainer can waive with the `exception` label.
const waivable = new Set(['stars', 'age', 'activity']);

export const LABELS = {
  'project-submission': { color: '1d76db', description: 'Request to list a project' },
  eligible: { color: '0e8a16', description: 'Meets the inclusion standards; awaiting maintainer review' },
  'not-yet-eligible': { color: 'e4e669', description: 'Does not meet the inclusion standards yet' },
  'needs-info': { color: 'd876e3', description: 'Submission cannot be checked until it is fixed' },
  duplicate: { color: 'cfd3d7', description: 'This issue or pull request already exists' },
  exception: { color: 'b60205', description: 'Maintainer waived the star, age, and activity requirements' },
};
const outcomeLabels = ['eligible', 'not-yet-eligible', 'needs-info', 'duplicate'];

export function extractRepository(text) {
  const body = String(text || '');
  const section = body.match(/###\s*GitHub repository\s*\n+([^\n#]*)/i)?.[1] || '';
  for (const source of [section, body]) {
    for (const match of source.matchAll(/github\.com\/([\w.-]+)\/([\w.-]+)/gi)) {
      const owner = match[1];
      const name = match[2].replace(/\.git$/i, '').replace(/\.+$/, '');
      if (name && !reservedOwners.has(owner.toLowerCase())) return `${owner}/${name}`;
    }
  }
  return null;
}

export function isSubmission(issue) {
  const labels = (issue.labels || []).map((label) => (typeof label === 'string' ? label : label.name));
  if (labels.includes('project-submission')) return true;
  if (/^\s*\[project\]/i.test(issue.title || '')) return true;
  if (/###\s*GitHub repository/i.test(issue.body || '')) return true;
  return /^\s*add\b/i.test(issue.title || '') && Boolean(extractRepository(issue.body));
}

export function evaluateRepository(repo, { requested, listed, now, exception = false, openByAuthor = 0 }) {
  const days = (timestamp) => Math.floor((now - Date.parse(timestamp)) / dayMs);
  const names = [requested, repo.full_name].map((name) => name.toLowerCase());
  const topics = repo.topics || [];
  const curatedList = /^awesome\b|[-_]awesome$/i.test(repo.name) || topics.some((topic) => /^awesome(-list)?$/.test(topic));
  const license = repo.license?.spdx_id;
  const checks = [
    {
      id: 'repository',
      title: 'Public repository, not a fork, not archived',
      ok: !repo.private && !repo.fork && !repo.archived,
      detail: repo.fork ? 'Fork' : repo.archived ? 'Archived' : 'OK',
    },
    {
      id: 'license',
      title: 'Open source license detected by GitHub',
      ok: Boolean(repo.license),
      detail: !repo.license ? 'No license detected'
        : license === 'NOASSERTION' ? 'License file found but not recognized; a maintainer will verify it'
          : license,
    },
    {
      id: 'stars',
      title: `At least ${INCLUSION.minStars} stars`,
      ok: repo.stargazers_count >= INCLUSION.minStars,
      detail: `${repo.stargazers_count} stars`,
    },
    {
      id: 'age',
      title: `Created at least ${INCLUSION.minAgeDays} days ago`,
      ok: days(repo.created_at) >= INCLUSION.minAgeDays,
      detail: `Created ${repo.created_at.slice(0, 10)} (${days(repo.created_at)} days ago)`,
    },
    {
      id: 'activity',
      title: `Commit in the last ${INCLUSION.maxInactiveDays} days`,
      ok: days(repo.pushed_at) <= INCLUSION.maxInactiveDays,
      detail: `Last push ${repo.pushed_at.slice(0, 10)} (${days(repo.pushed_at)} days ago)`,
    },
    {
      id: 'software',
      title: 'Software project, not a curated list or documentation-only repository',
      ok: Boolean(repo.language) && !curatedList,
      detail: curatedList ? 'Looks like a curated list' : repo.language || 'No source code detected',
    },
    {
      id: 'unlisted',
      title: 'Not already listed',
      ok: !names.some((name) => listed.has(name)),
      detail: names.some((name) => listed.has(name)) ? 'Already in the landscape' : 'OK',
    },
    {
      id: 'author-limit',
      title: 'At most two open submissions per author',
      ok: openByAuthor < 2,
      detail: openByAuthor < 2 ? 'OK' : `${openByAuthor} earlier submissions are still open`,
    },
  ];
  return checks.map((check) => ({ ...check, waived: !check.ok && exception && waivable.has(check.id) }));
}

export function decideOutcome(projects, problems = []) {
  const failed = projects.flatMap((project) => project.checks.filter((check) => !check.ok && !check.waived));
  if (failed.some((check) => check.id !== 'unlisted')) return 'not-yet-eligible';
  if (failed.length > 0) return 'duplicate';
  if (problems.length > 0 || projects.length === 0) return 'needs-info';
  return 'eligible';
}

export function classifyPullRequestFiles(files) {
  const slugs = new Map();
  const unrelated = [];
  for (const file of files) {
    const match = file.filename.match(projectFile);
    if (!match) {
      unrelated.push(file.filename);
    } else if (file.status === 'added') {
      slugs.set(match[1], { ...slugs.get(match[1]), [match[2]]: file.filename });
    }
  }
  return { slugs, unrelated };
}

export function renderComment({ kind, outcome, projects, problems }) {
  const lines = [MARKER, '### Inclusion check', ''];
  for (const { requested, repo, checks } of projects) {
    lines.push(`Repository: [${repo.full_name}](${repo.html_url})`
      + (repo.full_name.toLowerCase() === requested.toLowerCase() ? '' : ` (submitted as \`${requested}\`)`), '');
    lines.push('| Requirement | Result | Detail |', '| --- | --- | --- |');
    for (const check of checks) {
      const result = check.ok ? '✅ Pass' : check.waived ? '➖ Waived by a maintainer' : '❌ Not met';
      lines.push(`| ${check.title} | ${result} | ${check.detail} |`);
    }
    lines.push('');
  }
  for (const problem of problems) lines.push(`- ${problem}`);
  if (problems.length > 0) lines.push('');
  const subject = kind === 'pull request' ? 'pull request' : 'issue';
  lines.push({
    eligible: 'All automated checks passed. A maintainer will review the project for relevance and fit before it is listed; passing these checks does not guarantee a listing.',
    'not-yet-eligible': `This project does not meet the [inclusion standards](${SITE.url}/methodology/) yet, so this ${subject} is being closed. Once it qualifies, comment \`/recheck\` here and the checks will run again; there is no need to open a new ${subject}.`,
    duplicate: `This project is already listed in the landscape, so this ${subject} is being closed. To correct an existing entry, open an update request instead.`,
    'needs-info': `This submission cannot be checked yet. Fix the points above, then edit the ${subject} or comment \`/recheck\`.`,
  }[outcome]);
  lines.push('', `<sub>Automated check against the [inclusion standards](${SITE.url}/methodology/).</sub>`);
  return lines.join('\n');
}

function createClient(token, repository) {
  const request = async (path, { method = 'GET', body, accept = 'application/vnd.github+json', allow = [] } = {}) => {
    const response = await fetch(new URL(path, 'https://api.github.com'), {
      method,
      headers: {
        Accept: accept,
        Authorization: `Bearer ${token}`,
        'User-Agent': 'ai-native-landscape-triage',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: AbortSignal.timeout(60000),
    });
    if (allow.includes(response.status)) return null;
    if (!response.ok) throw new Error(`${method} ${path}: HTTP ${response.status} ${await response.text()}`);
    if (response.status === 204) return null;
    return accept.includes('raw') ? response.text() : response.json();
  };
  const paginate = async (path) => {
    const items = [];
    for (let page = 1; page <= 10; page += 1) {
      const batch = await request(`${path}${path.includes('?') ? '&' : '?'}per_page=100&page=${page}`);
      items.push(...batch);
      if (batch.length < 100) break;
    }
    return items;
  };
  return { request, paginate, base: `/repos/${repository}` };
}

async function inspectRepository(client, requested, context) {
  const repo = await client.request(`/repos/${requested}`, { allow: [404, 451] });
  if (!repo) return null;
  return { requested, repo, checks: evaluateRepository(repo, { requested, ...context }) };
}

async function collectIssue(client, issue, context) {
  const requested = extractRepository(issue.body);
  if (!requested) {
    return { projects: [], problems: ['No GitHub repository URL was found. Add a link such as `https://github.com/owner/repo`.'] };
  }
  const project = await inspectRepository(client, requested, context);
  if (!project) {
    return { projects: [], problems: [`The repository \`${requested}\` does not exist or is not public.`] };
  }
  return { projects: [project], problems: [] };
}

async function collectPullRequest(client, number, context) {
  const pull = await client.request(`${client.base}/pulls/${number}`);
  const { slugs, unrelated } = classifyPullRequestFiles(await client.paginate(`${client.base}/pulls/${number}/files`));
  if (slugs.size === 0) return null;
  const problems = [];
  if (unrelated.length > 0) {
    problems.push(`A project submission may only change \`data/projects/<slug>.en.md\` and \`data/projects/<slug>.zh.md\`. Also changed: ${unrelated.slice(0, 5).map((file) => `\`${file}\``).join(', ')}.`);
  }
  const projects = [];
  for (const [slug, files] of slugs) {
    if (!files.en || !files.zh) {
      problems.push(`\`${slug}\` needs both \`${slug}.en.md\` and \`${slug}.zh.md\`.`);
    }
    const path = files.en || files.zh;
    const content = pull.head.repo && await client.request(
      `/repos/${pull.head.repo.full_name}/contents/${path}?ref=${pull.head.sha}`,
      { accept: 'application/vnd.github.raw+json', allow: [404] },
    );
    const requested = extractRepository(content?.match(/^repo:\s*(\S+)/m)?.[1]);
    const project = requested && await inspectRepository(client, requested, context);
    if (project) {
      projects.push(project);
    } else {
      problems.push(`\`${path}\` has no \`repo\` field that points to a public GitHub repository.`);
    }
  }
  return { projects, problems };
}

async function applyOutcome(client, issue, outcome, comment) {
  const path = `${client.base}/issues/${issue.number}`;
  const existing = new Set((await client.paginate(`${client.base}/labels`)).map((label) => label.name));
  for (const name of ['project-submission', outcome].filter((label) => !existing.has(label))) {
    await client.request(`${client.base}/labels`, { method: 'POST', body: { name, ...LABELS[name] }, allow: [422] });
  }
  const current = issue.labels.map((label) => label.name);
  for (const name of outcomeLabels.filter((label) => label !== outcome && current.includes(label))) {
    await client.request(`${path}/labels/${encodeURIComponent(name)}`, { method: 'DELETE', allow: [404] });
  }
  await client.request(`${path}/labels`, { method: 'POST', body: { labels: ['project-submission', outcome] } });

  const previous = (await client.paginate(`${path}/comments`)).find((entry) =>
    entry.body?.includes(MARKER) && (entry.user?.type === 'Bot' || entry.author_association === 'OWNER'));
  if (previous) {
    await client.request(`${client.base}/issues/comments/${previous.id}`, { method: 'PATCH', body: { body: comment } });
  } else {
    await client.request(`${path}/comments`, { method: 'POST', body: { body: comment } });
  }

  const shouldClose = outcome === 'not-yet-eligible' || outcome === 'duplicate';
  if (shouldClose && issue.state === 'open') {
    const body = issue.pull_request ? { state: 'closed' } : { state: 'closed', state_reason: 'not_planned' };
    await client.request(path, { method: 'PATCH', body });
  } else if (!shouldClose && issue.state === 'closed') {
    await client.request(path, { method: 'PATCH', body: { state: 'open' } });
  }
}

async function triage(client, number, { listed, dryRun }) {
  const issue = await client.request(`${client.base}/issues/${number}`);
  const labels = issue.labels.map((label) => label.name);
  const kind = issue.pull_request ? 'pull request' : 'issue';
  const skip = (reason) => {
    console.log(`#${number}: skipped (${reason})`);
    return null;
  };
  if (maintainerAssociations.has(issue.author_association) || issue.user.type === 'Bot') return skip('opened by a maintainer or bot');
  // A closed submission is only revisited when this script closed it as not yet eligible.
  if (issue.state === 'closed' && !labels.includes('not-yet-eligible')) return skip('closed by a maintainer');
  if (!issue.pull_request && !isSubmission(issue)) return skip('not a project submission');

  const others = await client.paginate(`${client.base}/issues?state=open&creator=${encodeURIComponent(issue.user.login)}`);
  const context = {
    listed,
    now: Date.now(),
    exception: labels.includes('exception'),
    openByAuthor: others.filter((other) => other.number < number
      && (other.pull_request ? other.labels.some((label) => label.name === 'project-submission') : isSubmission(other))).length,
  };
  const collected = issue.pull_request
    ? await collectPullRequest(client, number, context)
    : await collectIssue(client, issue, context);
  if (!collected) return skip('does not add a project');

  const outcome = decideOutcome(collected.projects, collected.problems);
  const comment = renderComment({ kind, outcome, ...collected });
  console.log(`#${number}: ${outcome} — ${collected.projects.map((project) =>
    `${project.repo.full_name} (${project.repo.stargazers_count} stars)`).join(', ') || collected.problems[0]}`);
  if (dryRun) {
    console.log(comment.split('\n').map((line) => `    ${line}`).join('\n'));
  } else {
    await applyOutcome(client, issue, outcome, comment);
  }
  return outcome;
}

async function main() {
  const { values } = parseArgs({
    options: {
      number: { type: 'string', multiple: true },
      'all-open': { type: 'boolean', default: false },
      'dry-run': { type: 'boolean', default: false },
    },
  });
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN is required');
  const repository = process.env.GITHUB_REPOSITORY || SITE.repo.replace('https://github.com/', '');
  const client = createClient(token, repository);
  const numbers = (values.number || []).map(Number).filter(Number.isInteger);
  if (values['all-open']) {
    numbers.push(...(await client.paginate(`${client.base}/issues?state=open&sort=created&direction=asc`)).map((issue) => issue.number));
  }
  if (numbers.length === 0) throw new Error('Pass --number <issue or pull request number> or --all-open');
  const listed = new Set(loadProjects().filter((project) => project.repoSlug).map((project) => project.repoSlug.toLowerCase()));
  for (const number of numbers) {
    await triage(client, number, { listed, dryRun: values['dry-run'] });
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
