export async function GET() {
  const index = {
    $schema:
      "https://agentskills.io/schemas/agent-skills-discovery-index/v0.2.0",
    name: "AI Native Landscape Agent Skills",
    description:
      "Skills for AI agents to discover and interact with the AI Native Landscape",
    skills: [
      {
        name: "search-landscape",
        type: "tool",
        description:
          "Search the AI Native Landscape project catalog by name, description, or category",
        url: "https://landscape.jimmysong.io/.well-known/agent-skills/search-landscape.json",
        sha256:
          "placeholder_hash_will_be_computed_at_build_time_0000000000000000",
      },
      {
        name: "explore-categories",
        type: "tool",
        description:
          "Browse and explore the taxonomy of categories in the AI Native Landscape",
        url: "https://landscape.jimmysong.io/.well-known/agent-skills/explore-categories.json",
        sha256:
          "placeholder_hash_will_be_computed_at_build_time_0000000000000001",
      },
      {
        name: "find-project",
        type: "tool",
        description:
          "Find open-source AI projects by natural language description — returns project details, links, and metadata",
        url: "https://landscape.jimmysong.io/.well-known/agent-skills/find-project.json",
        sha256:
          "placeholder_hash_will_be_computed_at_build_time_0000000000000002",
      },
    ],
  };

  return new Response(JSON.stringify(index, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
