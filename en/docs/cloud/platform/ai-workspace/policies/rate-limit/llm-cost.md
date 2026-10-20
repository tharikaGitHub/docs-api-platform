---
title: "LLM cost"
description: "Calculate the USD cost of each LLM call from token usage and pricing tier, so the LLM cost-based rate limit can enforce spending budgets."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/rate-limit/llm-cost/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/rate-limit/llm-cost.md
tags:
  - cloud
  - ai-workspace
  - rate-limit
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "reference"
---

# LLM cost

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/policies/rate-limit/llm-cost.md. Verify against API Platform Cloud before publishing:
     - The AI Workspace navigation and labels: LLM Providers, App LLM Proxies, the Guardrails tab, + Add Guardrail, Add / Submit.
     - That policies are still added from the Guardrails tab.
     - The supported providers and pricing features in the table.
     - Whether readers of API Platform Cloud can change the pricing database (config.toml is a gateway-level setting; on WSO2-managed gateways it is not under their control).
     - The metadata keys x-llm-cost and x-llm-cost-status. -->

The LLM cost policy calculates the monetary cost of each LLM API call and makes the result available to other policies, primarily the [LLM cost-based rate limit](llm-cost-based-rate-limit.md). It runs in the response phase, requires no configuration, and never exposes the cost to the caller.

!!! info "Required for cost-based rate limiting"
    Add this policy to the same provider or proxy as **LLM Cost-Based Rate Limit**, and place it **after** that policy in the policy list. The gateway evaluates response-phase policies in reverse order, so the cost is calculated before the budget is checked.

## How it works

1. When the LLM response arrives (including streaming/SSE responses), the policy reads the model name from the response body.
2. It looks up the model in the built-in pricing database.
3. It calculates the cost in USD based on token usage, context window tier, and service tier.
4. It stores the result in `SharedContext.Metadata["x-llm-cost"]` as a 10-decimal USD string (for example, `"0.0000423100"`).

The cost is internal and is never forwarded to the caller.

## Supported providers

| Provider | Notes |
|----------|-------|
| **OpenAI** | All models including o-series reasoning tokens, batch API, and flex/priority service tiers |
| **Anthropic** | Claude models including prompt caching (read/write tokens), extended thinking, and speed/geo routing |
| **Google Gemini** | Google AI Studio and Vertex AI, including multi-modal (audio, image), web search grounding, and thinking models |
| **Mistral** | All Mistral models including audio duration-based billing (Voxtral) |

## Configuration parameters

This policy has no user-configurable parameters. The pricing database path is a gateway-level system setting configured in `config.toml`.

## Add this policy

1. In AI Workspace, go to **LLM Providers** or **App LLM Proxies**.
2. Click the provider or proxy name.
3. Go to the **Guardrails** tab.
4. Click **+ Add Guardrail** and select **LLM Cost**.
5. Click **Add** (for providers) or **Submit** (for proxies).
6. Deploy the provider or proxy to apply the changes.

## Behavior

- Handles both streaming (SSE) and non-streaming responses without configuration.
- Supports context-window tiered pricing (>128k, >200k, >272k token tiers where applicable).
- Supports service tiers: standard, priority, flex, and batch rates.
- If the model is not found in the pricing database, the cost is set to `0`, a warning is logged, and the request is not blocked.
- The pricing database is bundled with the gateway image and loaded at startup. A gateway restart is required to pick up pricing file updates.

## Metadata written

| Key | Value |
|-----|-------|
| `x-llm-cost` | USD cost as a 10-decimal string, e.g. `"0.0000423100"` |
| `x-llm-cost-status` | `"calculated"` on success, `"not_calculated"` if cost could not be determined |

## Related

- [LLM cost-based rate limit](llm-cost-based-rate-limit.md): enforce spending budgets using the calculated cost.
- [Policy Hub](../../../../../../policy-hub/overview/): full policy specification and latest version.
