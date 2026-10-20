---
title: "What is an MCP registry?"
description: "Learn how the API Platform Cloud MCP registry catalogs published MCP proxies and exposes them through the MCP Hub and the MCP Registry API."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/mcp-registry/mcp-registry/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/mcp-registry/mcp-registry.md
tags:
  - cloud
  - ai-workspace
  - mcp-registry
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "concept"
---

# What is an MCP registry?

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/mcp-servers/mcp-registry.md. Verify against API Platform Cloud before publishing:
     - That API Platform Cloud has a built-in MCP registry scoped to each organization.
     - That publishing an MCP proxy from AI Workspace registers it in that registry.
     - That the registry is exposed through both the MCP Hub and the MCP Registry API. -->

An [MCP registry](https://modelcontextprotocol.io/registry/about) is a discovery catalog for MCP servers. It lets AI clients, IDE plugins, and other tools find available MCP servers by name and version.

A registry stores metadata about each server: its name, version, description, capabilities, and endpoint URL. Consumers query the registry to find out which servers are available and how to connect to them.

## The API Platform Cloud MCP registry

API Platform Cloud includes a built-in MCP registry for each organization. When you publish an MCP proxy from AI Workspace, it is registered in your organization's registry.

The registry is available in two ways:

- **MCP Registry API:** A REST API for discovery, intended for AI clients, IDE plugins, and automation tools. It follows the [MCP Registry API specification](https://modelcontextprotocol.io/registry/about).
- **MCP Hub:** A visual catalog for browsing and discovering the MCP servers registered in your organization. The MCP registry powers the MCP Hub.

## Related topics

- [Publish MCP proxies to the MCP Hub](publish-mcp-proxies.md)
- [Browse the MCP Hub](browse-mcp-hub.md)
- [Use the MCP Registry API](mcp-registry-api.md)
