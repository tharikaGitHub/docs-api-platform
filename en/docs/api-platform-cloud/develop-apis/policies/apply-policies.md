---
title: "Apply policies"
description: "Attach policies to an API in API Platform Cloud to control how the gateway handles requests and responses."
canonical_url: https://wso2.com/api-platform/docs/api-platform-cloud/develop-apis/policies/apply-policies/
md_url: https://wso2.com/api-platform/docs/api-platform-cloud/develop-apis/policies/apply-policies.md
tags:
  - cloud
  - develop-apis
  - policies
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-18
content_type: "how-to"
---

# Apply policies

<!-- TODO: Adapted from the Bijira page(s) on the cloud branch, en/docs/cloud/develop-api-proxy/policy/overview.md, en/docs/cloud/develop-api-proxy/policy/policies.md, en/docs/cloud/develop-api-proxy/policy/attach-and-manage-policies.md. Verify against API Platform Cloud before publishing:
     - Confirm the built-in policy list for launch. The list below is Bijira's, trimmed; names, levels, and behavior may differ on the API Platform Cloud gateway (compare with Policy Hub).
     - UI names and flow: Develop > Policy, Add API-level Policies, Attach Mediation Policy, Policy List, Edit Mediation Policies, Add, Save, Deploy > Configure & Deploy, Save & Deploy.
     - Whether policies still apply to Request, Response, and Error flows, and at both API and resource level.
     - Whether the ${variableName} placeholder syntax for environment-specific values still applies, and how it relates to policy system parameters.
     - How to reorder and remove attached policies (Bijira only said "rearrange or swap").
     - Dropped from Bijira: resource mapping and design history (API proxy design), the Ballerina mediation application and its two-step deployment, Refresh Mediation Policies, and implementing policies in Ballerina. Custom policies in API Platform Cloud are written in Go.
     - Add screenshots of the new UI. -->

Policies are units of logic that the gateway runs on API calls. You attach policies to an API to change how the gateway handles a request before it reaches the backend, or a response before it reaches the client. For example, you can add a header to every request, or transform a response payload from JSON to XML.

## How policies work

You can attach a policy at two levels:

- **API level:** The policy applies to every resource of the API.
- **Resource level:** The policy applies only to the resource you attach it to.

Each policy runs in one of the following flows of an API call:

- **Request flow:** The gateway runs the policies on the request before it sends the request to the backend.
- **Response flow:** The gateway runs the policies on the response from the backend before it sends the response to the client.
- **Error flow:** If an error occurs while a policy runs or while the gateway processes the call, the gateway runs the error flow and sends an error response to the client.

When you attach more than one policy to a flow, the gateway runs them in the order they are listed. Each policy sees the changes that the policies before it made.

## Built-in policies

API Platform Cloud provides built-in policies for common security, traffic control, and transformation tasks. For the full catalog of policies, see [Policy Hub]({BASE_URL}/policy-hub/).

### API-level policies

- **OAuth2:** Secures the API with OAuth 2.0. Only clients with a valid access token can call the API. This policy is enabled by default for every resource, and you can remove it from individual resources. For more information, see [Secure APIs with OAuth 2.0](../../secure-apis/secure-apis-with-oauth2.md).
- **Rate Limiting:** Limits the number of requests a client can make in a time window, for example, 100 requests per minute. The gateway rejects requests over the limit with a `429 Too Many Requests` response. You can also set rate limits at the resource level.
- **CORS:** Controls which origins can call the API from a browser by configuring `Access-Control-Allow-Origin`, `Access-Control-Allow-Headers`, `Access-Control-Allow-Methods`, and `Access-Control-Allow-Credentials`.

### Resource-level policies

- **Add Header:** Adds a header to a request or response. If you add the same header more than once, the values are appended.
- **Set Header:** Sets a header on a request or response and overwrites any existing value.
- **Remove Header:** Removes a header from a request or response.
- **Add Query Parameter:** Adds a query parameter to a request. Adding the same parameter more than once creates an array of values.
- **Remove Query Parameter:** Removes a query parameter from a request. If the parameter does not exist, the request continues unchanged.
- **Rewrite Resource Path:** Replaces the resource path of a request with a new relative path. If you attach this policy more than once, only the last one takes effect.
- **JSON to XML:** Transforms a JSON payload to XML. The payload must be JSON, so you can attach this policy only once to a flow.
- **XML to JSON:** Transforms an XML payload to JSON. The payload must be XML, so you can attach this policy only once to a flow.
- **Permissions (Scopes):** Restricts a resource to access tokens that contain the required scopes.

To use logic that the built-in policies don't cover, see [Custom policies](custom-policies.md).

## Attach an API-level policy

1. Sign in to the API Platform Cloud Management Portal.
2. Select the project and the API to which you want to attach a policy.
3. In the left navigation menu, click **Develop**, and then click **Policy**.
4. Click **Add API-level Policies**.
5. In the **API Policies** pane, click **Attach Mediation Policy** to view the policies that you can attach.
6. In the **Policy List** pane, click a policy to view its details and configure its parameters.
7. Click **Add** to attach the policy, and then click **Save**.

## Attach a resource-level policy

1. Sign in to the API Platform Cloud Management Portal.
2. Select the project and the API to which you want to attach a policy.
3. In the left navigation menu, click **Develop**, and then click **Policy**.
4. In the resource list, click the attach policy icon for the resource.
5. In the **Edit Mediation Policies** pane, click **Attach Mediation Policy** in the flow where you want to add the policy: **Request**, **Response**, or **Error**.
6. In the **Policy List** pane, click a policy to view its details and configure its parameters.
7. Click **Add** to attach the policy to the flow, and then click **Save**.

## Use environment-specific values

To use a different parameter value in each environment, enter the value as a placeholder in the `${<variableName>}` format, for example, `${headerValue}`. You provide the actual value for each environment when you deploy the API.

For parameters that policies share across your organization, see [Configure policy system parameters](configure-system-parameters.md).

## Deploy the API

A policy takes effect only after you deploy the API.

1. In the left navigation menu, click **Deploy**, and then click **Configure & Deploy**.
2. In the **Configure & Deploy** pane, enter values for any placeholders that the attached policies use.
3. Click **Save & Deploy**.

For more information on deploying to and promoting between environments, see [Environments](../../deploy/environments.md).
