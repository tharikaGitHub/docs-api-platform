---
title: "Create an API"
description: "Create a REST API in API Platform Cloud by importing an API contract, starting with a backend endpoint, or defining it from scratch."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/develop-apis/create-an-api/
md_url: https://wso2.com/api-platform/docs/cloud/platform/develop-apis/create-an-api.md
tags:
  - cloud
  - develop-apis
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-18
content_type: "how-to"
---

# Create an API

<!-- TODO: Adapted from the Bijira page(s) on the cloud branch, en/docs/cloud/create-api-proxy/overview.md, create-api-proxy/my-apis/http/import-api-contract.md, start-with-endpoint.md, and start-from-scratch.md. Verify against API Platform Cloud before publishing:
     - Button, option, and field names in every step (they are Bijira's): + Create, Import API Contract, URL, Start with Endpoint, Endpoint URL, Start from Scratch, Target, Access Mode.
     - The fields on the API details form and the base path format (Bijira used /default/<identifier>/<version>).
     - Whether Access Mode (External/Internal) is set when creating the API or when deploying it, and how it maps to internal and external gateways.
     - Confirm whether supported at launch: Create with GenAI, Import API contract from GitHub, WebSocket APIs, GraphQL APIs, and third-party (egress) APIs, including Get from Marketplace and AI APIs.
     - The sample backend: Bijira's samples used apis.bijira.dev and samples.choreoapps.dev; this page uses https://dev-tools.wso2.com/gs/helpers/v1.0 and the sample-api.yaml contract from the quick start instead.
     - Add screenshots of the new UI. -->

An API in API Platform Cloud fronts an existing backend service. Requests to the API go through the API Platform Cloud gateway, so you can apply API management features such as security and policies without changing the backend.

You can create a REST API in one of the following ways:

- [Import an API contract](#import-an-api-contract): Use an existing OpenAPI definition.
- [Start with an endpoint](#start-with-an-endpoint): Provide the backend URL and define the API details.
- [Start from scratch](#start-from-scratch): Define the API details and resources yourself.

## Before you begin

- Sign in to the API Platform Cloud Management Portal. See [Sign in and organizations](../getting-started/sign-in-and-organizations.md).
- Open the project where you want to create the API. For more information, see [Key concepts](../introduction/key-concepts.md).

## Import an API contract

Use this method when you have an OpenAPI definition for the backend service.

1. On the project home page, click **+ Create**.
2. Select **Import API Contract**.
3. Select **URL** and enter the URL of the OpenAPI definition. For example:

    ```text
    https://raw.githubusercontent.com/wso2/docs-api-platform/refs/heads/main/en/docs/assets/files/sample-api.yaml
    ```

4. Click **Next**. API Platform Cloud fills in the API details from the contract. Change the values if required.
5. Click **Create**.

## Start with an endpoint

Use this method when you know the backend URL but don't have an API contract.

1. On the project home page, click **+ Create**.
2. Select **Start with Endpoint**.
3. In **Endpoint URL**, enter the backend URL. For example, `https://dev-tools.wso2.com/gs/helpers/v1.0`.
4. Click **Next**.
5. Enter the API details. For example:

    | **Field**       | **Value**                      |
    | --------------- | ------------------------------ |
    | **Name**        | `Sample API`                   |
    | **Identifier**  | `sample-api`                   |
    | **Version**     | `1.0`                          |
    | **Description** | `Sample API for helper tools.` |
    | **Access Mode** | `External`                     |

6. Click **Create**.

## Start from scratch

Use this method to define the API details and the backend target yourself.

1. On the project home page, click **+ Create**.
2. Select **Start from Scratch**.
3. Enter the API details. For example:

    | **Field**       | **Value**                                    |
    | --------------- | -------------------------------------------- |
    | **Name**        | `Sample API`                                 |
    | **Identifier**  | `sample-api`                                 |
    | **Version**     | `1.0`                                        |
    | **Description** | `Sample API for helper tools.`               |
    | **Target**      | `https://dev-tools.wso2.com/gs/helpers/v1.0` |
    | **Access Mode** | `External`                                   |

4. Click **Create**.

!!! info
    The **Identifier** must be unique and cannot be changed after the API is created.

## What's next

After you create the API:

1. [Apply policies](policies/apply-policies.md) to control how the gateway handles requests and responses.
2. Deploy the API to an environment. See [Environments](../deploy/environments.md).
3. [Promote the API between environments](../deploy/promote-apis-between-environments.md), for example from development to production.
4. [Publish the API to the Developer Portal](../publish-and-consume/publish-apis-to-the-developer-portal.md) so that application developers can use it.
