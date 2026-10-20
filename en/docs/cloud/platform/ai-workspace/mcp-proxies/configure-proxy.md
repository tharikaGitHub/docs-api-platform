---
title: "Configure an MCP proxy"
description: "Create an MCP proxy for an upstream MCP server in AI Workspace, deploy it to an AI gateway, and connect MCP clients to its URL."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/mcp-proxies/configure-proxy/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/mcp-proxies/configure-proxy.md
tags:
  - cloud
  - ai-workspace
  - mcp-proxies
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# Configure an MCP proxy

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/mcp-proxies/configure-proxy.md. Verify against API Platform Cloud before publishing:
     - The roles that can create MCP proxies (Bijira: Admin or Developer).
     - Menu and button names: MCP > MCP Proxies, + Create MCP Proxy, Advanced Configurations, Next, Create, Deploy to Gateway, Deploy, Stop, Back to MCP Proxy, Gateways dropdown, API Deployment History.
     - Form fields and defaults (Name, Version v1.0, Description, Context /, Target filled from the MCP server URL).
     - The MCP proxy URL format https://{gateway-host}/{proxy-context}/mcp.
     - Add screenshots of the new UI. -->

An MCP proxy is a managed endpoint that your applications use to reach an MCP server. After you deploy it, the proxy handles authentication and the other access controls you apply.

This page describes how to create an MCP proxy and deploy it to a gateway.

## Before you begin

- Access to AI Workspace with the **Admin** or **Developer** role.
- The URL of the MCP server you want to proxy.

## Create the proxy

1. In AI Workspace, go to **MCP** > **MCP Proxies**.
2. Click **+ Create MCP Proxy**.
3. Enter the **MCP Server URL**. AI Workspace connects to this URL to fetch the server's information.

    !!! note "Protected servers"
        If the MCP server is protected with static credentials, enter them in the **Advanced Configurations** section. AI Workspace uses them to fetch the server information.

4. Click **Next**.
5. Enter the proxy details:
    1. **Name** (required): A unique name, such as `mcp-tools-proxy` or `context-server-proxy`. The proxy ID is generated from the name in lowercase, with hyphens.
    2. **Version** (required): Pre-filled, such as `v1.0`. You can change it.
    3. **Description** (optional): What the proxy is for.
    4. **Context** (optional): The base path for the proxy's endpoints. The default is `/`.
    5. **Target** (required): The MCP server URL the gateway calls. It's filled in from the URL you entered earlier.
6. Click **Create**.

## Deploy the proxy to a gateway

A proxy works only after it is deployed to at least one gateway.

1. On the proxy details page, click **Deploy to Gateway**.
2. On the **Deploy to Gateway** page, find the gateway you want. Each gateway shows its name, its status (**Active** or **Not Active**), and its current deployment, if any. Use the search bar to filter the list.
3. Click **Deploy** next to the gateway.
4. Expand the gateway to see the deployment details:

    | Field | Description |
    | :--- | :--- |
    | **Deployment Status** | Active or Inactive |
    | **Deployment ID** | Unique identifier of the deployment |
    | **Deployed** | Time since the deployment |
    | **Stop** | Stops an active deployment |

The **API Deployment History** panel lists each deployment with its identifier, time, and tags such as **Latest** and **Deployed**. To undeploy the proxy from a gateway, click **Stop** next to its active deployment. Click **Back to MCP Proxy** to return to the proxy details page.

Changes take effect within seconds of a successful deployment.

## Connect an MCP client

After the proxy is deployed, its URL appears on the proxy's overview page. Select a gateway from the **Gateways** list to see the URL for calling the proxy through that gateway. The URL has this format:

```text
https://{gateway-host}/{proxy-context}/mcp
```

Configure your MCP client with this URL.

## What's next

- [Apply policies to an MCP proxy](apply-policies.md): Control the MCP traffic through the proxy.
