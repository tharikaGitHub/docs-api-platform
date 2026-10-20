---
title: "Getting started with AI Workspace"
description: "Create an AI Gateway, configure an LLM provider, and deploy the provider to the gateway through AI Workspace in API Platform Cloud."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/getting-started/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/getting-started.md
tags:
  - cloud
  - ai-workspace
  - getting-started
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "quickstart"
---

# Getting started with AI Workspace

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/getting-started.md. Verify against API Platform Cloud before publishing:
     - Menu, button, and field names. Bijira's page used "LLM > Service Provider" and "+ Add New Provider"; this page uses the names from the newer Bijira quickstart ("LLM Providers", "Create Provider"). Confirm which the API Platform Cloud UI uses.
     - Whether this page is still needed next to the quickstart, which covers the same steps in more detail. -->

AI Workspace lets you manage AI Gateways and LLM providers. Follow these steps to get started. For a complete walkthrough that also sends a request and calls an MCP tool, see the [AI Workspace quickstart](quickstart.md).

## Step 1: Create an AI Gateway

An AI Gateway is the runtime that processes and routes requests between your applications and LLM providers. You need at least one gateway before you configure providers or proxies.

1. Navigate to **AI Gateways** in the left navigation menu.
2. Click **+ Add AI Gateway**.
3. Enter the **Name**, **URL**, and **Associated Environment**.
4. Click **Add Gateway**.
5. Copy the **Gateway Registration Token** and follow the setup instructions to start the gateway runtime.

When the runtime connects, the gateway status changes from **Inactive** to **Active**. For detailed instructions, see [Set up an AI Gateway](ai-gateways/setting-up.md).

## Step 2: Configure an LLM provider

An LLM provider connects AI Workspace to an AI service platform such as OpenAI, Anthropic, or Azure OpenAI.

1. Navigate to **LLM Providers** in the left navigation menu.
2. Click **Create Provider** and select your provider type.
3. Enter the **Name**, **Version**, and **API Key**.
4. Click **Add Provider**.
5. Click **Deploy to Gateway** and deploy the provider to your active gateway.

For detailed instructions, see [Configure an LLM provider](llm-providers/configure-provider.md).

## What's next

- [Manage your provider](llm-providers/manage-provider.md): configure connection, access control, security, rate limiting, guardrails, and models.

!!! note
    You can create an App LLM proxy when a specific GenAI application or agent needs its own guardrails, authentication, exposed resources, routing, or other app-specific controls on top of a provider.

- [Configure an App LLM proxy](llm-proxies/configure-proxy.md): create an application-specific endpoint on top of a provider.
- [Manage an App LLM proxy](llm-proxies/manage-proxy.md): configure provider settings, resources, security, and guardrails.
