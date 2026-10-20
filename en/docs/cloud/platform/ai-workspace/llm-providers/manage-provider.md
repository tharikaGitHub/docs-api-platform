---
title: "Manage an LLM provider"
description: "Configure the connection, access control, security, rate limits, guardrails, and models of a deployed LLM provider, then redeploy or delete it."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/llm-providers/manage-provider/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/llm-providers/manage-provider.md
tags:
  - cloud
  - ai-workspace
  - llm-providers
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# Manage an LLM provider

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/llm-providers/manage-provider.md. Verify against API Platform Cloud before publishing:
     - Menu path AI Workspace > LLM Providers, the six tab names (Connection, Access Control, Security, Rate Limiting, Guardrails, Models) and button names (Save, Deploy to Gateway, Deploy, Delete, Add model provider, Import resources from specification).
     - Which providers have a read-only upstream URL and which are editable, including AWS Bedrock availability.
     - Access control modes (Allow all, Deny all) and the move buttons.
     - Rate limiting: Per Consumer limits and Cost-based limits were "coming soon" in Bijira; confirm their status.
     - That guardrails can't be edited in place and that changes need a manual redeploy.
     - The Insights dashboard mention: Insights is pending in the cloud nav.
     - Link to token-based rate limiting: Bijira linked policies/other-policies/token-based-rate-limit.md, which is pending; this page links policies/rate-limit/token-based-rate-limit.md.
     - Bijira's coloured section boxes and emoji were replaced with plain text. -->

After you deploy an LLM provider, you manage it from its details page. This page covers each configuration tab and the lifecycle operations.

## Open the provider details

1. In **AI Workspace**, go to **LLM Providers**.
2. Click a provider name.

The details page shows:

- The provider name, version, and template type.
- When the provider was created and last updated.
- Six tabs: **Connection**, **Access Control**, **Security**, **Rate Limiting**, **Guardrails**, and **Models**.
- A **Deploy to Gateway** button at the top right.

## Connection

The **Connection** tab holds the upstream endpoint and the credentials the gateway uses to call the provider.

### Provider endpoint

The **Upstream URL** is where the gateway forwards requests.

| Provider type | Upstream URL |
| :--- | :--- |
| OpenAI, Anthropic, Gemini, Mistral AI | Configured automatically (read-only) |
| Azure OpenAI, Azure AI Foundry, AWS Bedrock | Your own URL (editable) |

To change an editable URL, update the **Provider Endpoint** field and click **Save**.

### Authentication

The gateway authenticates with the upstream provider using:

- **Authentication Type:** Usually `api-key`, set by the provider template.
- **Credentials:** Your provider API key. Use the show and hide icon to view the value. To change the key, update it and click **Save**.

### OpenAPI specification

The **Spec URL** points to the OpenAPI specification that defines the provider's API resources. It can be a URL or an uploaded file. The resources in the specification populate the **Access Control** tab. Import the specification again to refresh the resource list.

## Access Control

The **Access Control** tab controls which API resources are reachable through the provider.

### Mode

| Mode | Behavior |
| :--- | :--- |
| **Allow all** | All resources are accessible. Move a resource to **Denied Resources** to block it. |
| **Deny all** | All resources are blocked. Move a resource to **Allowed Resources** to permit it. |

Use the arrow buttons between the two lists to move resources:

- **`>>`** moves all resources to the other list.
- **`>`** moves the selected resources to the other list.
- **`<`** moves the selected resources back.
- **`<<`** moves all resources back.

### Import resources

Click **Import resources from specification** to load or refresh the resource list from the provider's OpenAPI specification.

## Security

The **Security** tab sets how client applications authenticate when they call the provider through the gateway.

| Field | Description | Example |
| :--- | :--- | :--- |
| **Authentication Type** | The authentication method. | `apiKey` (default) |
| **API Key Name** | The header or query parameter name clients use. | `x-api-key`, `apikey`, `Authorization` |
| **Key Location** | Where clients send the key. | `Header` (recommended) or `Query` |

To configure it:

1. Set **Authentication Type** to `apiKey`.
2. Enter the **API Key Name** that applications use.
3. Choose the **Key Location**:
    - **Header:** Sent in an HTTP request header. This is the more secure option.
    - **Query:** Sent as a URL query parameter.
4. Click **Save**.

## Rate Limiting

Rate limits control request and token consumption, which protects you from cost overruns and keeps usage fair across consumers. The **Rate Limiting** tab has two independent sections:

| Section | Limits | Protects | Status |
| :--- | :--- | :--- | :--- |
| **Backend** | Requests from the gateway to the upstream LLM provider | Your provider credentials and total spend | Available |
| **Per Consumer** | Requests from client applications to the gateway | Fair usage across consumers | Coming soon |

Both sections support two modes:

- **Provider-wide:** One limit for all API resources.
- **Per Resource:** A separate limit for each resource, such as chat completions and embeddings.

!!! note
    The two modes are mutually exclusive within a section. Clear the existing limits before you switch modes.

### Limit criteria

| Criterion | Description |
| :--- | :--- |
| **Request Count** | Maximum number of requests within the reset duration. |
| **Token Count** | Maximum number of tokens (prompt and completion) within the reset duration. |
| **Cost** | Cost-based limits (coming soon). |

For each criterion you enable, set the **Quota** and the **Reset Duration** (`second`, `minute`, or `hour`).

### Set a provider-wide limit

1. In the **Backend** section, select **Provider-wide**.
2. Enable **Request Count**, **Token Count**, or both.
3. Enter the **Quota** and select the **Reset Duration** for each criterion.
4. Click **Save**.

### Set per-resource limits

1. In the **Backend** section, select **Per Resource**.
2. Expand **Limit per Resource** and set the default limits that apply to all resources.
3. To override the limit for one resource, expand that resource and configure it.
4. Click **Save**.

!!! tip "Controlling cost"
    Start with conservative backend limits to protect your provider credentials, and raise them once you know the actual usage. Use **Per Resource** only when resources have very different usage patterns.

For more information, see [Token-based rate limit](../policies/rate-limit/token-based-rate-limit.md).

## Guardrails

Guardrails enforce content safety, compliance, and quality standards. On a provider, they apply to all resources (global guardrails) or to specific resources, and they affect every App LLM proxy that uses the provider.

The tab lists the attached guardrails with their name, type, configuration, and an enable or disable toggle.

### Add a guardrail

To add a guardrail for all resources:

1. In the **Global Guardrails** section, click **+ Add Guardrail**.
2. In the panel that opens, select a guardrail and fill in its parameters. Expand **Advanced Settings** for more options.
3. Click **Add**.

To add a guardrail for one resource:

1. Expand the resource.
2. Click **+ Add Guardrail**.
3. Select and configure the guardrail, then click **Add**.

### Change a guardrail

You can't edit a guardrail in place. To change its configuration:

1. Delete the guardrail.
2. Click **+ Add Guardrail** and add it again with the new settings.
3. Redeploy the provider.

!!! warning "Test before production"
    Guardrail changes take effect on deployed gateways only after you redeploy. Test strict guardrails in a non-production environment first.

For the available guardrails, see [Guardrails overview](../policies/guardrails/overview.md). For the full policy catalog, see [Policy Hub](../../../../../policy-hub/overview/).

## Models

The **Models** tab controls which AI models are available through the provider.

To add models:

1. Click **Add model provider**.
2. Select a provider to import its model catalog.
3. Click **Add**. The models are added and enabled.

Use the toggle next to each model to enable or disable it. The gateway blocks disabled models, and applications that request them receive an error.

## Redeploy the provider

Redeploy after you change the connection, rate limits, guardrails, resources, or models.

1. Click **Deploy to Gateway**.
2. Select the gateways to deploy to.
3. Review the summary of changes.
4. Click **Deploy**.

The changes take effect within seconds of a successful deployment.

## Delete the provider

!!! warning "Remove dependent proxies first"
    You can't delete a provider while an App LLM proxy uses it. Delete the dependent proxies or point them at another provider first.

1. In **AI Workspace**, go to **LLM Providers**.
2. Click the **Delete** icon for the provider.
3. Review the warning and confirm.

!!! danger "This can't be undone"
    Deleting a provider:

    - Removes it from all deployed gateways immediately.
    - Breaks applications that call it.
    - Deletes all its configuration, including guardrails, rate limits, and models.

## What's next

- [Configure an App LLM proxy](../llm-proxies/configure-proxy.md): Create a dedicated endpoint for a Gen AI application or agent.
- [AI Workspace policies overview](../policies/overview.md): Explore the available guardrails and policies.
