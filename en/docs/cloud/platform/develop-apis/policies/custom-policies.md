---
title: "Custom policies"
description: "Sync custom policies from a gateway to your API Platform Cloud organization and apply them to APIs alongside the built-in policies."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/develop-apis/policies/custom-policies/
md_url: https://wso2.com/api-platform/docs/cloud/platform/develop-apis/policies/custom-policies.md
tags:
  - cloud
  - develop-apis
  - policies
  - custom-policies
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-18
content_type: "how-to"
---

# Custom policies

<!-- TODO: Adapted from the Bijira page(s) on the cloud branch, en/docs/cloud/api-platform-gateway/apply-custom-policies-to-apis.md. Verify against API Platform Cloud before publishing:
     - How custom policies reach API Platform Cloud gateways. Bijira's flow works only for a self-hosted (hybrid) gateway that you build with your policies: the gateway sends its policy manifest to the control plane, and you sync the policies to the organization. Confirm whether this is the only path, or whether custom policies can also run on WSO2-managed (internal and external) gateways, and rewrite "How custom policies reach your organization" accordingly.
     - UI names and flow: Admin > Gateways, gateway detail view, Policies tab, Sync Status column, Sync button, Latest Version Available, API Platform tab, Custom Policies section.
     - Versioning rules (separate entry per major version, minor updates re-enable Sync, no patch updates, no downgrades) and the rule that a policy in use can't be deleted.
     - Dropped from Bijira: links to self-hosted gateway publishing pages.
     - Add screenshots of the new UI. -->

Custom policies let you run your own logic on API calls when the built-in policies don't cover your requirements. You write a custom policy in Go, include it in a gateway build, sync it to your organization, and then attach it to APIs in the same way as a built-in policy.

## How custom policies reach your organization

A gateway that includes your custom policy sends a policy manifest to API Platform Cloud each time it connects. The manifest lists every policy installed on the gateway. You then sync the custom policies from that manifest to your organization, which makes them available to every API in the organization.

To write a custom policy and build a gateway that includes it, see [Build a custom policy with Go](build-a-custom-policy-with-go.md). For information on running the gateway, see the [API Gateway documentation](../../../../../api-gateway/).

## Step 1: View the policies on a gateway

1. Sign in to the API Platform Cloud Management Portal.
2. Go to the organization level.
3. In the left navigation menu, click **Admin**, and then click **Gateways**.
4. Select the gateway that includes your custom policy.
5. Click the **Policies** tab.

The **Policies** tab shows the policies in the most recent manifest that the gateway sent:

| Column | Description |
|---|---|
| **Name** | The policy name. |
| **Version** | The installed version. |
| **Description** | The policy description. |
| **Policy Type** | `Policy Hub` for policies that WSO2 manages, or `Custom` for your own policies. |
| **Sync Status** | **Sync** if the policy is not synced yet or a newer version is available, or **Latest Version Available** if the synced version is up to date. |

## Step 2: Sync the custom policy to the organization

You must sync a custom policy to the organization before you can apply it to APIs.

1. In the **Sync Status** column of your custom policy, click **Sync**.

The status changes to **Latest Version Available**, and the policy is available to every API in the organization.

!!! note
    - Policy Hub policies show **N/A** in the **Sync Status** column. WSO2 manages them, so you can't sync them.
    - Each major version of a custom policy is a separate policy entry with the same name.
    - A minor version update enables the **Sync** button again, so that you can sync the newer version.
    - Patch version updates and version downgrades are not supported.

## Step 3: View the custom policies in the organization

1. In the left navigation menu, click **Admin**, and then click **Gateways**.
2. Click the **API Platform** tab.
3. Scroll down to the **Custom Policies** section below the gateway list.

The **Custom Policies** section lists every custom policy synced to the organization, with its name, version, description, and the dates it was created and last updated.

!!! note
    You can delete a synced custom policy only if no API in the organization uses it.

## Step 4: Apply the custom policy to an API

1. Open the API to which you want to apply the policy.
2. In the left navigation menu, click **Develop**, and then click **Policy**.
3. Attach your custom policy and configure its parameters.
4. Deploy the API.

For detailed steps on attaching and configuring policies, see [Apply policies](apply-policies.md).
