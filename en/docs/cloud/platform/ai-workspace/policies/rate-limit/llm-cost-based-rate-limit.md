---
title: "LLM cost-based rate limit"
description: "Enforce monetary spending budgets on LLM traffic in AI Workspace, using the cost that the LLM cost policy calculates for each call."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/rate-limit/llm-cost-based-rate-limit/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/rate-limit/llm-cost-based-rate-limit.md
tags:
  - cloud
  - ai-workspace
  - rate-limit
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# LLM cost-based rate limit

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/policies/rate-limit/llm-cost-based-rate-limit.md. Verify against API Platform Cloud before publishing:
     - The AI Workspace navigation and labels: LLM Providers, App LLM Proxies, the Guardrails tab, + Add Guardrail, LLM Cost-Based Rate Limit, Add / Submit.
     - The policy ordering rule (this policy before LLM Cost in the list).
     - The budget limits and the response headers, including the dollar headers. -->

The LLM cost-based rate limit policy enforces monetary spending limits on LLM traffic. It reads the cost of each API call calculated by the [LLM cost](llm-cost.md) policy and blocks requests once a configured budget is exceeded within a time window.

!!! info "Prerequisites"
    Add the **LLM Cost** policy to the same provider or proxy, **after** this policy in the policy list. The gateway evaluates response-phase policies in reverse order, so the cost is calculated before the budget is checked. Without LLM Cost, no cost data is available and budget enforcement is skipped.

## Configuration parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| **Budget Limits** | Yes | One or more spending caps. Each limit has an `amount` (in USD) and a `duration`. |
| **Budget Limits[].amount** | Yes | Maximum spend in USD within the time window (e.g., `10` for $10.00). Minimum: `0.000001`. |
| **Budget Limits[].duration** | Yes | Time window as a Go duration string (e.g., `"1h"`, `"24h"`, `"168h"` for one week). |

When multiple budget limits are configured, all of them are enforced, and the most restrictive active limit applies.

## Add this policy

1. Add this policy first, then add the **LLM Cost** policy after it in the policy list.
2. In AI Workspace, go to **LLM Providers** or **App LLM Proxies**.
3. Click the provider or proxy name.
4. Go to the **Guardrails** tab.
5. Click **+ Add Guardrail** and select **LLM Cost-Based Rate Limit**.
6. Add one or more budget limits, each with an **amount** and **duration**.
7. Click **Add** (for providers) or **Submit** (for proxies).
8. Deploy the provider or proxy to apply the changes.

## Behavior

- Cost is read from `x-llm-cost` in shared metadata, set by the LLM cost policy.
- Accumulated spend is tracked per route within each time window.
- When the spend reaches the configured budget, subsequent requests receive `429 Too Many Requests`.
- Each budget window resets automatically when its duration elapses.
- Response headers include both internal-unit values and dollar amounts:

| Header | Description |
|--------|-------------|
| `X-RateLimit-Limit` | Budget limit in internal scaled units |
| `X-RateLimit-Remaining` | Remaining budget in internal scaled units |
| `x-ratelimit-cost-limit-dollars` | Budget limit in USD (e.g., `10.000000`) |
| `x-ratelimit-cost-remaining-dollars` | Remaining budget in USD (e.g., `7.432100`) |

## Example: $10 per hour and $100 per day

The following configuration enforces two spending limits at the same time. Requests proceed only while both are satisfied; once either limit is reached, requests are blocked until that window resets.

| Budget Limit | amount | duration |
|--------------|--------|----------|
| Hourly cap | `10` | `1h` |
| Daily cap | `100` | `24h` |

## Related

- [LLM cost](llm-cost.md): required; calculates the cost stored in metadata.
- [Token-based rate limit](token-based-rate-limit.md): enforce token consumption limits instead of monetary budgets.
- [Policy Hub](../../../../../../policy-hub/overview/): full policy specification and latest version.
