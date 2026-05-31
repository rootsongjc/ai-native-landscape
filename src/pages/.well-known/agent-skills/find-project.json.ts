export async function GET() {
  const skill = {
    $schema: 'https://agentskills.io/schemas/agent-skill/v0.2.0',
    name: 'find-project',
    version: '1.0.0',
    description:
      'Find open-source AI projects in the AI Native Landscape by natural language description. Returns project names, descriptions, repositories, categories, and links.',
    input: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description:
            'Natural language description of the desired project, tool, or capability. Examples: "vector database for RAG", "AI agent framework", "LLM inference engine", "开源向量数据库"',
        },
        category: {
          type: 'string',
          description:
            'Optional category key to narrow results: agents, rag-knowledge, models-modalities, inference-serving, training-optimization, coding-devtools, applications-products, platform-infra',
        },
        limit: {
          type: 'number',
          description: 'Maximum number of results to return (default: 10, max: 30).',
        },
        lang: {
          type: 'string',
          description:
            'Language preference for descriptions: "zh" for Chinese, "en" for English (default: "en").',
        },
      },
    },
    output: {
      type: 'object',
      properties: {
        results: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string', description: 'Project display name' },
              slug: { type: 'string', description: 'URL-safe identifier' },
              description: { type: 'string', description: 'Project description in requested language' },
              repo: { type: 'string', description: 'GitHub repository URL' },
              homepage: { type: 'string', description: 'Project website URL' },
              license: { type: 'string', description: 'SPDX license identifier' },
              category: { type: 'string', description: 'Category key' },
              subCategory: { type: 'string', description: 'Sub-category key' },
              tags: { type: 'array', items: { type: 'string' }, description: 'Topic tags' },
              author: { type: 'string', description: 'Maintainer organization' },
              status: { type: 'string', description: 'Project status (tracked, incubating, graduated)' },
              detailUrl: { type: 'string', description: 'Link to landscape detail page' },
              score: {
                type: 'object',
                properties: {
                  health: { type: 'number' },
                  activity: { type: 'number' },
                  community: { type: 'number' },
                  quality: { type: 'number' },
                  sustainability: { type: 'number' },
                },
              },
            },
          },
        },
        total: { type: 'number', description: 'Total matching projects found' },
      },
    },
    dataSources: [
      {
        name: 'projects',
        url: 'https://landscape.jimmysong.io/data/projects.json',
        format: 'application/json',
        description: 'Full project catalog with 600+ open-source AI projects',
      },
    ],
  };

  return new Response(JSON.stringify(skill, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
