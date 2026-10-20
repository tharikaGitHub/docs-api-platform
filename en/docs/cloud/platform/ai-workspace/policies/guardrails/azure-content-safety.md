---
title: "Azure Content Safety content moderation"
description: "Filter hate, sexual, self-harm, and violent content in LLM requests and responses with the Azure Content Safety guardrail in AI Workspace."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/guardrails/azure-content-safety/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/guardrails/azure-content-safety.md
tags:
  - cloud
  - ai-workspace
  - guardrails
  - azure
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# Azure Content Safety content moderation

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/policies/guardrails/azure-content-safety.md. Verify against API Platform Cloud before publishing:
     - Where the Azure Content Safety endpoint and API key are configured. Bijira said to add them to the gateway's config.toml, which only applies to a gateway you run yourself (hybrid). Confirm whether WSO2-managed gateways take these values in AI Workspace (for example, as a secret) and update the prerequisites.
     - The guardrail name in the side panel (Azure Content Safety Content Moderation), the Advanced Settings layout, and the Add / Submit buttons.
     - The parameters, default thresholds, and severity scale (the tables are kept as in Bijira). -->

The Azure Content Safety guardrail uses the Azure Content Safety API to filter harmful content in requests and in LLM-generated responses. It checks four categories (hate speech, sexual content, self-harm, and violence), each with its own severity threshold.

!!! info "Before you begin"
    This guardrail requires an active Azure subscription with the Azure Content Safety service enabled.

    1. In the [Azure portal](https://portal.azure.com), search for **Content Safety** and create a resource.
    2. After the resource is created, open it and go to **Keys and Endpoint**.
    3. Copy the **Endpoint URL** and one of the **API Keys**.
    4. If you run the gateway yourself, add them to the gateway's `config.toml` file:

    ```toml
    azurecontentsafety_endpoint = "https://your-resource.cognitiveservices.azure.com"
    azurecontentsafety_key = "your-api-key"
    ```

## Configuration parameters

### Advanced settings

Content moderation settings are configured separately for the **request** and **response** phases. Both sections have the same parameters:

| Parameter | Default | Description |
|-----------|---------|-------------|
| **JSON Path** | — | JSONPath to extract the content to evaluate. If empty, the entire payload is evaluated as plain text. |
| **Passthrough On Error** | `false` | When `true`, requests continue if the Azure API call fails. When `false`, an error is returned on API failure. |
| **Show Assessment** | `false` | When `true`, the intervention response includes detailed category scores. |
| **Hate Severity Threshold** | `4` | Severity threshold for hate speech (0–7). Use `-1` to disable. Content at or above the threshold is blocked. |
| **Sexual Severity Threshold** | `5` | Severity threshold for sexual content (0–7). Use `-1` to disable. |
| **Self Harm Severity Threshold** | `3` | Severity threshold for self-harm content (0–7). Use `-1` to disable. |
| **Violence Severity Threshold** | `4` | Severity threshold for violence (0–7). Use `-1` to disable. |

### Severity scale

| Score | Meaning |
|-------|---------|
| 0–1 | Safe or negligible |
| 2–3 | Low severity |
| 4–5 | Medium severity |
| 6–7 | High severity |

## Add this guardrail

1. Go to **AI Workspace** > **LLM Providers** or **App LLM Proxies**.
2. Click the provider or proxy name.
3. Go to the **Guardrails** tab.
4. Click **+ Add Guardrail** and select **Azure Content Safety Content Moderation** from the side panel.
5. Expand **Advanced Settings** to configure the severity thresholds and error handling separately for the request and response phases.
6. Click **Add** (for providers) or **Submit** (for proxies).
7. Deploy the provider or proxy to apply the changes.

## Behavior

- When content meets or exceeds a configured severity threshold, the gateway returns `422 Unprocessable Entity` with a guardrail intervention response.
- The request and response phases are evaluated separately, each with its own settings.
- If **Show Assessment** is enabled, the response includes the category scores that triggered the block.

## Related topics

- [Guardrails overview](overview.md)
- [PII masking regex guardrail](regex-pii-masking.md): Lightweight PII masking without an external service.
- [Policy Hub](../../../../../../policy-hub/overview/): The full policy specification and latest version.
