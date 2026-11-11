# API Platform Gateway documentation (next)

Docusaurus site for the API Platform Gateway documentation (`next`), served at
`/api-platform/docs/api-gateway/next/`.

The content comes from `en/docs/api-gateway/next/` of the MkDocs site on
`main`, converted to Docusaurus.

## Prerequisites

Node 20 or later. Run `nvm use` to pick the version in `.nvmrc` (Node 22).

## Run and build

```
npm install
npm start          # local dev server at http://localhost:3000/api-platform/docs/api-gateway/next/
npm run build      # production build into build/
npm run serve      # preview the production build locally
```

To use another port, run `npm start -- --port 3010`.

Set `BASE_URL` to build for another path, for example staging:
`BASE_URL=/api-platform/docs-staging/api-gateway/next/ npm run build`.

## Structure

The navigation is in `sidebars.js`, in the same order as the MkDocs nav.
Pages are under `docs/`, and images are under `static/img/`.

| Sidebar section | Folder |
|:----------------|:-------|
| Overview, Quick Start Guide, About this release | `docs/overview.md`, `docs/quick-start-guide.md`, `docs/about-this-release.md` |
| Setup | `docs/setup/` |
| Resiliency | `docs/resiliency/` |
| Policies | `docs/policies/` |
| Deployment | `docs/deployment/` |
| Observability | `docs/observability/` |
| Analytics | `docs/analytics/` |
| Management API | `docs/gateway-controller-management-api/` |
| Performance | `docs/performance/` |

## Conventions

- `onBrokenLinks` is set to `throw`, so the build fails on any broken link.
  Run `npm run build` before you commit.
- `.md` pages are read as plain Markdown (CommonMark), so raw HTML works in
  them. Pages that use tabs (`<Tabs>`) are `.mdx`. In `.mdx` pages, escape the
  brace of a heading ID: `## Heading \{#my-id}`.
- Link to other pages with relative paths to the `.md` or `.mdx` file, and to
  images with absolute `/img/...` paths. Links to other products' docs use
  their full `https://wso2.com/api-platform/docs/...` URL.
- Use Docusaurus admonitions (`:::note`, `:::tip`, `:::info`, `:::warning`).
