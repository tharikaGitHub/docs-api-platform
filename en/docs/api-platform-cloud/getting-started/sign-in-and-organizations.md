---
title: "Sign in and organizations"
description: "Sign in to API Platform Cloud, create or switch organizations, and configure enterprise login."
canonical_url: https://wso2.com/api-platform/docs/api-platform-cloud/getting-started/sign-in-and-organizations/
md_url: https://wso2.com/api-platform/docs/api-platform-cloud/getting-started/sign-in-and-organizations.md
tags:
  - cloud
  - getting-started
  - organizations
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-18
content_type: "how-to"
---

# Sign in and organizations

<!-- TODO: Adapted from the Bijira page(s) on the cloud branch, en/docs/cloud/bijira-concepts/organization.md, en/docs/cloud/administer/configure-enterprise-login/configure-enterprise-login.md. Verify against API Platform Cloud before publishing:
     - Sign-in options (Bijira offered Google, GitHub, and Microsoft accounts) and the Management Portal URL.
     - The organization creation fields and the privacy policy and terms of use step.
     - Menu and button names: the Organization list in the header, Settings, Copy ID, Copy Handle, Access Control, Groups, Manage IdP Group Mapping, IdP Group Name.
     - How to request enterprise login: Bijira used a support portal ticket or the bijira-help@wso2.com address. Add the API Platform Cloud contact.
     - Whether enterprise login still uses an Asgardeo organization provisioned with each organization, and the names of the Asgardeo applications for the Management Portal and Developer Portal (Bijira used WSO2_LOGIN_FOR_BIJIRA and WSO2_LOGIN_FOR_BIJIRADEVPORTAL).
     - The DNS verification record format.
     - Add screenshots of the new UI. -->

This page explains how to sign in to API Platform Cloud, work with organizations, and let users sign in with their enterprise identity provider (IdP). For what organizations are and how groups and roles work, see [Key concepts](../introduction/key-concepts.md#organizations).

## Sign in and create an organization

Every user belongs to an organization. If you're signing in for the first time, create one:

1. Sign in to the API Platform Cloud Management Portal.
2. Enter a unique organization name.
3. Read and accept the privacy policy and terms of use.
4. Click **Create**.

This creates the organization and opens the organization home page. To invite others to your organization, see [Users and roles](../administer/users-and-roles.md).

## Switch organizations

If you're a member of more than one organization, switch between them as follows:

1. In the Management Portal header, click the **Organization** list.
2. Select the organization.

## Find your organization identifiers

You need your organization ID or handle for integrations, automation, and support requests.

To find the organization ID:

1. In the Management Portal header, click the **Organization** list and select your organization.
2. In the left navigation menu, click **Settings**.
3. In the header, click the **Organization** list to open the organization-level settings.
4. Under **Organization**, click **Copy ID**.

To find the organization handle:

1. In the Management Portal header, click the **Organization** list and select your organization.
2. In the left navigation menu, click **Settings**.
3. Under **Organization**, click **Copy Handle**.

## Configure enterprise login

Enterprise login lets users from your enterprise IdP sign in to API Platform Cloud with their existing credentials. You can configure it for the Management Portal, the Developer Portal, or both.

### Before you begin

- You need a valid email domain for your organization.
- You need an API Platform Cloud organization.

### Step 1: Request enterprise login

Contact WSO2 support and ask to enable enterprise login for your organization. Include the following in your request:

- Your organization name or handle. For example, `Stark Industries` or `starkindustries`.
- The email domains that belong to your organization. For example, `@stark.com` and `@starkindustries.com`.
- Whether you want enterprise login for the Management Portal, the Developer Portal, or both.

The support team configures your organization and sends you a verification code.

### Step 2: Verify your email domain

Sign in to your domain host account and add a DNS record for your email domain with the following values:

| **Field**                    | **Value**                                        |
| ---------------------------- | ------------------------------------------------ |
| **Name/Host/Alias**          | Specify `@` or leave it blank                    |
| **Time to Live (TTL)**       | Keep the default value or use `86400`            |
| **Value/Answer/Destination** | `wso2-domain-verification:<verification_code>`   |

### Step 3: Connect your identity provider

When you create an organization in API Platform Cloud, an organization with the same name is provisioned for you in Asgardeo. To bring your own identity, configure your enterprise IdP as a federated IdP in that Asgardeo organization:

1. Sign in to [Asgardeo](https://asgardeo.io/).
2. Add your enterprise IdP by following [Add standard-based login](https://wso2.com/asgardeo/docs/guides/authentication/enterprise-login/) in the Asgardeo documentation.
3. In the Asgardeo Console left navigation menu, click **Applications**.
4. Click the application for the portal you want to configure: the Management Portal or the Developer Portal.
5. Click the **Sign-in Method** tab and confirm that the connection to your IdP is configured.

Users in your enterprise IdP can now sign in with their enterprise IDs.

## Configure role-based access control for enterprise login

You can give users from your enterprise IdP the right permissions automatically by mapping the groups in your IdP to API Platform Cloud groups.

### Before you begin

- Configure enterprise login for your organization. See [Configure enterprise login](#configure-enterprise-login).
- Make sure your enterprise IdP includes group or role attributes in the tokens it sends to Asgardeo.
- You need administrator permissions in API Platform Cloud.

### Step 1: Configure Asgardeo

1. Sign in to [Asgardeo](https://asgardeo.io/).
2. [Configure your IdP as an external IdP in Asgardeo](https://wso2.com/asgardeo/docs/guides/authentication/enterprise-login/). You can use OpenID Connect or SAML between Asgardeo and your IdP.

    !!! note
        If you use OpenID Connect, configure the requested scopes so that Asgardeo receives the group or role details from your IdP.

3. Configure the application:
    1. In the Asgardeo Console left navigation menu, click **Applications**.
    2. Click the application for the portal you want to configure.
    3. Click the **Sign-in Method** tab.
    4. Enable your IdP for login:
        - For OpenID Connect, see [Enable the OIDC IdP for login](https://wso2.com/asgardeo/docs/guides/authentication/enterprise-login/add-oidc-idp-login/#enable-the-oidc-idp-for-login).
        - For SAML, see [Enable the SAML IdP for login](https://wso2.com/asgardeo/docs/guides/authentication/enterprise-login/add-saml-idp-login/#enable-the-saml-idp-for-login).
    5. Click the **User Attributes** tab.
    6. Expand the **Groups** attribute and select **Requested**.
    7. Click **Update**.
4. Add the groups attribute to the OpenID Connect scope:
    1. In the Asgardeo Console left navigation menu, click **Scopes**.
    2. In the **OpenID Connect Scopes** pane, click **OpenID**.
    3. Click **New Attribute** and select **Groups**.
    4. Click **Save** and then click **Save Changes**.

### Step 2: Map API Platform Cloud groups to IdP groups

1. Sign in to the Management Portal.
2. In the header, click **Organization** to open the organization home page.
3. In the left navigation menu, click **Settings**.
4. On the **Access Control** tab, click **Groups**.
5. Click **Manage IdP Group Mapping**.
6. Click the edit icon for the API Platform Cloud group that you want to map.
7. In the **IdP Group Name** field, enter the exact group name from your enterprise IdP and press Enter.
8. Click **Save**.

!!! tip
    Changes to the group mapping take effect from the user's next sign-in.
