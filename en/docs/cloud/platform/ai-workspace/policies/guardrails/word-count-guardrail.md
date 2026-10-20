---
title: "Word count guardrail"
description: "Enforce minimum and maximum word counts on LLM prompts or responses with the Word Count Guardrail in AI Workspace."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/guardrails/word-count-guardrail/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/guardrails/word-count-guardrail.md
tags:
  - cloud
  - ai-workspace
  - guardrails
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# Word count guardrail

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/policies/guardrails/word-count-guardrail.md. Verify against API Platform Cloud before publishing:
     - The guardrail name in the side panel (Word Count Guardrail), the Advanced Settings request and response sections, and the Add / Submit buttons.
     - The parameters and defaults (the table is kept as in Bijira).
     - The intervention response in the example. -->

The Word Count Guardrail checks the number of words in a request or response. Use it to enforce content length rules, for example to limit how long a prompt can be or to make sure responses meet a minimum length.

## Configuration

All parameters are under **Advanced Settings**. Configure a **request** section, a **response** section, or both.

### Request and response parameters

The request and response sections each have the following parameters:

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| **min** | Yes | `0` | Minimum number of words required. |
| **max** | Yes | `0` | Maximum number of words allowed. Set to `0` to disable the upper limit. |
| **jsonPath** | No | — | JSONPath expression to extract a specific field for validation (e.g., `$.messages[0].content`). If not set, the entire payload is evaluated. |
| **invert** | No | `false` | When `true`, the guardrail intervenes when the word count **is within** the configured range instead of outside it. |
| **showAssessment** | No | `false` | When `true`, the intervention response includes details about the violation. |

## Add this guardrail

1. Go to **AI Workspace** > **LLM Providers** or **App LLM Proxies**.
2. Click the provider or proxy name.
3. Go to the **Guardrails** tab.
4. Click **+ Add Guardrail** and select **Word Count Guardrail** from the side panel.
5. Expand **Advanced Settings** and configure the **request** section, the **response** section, or both.
6. Click **Add** (for providers) or **Submit** (for proxies).
7. Deploy the provider or proxy to apply the changes.

## Example: Limit prompt length

The following configuration blocks requests where the user message is longer than 50 words.

**Advanced Settings: request**

| Parameter | Value |
|-----------|-------|
| min | `1` |
| max | `50` |
| jsonPath | `$.messages[0].content` |
| invert | `false` |
| showAssessment | `true` |

**Intervention response**

```json
{
  "type": "WORD_COUNT_GUARDRAIL",
  "message": {
    "action": "GUARDRAIL_INTERVENED",
    "interveningGuardrail": "Word Count Guardrail",
    "direction": "REQUEST",
    "actionReason": "Violation of applied word count constraints detected.",
    "assessments": "Violation of word count detected. Expected between 1 and 50 words."
  }
}
```

## Related topics

- [Guardrails overview](overview.md)
- [Sentence count guardrail](sentence-count-guardrail.md)
- [Policy Hub](../../../../../../policy-hub/overview/): The full policy specification and latest version.
