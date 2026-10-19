---
title: "Quick start guide"
description: "Create, deploy, and invoke your first API on API Platform Cloud."
canonical_url: https://wso2.com/api-platform/docs/api-platform-cloud/getting-started/quick-start-guide/
md_url: https://wso2.com/api-platform/docs/api-platform-cloud/getting-started/quick-start-guide.md
tags:
  - cloud
  - getting-started
  - quickstart
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-18
content_type: "quickstart"
---

# Quick start guide

<!-- TODO: Adapted from the Bijira quick start (cloud branch, en/docs/cloud/introduction/quick-start-guide.md).
     Verify against the API Platform Cloud Management Portal before publishing:
     - Button, menu, and field names in every step (they are Bijira's).
     - Whether Import API Contract from a URL is supported at launch.
     - Whether a new API is deployed to the development environment automatically.
     - The promotion flow and its Configuration Types options.
     - The Developer Portal application, subscription, and key generation flow.
     Add screenshots and a video walkthrough of the new UI. Add a "Test the API" step
     once the test console is confirmed for launch (see the pending Test an API page). -->

In this guide, you create an API in API Platform Cloud from an OpenAPI contract, deploy it to the development and production environments, publish it to the Developer Portal, and then invoke it with an OAuth 2.0 access token.

## Prerequisites

- An API Platform Cloud account with an active subscription. See [Sign up and activate your subscription](sign-up.md).
- An organization in API Platform Cloud. See [Sign in and organizations](sign-in-and-organizations.md).

## Step 1: Create a project

Projects group related APIs in your organization. For more information, see [Key concepts](../introduction/key-concepts.md).

1. Sign in to the API Platform Cloud Management Portal. This opens the organization home page.
2. Click **+ Create Project**.
3. Enter the following details:

    | **Field**        | **Value**         |
    | ---------------- | ----------------- |
    | **Display Name** | Sample Project    |
    | **Identifier**   | sample-project    |
    | **Description**  | My sample project |

    !!! info
        The **Identifier** must be unique and cannot be changed after the project is created.

4. Click **Create**. This creates the project and opens the project home page.

## Step 2: Create an API

1. On the project home page, click **Import API Contract**.
2. Click **URL for API Contract**, enter the following URL, and then click **Next**:

    ```text
    https://raw.githubusercontent.com/wso2/docs-api-platform/refs/heads/main/en/docs/assets/files/sample-api.yaml
    ```

3. Review the details on the **Create API from Contract** page and click **Create**.

For other ways to create an API, see [Create an API](../develop-apis/create-an-api.md).

## Step 3: Deploy the API to development

1. In the left navigation menu, click **Deploy**.
2. Confirm that the **Development** card shows the **Deployment Status** as **Active**. If it does not, click **Deploy** in the **Development** card.

For more information, see [Environments](../deploy/environments.md).

## Step 4: Promote the API to production

After you verify the API in the development environment, promote it to production.

1. In the left navigation menu, click **Deploy**.
2. In the **Development** card, click **Promote**.
3. In the **Configuration Types** pane, select **Use Development endpoint configuration** and click **Next**.

    !!! tip
        To use a different backend endpoint in production, change it in the **Configuration Types** pane.

The **Production** card shows the **Deployment Status** as **Active** when the API is deployed to production. For more information, see [Promote APIs between environments](../deploy/promote-apis-between-environments.md).

## Step 5: Publish the API

Publish the API so that application developers can discover it in the Developer Portal.

1. In the left navigation menu, click **Develop** and then click **Lifecycle**. The current lifecycle state is **Created**.
2. Click **Publish**.
3. In the **Publish API** dialog, change the display name if required, and click **Confirm**.

The lifecycle state changes to **Published**. For more information, see [Publish APIs to the Developer Portal](../publish-and-consume/publish-apis-to-the-developer-portal.md).

## Step 6: Invoke the API

To invoke the API, create an application in the Developer Portal, subscribe it to the API, and generate an access token.

1. On the **Lifecycle** page, click **Go to DevPortal**. This opens the API in the Developer Portal.
2. Create an application:
    1. In the left navigation menu, click **Applications**.
    2. Click **Create**, enter a name for the application, and click **Create**.
3. Subscribe the application to the API:
    1. Open the application and click **Subscribe to more APIs** under **Subscribed APIs**.
    2. On the **Sample API** card, select your application and click **Subscribe**.
4. Generate an access token:
    1. Open the application and click **Manage Keys**.
    2. On the **Production** tab, click **Generate**. This populates the **Consumer Key** and **Consumer Secret** fields.
    3. Click **Generate** to generate an access token, and copy it.
5. Invoke the API:
    1. In the left navigation menu, click **APIs** and open **Sample API**.
    2. Click **Documentation** to open the API definition.
    3. Expand `GET /uuid`.
    4. Enter the access token in the format `Bearer <ACCESS_TOKEN>`.
    5. Click **Send API Request**.

    The response contains a generated UUID, which shows that the API is deployed, secured, and published.

## What's next

- [Secure APIs with OAuth 2.0](../secure-apis/secure-apis-with-oauth2.md)
- [Apply policies](../develop-apis/policies/apply-policies.md)
- [Developer Portal](../publish-and-consume/developer-portal.md)
