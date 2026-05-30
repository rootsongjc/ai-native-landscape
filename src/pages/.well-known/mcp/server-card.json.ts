export async function GET() {
  const card = {
    $schema: "https://modelcontextprotocol.io/schema/server-card",
    serverInfo: {
      name: "AI Native Landscape",
      version: "1.0.0",
      description:
        "Explore the AI Native Landscape — a curated catalog of cloud native and AI native projects, tools, and platforms.",
      website: "https://landscape.jimmysong.io",
      repository: "https://github.com/rootsongjc/ai-native-landscape",
    },
    transport: {
      type: "streamable-http",
      endpoint: "https://landscape.jimmysong.io/mcp",
    },
    capabilities: {
      tools: {
        search_projects: {
          description: "Search the AI Native Landscape project catalog",
          inputSchema: {
            type: "object",
            properties: {
              query: {
                type: "string",
                description: "Search query for project name or description",
              },
              category: {
                type: "string",
                description: "Filter by category key",
              },
            },
          },
        },
        list_categories: {
          description: "List all categories in the AI Native Landscape",
          inputSchema: {
            type: "object",
            properties: {},
          },
        },
        get_project: {
          description: "Get details for a specific project",
          inputSchema: {
            type: "object",
            properties: {
              name: {
                type: "string",
                description: "Project name",
              },
            },
            required: ["name"],
          },
        },
      },
    },
    dataSources: [
      {
        name: "projects",
        url: "https://landscape.jimmysong.io/data/projects.json",
        format: "application/json",
        description: "Full project catalog with metadata",
      },
      {
        name: "index",
        url: "https://landscape.jimmysong.io/data/index.json",
        format: "application/json",
        description: "Complete landscape index",
      },
      {
        name: "projects-csv",
        url: "https://landscape.jimmysong.io/exports/projects.csv",
        format: "text/csv",
        description: "Project catalog in CSV format",
      },
    ],
  };

  return new Response(JSON.stringify(card, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
