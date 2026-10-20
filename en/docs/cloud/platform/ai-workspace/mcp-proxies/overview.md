---
title: "MCP proxies overview"
description: "Learn what the Model Context Protocol is and how an MCP proxy in AI Workspace adds security, policies, and observability to MCP traffic."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/mcp-proxies/overview/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/mcp-proxies/overview.md
tags:
  - cloud
  - ai-workspace
  - mcp-proxies
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "concept"
---

# MCP proxies overview

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/mcp-proxies/overview.md. Verify against API Platform Cloud before publishing:
     - That observability for MCP traffic (which tools and servers are called, error causes) is available in API Platform Cloud at launch. -->

## What is the Model Context Protocol

The Model Context Protocol (MCP) is a JSON-RPC-based protocol that standardizes how applications interact with large language models (LLMs). It lets applications share context, such as local files, databases, or APIs, with LLMs, and expose tools and capabilities for AI-driven workflows and integrations.

MCP uses a host, client, and server architecture and supports two transports: stdio and streamable HTTP. stdio is common for communication between a client and a server on the same machine. In most cases, though, MCP servers run in remote environments with proper authorization controls, so that LLM applications can access data securely.

For more information, see the [MCP specification](https://modelcontextprotocol.io/introduction).

## What is an MCP proxy

An MCP proxy connects the gateway to an upstream MCP server. MCP clients connect to the endpoint the gateway provides for the proxy, and the gateway forwards their traffic to the upstream server. You apply policies on the proxy to control the MCP traffic that goes through the gateway.

## What an MCP proxy offers

MCP defines how agents and tools communicate, but it doesn't address everything that real enterprise environments need. An MCP proxy adds:

- **Security:** Authentication and authorization for MCP traffic.
- **Policies:** Rules that control MCP traffic through the gateway.
- **Observability:** Visibility into which tools and servers are called and what causes errors.

## What's next

- [Configure an MCP proxy](configure-proxy.md): Create and deploy your first MCP proxy.
- [Apply policies to an MCP proxy](apply-policies.md): Control MCP traffic after you deploy the proxy.
