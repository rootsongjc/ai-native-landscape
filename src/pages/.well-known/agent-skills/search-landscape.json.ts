export async function GET() {
  const skill = {
    $schema: "https://agentskills.io/schemas/agent-skill/v0.2.0",
    name: "search-landscape",
    version: "1.0.0",
    description:
      "Search the AI Native Landscape project catalog by name, description, or category. Returns matching projects with metadata including category, description, and homepage.",
    input: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description:
            "Search term to match against project name or description",
        },
        category: {
          type: "string",
          description: "Filter results to a specific category (e.g. 'LLM', 'MLOps')",
        },
        limit: {
          type: "integer",
          description: "Maximum number of results to return (default: 20)",
          default: 20,
        },
      },
    },
    output: {
      type: "object",
      properties: {
        results: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              description: { type: "string" },
              category: { type: "string" },
              homepage_url: { type: "string" },
            },
          },
        },
        total: { type: "integer" },
      },
    },
    dataSources: [
      {
        url: "https://landscape.jimmysong.io/data/projects.json",
        format: "application/json",
      },
    ],
  };

  return new Response(JSON.stringify(skill, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
