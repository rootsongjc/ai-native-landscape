export async function GET() {
  const skill = {
    $schema: "https://agentskills.io/schemas/agent-skill/v0.2.0",
    name: "explore-categories",
    version: "1.0.0",
    description:
      "Browse the full taxonomy of categories in the AI Native Landscape. Returns hierarchical category structure with subcategories and project counts.",
    input: {
      type: "object",
      properties: {
        parent: {
          type: "string",
          description:
            "Optional parent category to filter subcategories. Omit for top-level categories.",
        },
      },
    },
    output: {
      type: "object",
      properties: {
        categories: {
          type: "array",
          items: {
            type: "object",
            properties: {
              key: { type: "string" },
              name: { type: "string" },
              description: { type: "string" },
              subcategories: { type: "array" },
              project_count: { type: "integer" },
            },
          },
        },
      },
    },
    dataSources: [
      {
        url: "https://landscape.jimmysong.io/data/index.json",
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
