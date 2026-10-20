---
title: "Use the MCP Registry API"
description: "Query the MCP Registry API to list your organization's MCP servers, their versions, and the connection details AI clients need."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/mcp-registry/mcp-registry-api/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/mcp-registry/mcp-registry-api.md
tags:
  - cloud
  - ai-workspace
  - mcp-registry
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "reference"
---

# Use the MCP Registry API

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/mcp-servers/mcp-registry-api.md. Verify against API Platform Cloud before publishing:
     - The base URL host. Bijira used https://mcphub.bijira.dev/<org_handle>/registry/v0.1; this page uses the placeholder <mcp-hub-host>. Replace it with the API Platform Cloud host in the base URL, the examples, and the sample response.
     - That the discovery endpoints are public and need no authentication.
     - The endpoint paths, query parameters, defaults (limit 30, max 100), and response shape.
     - The format of the MCP server URL in versionDetail.remotes. -->

The MCP Registry API gives AI clients, IDE plugins, and automation tools programmatic access to your organization's MCP server catalog. Use it to discover available servers, retrieve connection details, and query specific versions.

The discovery endpoints are **public** and require no authentication.

## Base URL

```
https://<mcp-hub-host>/<org_handle>/registry/v0.1
```

Replace `<mcp-hub-host>` with the MCP Hub host for API Platform Cloud, and `<org_handle>` with your organization's handle. To find your organization's handle, see [Sign in and organizations](../../getting-started/sign-in-and-organizations.md).

## Endpoints

### List all MCP servers

Returns all registered MCP servers for the organization.

```
GET /v0.1/servers
```

**Query parameters**

| Parameter | Type | Description |
|---|---|---|
| `search` | string | Filter servers by name (substring match). |
| `version` | string | Return only servers matching this version. Use `latest` for the latest version of each server. |
| `limit` | integer | Maximum number of results to return (default: 30, max: 100). |
| `cursor` | string | Pagination cursor from a previous response's `metadata.nextCursor`. |
| `updated_since` | string (RFC3339) | Return only servers updated after this timestamp. |

**Example: list all MCP servers for an organization**

```bash
curl https://<mcp-hub-host>/<org_handle>/registry/v0.1/servers
```

---

### List versions of a server

Returns all registered versions of a specific server, newest first.

```
GET /v0.1/servers/{serverName}/versions
```

The `serverName` path parameter must be URL-encoded (for example, `myorg%2Fweather-tools`).

---

### Get a specific server version

Returns full metadata for one version of a server, including its capabilities, URLs, and schema.

```
GET /v0.1/servers/{serverName}/versions/{version}
```

Use the special version value `latest` to resolve the most recently published version.

## Response shape

The responses from `GET /v0.1/servers` and the version endpoints follow this structure:

```json
{
  "servers": [
    {
      "name": "weather-tools",
      "version": "1.0.0",
      "description": "Provides weather forecast and historical data tools.",
      "publishedAt": "2026-04-01T10:00:00Z",
      "updatedAt": "2026-04-01T10:00:00Z",
      "versionDetail": {
        "remotes": [
          {
            "type": "streamable-http",
            "url": "https://<mcp-hub-host>/t/<org_handle>/weather-tools/1.0.0"
          }
        ]
      }
    }
  ],
  "metadata": {
    "count": 1
  }
}
```

`versionDetail.remotes` contains the MCP server URL.

## Pagination

Results are returned in pages of up to 30 servers by default, or up to 100 when you set the `limit` parameter. `metadata.nextCursor` is present in the response only when there are more results beyond the current page. If all servers fit within the page size, the response doesn't include `nextCursor`.

```bash
curl "https://<mcp-hub-host>/<org_handle>/registry/v0.1/servers?cursor=<nextCursor>"
```

Continue until `metadata.nextCursor` is absent or empty, which indicates the last page.

## Related topics

- [What is an MCP registry?](mcp-registry.md)
- [Publish MCP proxies to the MCP Hub](publish-mcp-proxies.md)
- [Browse the MCP Hub](browse-mcp-hub.md)
