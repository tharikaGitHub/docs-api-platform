---
title: "GenAI applications"
description: "Group API keys under a named GenAI application in AI Workspace for application-level usage visibility, analytics, and governance."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/genai-applications/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/genai-applications.md
tags:
  - cloud
  - ai-workspace
  - genai-applications
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "concept"
---

# GenAI applications

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/genai-applications.md. Verify against API Platform Cloud before publishing:
     - Menu and button names (GenAI Applications, + Create Application, API Keys, Attach API Keys).
     - Insights: Bijira linked to its AI Workspace Insights page, which isn't part of API Platform Cloud's nav yet (pending). The links were removed; restore them when Insights is added, and confirm that application-level analytics are available at launch.
     - Whether application-level limits and controls are planned, as Bijira's page stated. -->

GenAI applications let you represent a real AI application in AI Workspace and associate existing API keys with it. This gives you application-level visibility and control instead of tracking usage only by individual key.

Without GenAI applications, usage is tied only to the API keys generated for LLM providers or App LLM proxies. That makes it difficult to see which application consumes models, tokens, and cost, especially when several developers generate keys for the same project.

With GenAI applications, you can:

- Group API keys under a named application.
- View usage and analytics at the application level.
- Improve governance and accountability for shared GenAI workloads.
- Prepare for application-level limits and controls.

## When to use GenAI applications

Use a GenAI application when:

- Several developers work on the same AI application.
- The application uses more than one API key.
- You want analytics grouped by application instead of by key.
- Platform teams need clearer visibility into which applications drive usage.

Examples include customer support copilots, internal knowledge assistants, document analysis apps, and workflow-specific AI agents.

## How it works

The typical flow is:

1. Generate one or more API keys for an LLM provider or App LLM proxy.
2. Create a GenAI application in AI Workspace.
3. Attach the generated API keys to the application.
4. Invoke the gateway with those keys.
5. View analytics and usage for the application.

One application can have several API keys mapped to it. This is useful when different developers, environments, or services in the same project need separate keys but should still roll up usage to one application.

## Prerequisites

- At least one configured [LLM provider](llm-providers/configure-provider.md) or [App LLM proxy](llm-proxies/configure-proxy.md).
- At least one generated API key.
- Access to the AI Workspace project where you create the GenAI application.

## Create a GenAI application

1. Open AI Workspace.
2. Open **GenAI Applications** from the left navigation menu.
3. Click **+ Create Application**.
4. Enter the application details:
    - **Name**: a human-readable name for the application.
    - **Description**: optional details that identify the application's purpose.
5. Click **Create**.

AI Workspace creates the application in the current project.

## Attach API keys to an application

After you create the application, attach the API keys that the application already uses.

1. Open the GenAI application.
2. Go to the **API Keys** section.
3. Click **Attach API Keys**.
4. Select one or more API keys generated for your LLM providers or App LLM proxies.
5. Save the mapping.

Only existing keys are mapped. This workflow doesn't create keys; it links previously generated keys to the application so that usage is attributed correctly.

## View and manage attached keys

The GenAI application's details page shows the keys mapped to the application. For each key, you can see:

- The associated provider or proxy.
- The key status.
- The user who created the key.
- Creation and update timestamps.
- Expiry details, when applicable.

You can remove the mapping for keys that no longer belong to the application. Removing a mapping only detaches the key from the GenAI application. It doesn't delete the key unless you remove it from the provider or proxy separately.

## Analytics for GenAI applications

When a mapped key is used to invoke the gateway, the gateway identifies the owning GenAI application and publishes analytics for it. You can then analyze usage by application, including:

- Request volume.
- Token consumption.
- Latency trends.
- Error patterns.
- Cost and resource usage.

This helps teams understand which GenAI applications drive traffic and spend.

## Best practices

- Create one GenAI application per real application or agent workload, not per developer.
- Map all keys that the same application uses so that analytics stay complete.
- Use clear names such as `Docs Assistant`, `Support Copilot`, or `Invoice Analyzer`.
- Review mappings periodically and remove keys that are no longer in use.
- Combine GenAI applications with App LLM proxies when an application also needs its own authentication, guardrails, or routing behavior.

## Related topics

- [App LLM proxies](llm-proxies/overview.md): create application-specific endpoints and controls.
- [Invoke providers and proxies via SDKs](using-sdks.md): use mapped keys when you call providers and proxies.
