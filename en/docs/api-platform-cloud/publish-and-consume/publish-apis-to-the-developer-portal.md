---
title: "Publish APIs to the Developer Portal"
description: "Publish your APIs from API Platform Cloud to the Developer Portal so that consumers can discover and use them."
canonical_url: https://wso2.com/api-platform/docs/api-platform-cloud/publish-and-consume/publish-apis-to-the-developer-portal/
md_url: https://wso2.com/api-platform/docs/api-platform-cloud/publish-and-consume/publish-apis-to-the-developer-portal.md
tags:
  - cloud
  - publish
  - developer-portal
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-18
content_type: "how-to"
---

# Publish APIs to the Developer Portal

<!-- TODO: Adapted from the Bijira page(s) on the cloud branch, en/docs/cloud/develop-api-proxy/lifecycle-management.md, api-platform-gateway/publish-apis/overview.md, api-platform-gateway/publish-apis/lifecycle-management.md, api-platform-gateway/publish-apis/subscription-based-apis.md, and api-platform-gateway/publish-apis/subscription-less-apis.md. Verify against API Platform Cloud before publishing:
     - The menu path to the lifecycle page (Bijira used both Develop > Lifecycle and Manage > Lifecycle), and the Lifecycle Management pane and Publish API dialog names.
     - The lifecycle states and transitions (Created, Pre-released, Published, Deprecated, Retired), and what each state does in the Developer Portal.
     - The permission needed to change the lifecycle state (Bijira: "publishing privileges").
     - Subscription-based and subscription-less APIs: Bijira described these through subscription plans (Manage > Monetize) and the Subscription Validation policy. Subscription plans are pending in the nav, so this page does not cover them yet. Add them once subscription plans are confirmed for launch.
     - Add screenshots of the new UI. -->

When you publish an API, it appears in the Developer Portal, where application developers can discover it, subscribe to it, and invoke it. Publishing is a change to the API's lifecycle state.

## Before you begin

- [Create the API](../develop-apis/create-an-api.md) and deploy it. See [Environments](../deploy/environments.md).
- Make sure that you have permission to change the lifecycle state of APIs. See [Users and roles](../administer/users-and-roles.md).

## API lifecycle states

An API moves through the following lifecycle states, from creation to retirement:

| **Lifecycle state** | **Use case** | **What happens in the Developer Portal** |
| ------------------- | ------------ | ---------------------------------------- |
| **Created** | The API is created but isn't ready for consumers. | The API is not visible. |
| **Pre-released** | You want consumers to try an early version of a new API, or a new version of an existing API. | The API is visible as a pre-release. |
| **Published** | The API is ready for consumers. | The API is visible and available for subscription. |
| **Deprecated** | A newer version of the API is published. | The API stays available to existing subscribers, but new subscriptions are disabled. |
| **Retired** | The API is no longer in use. | The API is removed from the Developer Portal. |

## Publish an API

1. Sign in to the API Platform Cloud Management Portal.
2. Select the project and then the API that you want to publish.
3. In the left navigation menu, click **Develop** and then click **Lifecycle**. The **Lifecycle Management** pane shows the current lifecycle state and the states you can move the API to.
4. Click **Publish**.
5. In the **Publish API** dialog, change the display name if required, and click **Confirm**.

The lifecycle state changes to **Published**, and the API appears in the Developer Portal.

## Change the lifecycle state of an API

Use the same page to move an API to any other lifecycle state. For example, to pre-release a new API or to deprecate an old version.

1. In the left navigation menu of the API, click **Develop** and then click **Lifecycle**.
2. In the **Lifecycle Management** pane, click the lifecycle state that you want to apply. The available states depend on the current state. For example, an API in the **Created** state can move to **Pre-released** or **Published**.

## What's next

- [Developer Portal](developer-portal.md): Learn how application developers discover, subscribe to, and invoke your published APIs.
