---
title: "Secure APIs with OAuth 2.0"
description: "Protect your APIs in API Platform Cloud with OAuth 2.0 access tokens."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/secure-apis/secure-apis-with-oauth2/
md_url: https://wso2.com/api-platform/docs/cloud/platform/secure-apis/secure-apis-with-oauth2.md
tags:
  - cloud
  - security
  - oauth2
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-18
content_type: "how-to"
---

# Secure APIs with OAuth 2.0

<!-- TODO: Adapted from the Bijira page(s) on the cloud branch, en/docs/cloud/develop-api-proxy/authentication-and-authorization/secure-api-access-with-bijira-sts.md. Verify against API Platform Cloud before publishing:
     - The name of the built-in token service. Bijira called it API Platform STS (Secure Token Service).
     - Whether the built-in token service still supports client authentication only, and which external key managers (Bijira used Asgardeo) are supported for end-user authentication. Add a link to that page once it exists.
     - The Developer Portal URL (Bijira used devportal.bijira.dev) and the button names: Applications, + Create, OAuth2, Generate, Generate Token, Subscribe to more APIs.
     - Whether APIs are secured with OAuth 2.0 by default when deployed.
     - Step 2 now uses cURL; Bijira pointed to the OpenAPI test console, which is pending for launch. Confirm the gateway URL format.
     - Scopes: Bijira had a commented-out section on assigning scopes to API resources. Add it if scopes ship at launch. -->

API Platform Cloud has a built-in token service that issues OAuth 2.0 access tokens for your APIs. Applications that call an API present a token, and the gateway checks it before forwarding the request to your backend.

In this guide, you create an application in the Developer Portal, generate an access token for it, and invoke an API with that token.

!!! note
    Tokens from the built-in token service authenticate client applications only. If you need to authenticate end users, use an external key manager.

## Before you begin

- Create an API. See [Create an API](../develop-apis/create-an-api.md).
- Deploy the API and publish it to the Developer Portal. See [Environments](../deploy/environments.md) and [Publish APIs to the Developer Portal](../publish-and-consume/publish-apis-to-the-developer-portal.md).

## Step 1: Create an application and generate an access token

1. Sign in to your organization in the Developer Portal.
2. Click **Applications**, and then click **+ Create**.
3. Enter a name for the application and click **Create**.
4. Click the new application to open it.
5. At the top of the application page, under **OAuth2**, click **Generate**. This generates consumer keys for the application and shows the key manager connection details.
6. Click **Generate Token** and copy the access token.
7. Click **Subscribe to more APIs**, find your API, and subscribe the application to it.

## Step 2: Invoke the API

Send a request to the API with the access token in the `Authorization` header:

```bash
curl -H "Authorization: Bearer <ACCESS_TOKEN>" <API_URL>/<RESOURCE_PATH>
```

Replace `<ACCESS_TOKEN>` with the token you copied, and `<API_URL>` and `<RESOURCE_PATH>` with your API's gateway URL and the resource you want to call. You can find the API URL on the API's page in the Developer Portal.

A successful response confirms that the gateway accepted the token. A request without a valid token returns an authentication error.
