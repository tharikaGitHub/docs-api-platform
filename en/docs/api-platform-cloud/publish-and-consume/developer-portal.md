---
title: "Developer Portal"
description: "Learn how API consumers use the Developer Portal to discover, subscribe to, and try your APIs."
canonical_url: https://wso2.com/api-platform/docs/api-platform-cloud/publish-and-consume/developer-portal/
md_url: https://wso2.com/api-platform/docs/api-platform-cloud/publish-and-consume/developer-portal.md
tags:
  - cloud
  - developer-portal
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-18
content_type: "concept"
---

# Developer Portal

<!-- TODO: Adapted from the Bijira page(s) on the cloud branch, en/docs/cloud/devportal/discover-apis/api-search.md, discover-apis/api-documentations.md, manage-applications/create-an-application.md, manage-subscriptions/subscribe-to-an-api.md, consuming-services/consume-an-api-secured-with-oauth2.md, consuming-services/consume-an-api-secured-with-api-key.md, and developer-portal-mode.md. Verify against API Platform Cloud before publishing:
     - How consumers reach the Developer Portal for an organization (Bijira used https://devportal.bijira.dev/<organization name>/views/default).
     - The consumer flow and UI names: APIs, Applications, Subscribe, Manage Keys, Production and Sandbox tabs, Generate.
     - Whether API keys are supported in API Platform Cloud, and whether subscriptions use plans (subscription plans are pending in the nav).
     - Whether the Developer Portal modes (API Portal, MCP Hub, API & MCP Portal) exist in API Platform Cloud.
     - That the API Portal component docs at {BASE_URL}/api-portal/ apply to the Developer Portal in API Platform Cloud.
     - Not ported, confirm whether to cover: theming (organization level, API level, with AI), AI agent discovery, AI-assisted SDK generation, API workflows, and admin settings (LLM instructions, managing API workflows). -->

The Developer Portal is where application developers find and use the APIs you publish from API Platform Cloud. When you [publish an API](publish-apis-to-the-developer-portal.md), it appears in your organization's Developer Portal.

## What API consumers do in the Developer Portal

1. **Discover APIs:** Browse or search the published APIs by name, type, version, or description, and read each API's documentation: its resources, schemas, security, and base URL.
2. **Create an application:** An application represents the client, such as a web app, mobile app, or device, that calls the APIs. One application can subscribe to several APIs.
3. **Subscribe to APIs:** Subscribe the application to each API it needs. A subscription covers all minor versions within the API's major version, so the application keeps working when a new minor version is published.
4. **Generate credentials:** Generate a consumer key and consumer secret for the application, and then an OAuth 2.0 access token. See [Secure APIs with OAuth 2.0](../secure-apis/secure-apis-with-oauth2.md).
5. **Invoke APIs:** Call the API with the access token in the `Authorization: Bearer <ACCESS_TOKEN>` header, or try it from the API documentation in the Developer Portal.

For a walkthrough of these steps, see the [Quick start guide](../getting-started/quick-start-guide.md).

## Learn more

The Developer Portal is built on API Portal. For details on its features, see the [API Portal documentation]({BASE_URL}/api-portal/).
