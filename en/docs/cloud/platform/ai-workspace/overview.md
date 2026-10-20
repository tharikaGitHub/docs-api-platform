---
title: "AI Workspace overview"
description: "Learn how AI Workspace in API Platform Cloud manages AI Gateways, LLM providers, App LLM proxies, MCP proxies, and AI policies from one control plane."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/overview/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/overview.md
tags:
  - cloud
  - ai-workspace
  - overview
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "concept"
---

# AI Workspace overview

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/overview.md. Verify against API Platform Cloud before publishing:
     - That AI Workspace in API Platform Cloud manages the same assets as in Bijira: AI Gateways, LLM providers, App LLM proxies, GenAI applications, MCP proxies, and policies.
     - The "How it works" flow (create a gateway entry, register the runtime with a token, configure, deploy).
     - Dropped from Bijira: the link to Bijira's cloud AI Gateway overview page; it now points to the AI Gateway component docs. -->

AI Workspace is the control plane for AI Gateway runtimes in API Platform Cloud. It gives platform teams one place to register gateways, configure providers and application-facing proxies, apply policies, and manage deployments without working directly with the Gateway-Controller API.

## What AI Workspace manages

### AI Gateways

Register and manage the AI Gateway runtimes that process AI traffic.

- Create gateway entries and associate them with environments.
- Generate registration tokens to connect runtimes to the control plane.
- Track gateway connectivity and deployment status.

For more information, see [Set up an AI Gateway](ai-gateways/setting-up.md).

### LLM providers

Define reusable connections to upstream AI services such as OpenAI, Anthropic, Azure OpenAI, Gemini, and Mistral.

- Store provider credentials and connection details.
- Control which upstream resources are exposed.
- Apply provider-level security, rate limits, and guardrails.

For more information, see [LLM providers](llm-providers/overview.md).

### App LLM proxies

Create application-facing endpoints for GenAI applications and agents when they need controls that differ from the underlying provider.

- Publish specialized proxy endpoints for distinct GenAI apps, copilots, or agents.
- Isolate consumers with separate API keys and policies.
- Apply proxy-level resources, security settings, and guardrails.

For more information, see [App LLM proxies](llm-proxies/overview.md).

### GenAI applications

Represent the AI applications and agents in your project, and map existing API keys to them for application-level visibility.

- Group multiple API keys under one named application.
- Track usage, tokens, and cost per application.
- Improve governance and accountability for shared GenAI workloads.

For more information, see [GenAI applications](genai-applications.md).

### MCP proxies

Expose and govern Model Context Protocol (MCP) servers through connected gateways.

- Connect remote MCP servers through managed proxy endpoints.
- Apply MCP-specific authentication, authorization, rewrite, and access-control policies.
- Control how MCP capabilities are exposed to clients.

For more information, see [MCP proxies](mcp-proxies/overview.md).

### Policies and guardrails

Configure AI-specific governance controls for providers and proxies.

- Apply content safety and PII protection guardrails.
- Configure token-based and cost-based rate limiting.
- Use prompt management, semantic cache, and model-routing policies.

For more information, see [Policies](policies/overview.md).

## How it works

1. Create an AI Gateway entry in AI Workspace.
2. Start the gateway runtime and register it with the generated token.
3. Configure LLM providers or MCP proxies in AI Workspace.
4. Deploy those configurations to one or more connected gateways.
5. Manage runtime behavior through policies, guardrails, and gateway deployments.

## How AI Workspace relates to AI Gateway

AI Workspace is the control plane. [AI Gateway](../../../../ai-gateway/) is the runtime that handles the traffic.

- Use the AI Gateway documentation when you work directly with the runtime, the Gateway-Controller API, or the standalone deployment model.
- Use the AI Workspace documentation when you want centralized lifecycle management for connected gateways and their AI assets.

## Get started

To start using AI Workspace, follow the [AI Workspace quickstart](quickstart.md).
