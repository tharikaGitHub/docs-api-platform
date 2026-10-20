---
title: "Prompt decorator"
description: "Prepend or append system instructions or context to every LLM request in AI Workspace, without changing the client application."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/other-policies/prompt-decorator/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/other-policies/prompt-decorator.md
tags:
  - cloud
  - ai-workspace
  - prompt-management
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# Prompt decorator

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/policies/other-policies/prompt-decorator.md. Verify against API Platform Cloud before publishing:
     - The AI Workspace navigation and labels: LLM Providers, App LLM Proxies, the Guardrails tab, + Add Guardrail, Prompt Decorator, Add / Submit.
     - The Decoration, JSON Path and Append parameters and their defaults. -->

The prompt decorator policy prepends or appends content to prompts before they are sent to the upstream LLM. Use it to inject system instructions, safety guidelines, or contextual information into every request, without changing the client application.

## Configuration parameters

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| **Decoration** | Yes | — | The content to inject. Either a plain text string (for single-field prompts) or a list of chat messages with `role` and `content` (for chat-format requests). |
| **JSON Path** | Yes | — | A JSONPath expression pointing to the field in the request body where the decoration is applied (e.g., `$.messages` for a chat array, `$.prompt` for a text field). |
| **Append** | No | `false` | When `true`, the decoration is appended after the existing content. When `false` (default), it is prepended before. |

### Decoration formats

**Text decoration**: use a plain string to inject text into a single-field prompt:

```json
"decoration": "You are a helpful assistant. Always respond in formal English.\n\n"
```

**Chat message decoration**: use an array of role/content objects to inject messages into a chat conversation:

```json
"decoration": [
  {
    "role": "system",
    "content": "You are a helpful assistant. Only answer questions about software development."
  }
]
```

## Add this policy

1. In AI Workspace, go to **LLM Providers** or **App LLM Proxies**.
2. Click the provider or proxy name.
3. Go to the **Guardrails** tab.
4. Click **+ Add Guardrail** and select **Prompt Decorator**.
5. Enter the **Decoration** content.
6. Set the **JSON Path** to the field in the request where content should be injected.
7. Choose whether to **Append** (after) or prepend (before) the existing content.
8. Click **Add** (for providers) or **Submit** (for proxies).
9. Deploy the provider or proxy to apply the changes.

## Example: inject a system prompt

The following configuration prepends a system instruction to every chat completion request:

| Parameter | Value |
|-----------|-------|
| JSON Path | `$.messages` |
| Decoration | `[{"role": "system", "content": "Always respond in plain text. Do not use markdown formatting."}]` |
| Append | `false` |

**Original request:**

```json
{
  "model": "gpt-4o",
  "messages": [
    {"role": "user", "content": "Explain recursion."}
  ]
}
```

**Request after decoration (sent to the LLM):**

```json
{
  "model": "gpt-4o",
  "messages": [
    {"role": "system", "content": "Always respond in plain text. Do not use markdown formatting."},
    {"role": "user", "content": "Explain recursion."}
  ]
}
```

## Related

- [Policies overview](../overview.md)
- [Prompt template](prompt-template.md): apply reusable prompt templates with parameter substitution.
- [Policy Hub](../../../../../../policy-hub/overview/): full policy specification and latest version.
