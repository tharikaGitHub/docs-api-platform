# API Platform documentation (common pages)

Docusaurus site for the API Platform pages that are shared across products:
the overview, Get Started, Analytics, Monetization, Policy Hub, Guides, Tools,
FAQ and Glossary. It is served at `/api-platform/docs/`.

The content comes from `en/docs/` of the MkDocs site on `main` (`index.md`,
`get-started.md`, `analytics/`, `monetization/`, `policy-hub/`, `guides/`,
`tools/`, `faq.md` and `glossary.md`), converted to Docusaurus. Links to the
product documentation (API Gateway, AI Gateway, API Portal, Cloud, and so on)
use their full `https://wso2.com/api-platform/docs/...` URLs.

## Prerequisites

Node 20 or later. Run `nvm use` to pick the version in `.nvmrc` (Node 22).

## Run and build

```
npm install
npm start          # local dev server at http://localhost:3000/api-platform/docs/
npm run build      # production build into build/
npm run serve      # preview the production build locally
```

To use another port, run `npm start -- --port 3010`.

Set `BASE_URL` to build for another path, for example staging:
`BASE_URL=/api-platform/docs-staging/ npm run build`.

## Structure

The navigation is in `sidebars.js`, in the same order as the MkDocs nav.
`docs/index.md` is the home page (`/api-platform/docs/`).

| Sidebar section | Folder |
|:----------------|:-------|
| Overview, Get Started | `docs/index.md`, `docs/get-started.md` |
| Analytics | `docs/analytics/` |
| Monetization | `docs/monetization/` |
| Policy Hub | `docs/policy-hub/` |
| Guides | `docs/guides/` |
| Tools | `docs/tools/` (screenshots in each tool's `images/` folder) |
| FAQ, Glossary | `docs/faq.md`, `docs/glossary.md` |

Images are under `static/img/`, and the video clips used by the guides are
under `static/clips/`.

The Guides overview and the service provider pages (`docs/guides/overview.md`,
`docs/guides/service-providers/`) use HTML blocks with Markdown inside them.
Their styles are in `src/css/guides.css`, and
`src/clientModules/guidesSwitches.js` adds the "By use case / By service
provider" switch and the deployment type switch (Cloud, Hybrid, Self-hosted).
Content for one deployment type goes in an element with a `data-deployments`
attribute, for example `<div class="vendor-links" data-deployments="cloud" markdown="1">`.

## Conventions

- `onBrokenLinks` is set to `throw`, so the build fails on any broken link.
  Run `npm run build` before you commit.
- `.md` pages are read as plain Markdown (CommonMark), so raw HTML works in
  them. Pages that use tabs (`<Tabs>`) are `.mdx`. In `.mdx` pages, escape the
  brace of a heading ID: `## Heading \{#my-id}`.
- Link to other pages with relative paths to the `.md` or `.mdx` file, and to
  images with absolute `/img/...` paths. For an image that differs in light
  and dark mode, add `#gh-light-mode-only` or `#gh-dark-mode-only` to its URL.
- Raw HTML isn't rewritten by Docusaurus, so media in raw HTML, such as
  `<source src>`, uses the full path including the base URL
  (`/api-platform/docs/clips/...`).
- Use Docusaurus admonitions (`:::note`, `:::tip`, `:::info`, `:::warning`,
  `:::danger`), and `<details>` for collapsible sections.
