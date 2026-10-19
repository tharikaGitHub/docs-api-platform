---
title: "Key concepts"
description: "Learn the core API Platform Cloud concepts, including organizations, projects, environments, and gateways."
canonical_url: https://wso2.com/api-platform/docs/api-platform-cloud/introduction/key-concepts/
md_url: https://wso2.com/api-platform/docs/api-platform-cloud/introduction/key-concepts.md
tags:
  - cloud
  - concepts
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-18
content_type: "concept"
---

# Key concepts

<!-- TODO: Adapted from the Bijira page(s) on the cloud branch, en/docs/cloud/bijira-concepts/organization.md, en/docs/cloud/bijira-concepts/project.md, en/docs/cloud/bijira-concepts/data-planes.md. Verify against API Platform Cloud before publishing:
     - Whether a user can still create only one organization and be invited to others.
     - The predefined groups and roles. Bijira listed Admin, API Publisher, API Subscriber, Choreo Platform Engineer, and Choreo DevOps; the Choreo roles are left out here.
     - Whether projects can contain MCP servers as well as APIs.
     - The control plane and gateway model: Bijira used cloud data planes and private data planes; this page describes internal and external gateways instead. Confirm the gateway types and whether private (dedicated) gateways exist.
     - Whether every organization gets development and production environments by default.
     - Add an architecture diagram of the new control plane and gateways. -->

API Platform Cloud is organized around four concepts: organizations, projects, environments, and gateways. Each concept is described below, from the outermost boundary to where your APIs run.

## Control plane and gateways

API Platform Cloud has two parts:

- **Control plane:** Managed by WSO2. You use it through the Management Portal to configure organizations, users, and projects, and to take APIs through their lifecycle, from creation and deployment to governance and publishing to the Developer Portal.
- **Gateways:** Where your deployed APIs run and where API traffic flows, based on the configuration you define in the control plane.

## Organizations

An organization is a logical container for users and their resources. Every user belongs to at least one organization.

- **Onboarding:** When you sign up, you create an organization and become its first member.
- **Isolation:** Users and resources in one organization can't access those in another organization unless they are invited to it.
- **Membership:** You can create one organization and be invited to others.

### Groups and roles

API Platform Cloud manages permissions with groups and roles:

- A **role** defines the actions a user can perform in the organization.
- A **group** is a collection of users with one or more roles. Users get all the permissions of their group's roles. For example, adding a user to the **API Publisher** group gives them the **API Publisher** role.

The predefined roles include:

- **Admin:** Full access to the organization, including user management and subscription settings.
- **API Publisher:** Creates, documents, and publishes APIs to the Developer Portal.
- **API Subscriber:** Discovers APIs in the Developer Portal, subscribes to them, obtains access tokens, and invokes them.

!!! tip
    When you create a group, assign at least one role to it so that its members have the permissions they need.

For more information, see [Users and roles](../administer/users-and-roles.md).

### Organization identifiers

Each organization has two unique identifiers:

- **Organization ID:** A system-generated identifier.
- **Organization handle:** A human-readable identifier based on the organization name.

Use these identifiers for integrations, automation, and support requests. To find them, see [Sign in and organizations](../getting-started/sign-in-and-organizations.md#find-your-organization-identifiers).

## Projects

A project groups related APIs that together deliver a business capability. Projects keep resources, permissions, and deployments separate from other projects in the organization.

A project can contain:

- **APIs:** Managed APIs that expose your services securely.
- **MCP servers:** Managed MCP servers for AI agents to consume.

You can manage, version, and deploy the components of a project together.

## Environments

An environment is a stage that you deploy APIs to, such as development or production. You test an API in one environment and then promote it to the next. For more information, see [Environments](../deploy/environments.md) and [Promote APIs between environments](../deploy/promote-apis-between-environments.md).

## Gateways

Gateways run your deployed APIs. All traffic for an API stays within the gateway it is deployed to. API Platform Cloud provides internal and external gateways, so you can expose an API inside your organization only or to the public internet. For more information, see [Internal and external gateways](../deploy/gateways/internal-and-external-gateways.md).
