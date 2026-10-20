---
title: "AI Workspace guardrails overview"
description: "Detect unsafe content, mask sensitive data, and enforce content limits on LLM traffic using guardrails configured in AI Workspace."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/guardrails/overview/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/guardrails/overview.md
tags:
  - cloud
  - ai-workspace
  - guardrails
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "concept"
---

# AI Workspace guardrails overview

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/policies/guardrails/overview.md. Verify against API Platform Cloud before publishing:
     - The guardrail list for launch. Semantic Prompt Guard is left out because its page is pending in the nav; add it back to both tables when it is enabled.
     - The 422 Unprocessable Entity status and the intervention response structure.
     - The menu path (AI Workspace > LLM Providers / App LLM Proxies), the Guardrails tab, Global Guardrails and Resource-wise Guardrails sections, and the + Add Guardrail, Add, Submit, and Deploy to Gateway buttons.
     - The order in which provider-level and proxy-level guardrails run.
     - Bijira's intro said guardrails also cache responses; caching is the Semantic Cache policy, so that claim was removed. -->

Guardrails inspect and act on the content of requests and responses that flow through the AI Gateway. They detect unsafe content and mask sensitive data without any changes to client applications.

## Available guardrails

| Guardrail | Description |
|-----------|-------------|
| [PII Masking Regex](regex-pii-masking.md) | Detect and mask personally identifiable information (PII) using regex patterns. No external service required. |
| [Azure Content Safety](azure-content-safety.md) | Filter harmful content (hate, sexual, self-harm, violence) using Azure Content Safety. Requires an Azure subscription. |
| [Word Count](word-count-guardrail.md) | Enforce minimum or maximum word count limits on prompts or responses. |
| [Sentence Count](sentence-count-guardrail.md) | Enforce minimum or maximum sentence count limits on prompts or responses. |

## How guardrails work

| Guardrail | Behavior |
|-----------|----------|
| **PII Masking Regex** | Masks PII in the request before forwarding it upstream. In masking mode, original values are restored in the response. Does not block requests. |
| **Azure Content Safety** | Blocks requests or responses with `422 Unprocessable Entity` if the content meets or exceeds a configured severity threshold. |
| **Word Count** | Blocks requests or responses with `422 Unprocessable Entity` if the word count falls outside the configured limits. |
| **Sentence Count** | Blocks requests or responses with `422 Unprocessable Entity` if the sentence count falls outside the configured limits. |

## Applying guardrails

You can configure guardrails on both LLM providers and App LLM proxies:

| Level | Scope | Best for |
|-------|-------|----------|
| **LLM provider (global)** | All endpoints, across all proxies that use the provider | Organization-wide policies applied uniformly, such as PII masking |
| **LLM provider (per resource)** | A specific endpoint, across all proxies that use the provider | Endpoint-specific provider-level rules |
| **App LLM proxy (global)** | All endpoints of the proxy | Proxy-wide rules for a specific GenAI application or agent |
| **App LLM proxy (per resource)** | A specific endpoint within the proxy | Endpoint-specific rules scoped to a single proxy |

When guardrails are configured at more than one level, all of them are evaluated. Provider-level guardrails run first, followed by proxy-level guardrails.

### Add a guardrail to an LLM provider

1. Go to **AI Workspace** > **LLM Providers**.
2. Click the provider name.
3. Go to the **Guardrails** tab.
4. To add a guardrail to all endpoints, click **+ Add Guardrail** under **Global Guardrails**. To add a guardrail to a specific endpoint, expand the resource card and click **+ Add Guardrail**.
5. Select a guardrail from the side panel.
6. Configure the guardrail parameters.
7. Click **Add**.
8. Click **Deploy to Gateway** to apply the changes.

For more information, see [LLM providers](../../llm-providers/overview.md).

### Add a guardrail to an App LLM proxy

1. Go to **AI Workspace** > **App LLM Proxies**.
2. Click the proxy name.
3. Go to the **Guardrails** tab.
4. To add a guardrail to all endpoints, click **+ Add Guardrail** under **Global Guardrails**. To add a guardrail to a specific endpoint, expand the resource under **Resource-wise Guardrails** and click **+ Add Guardrail**.
5. Select a guardrail from the side panel.
6. Configure the guardrail parameters.
7. Click **Submit**.
8. Save the proxy configuration and redeploy it if required.

For more information, see [App LLM proxies](../../llm-proxies/overview.md).

## Guardrail intervention response

When a guardrail blocks a request or response, it returns the following structure:

```json
{
  "type": "<GUARDRAIL_TYPE>",
  "message": {
    "action": "GUARDRAIL_INTERVENED",
    "interveningGuardrail": "<guardrail name>",
    "direction": "REQUEST or RESPONSE",
    "actionReason": "<reason for intervention>",
    "assessments": "<detailed assessment (if Show Assessment is enabled)>"
  }
}
```

## Learn more

[Policy Hub](../../../../../../policy-hub/overview/) is the central registry for all guardrail policies. It contains the full documentation, configuration schemas, and latest version of each guardrail.
