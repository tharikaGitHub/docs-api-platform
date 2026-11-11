# API Control Plane documentation

Docusaurus site for the API Control Plane documentation, served at
`/api-platform/docs/cloud/api-control-plane/` (the same URLs these pages had
on the cloud site).

The content comes from `docs/api-control-plane/` of the `cloud-docusaurus`
branch. The pages don't link to the rest of the cloud documentation.

## Prerequisites

Node 20 or later. Run `nvm use` to pick the version in `.nvmrc` (Node 22).

## Run and build

```
npm install
npm start          # local dev server at http://localhost:3000/api-platform/docs/cloud/api-control-plane/
npm run build      # production build into build/
npm run serve      # preview the production build locally
```

To use another port, run `npm start -- --port 3010`.

Set `BASE_URL` to build for another path, for example staging:
`BASE_URL=/api-platform/docs-staging/cloud/api-control-plane/ npm run build`.

## Structure

The navigation is in `sidebars.js`. Pages are under `docs/`, and images are
under `static/img/cloud/`. `docs/overview.md` is the home page.

| Sidebar section | Folder |
|:----------------|:-------|
| Overview, Quick Start Guide | `docs/overview.md`, `docs/quickstart-guide.md` |
| Create | `docs/create-api-proxy/` |
| Develop | `docs/develop-api-proxy/` (`security/`, `policy/`, `documents.md`) |
| Deploy | `docs/deploy-api-proxy/` |
| Test | `docs/test-api-proxy/` |
| Publish | `docs/publish-api-proxy/` |
| Observability | `docs/observability/` |
| Administer | `docs/administer/` |

Some pages are in the repository but not in the sidebar, and are left out of
search: `docs/insights/`, `docs/administer/customizing-portal-theme.md`, and
`docs/administer/creating-application-templates.md`.

## Conventions

- `onBrokenLinks` is set to `throw`, so the build fails on any broken link.
  Run `npm run build` before you commit.
- Link to other pages with relative paths to the `.md` file, and to images
  with absolute `/img/cloud/...` paths.
- Use Docusaurus admonitions (`:::note`, `:::tip`, `:::info`, `:::warning`).
- The Previous and Next links at the bottom of a page show its
  `pagination_label`, or its sidebar label. Set a `pagination_label` when the
  sidebar label isn't clear on its own, such as "Overview".
