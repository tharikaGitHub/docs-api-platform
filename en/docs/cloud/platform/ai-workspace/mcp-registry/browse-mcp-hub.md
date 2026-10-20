---
title: "Browse the MCP Hub"
description: "Explore the MCP servers registered in your organization's MCP Hub and review their tools, resources, prompts, and connection details."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/mcp-registry/browse-mcp-hub/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/mcp-registry/browse-mcp-hub.md
tags:
  - cloud
  - ai-workspace
  - mcp-registry
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# Browse the MCP Hub

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/mcp-servers/browse-mcp-hub.md. Verify against API Platform Cloud before publishing:
     - How readers reach the MCP Hub: Bijira linked to its Developer Portal (devportal.bijira.dev); the URL was dropped. Confirm the MCP Hub's location (for example, in the Developer Portal) and add it.
     - The MCP Servers navigation item, the server card contents, and the server detail page layout.
     - The capability panels (tools, resources, prompts) and the connection configuration shown.
     - Add screenshots of the new UI (the Bijira screenshots of the MCP Hub and the server detail page were dropped). -->

The MCP Hub is the visual catalog for your organization's MCP registry. Use it to explore the available MCP servers, review their capabilities, and get the connection details you need to connect them to an AI client or agent.

## Before you begin

- You have access to your organization's MCP Hub.

## Step 1: Open the MCP Hub

1. Open your organization's MCP Hub.
2. In the left navigation menu, select **MCP Servers**.

The MCP Hub lists all MCP servers registered in your organization's registry. Each card shows the server name, version, description, and any tags.

## Step 2: View a server

Click a server card to open its detail page. The page shows the MCP server details, including its tools, resources, prompts, and connection configuration.

## Step 3: Explore its capabilities

Scroll to the capabilities section. The server's tools, resources, and prompts are listed in expandable panels.

- **Tools:** Each panel shows the tool name, description, and input schema with the parameters the tool accepts. Expand a tool to see the full schema before you connect.
- **Resources:** Each panel shows the resource name, description, URI, and MIME type.
- **Prompts:** Each panel shows the prompt name, description, and the arguments it accepts.

## Related topics

- [What is an MCP registry?](mcp-registry.md)
- [Publish MCP proxies to the MCP Hub](publish-mcp-proxies.md)
- [Use the MCP Registry API](mcp-registry-api.md)
