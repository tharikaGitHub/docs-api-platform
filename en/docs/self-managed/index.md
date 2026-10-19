---
title: "API Platform"
description: "Run WSO2 API Platform components on your own infrastructure: API Manager, API Gateway, AI Gateway, API Portal, and AI Workspace, alone or together."
canonical_url: https://wso2.com/api-platform/docs/self-managed/
md_url: https://wso2.com/api-platform/docs/self-managed.md
tags:
  - self-managed
  - platform-overview
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-19
content_type: "concept"
---

# API Platform

In a self-managed deployment, you download WSO2 API Platform components and run them on your own infrastructure. You control where the software runs and where your data resides.

You can run one component on its own, such as a standalone API Gateway, or combine several into a complete solution.

## Components

Each component is released and versioned independently. To read the documentation for the version you run, select it in the sidebar.

| Component | What it does | Documentation |
| :--- | :--- | :--- |
| **API Manager** | The full API management stack in one versioned release: a control plane with Publisher and Developer Portal, and gateways. | [API Manager](../api-manager/) |
| **API Gateway** | A Go-based gateway for REST, WebSocket, and GraphQL traffic. Run it standalone and configure it with YAML files, the CLI, or the REST API, or connect it to a control plane. | [API Gateway](../api-gateway/) |
| **AI Gateway** | A gateway for AI traffic. LLM proxies route requests to LLM providers with guardrails, load balancing, and token-based rate limiting. MCP proxies govern how AI agents reach your services. | [AI Gateway](../ai-gateway/) |
| **API Portal** | A developer portal where consumers discover APIs and MCP servers, create applications, and manage subscriptions and keys. | [API Portal](../api-portal/) |
| **AI Workspace** | A control plane for AI traffic. Connect AI Gateway runtimes, configure LLM providers, LLM proxies, and MCP proxies, and apply guardrails and rate limits. | [AI Workspace](../ai-workspace/) |

## Compatibility

Because each component has its own release cycle, not every version of one component works with every version of another. Before you combine components, check each component's documentation for the versions it supports.

## Use your gateways with API Platform Cloud

API Gateway and AI Gateway can also run in hybrid mode: the gateway runs on your infrastructure, and you manage it from API Platform Cloud. API Platform Cloud supports specific gateway versions in hybrid mode. For more information, see [API Platform Cloud](../api-platform-cloud/).

## Choose where to start

- To find a quick start guide for your goal, see [Get Started](../get-started.md).
- To compare cloud, hybrid, and self-managed deployments, see the [platform overview](../index.md).
