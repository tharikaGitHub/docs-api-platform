---
title: "Model round robin"
description: "Distribute LLM requests across several models in round-robin order in AI Workspace, and suspend models that fail so traffic shifts to healthy ones."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/other-policies/model-round-robin/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/other-policies/model-round-robin.md
tags:
  - cloud
  - ai-workspace
  - load-balancing
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# Model round robin

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/policies/other-policies/model-round-robin.md. Verify against API Platform Cloud before publishing:
     - The AI Workspace navigation and labels: LLM Providers, App LLM Proxies, the Guardrails tab, + Add Guardrail, Model Round Robin, Advanced Settings, Add / Submit.
     - The suspension behavior and the 503 response when all models are suspended. -->

The model round robin policy distributes requests across multiple AI models using round-robin selection. If a model returns a server error (`5xx`) or a rate limit response (`429`), it can be temporarily suspended so that traffic automatically shifts to the remaining healthy models.

## Configuration parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| **Models** | Yes | The list of model names to balance across (e.g., `gpt-4o`, `gpt-4-turbo`). Add at least two models. |
| **Suspend Duration** | No | Number of seconds to suspend a model after it returns a `5xx` or `429` response. While suspended, the model is skipped. Set to `0` (default) to disable suspension. |

## Add this policy

1. In AI Workspace, go to **LLM Providers** or **App LLM Proxies**.
2. Click the provider or proxy name.
3. Go to the **Guardrails** tab.
4. Click **+ Add Guardrail** and select **Model Round Robin**.
5. Add the model names to balance across.
6. Optionally, expand **Advanced Settings** and set a **Suspend Duration** to handle model failures.
7. Click **Add** (for providers) or **Submit** (for proxies).
8. Deploy the provider or proxy to apply the changes.

## Behavior

- On each request, the policy selects the next available model in round-robin order and replaces the model value in the request before forwarding it upstream.
- If a model returns a `5xx` or `429` response and **Suspend Duration** is set, the model is suspended for that duration and subsequent requests skip it.
- If all models are suspended, the gateway returns `503 Service Unavailable`.

## Related

- [Policies overview](../overview.md)
- [Policy Hub](../../../../../../policy-hub/overview/): full policy specification and latest version.
