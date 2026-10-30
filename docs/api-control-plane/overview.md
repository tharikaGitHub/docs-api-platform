---
title: "API Control Plane"
description: "Create, develop, test, and publish API proxies in API Platform Cloud, and deploy them to gateways."
slug: /api-control-plane
---

The API Control Plane is where you build and manage API proxies. An API proxy sits in front of your backend service, secures it, applies policies to its traffic, and controls who can use it.

You create and configure API proxies in the control plane. You then deploy them to gateways that run in the data plane, and publish them to Developer Portals where consumers can find and use them. For more on how the two planes work together, see [Control Plane and Data Planes](../key-concepts.md#control-plane-and-data-planes).

## Build an API Proxy

An API proxy goes through the following stages.

| Stage | What You Do |
|:------|:------------|
| Create | Create a REST API proxy [from scratch](../create-api-proxy/rest-apis/start-from-scratch.md) or [with a contract](../create-api-proxy/rest-apis/start-with-a-contract.md), or a GraphQL API proxy [from scratch](../create-api-proxy/graphql-apis/start-from-scratch.md) or [with a schema](../create-api-proxy/graphql-apis/start-with-a-schema.md). |
| Develop | [Secure access to the API](../develop-api-proxy/security/secure-api-access/overview.md), [secure the connection to the backend](../develop-api-proxy/security/secure-backend-communication/oauth2.md), [attach policies](../develop-api-proxy/policy/overview.md), and [add documents](../develop-api-proxy/documents.md) for consumers. |
| Test | Invoke the deployed API proxy from the [API Console](../test-api-proxy/api-console.md), the [GraphQL Console](../test-api-proxy/graphql-console.md), or [cURL](../test-api-proxy/curl.md). |
| Publish | [Publish the API](../publish-api-proxy/publish-an-api.md) to one or more [Developer Portals](../portals.md), set its [subscription plans](../publish-api-proxy/subscription-plans-and-billing.md), and [make it AI-ready](../publish-api-proxy/make-an-api-ai-ready.md). |
| Administer | Manage the [users](../administer/managing-users.md), [roles](../administer/role-based-access-control.md), [environments](../administer/managing-environments.md), [gateways](../gateways.md), [portals](../portals.md), and [subscription plans](../administer/creating-subscription-plans.md) of your organization. |
| Monitor | View the [runtime logs](../observability-and-insights/runtime-logs.md) and [audit logs](../observability-and-insights/audit-logs.md) of your API proxies. |

You deploy an API proxy to a gateway in the first environment of a [pipeline](../key-concepts.md#pipelines), test it there, and then promote the same build to the next environment.

## Get Started

To build your first API proxy and publish it to the Developer Portal, follow the [Quick Start Guide](../getting-started/api-proxy.md).
