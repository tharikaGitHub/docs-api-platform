---
title: "Environments"
description: "Learn how environments work in API Platform Cloud and how to manage them."
canonical_url: https://wso2.com/api-platform/docs/api-platform-cloud/deploy/environments/
md_url: https://wso2.com/api-platform/docs/api-platform-cloud/deploy/environments.md
tags:
  - cloud
  - deploy
  - environments
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-18
content_type: "how-to"
---

# Environments

<!-- TODO: Adapted from the Bijira page(s) on the cloud branch, en/docs/cloud/administer/manage-environments/manage-environments.md.
     Verify against API Platform Cloud before publishing:
     - Whether every new project still gets a development and a production environment by default.
     - The Management Portal navigation (Organization > Admin > Environments) and the button names.
     - The Create Environment fields. Bijira had Name, Data Plane, DNS Prefix, and "Mark environment as a Production environment";
       "Data Plane" is written here as "Gateway". Confirm the field name and whether an environment maps to one gateway.
     - How the DNS prefix combines with the gateway's custom domain.
     - The permissions needed to deploy to production environments.
     - The deletion confirmation flow.
     - Add screenshots of the new UI. -->

An environment is a stage that your APIs are deployed to, such as development or production. By default, every project in API Platform Cloud has two environments: development and production.

Environments are listed in the order of deployment and promotion. An API is first deployed to the first environment, and you then promote it to the next environments in order. For more information, see [Promote APIs between environments](promote-apis-between-environments.md).

!!! tip
    You can have more than one non-production environment and more than one production environment. To work in a production environment, you need permissions to access and deploy to production environments.

## Create an environment

1. Sign in to the API Platform Cloud Management Portal.
2. In the top navigation menu, click **Organization** and select your organization.
3. In the left navigation menu, click **Admin** and then click **Environments**.
4. On the **Environments** page, click **Create** and enter the following details:

    - **Name**: A display name for the environment.
    - **Gateway**: The gateway that the environment uses. For more information, see [Internal and external gateways](gateways/internal-and-external-gateways.md).
    - **DNS Prefix**: A prefix that identifies the APIs exposed in this environment. The base domain depends on the custom domain configured for the gateway. For more information, see [Custom gateway domains](gateways/custom-gateway-domains.md).
    - **Mark environment as a Production environment**: Select this option to make the environment a production environment.

5. Click **Create**.

## Delete an environment

!!! warning
    Deleting an environment is permanent and cannot be undone.

1. Sign in to the API Platform Cloud Management Portal.
2. In the top navigation menu, click **Organization** and select your organization.
3. In the left navigation menu, click **Admin** and then click **Environments**.
4. In the **Environments** list, click the delete icon for the environment you want to delete. A confirmation dialog describes the impact of the deletion.
5. Review the details and type the environment name to confirm.
6. Click **Delete**.
