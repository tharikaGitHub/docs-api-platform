---
title: "Configure an App LLM proxy"
description: "Create an App LLM proxy in AI Workspace, attach guardrails, deploy it to an AI gateway, and get its invoke URL and API key."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/llm-proxies/configure-proxy/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/llm-proxies/configure-proxy.md
tags:
  - cloud
  - ai-workspace
  - llm-proxies
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# Configure an App LLM proxy

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/llm-proxies/configure-proxy.md. Verify against API Platform Cloud before publishing:
     - How users open AI Workspace (Bijira used the API Platform Console) and the roles that can create proxies (Bijira: Admin or Developer).
     - Menu and button names: LLM > Proxies, + Create Proxy, Create Proxy, Guardrails tab, + Add Guardrail, Submit, Deploy to Gateway, Deploy, Stop, Back to App LLM Proxy, Generate API Key, Get Started panel, Gateways dropdown, Deployed Gateways, API Deployment History.
     - Form fields and defaults (Name, LLM Service Provider defaulting to the latest updated provider, Version v1.0, Description, Context /).
     - The invoke URL format https://{gateway-host}/{proxy-name}.
     - That API keys are shown only once.
     - Policy Hub link: Bijira linked the Policy Hub catalog site; this page links the Policy Hub docs overview.
     - Add screenshots of the new UI. -->

An App LLM proxy is a managed endpoint that your Gen AI applications or agents use to reach an LLM provider. After you deploy it, the proxy handles authentication and enforces the guardrails you attach. Applications can call a provider directly, but a proxy lets you give each application, agent, or environment its own keys, guardrails, and access controls on top of the same provider.

This page describes how to create an App LLM proxy, attach guardrails, and deploy it to a gateway.

## Before you begin

- Access to AI Workspace with the **Admin** or **Developer** role.
- At least one LLM provider that is configured and deployed. See [Configure an LLM provider](../llm-providers/configure-provider.md).

## Create the proxy

1. In AI Workspace, go to **LLM** > **Proxies**.
2. Click **+ Create Proxy**.
3. Enter the proxy details:
    1. **Name** (required): A unique name, such as `support-chat-api` or `sales-agent-proxy`. The proxy ID is generated from the name in lowercase, with hyphens.
    2. **LLM Service Provider** (required): The provider the proxy routes to. The most recently updated provider is selected by default.
    3. **Version** (required): Pre-filled, such as `v1.0`. You can change it.
    4. **Description** (optional): The application or agent the proxy is for.
    5. **Context** (optional): The base path for the proxy's endpoints. The default is `/`.
4. Click **Create Proxy**.

## Add guardrails (optional)

Guardrails and policies that you attach here apply to all requests through the proxy.

1. On the **Guardrails** tab, click **+ Add Guardrail**.
2. In the panel that opens, select a guardrail and configure its settings.
3. Click **Submit**.

!!! tip "Advanced settings"
    Each guardrail has advanced settings that you can configure before you attach it to the proxy.

For the available guardrails, see [Guardrails overview](../policies/guardrails/overview.md). For the full policy catalog, see [Policy Hub](../../../../../policy-hub/overview/).

## Deploy the proxy to a gateway

A proxy works only after it is deployed to at least one gateway.

1. On the proxy details page, click **Deploy to Gateway**.
2. On the **Deploy to Gateway** page, find the gateway you want. Each gateway shows its name, its status (**Active** or **Not Active**), and its current deployment, if any. Use the search bar to filter the list.
3. Click **Deploy** next to the gateway.
4. Expand the gateway to see the deployment details:

    | Field | Description |
    | :--- | :--- |
    | **Deployment Status** | Active or Inactive |
    | **Deployment ID** | Unique identifier of the deployment |
    | **Deployed** | Time since the deployment |
    | **Stop** | Stops an active deployment |

The **API Deployment History** panel lists each deployment with its identifier, time, and tags such as **Latest** and **Deployed**. To undeploy the proxy from a gateway, click **Stop** next to its active deployment. Click **Back to App LLM Proxy** to return to the proxy details page.

Changes take effect within seconds of a successful deployment.

## Get the invoke URL and an API key

After the proxy is deployed, the proxy details page shows a **Get Started** panel.

- **Invoke URL:** Select a gateway from the **Gateways** list to see the base URL for calling the proxy through that gateway. The URL has this format:

    ```text
    https://{gateway-host}/{proxy-name}
    ```

    To call a resource, append its path:

    ```text
    https://{gateway-host}/{proxy-name}/chat/completions
    ```

- **API key:** Click **Generate API Key**, then copy the key and store it securely.

    !!! danger "The key is shown only once"
        You can't retrieve an API key after you close the dialog. Store it in a secure location immediately.

- **Deployed gateways:** The **Deployed Gateways** section lists every gateway the proxy is deployed to and its deployment status.

## What's next

- [Invoke via SDKs](../using-sdks.md): Call your proxy from code using provider-native SDKs.
- [Manage an App LLM proxy](manage-proxy.md): Change the provider, resources, security, and guardrails.
- [AI Workspace policies overview](../policies/overview.md): Explore policies for rate limiting and caching.
