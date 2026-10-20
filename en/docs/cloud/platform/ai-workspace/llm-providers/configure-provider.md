---
title: "Configure an LLM provider"
description: "Add an LLM provider in AI Workspace, set its authentication and guardrails, and deploy it to an AI gateway in API Platform Cloud."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/llm-providers/configure-provider/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/llm-providers/configure-provider.md
tags:
  - cloud
  - ai-workspace
  - llm-providers
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# Configure an LLM provider

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/llm-providers/configure-provider.md. Verify against API Platform Cloud before publishing:
     - How users open AI Workspace (Bijira used the API Platform Console) and the role required (Bijira: Admin).
     - Menu and button names: AI Workspace > Service Providers (Bijira's other pages say LLM Providers), + Add New Provider, Add Provider, Deploy to Gateway, Deploy, Generate API Key, Get Started panel, Gateways dropdown, Deployed Gateways.
     - Form fields and defaults (Name, Version v1.0, Description, Context /) and the per-provider authentication fields.
     - Whether provider-level guardrails are added from the form (+ Add Guardrail) as described.
     - That API keys are shown only once.
     - Policy Hub link: Bijira linked the Policy Hub catalog site; this page links the Policy Hub docs overview.
     - Add screenshots of the new UI. -->

LLM providers connect AI service platforms such as OpenAI and Anthropic to AI Workspace. After you configure a provider and deploy it to an AI gateway, applications and agents can call it through that gateway.

!!! note
    App LLM proxies are optional. Use them when an application or agent needs its own guardrails, authentication, exposed resources, or other controls on top of the same provider. See [App LLM proxies overview](../llm-proxies/overview.md).

## Before you begin

- Access to AI Workspace with the **Admin** role.
- At least one AI gateway that is created and set up. See [Set up an AI gateway](../ai-gateways/setting-up.md).
- Credentials for your LLM provider, such as an API key.

## Add a provider

1. Open **AI Workspace** and select **Service Providers**.
2. Click **+ Add New Provider**.
3. Select your provider type, such as **OpenAI** or **Anthropic**.

## Enter the provider details

After you select the provider type, fill in the provider form.

### Basic information

1. **Name** (required): A unique name for the provider, such as `openai-production` or `anthropic-dev`.
2. **Version** (required): Pre-filled, such as `v1.0`. You can change it.
3. **Description** (optional): A description that identifies what the provider is for.
4. **Context** (optional): The base context path for the provider. The default is `/`.

### Authentication

The authentication fields depend on the provider type:

=== "OpenAI"
    **API Key** (required): Your OpenAI API key, which starts with `sk-proj-` or `sk-`.

    !!! info
        The OpenAI endpoint URL is configured automatically.

=== "Anthropic"
    **API Key** (required): Your Anthropic API key, which starts with `sk-ant-`.

    !!! info
        The Anthropic endpoint URL is configured automatically.

=== "Gemini"
    **API Key** (required): Your Google AI API key.

    !!! info
        The Gemini endpoint URL is configured automatically.

=== "Mistral AI"
    **API Key** (required): Your Mistral AI API key.

    !!! info
        The Mistral AI endpoint URL is configured automatically.

=== "Azure OpenAI"
    1. **Upstream URL** (required): Your Azure OpenAI resource endpoint, such as `https://your-resource.openai.azure.com/`.
    2. **API Key** (required): Your Azure OpenAI API key.

=== "Azure AI Foundry"
    1. **Upstream URL** (required): Your Azure AI Foundry endpoint URL.
    2. **API Key** (required): Your Azure AI Foundry API key.

### Add guardrails (optional)

Guardrails and policies that you attach to the provider apply to all requests that go through it.

1. In the **Guardrails** section of the form, click **+ Add Guardrail**.
2. In the panel that opens, select a guardrail and configure its settings.
3. Click **Add** to attach it to the provider.

!!! tip "Advanced settings"
    Each guardrail has advanced settings that you can configure before you attach it to the provider.

For the available guardrails, see [Guardrails overview](../policies/guardrails/overview.md). For the full policy catalog, see [Policy Hub](../../../../../policy-hub/overview/).

## Save the provider

1. Click **Add Provider**.
2. Check that a confirmation message appears. The provider is added to the provider list.

## Deploy the provider to a gateway

A provider works only after it is deployed to at least one gateway.

1. On the provider details page, click **Deploy to Gateway**.
2. Click **Deploy** for one or more gateways in the list.
3. Wait until the status changes to **Deployed**.

## Get the invoke URL and an API key

After the provider is deployed, the provider details page shows the invoke URL and a **Get Started** panel.

- **Invoke URL:** Select a gateway from the **Gateways** list to see the base URL for calling the provider through that gateway.
- **API keys:** Click **Generate API Key** in the **Get Started** panel, then copy the key and store it securely.

    !!! danger "The key is shown only once"
        You can't retrieve an API key after you close the dialog. Store it in a secure location immediately.

- **Deployed gateways:** The **Deployed Gateways** section lists every gateway the provider is deployed to, with the host address and deployment status.

## What's next

- [Configure an App LLM proxy](../llm-proxies/configure-proxy.md): Create a dedicated endpoint for a Gen AI application or agent that uses this provider.
- [Manage an LLM provider](manage-provider.md): Configure access control, security, rate limiting, guardrails, and models.
