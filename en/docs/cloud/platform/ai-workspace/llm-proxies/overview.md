---
title: "App LLM proxies overview"
description: "Learn when to add an App LLM proxy on top of an LLM provider to give a Gen AI application or agent its own endpoint and controls."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/llm-proxies/overview/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/llm-proxies/overview.md
tags:
  - cloud
  - ai-workspace
  - llm-proxies
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "concept"
---

# App LLM proxies overview

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/llm-proxies/overview.md. Verify against API Platform Cloud before publishing:
     - That proxy API keys expire after 90 days.
     - That semantic caching can be attached as a proxy policy. -->

## Why add a proxy on top of a provider

An **LLM provider** connects the gateway to an upstream LLM service, and applications can call it directly. An **App LLM proxy** is an optional, application-facing endpoint on top of a provider, for when a Gen AI application or agent needs controls of its own.

The main benefit is specialization and isolation. One provider can serve applications directly, or it can back several App LLM proxies: one for a customer-facing chatbot with strict guardrails, another for an internal agent with relaxed settings, and another for a workflow-specific assistant. Each proxy is configured independently, and you can change the provider behind a proxy without changing the applications or agents that call it.

## What an App LLM proxy gives you

**A controlled endpoint**
The proxy gives your Gen AI application or agent a stable URL. You choose which resources (API paths) it exposes, and you can enable or disable them without changing the upstream provider.

**Controls only where you need them**
If the provider's own controls are enough, call the provider directly. Use an App LLM proxy only when an application or agent needs its own authentication, guardrails, exposed resources, or traffic controls.

**Authentication**
Require applications or agents to present an API key before their requests reach the LLM. Keys are generated per proxy and expire after 90 days.

**Guardrails**
Attach content safety, PII masking, or semantic caching policies to all resources of the proxy, or only to specific resources.

**Separate endpoints for applications and environments**
Create a proxy per application, agent, team, or environment (development, staging, production), each with its own rate limits, guardrails, keys, and exposed resources, all backed by the same provider.

**Provider changes without client changes**
Applications and agents call the proxy URL, not the provider, so you can switch the provider behind a proxy (for example, from OpenAI to Azure OpenAI) without changing any client.

## What's next

- [Configure an App LLM proxy](configure-proxy.md): Create and deploy your first proxy.
- [Manage an App LLM proxy](manage-proxy.md): Change a proxy's configuration, guardrails, and resources after you deploy it.
