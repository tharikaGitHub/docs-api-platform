# API Portal and MCP Hub documentation (API Platform Cloud)

Docusaurus site for the cloud documentation of API Portal and MCP Hub, served at
`/api-platform/docs/api-portal/cloud/`.

Requires Node 20 or later (`nvm use` picks the version in `.nvmrc`).

```
npm install
npm start          # local dev server
npm run build      # production build into build/
```

Set `BASE_URL` to build for another path, for example staging:
`BASE_URL=/api-platform/docs-staging/api-portal/cloud/ npm run build`.

The navigation is in `sidebars.js`; pages are under `docs/`.
