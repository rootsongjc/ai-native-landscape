export async function GET() {
  const catalog = {
    linkset: [
      {
        anchor: "https://landscape.jimmysong.io/api/projects",
        "service-desc": [
          {
            href: "https://landscape.jimmysong.io/data/projects.json",
            type: "application/json",
          },
        ],
        "service-doc": [
          {
            href: "https://landscape.jimmysong.io/en/about",
            type: "text/html",
          },
        ],
        type: "application/json",
        title: "AI Native Landscape Projects Catalog",
      },
      {
        anchor: "https://landscape.jimmysong.io/api/index",
        "service-desc": [
          {
            href: "https://landscape.jimmysong.io/data/index.json",
            type: "application/json",
          },
        ],
        type: "application/json",
        title: "AI Native Landscape Full Index",
      },
      {
        anchor: "https://landscape.jimmysong.io/api/projects.csv",
        "service-desc": [
          {
            href: "https://landscape.jimmysong.io/exports/projects.csv",
            type: "text/csv",
          },
        ],
        type: "text/csv",
        title: "AI Native Landscape Projects (CSV Export)",
      },
    ],
  };

  return new Response(JSON.stringify(catalog, null, 2), {
    headers: {
      "Content-Type": "application/linkset+json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
