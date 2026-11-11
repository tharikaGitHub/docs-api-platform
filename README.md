# API Portal documentation (next)

Docusaurus site for the API Portal documentation (`next`), served at
`/api-platform/docs/api-portal/next/`.

The content comes from `en/docs/api-portal/next/` of the MkDocs site on
`main`, converted to Docusaurus.

## Prerequisites

Node 20 or later. Run `nvm use` to pick the version in `.nvmrc` (Node 22).

## Run and build

```
npm install
npm start          # local dev server at http://localhost:3000/api-platform/docs/api-portal/next/
npm run build      # production build into build/
npm run serve      # preview the production build locally
```

To use another port, run `npm start -- --port 3010`.

Set `BASE_URL` to build for another path, for example staging:
`BASE_URL=/api-platform/docs-staging/api-portal/next/ npm run build`.

## Structure

The navigation is in `sidebars.js`, in the same order as the MkDocs nav.
Pages are under `docs/`, and images are under `static/img/`.

| Sidebar section | Folder |
|:----------------|:-------|
| Overview, About this Release, Concepts, Quick Start Guide | `docs/overview.md`, `docs/about-this-release.md`, `docs/concepts.md`, `docs/quickstart-guide.md` |
| Setting Up | `docs/setting-up/` |
| Discover APIs | `docs/discover-apis/` |
| Discover MCP Servers | `docs/mcp-servers/` |
| API Workflows, AI Agent Discovery, MCP Registry API | `docs/api-workflows.md`, `docs/ai-agent-discovery.md`, `docs/mcp-registry.md` |
| Applications and Credentials | `docs/consume-an-api/` |
| Admin Settings | `docs/admin-settings/` |
| Deployment | `docs/deployment/` |
| Tutorials | `docs/tutorials/` |
| References | `docs/references/`, `docs/rest-api/` |

## Conventions

- `onBrokenLinks` is set to `throw`, so the build fails on any broken link.
  Run `npm run build` before you commit.
- `.md` pages are read as plain Markdown (CommonMark), so raw HTML works in
  them. Pages that use tabs (`<Tabs>`) are `.mdx`. In `.mdx` pages, escape the
  brace of a heading ID: `## Heading \{#my-id}`.
- Link to other pages with relative paths to the `.md` or `.mdx` file, and to
  images with absolute `/img/...` paths. Links to other products' docs use
  their full `https://wso2.com/api-platform/docs/...` URL.
- Use Docusaurus admonitions (`:::note`, `:::tip`, `:::info`, `:::warning`,
  `:::danger`), and `<details>` for collapsible sections.
