---
title: "Prompt template"
description: "Apply reusable, parameterized prompt templates to LLM requests in AI Workspace, so clients send a template:// reference instead of a raw prompt."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/other-policies/prompt-template/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/other-policies/prompt-template.md
tags:
  - cloud
  - ai-workspace
  - prompt-management
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# Prompt template

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/policies/other-policies/prompt-template.md. Verify against API Platform Cloud before publishing:
     - The AI Workspace navigation and labels: LLM Providers, App LLM Proxies, the Guardrails tab, + Add Guardrail, Prompt Template, Advanced Settings, Add / Submit.
     - The advanced settings and their defaults (JSON Path, On Missing Template, On Unresolved Placeholder). -->

The prompt template policy applies reusable, parameterized prompt templates to requests. Instead of sending a raw prompt, clients send a template reference (`template://<name>?param=value`), and the gateway substitutes the parameters into the configured template before forwarding the request to the LLM.

## Configuration parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| **Templates** | Yes | A list of named templates. Each template has a **name** (identifier) and a **prompt** string containing placeholders in the format `[[parameter-name]]`. |

### Template placeholder syntax

Use `[[parameter-name]]` inside the prompt string to mark substitution points:

```
Translate the following text from [[from]] to [[to]]: [[text]]
```

When a client calls `template://translate?from=English&to=Spanish&text=Hello`, the policy replaces each placeholder with the corresponding query parameter value.

## Advanced settings

| Parameter | Default | Description |
|-----------|---------|-------------|
| **JSON Path** | — | JSONPath expression to limit template resolution to a specific field in the request payload. If omitted, template references are resolved across the entire request payload. |
| **On Missing Template** | `error` | Behavior when a referenced template name is not found. `error` returns an immediate error response; `passthrough` leaves the original template reference unchanged. |
| **On Unresolved Placeholder** | `keep` | Behavior when a placeholder has no matching query parameter. `keep` leaves the placeholder as-is; `empty` replaces it with an empty string; `error` returns an immediate error response. |

## Add this policy

1. In AI Workspace, go to **LLM Providers** or **App LLM Proxies**.
2. Click the provider or proxy name.
3. Go to the **Guardrails** tab.
4. Click **+ Add Guardrail** and select **Prompt Template**.
5. Add one or more templates, each with a name and a prompt string using `[[param]]` placeholders.
6. Optionally, expand **Advanced Settings** to configure the JSON Path, On Missing Template, or On Unresolved Placeholder behavior.
7. Click **Add** (for providers) or **Submit** (for proxies).
8. Deploy the provider or proxy to apply the changes.

## Example: translation template

**Configured template:**

| Field | Value |
|-------|-------|
| Name | `translate` |
| Prompt | `Translate the following text from [[from]] to [[to]]: [[text]]` |

**Client request body:**

```json
{
  "model": "gpt-4o",
  "messages": [
    {
      "role": "user",
      "content": "template://translate?from=English&to=Spanish&text=Hello, how are you?"
    }
  ]
}
```

**Request forwarded to the LLM:**

```json
{
  "model": "gpt-4o",
  "messages": [
    {
      "role": "user",
      "content": "Translate the following text from English to Spanish: Hello, how are you?"
    }
  ]
}
```

## Related

- [Policies overview](../overview.md)
- [Prompt decorator](prompt-decorator.md): inject fixed content into prompts without client-side changes.
- [Policy Hub](../../../../../../policy-hub/overview/): full policy specification and latest version.
