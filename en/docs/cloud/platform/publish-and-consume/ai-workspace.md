---
title: "AI Workspace"
description: "Learn what AI Workspace is in API Platform Cloud and how it manages AI Gateways, LLM providers, LLM proxies, and MCP proxies."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/publish-and-consume/ai-workspace/
md_url: https://wso2.com/api-platform/docs/cloud/platform/publish-and-consume/ai-workspace.md
tags:
  - cloud
  - ai-workspace
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-18
content_type: "concept"
---

# AI Workspace

<!-- TODO: Adapted from the Bijira page(s) on the cloud branch, en/docs/cloud/ai-workspace/overview.md. Verify against API Platform Cloud before publishing:
     - How users open AI Workspace from API Platform Cloud (Bijira showed an AI Workspace button in the console header).
     - Which AI Workspace capabilities are available in API Platform Cloud at launch: AI Gateways, LLM providers, App LLM proxies, GenAI applications, MCP proxies, and policies and guardrails.
     - That the AI Workspace component docs at {BASE_URL}/ai-workspace/ apply to AI Workspace in API Platform Cloud. -->

AI Workspace is the control plane for AI traffic in API Platform Cloud. It manages AI Gateway runtimes and the AI services they expose, such as LLM providers and MCP servers, from one place.

## What AI Workspace manages

- **AI Gateways:** Register the AI Gateway runtimes that process AI traffic, and track their connectivity and deployments.
- **LLM providers:** Define reusable connections to AI services such as OpenAI, Anthropic, Azure OpenAI, Gemini, and Mistral, including credentials, security, rate limits, and guardrails.
- **App LLM proxies:** Create application-facing endpoints for AI applications and agents that need controls that differ from the underlying provider.
- **GenAI applications:** Group the API keys of an AI application or agent to track its usage, tokens, and cost.
- **MCP proxies:** Expose and govern Model Context Protocol (MCP) servers through connected gateways.
- **Policies and guardrails:** Apply content safety, PII protection, token- and cost-based rate limiting, prompt management, semantic caching, and model routing.

## How AI Workspace relates to AI Gateway

AI Workspace is the control plane, and [AI Gateway](../../../../ai-gateway/) is the runtime that handles the traffic. You configure providers, proxies, and policies in AI Workspace and deploy them to one or more connected gateways.

## Learn more

For setup and task-level guides, see the [AI Workspace documentation](../../../../ai-workspace/).
