---
title: "AI Workspace policies overview"
description: "Apply built-in guardrail, rate limit, and traffic management policies to LLM providers and App LLM proxies in AI Workspace."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/overview/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/overview.md
tags:
  - cloud
  - ai-workspace
  - policies
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "concept"
---

# AI Workspace policies overview

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/policies/overview.md. Verify against API Platform Cloud before publishing:
     - The built-in policy list for launch, and its grouping into guardrails, rate limits, and other policies.
     - Left out because their pages are pending in the nav: Semantic Prompt Guard (guardrails), and Token-Based Rate Limit and Rate Limit - Basic under other policies. Add them back when their pages are enabled.
     - That policies can be applied at both the provider level and the proxy level, globally or per resource, and that both levels are enforced.
     - That all guardrail policies come from Policy Hub. Bijira linked to the Policy Hub marketing page; this page links to the Policy Hub docs.
     - "Writing an AI policy" covers gateways you run yourself (hybrid); confirm it ships for API Platform Cloud. -->

AI Workspace provides built-in policies that control how traffic flows through your LLM providers and App LLM proxies. You can apply a policy at the provider level, where it affects all proxies that use the provider, or at the proxy level, where it is scoped to a specific proxy or to individual endpoints.

## Guardrails

Guardrails enforce content safety and compliance on requests and responses.

| Guardrail | Description |
|-----------|-------------|
| [PII Masking Regex](guardrails/regex-pii-masking.md) | Detect and mask PII in requests and responses using regex patterns. |
| [Azure Content Safety](guardrails/azure-content-safety.md) | Filter harmful content using Azure Content Safety moderation. |
| [Word Count](guardrails/word-count-guardrail.md) | Enforce word count limits on prompts or responses. |
| [Sentence Count](guardrails/sentence-count-guardrail.md) | Enforce sentence count limits on prompts or responses. |

## Rate limits

Rate limit policies control how much LLM traffic, by token count or by monetary cost, can flow through a provider or proxy.

| Policy | Description |
|--------|-------------|
| [LLM Cost](rate-limit/llm-cost.md) | Calculate the USD cost of each LLM call and make it available to cost-based rate limiting. No configuration required. |
| [Token-Based Rate Limit](rate-limit/token-based-rate-limit.md) | Limit prompt, completion, or total token consumption within a time window. |
| [LLM Cost-Based Rate Limit](rate-limit/llm-cost-based-rate-limit.md) | Enforce monetary spending budgets, for example $10 per hour. Requires the LLM Cost policy. |

## Other policies

| Policy | Description |
|--------|-------------|
| [Model Round Robin](other-policies/model-round-robin.md) | Distribute requests across multiple models in round-robin order. |
| [Prompt Decorator](other-policies/prompt-decorator.md) | Prepend or append content to every request. |
| [Prompt Template](other-policies/prompt-template.md) | Apply reusable parameterized prompt templates to requests. |
| [Semantic Cache](other-policies/semantic-cache.md) | Cache LLM responses and serve them for semantically similar requests. |

## Where policies are applied

You configure policies on the management tabs of your LLM providers and App LLM proxies:

- **LLM provider:** Rate limits and guardrails configured on a provider apply to all proxies that use it. You can apply guardrails globally (to all endpoints) or per resource (to specific endpoints).
- **App LLM proxy:** Guardrails configured on a proxy apply globally (to all endpoints) or per resource (to specific endpoints), so you can tailor the behavior for a specific GenAI application or agent.

When both provider-level and proxy-level policies are active, both are enforced. Provider-level policies act as a baseline, and proxy-level policies add further protection.

For more information, see [LLM providers](../llm-providers/overview.md) and [App LLM proxies](../llm-proxies/overview.md).

## Policy Hub

All guardrail policies in AI Workspace come from Policy Hub, the central registry of available policies and their latest versions. To explore all available guardrails, their documentation, and their configuration schemas, see [Policy Hub](../../../../../policy-hub/overview/).

## What's next

- [Guardrails overview](guardrails/overview.md): Explore the available guardrails and how to configure them.
- [Writing an AI policy](writing-an-ai-policy.md): Write a custom AI policy for a gateway that you run yourself.
