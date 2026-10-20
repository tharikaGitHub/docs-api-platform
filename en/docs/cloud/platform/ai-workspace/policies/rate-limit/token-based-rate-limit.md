---
title: "Token-based rate limit"
description: "Limit LLM traffic by prompt, completion, or total token consumption within a time window that you configure in AI Workspace."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/rate-limit/token-based-rate-limit/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/rate-limit/token-based-rate-limit.md
tags:
  - cloud
  - ai-workspace
  - rate-limit
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# Token-based rate limit

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/policies/rate-limit/token-based-rate-limit.md. Verify against API Platform Cloud before publishing:
     - The AI Workspace navigation and labels: LLM Providers, App LLM Proxies, the Guardrails tab, + Add Guardrail, Token Based Rate Limit, Add / Submit.
     - The rate limit response headers.
     - Dropped from Bijira: the link to the basic rate limit policy, which has no API Platform Cloud page (it is commented out in Bijira's nav too). -->

The token-based rate limit policy enforces rate limits based on token consumption rather than request count. You can apply limits to prompt (input) tokens, completion (output) tokens, or total tokens, independently or in combination.

## Configuration parameters

Configure at least one of the three limit categories. Any combination is valid.

| Parameter | Required | Description |
|-----------|----------|-------------|
| **Prompt Token Limits** | Conditional | Rate limits applied to prompt (input) tokens. |
| **Completion Token Limits** | Conditional | Rate limits applied to completion (output) tokens. |
| **Total Token Limits** | Conditional | Rate limits applied to combined prompt + completion tokens. |

Each entry within a category requires:

| Field | Required | Description |
|-------|----------|-------------|
| **count** | Yes | Maximum tokens allowed within the duration. Minimum: `1`. |
| **duration** | Yes | Time window as a Go duration string (e.g., `"1m"`, `"1h"`, `"24h"`). |

When multiple limits are configured within a category, the most restrictive limit is enforced.

## Add this policy

1. In AI Workspace, go to **LLM Providers** or **App LLM Proxies**.
2. Click the provider or proxy name.
3. Go to the **Guardrails** tab.
4. Click **+ Add Guardrail** and select **Token Based Rate Limit**.
5. Configure limits for prompt tokens, completion tokens, total tokens, or any combination.
6. Click **Add** (for providers) or **Submit** (for proxies).
7. Deploy the provider or proxy to apply the changes.

## Behavior

- Token counts are extracted from the LLM provider's response using paths defined in the provider template.
- When any configured limit is exceeded, the gateway returns `429 Too Many Requests`.
- Each counter resets after its configured duration elapses.
- Responses include rate limit headers:

| Header | Description |
|--------|-------------|
| `X-RateLimit-Limit` | Configured token limit |
| `X-RateLimit-Remaining` | Remaining tokens in the current window |
| `X-RateLimit-Reset` | Time (epoch seconds) when the window resets |
| `RateLimit-*` | IETF equivalents of the above |

## Example: cap total tokens per minute

Block requests once 100,000 total tokens have been consumed in a 1-minute window.

| Parameter | Value |
|-----------|-------|
| Total Token Limits — count | `100000` |
| Total Token Limits — duration | `1m` |

## Example: separate prompt and completion limits

Limit prompt tokens to 50,000 per hour and completion tokens to 20,000 per hour independently.

| Category | count | duration |
|----------|-------|----------|
| Prompt Token Limits | `50000` | `1h` |
| Completion Token Limits | `20000` | `1h` |

## Related

- [LLM cost-based rate limit](llm-cost-based-rate-limit.md): enforce monetary spending budgets instead of token counts.
- [Policy Hub](../../../../../../policy-hub/overview/): full policy specification and latest version.
