---
title: "Apply policies to an MCP proxy"
description: "Apply authentication, authorization, access control, and rewrite policies to an MCP proxy in AI Workspace to govern MCP traffic."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/mcp-proxies/apply-policies/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/mcp-proxies/apply-policies.md
tags:
  - cloud
  - ai-workspace
  - mcp-proxies
  - policies
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "reference"
---

# Apply policies to an MCP proxy

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/mcp-proxies/apply-policies.md. Verify against API Platform Cloud before publishing:
     - The Policies page name and how to attach a policy to an MCP proxy (Bijira didn't give the steps).
     - The list of MCP policies available at launch.
     - Policy links: Bijira linked each policy to its page on the Policy Hub catalog site (wso2.com/api-platform/policy-hub/policies/<policy>). Those absolute links were dropped; add per-policy links once the Policy Hub docs have them. -->

After you create an MCP proxy, you control its traffic by applying policies on its **Policies** page.

AI Workspace has built-in policies for MCP proxies. A policy applies to the whole proxy, but MCP-specific policies can also define rules per tool, prompt, or other capability, which applies them at the capability level.

## Access control policies

| Policy | Description |
| :--- | :--- |
| **MCP Authentication** | Applies authentication as defined in the MCP specification. |
| **MCP Authorization** | Applies fine-grained authorization to MCP capabilities and JSON-RPC methods. |
| **MCP Access Control** | Allows or denies access to MCP capabilities. |

## Other policies

| Policy | Description |
| :--- | :--- |
| **MCP Rewrite** | Rewrites the MCP capabilities returned through the proxy. When it's used, only the rewritten capabilities are returned. |

You can also apply other standard policies to MCP proxies. Some of them aren't compatible with MCP, so their behavior varies by policy.

## Policy Hub

All policies in AI Workspace come from Policy Hub, the central registry of available policies and their latest versions. To explore the available policies, their documentation, and their configuration schemas, see [Policy Hub](../../../../../policy-hub/overview/).
