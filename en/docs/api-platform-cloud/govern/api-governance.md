---
title: "API governance"
description: "Apply governance rules to your APIs in API Platform Cloud and review compliance."
canonical_url: https://wso2.com/api-platform/docs/api-platform-cloud/govern/api-governance/
md_url: https://wso2.com/api-platform/docs/api-platform-cloud/govern/api-governance.md
tags:
  - cloud
  - governance
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-18
content_type: "how-to"
---

# API governance

<!-- TODO: Adapted from the Bijira page(s) on the cloud branch, en/docs/cloud/governance/overview.md, en/docs/cloud/governance/govern-api-proxy.md.
     Verify against API Platform Cloud before publishing:
     - The Management Portal navigation (Organization > Admin > Governance, Policies and Documents tabs) and every button and field name.
     - The ruleset fields, including the fixed "Applies To" (API Definitions) and "Artifact Type" (HTTP API) values, and which API types rulesets support.
       Bijira's overview also listed AsyncAPI definitions, API metadata, and API documentation as validation targets; left out until confirmed.
     - The default rulesets in the catalog (Bijira showed WSO2 API Design Guidelines, WSO2 Style Guidelines, and OWASP Top 10).
     - Policy applicability (Global only?), labels (Bijira's overview described attaching policies to labels; the how-to did not), governed state (Update only?), and actions (Notify only?).
     - Whether AI compliance analysis with governance documents is available at launch.
     - Where violations and compliance results are shown. Bijira used the Compliance Dashboard under Insights > Compliance;
       its link was dropped because monitoring is pending in the nav. Add a "View compliance results" section once confirmed.
     - Add screenshots of the new UI. -->

API governance checks your APIs against your organization's design, security, and compliance standards, so that APIs stay consistent as more teams build them. In API Platform Cloud, you define the standards as rulesets, group rulesets into governance policies, and the policies are evaluated against your APIs.

## How governance works

**Ruleset**
:   A collection of rules that APIs must follow, written as a [Spectral](https://docs.stoplight.io/docs/spectral/) ruleset. Rulesets validate the API definition, the OpenAPI contract of the API. Each ruleset has a unique name and an optional description.

**Governance policy**
:   A group of rulesets, together with when the rulesets are evaluated and what happens when an API violates a rule. A governance policy applies to all APIs in the organization, both existing and new.

**Document**
:   A PDF that describes governance standards in natural language. AI compliance analysis uses documents as guidelines when it evaluates your APIs.

Governance policies are evaluated when an API is updated. Each rule violation has one of the following severity levels:

- **Error**: A critical violation.
- **Warn**: A violation that needs attention.
- **Info**: Information about compliance.

For each severity level, the policy defines the action to take. API Platform Cloud notifies users about the violation (**Notify**), so they can review the API and fix it.

!!! note
    Governance policies are different from the gateway policies that you attach to an API to control requests and responses. For gateway policies, see [Apply policies](../develop-apis/policies/apply-policies.md).

## Create a ruleset

1. Sign in to the API Platform Cloud Management Portal.
2. In the top navigation menu, click **Organization** and select your organization.
3. In the left navigation menu, click **Admin** and then click **Governance**.
4. Make sure the **Policies** tab is selected.
5. In the **Rulesets** section, click **Add Ruleset**.
6. Enter the following details:

    | Field | Description | Required |
    |---|---|---|
    | **Name** | The name of the ruleset. | Yes |
    | **Description** | A short description of the ruleset. | No |
    | **Applies To** | The part of the API the ruleset validates. Fixed to **API Definitions**. | - |
    | **Artifact Type** | The type of API. Fixed to **HTTP API**. | - |
    | **Spectral Ruleset** | The ruleset file, in `.yaml`, `.yml`, or `.json` format. | Yes |
    | **Documentation Link** | A link to documentation for the ruleset. | No |
    | **Provider Name** | The name of the ruleset's provider. | Yes |

7. Click **Create**.

## Create a governance policy

You can attach the default rulesets in the catalog, your own rulesets, or both.

1. On the **Governance** page, make sure the **Policies** tab is selected.
2. Click **Add Policy**.
3. Enter the following details:

    | Field | Description | Required |
    |---|---|---|
    | **Name** | The name of the policy. | Yes |
    | **Description** | A short description of the policy. | No |
    | **Applicability** | The scope of the policy. Fixed to **Global**, which applies the policy to all APIs in the organization. | - |
    | **Enforcement Detail** | When the policy is evaluated and what happens on a violation. See the table below. | Yes |
    | **Rulesets** | The rulesets to attach to the policy. | Yes |

    The **Enforcement Detail** has the following settings:

    | Setting | Description | Values |
    |---|---|---|
    | **Governed State** | The API state in which the policy is evaluated. | **Update** |
    | **Severity Levels** | The severity levels the policy acts on. | **Error**, **Warn**, **Info** |
    | **Actions** | The action to take for each severity level. | **Notify** |

4. Click **Create**.

The policy applies to all existing and new APIs in the organization.

## Add a governance document

Add PDF documents to use as guidelines for AI compliance analysis.

1. On the **Governance** page, click the **Documents** tab.
2. Click **Add Document** and enter the following details:

    | Field | Description | Required |
    |---|---|---|
    | **Name** | The name of the document. | Yes |
    | **Description** | A short description of the document. | No |
    | **Document** | A PDF file that describes your governance standards. | Yes |

3. Click **Create**.

## Fix violations

When an API violates a rule, users are notified of the violation and its severity. To fix it, update the API so that it meets the rule, for example by correcting its API definition, and save the change. The governance policies are evaluated again when the API is updated.
