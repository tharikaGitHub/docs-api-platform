---
title: "Configure inbound authentication"
description: "Control where and under what name client applications send their API key when they call a deployed LLM provider or App LLM proxy."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/configure-inbound-auth/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/configure-inbound-auth.md
tags:
  - cloud
  - ai-workspace
  - authentication
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# Configure inbound authentication

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/configure-inbound-auth.md. Verify against API Platform Cloud before publishing:
     - The Security and Connection tab names and the field labels (Authentication, API Key / Key name, Key Location / Sent in).
     - That apiKey is still the only authentication type, and that X-API-Key in a header is the default.
     - The API key validity period (Bijira: 90 days, shown once at creation).
     - That the gateway strips a leading "Bearer " before it compares the key. -->

The **Security** tab on LLM providers and App LLM proxies controls how client applications authenticate when they call the deployed gateway endpoint. This is *inbound authentication*: the key that your application sends to the gateway. It's separate from the upstream API key that the gateway uses to call the LLM provider, which you configure on the **Connection** tab.

## How it works

When a provider or proxy is deployed, the gateway enforces inbound authentication on every incoming request. Clients must include a valid API key in the location and under the name that you configure on the **Security** tab.

AI Workspace generates the API key, shows it once at creation, and keeps it valid for 90 days. The **Security** tab controls where and under what name the client sends it.

## Security tab fields

| Field | Description |
|-------|-------------|
| **Authentication** | The authentication type. `apiKey` is the only supported option. |
| **API Key** / **Key name** | The name of the header or query parameter that carries the API key. Defaults to `X-API-Key`. |
| **Key Location** / **Sent in** | Whether the key is sent in a request `header` or as a `query` parameter. Defaults to `header`. |

## Default behavior: the X-API-Key header

By default, the gateway expects the API key in the `X-API-Key` request header:

```
X-API-Key: <your-api-key>
```

Most AI SDKs don't send this header automatically, so add it when you create the client. See [Invoke providers and proxies via SDKs](using-sdks.md) for code examples.

## Use a custom header name

You can change the key name to match what your SDK sends. For example, set the key name to `Authorization` so that clients pass the key as a bearer token:

```
Authorization: Bearer <your-api-key>
```

The OpenAI, Mistral, and Azure OpenAI SDKs send an `Authorization: Bearer` header by default, so with this configuration they work without extra header setup.

!!! note
    The gateway validates the key value regardless of prefix. It strips a leading `Bearer ` before it compares the value with the stored key.

## Send the key as a query parameter

If you set **Key Location** to `query`, clients append the key to the request URL instead:

```
https://<gateway-host>/<context>?<key-name>=<your-api-key>
```

This is useful in environments where setting custom request headers is difficult.

## Configure inbound authentication

1. Open your LLM provider or App LLM proxy and go to the **Security** tab.
2. In **API Key** / **Key name**, enter the header or query parameter name that your application uses.
3. In **Key Location** / **Sent in**, select `header` or `query`.
4. Click **Save**.
5. Click **Deploy to Gateway**. Security changes take effect only after you redeploy.
