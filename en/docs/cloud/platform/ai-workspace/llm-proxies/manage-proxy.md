---
title: "Manage an App LLM proxy"
description: "Change an App LLM proxy's provider, resources, client authentication, and guardrails in AI Workspace, then save, redeploy, or delete it."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/llm-proxies/manage-proxy/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/llm-proxies/manage-proxy.md
tags:
  - cloud
  - ai-workspace
  - llm-proxies
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# Manage an App LLM proxy

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/llm-proxies/manage-proxy.md. Verify against API Platform Cloud before publishing:
     - Menu path LLM > Proxies, the four tab names (Provider, Resources, Security, Guardrails) and button names (Save API Key, Import from file, + Add Guardrail, Submit, Save, Cancel, Deploy to Gateway, delete icon).
     - The API key configuration fields (Header Name read-only from the provider template, API Key).
     - Supported OpenAPI versions (Bijira: 3.0 and 3.1, JSON or YAML).
     - Client authentication options (Bijira: API Key only; Header or Query Parameter).
     - That configuration changes need a manual redeploy.
     - Policy Hub link: Bijira linked the Policy Hub catalog site; this page links the Policy Hub docs overview.
     - Bijira's coloured section boxes were replaced with plain text. -->

After you create an App LLM proxy, you manage its configuration from the proxy details page.

## Open the proxy details

1. In AI Workspace, go to **LLM** > **Proxies**.
2. Click a proxy name.

The top of the details page shows the proxy name, the linked **Provider**, the **Version**, and when it was **Last updated**. The page has four tabs: **Provider**, **Resources**, **Security**, and **Guardrails**. The **Get Started** panel on the right holds the API key generation and the deployed gateways. The **Deploy to Gateway** button and a delete icon are at the top right.

## Provider

The **Provider** tab sets which LLM provider the proxy connects to and how it authenticates with that provider.

### LLM service provider

Use the **Provider** list to select or change the linked provider. The list shows all providers configured in your workspace.

!!! info
    Changing the provider also updates related settings, such as authentication and the available resources.

### API key configuration

If the provider uses API key authentication, the **API Key Configuration** section appears below the provider list.

| Field | Description |
| :--- | :--- |
| **Header Name** | The authentication header the provider requires, such as `X-API-Key`. Read-only; defined by the provider template. |
| **API Key** | Your provider's API key. |

To set it, enter the key in **API Key** and click **Save API Key**.

!!! warning "Handling keys"
    - Keys are encrypted and stored securely, and aren't shown again after you save them.
    - Keep a backup copy in a secure location.
    - Rotate keys regularly.

## Resources

The **Resources** tab defines which API resources the proxy exposes, from an OpenAPI specification. For some providers, the specification is filled in automatically.

To import a specification:

1. On the **Resources** tab, click **Import from file**.
2. Upload a JSON or YAML file with the OpenAPI specification.

The proxy reads the file and lists the resources it found, with each resource's HTTP method (GET, POST, PUT, DELETE, or PATCH), path (such as `/v1/chat/completions`), and description.

!!! tip "OpenAPI format"
    OpenAPI 3.0 and 3.1 specifications are supported, in JSON or YAML.

## Security

The **Security** tab sets how client applications authenticate when they call the proxy.

| Field | Description |
| :--- | :--- |
| **Authentication type** | The authentication method. **API Key** is available. |
| **Key name** | The name of the key clients provide, such as `X-API-Key`. |
| **Sent in** | Where clients send the key: **Header** (recommended) or **Query Parameter**. |

Set the fields and click **Save**.

!!! tip "Use a header in production"
    Query parameters can end up in server access logs and browser history.

## Guardrails

Guardrails enforce content safety, compliance, and quality standards on the proxy.

### Global guardrails

Global guardrails apply to all resources of the proxy.

1. On the **Guardrails** tab, in the **Global Guardrails** section, click **+ Add Guardrail**.
2. In the panel that opens, select a guardrail.
3. Configure its version, parameters, and advanced settings.
4. Click **Submit**.

Added guardrails appear as labels with the guardrail name and version.

### Resource-wise guardrails

Resource-wise guardrails apply only to specific resources. The **Resource-wise Guardrails** section lists each resource from the OpenAPI specification.

1. Expand the resource you want to protect.
2. Click **+ Add Guardrail**.
3. Select and configure the guardrail.
4. Click **Submit**.

### Remove a guardrail

Click the **×** on a guardrail's label.

!!! warning
    After you add or remove guardrails, redeploy the proxy for the changes to take effect.

For the available guardrails, see [Guardrails overview](../policies/guardrails/overview.md). For the full policy catalog, see [Policy Hub](../../../../../policy-hub/overview/).

## Save your changes

After you change any tab, click **Save** at the bottom right of the page. Click **Cancel** to discard unsaved changes.

!!! info
    Saved changes take effect on deployed gateways only after you redeploy. Click **Deploy to Gateway** after you save.

## Delete the proxy

Before you delete a proxy, make sure no application still uses it, back up any configuration you need, and tell the teams that depend on its endpoints.

To delete it, click the delete icon at the top right of the proxy details page.

!!! danger "This can't be undone"
    Deleting a proxy:

    - Removes it from all gateways immediately.
    - Stops all of its API keys from working.
    - Deletes all its configuration, including resources, security, and guardrails.

## What's next

- [AI Workspace policies overview](../policies/overview.md): Explore the policies you can apply to proxies.
- [Policy Hub](../../../../../policy-hub/overview/): Browse the full catalog of guardrails and policies.
