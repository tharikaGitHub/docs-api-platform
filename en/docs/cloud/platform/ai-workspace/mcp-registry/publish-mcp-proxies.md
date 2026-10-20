---
title: "Publish MCP proxies to the MCP Hub"
description: "Publish a deployed MCP proxy from AI Workspace so that it is discoverable through the MCP Hub and the MCP Registry API."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/mcp-registry/publish-mcp-proxies/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/mcp-registry/publish-mcp-proxies.md
tags:
  - cloud
  - ai-workspace
  - mcp-registry
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# Publish MCP proxies to the MCP Hub

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/mcp-servers/publish-mcp-proxies.md. Verify against API Platform Cloud before publishing:
     - The Publish to MCP Hub button name and where it appears on the MCP proxy page.
     - That publishing makes the proxy discoverable immediately.
     - Add screenshots of the new UI (the Bijira screenshot of the MCP proxy overview was dropped). -->

After you [configure and deploy an MCP proxy](../mcp-proxies/configure-proxy.md) in AI Workspace, you can publish it to the MCP Hub. Publishing registers the proxy in your organization's MCP registry, so it is discoverable through the MCP Hub and the MCP Registry API.

## Publish to the MCP Hub

1. In AI Workspace, open the MCP proxy you want to publish.
2. Click **Publish to MCP Hub**.

The proxy is registered in your organization's MCP registry and becomes discoverable through the [MCP Hub](browse-mcp-hub.md) and the [MCP Registry API](mcp-registry-api.md).

## Related topics

- [What is an MCP registry?](mcp-registry.md)
- [Browse the MCP Hub](browse-mcp-hub.md)
- [Use the MCP Registry API](mcp-registry-api.md)
