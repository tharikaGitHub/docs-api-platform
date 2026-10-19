---
title: "What is API Platform Cloud?"
description: "Learn what API Platform Cloud is and how it helps you manage, secure, and govern APIs and AI services as a WSO2-managed service."
canonical_url: https://wso2.com/api-platform/docs/api-platform-cloud/
md_url: https://wso2.com/api-platform/docs/api-platform-cloud.md
tags:
  - cloud
  - overview
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-18
content_type: "concept"
---

# What is API Platform Cloud?

API Platform Cloud is the WSO2-managed way to run WSO2 API Platform. WSO2 operates the control plane for you, so you can design, secure, deploy, publish, and govern your APIs and AI services without installing or upgrading platform components yourself.

WSO2 API Platform runs in one of two ways:

- **Cloud:** API Platform Cloud, described in this section. WSO2 hosts and maintains the platform.
- **Self-managed:** You download and run the platform components, such as API Manager, API Gateway, and AI Gateway, on your own infrastructure.

API Gateway and AI Gateway can also run in hybrid mode: the gateway runs on your infrastructure, and you manage it from API Platform Cloud.

## Key capabilities

### Develop APIs

- **Create APIs:** Create APIs in the Management Portal using the API types and creation methods that API Platform Cloud supports. See [Create an API](develop-apis/create-an-api.md).
- **Apply policies:** Attach policies to control how the gateway handles requests and responses. See [Apply policies](develop-apis/policies/apply-policies.md).
- **Extend with custom policies:** Add your own policies when the built-in ones don't cover your requirements. See [Custom policies](develop-apis/policies/custom-policies.md).

### Secure APIs

- **OAuth 2.0:** Protect your APIs with OAuth 2.0 access tokens. See [Secure APIs with OAuth 2.0](secure-apis/secure-apis-with-oauth2.md).
- **Secrets:** Store backend credentials and API keys as secrets instead of in API configuration. See [Manage secrets](secure-apis/manage-secrets.md).

### Deploy

- **Environments:** Deploy APIs to separate environments, such as development and production. See [Environments](deploy/environments.md).
- **Promotion:** Move an API from one environment to the next after it is tested. See [Promote APIs between environments](deploy/promote-apis-between-environments.md).
- **Gateways:** Expose APIs through internal or external gateways, each with its own custom domain if required. See [Internal and external gateways](deploy/gateways/internal-and-external-gateways.md) and [Custom gateway domains](deploy/gateways/custom-gateway-domains.md).

### Publish and consume

- **Developer Portal:** Publish APIs so that application developers can discover, subscribe to, and try them. See [Publish APIs to the Developer Portal](publish-and-consume/publish-apis-to-the-developer-portal.md) and [Developer Portal](publish-and-consume/developer-portal.md).
- **AI Workspace:** Manage AI services such as LLM providers and MCP servers alongside your APIs. See [AI Workspace](publish-and-consume/ai-workspace.md).

### Govern

- **API governance:** Check APIs against design and security rulesets before they are published. See [API governance](govern/api-governance.md).

### Administer and automate

- **Users and roles:** Control who can do what in your organization. See [Users and roles](administer/users-and-roles.md).
- **Event notifications:** Get notified when something changes in your organization. See [Event notifications](administer/event-notifications.md).
- **Platform API:** Automate API Platform Cloud tasks through its REST API and events. See [Platform API overview and authentication](platform-api/overview.md).

## Get started

1. Learn the [key concepts](introduction/key-concepts.md): organizations, projects, environments, and gateways.
2. [Sign up and activate your subscription](getting-started/sign-up.md).
3. Follow the [quick start guide](getting-started/quick-start-guide.md) to create, deploy, and invoke your first API.
