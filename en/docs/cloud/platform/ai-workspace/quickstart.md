---
title: "Get started with AI Workspace"
description: "Connect an AI Gateway to AI Workspace, configure an LLM provider and an MCP proxy, and call both through the gateway in API Platform Cloud."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/quickstart/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/quickstart.md
tags:
  - cloud
  - ai-workspace
  - ai-gateway
  - llm
  - mcp
  - quickstart
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "quickstart"
---

# Get started with AI Workspace

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/quickstart.md. Verify against API Platform Cloud before publishing:
     - Sign-up and organization creation: Bijira used console.bijira.dev; this page links to the API Platform Cloud sign-up and sign-in pages instead.
     - Part 1, Step 2: whether API Platform Cloud still asks "What do you want to build?" with an AI Service option, provisions a Default project with Development and Production environments, and opens AI Workspace in a new tab.
     - The control plane host for GATEWAY_CONTROLPLANE_HOST (Bijira: connect.bijira.dev; shown here as <control-plane-host>), and whether the Quick Start tab still fills it in.
     - The AI Gateway download version (v1.1.0 here) and which versions API Platform Cloud supports in hybrid mode.
     - Every menu, button, tab, and field name (AI Gateways, Add AI Gateway, LLM Providers, Create Provider, Models, Deploy to Gateway, API Keys, MCP Proxies, Try with Sample URL, Fetch Server Info, Publish to MCP Hub).
     - The six built-in providers, the hosted sample MCP server and its capabilities (4 tools, 10 resources, 3 prompts), and the default llm-cost guardrail.
     - The sample MCP proxy name: Bijira used bijira-mcp-everything; this page uses sample-mcp-everything.
     - Add screenshots of the new UI and an architecture diagram (Bijira's showed the gateway routing to an LLM provider and an MCP server, configured by AI Workspace). -->

AI Workspace in API Platform Cloud, hosted by WSO2, is a central control plane for your AI infrastructure. It lets you manage:

- AI Gateways that route and govern AI traffic.
- Large language model (LLM) providers that your applications use.
- Model Context Protocol (MCP) servers that provide tools and context to your applications.

AI Workspace configures the gateways, providers, and proxies, and deploys these configurations to the gateway. The gateway enforces inbound authentication on LLM providers and App LLM proxies by default; an MCP proxy needs an MCP Authentication policy for the same protection. The gateway also gives you centralized control and observability for traffic. You run the gateway on the infrastructure of your choice.

## Overview

This guide walks you through the following:

1. [Set up your workspace](#part-1-set-up-your-workspace): create an organization.
2. [Connect an AI Gateway](#part-2-connect-an-ai-gateway): register a gateway and start it.
3. [Configure an LLM provider](#part-3-configure-an-llm-provider): connect a provider, add a model, deploy it, and generate an API key.
4. [Run your first prompt](#part-4-run-your-first-prompt): send a chat completion request.
5. [Configure an MCP proxy](#part-5-configure-an-mcp-proxy): proxy a sample MCP server and deploy it.
6. [Call your first MCP tool](#part-6-call-your-first-mcp-tool): send a tool call and confirm the response.

By the end, you have an AI Gateway connected through AI Workspace to both an LLM provider and an MCP server, and you send a chat completion request and a tool call through the resulting endpoints.

This guide is for platform engineers, developers, and anyone evaluating AI Workspace for AI governance. No prior WSO2 API Platform experience is required. For background on the concepts this guide uses, see:

- [AI Workspace overview](overview.md)
- [LLM providers](llm-providers/overview.md)
- [MCP proxies](mcp-proxies/overview.md)

## Before you start

Complete the following prerequisites:

- An API Platform Cloud account. See [Sign up and activate your subscription](../getting-started/sign-up.md).
- [Docker](https://docs.docker.com/get-docker/) with the Compose plugin on the machine where the gateway runs, or another Compose-compatible container runtime such as Podman.
- Port `8443` free on that machine, for the gateway's HTTPS listener.
- `curl` and `unzip`.
- An API key from an LLM provider. This guide uses Mistral AI as the example, but any of the built-in providers works. Sign up with your chosen provider and generate a key before [Part 3](#part-3-configure-an-llm-provider).

This guide shows commands with `docker compose`. If you use Podman or another Compose-compatible runtime, run the equivalent Compose command instead, such as `podman compose up -d`.

## Part 1: Set up your workspace

Everything in the platform belongs to an *organization*, which you create once.

### Step 1: Create your organization

1. Sign in to API Platform Cloud. If you already have an organization, open it from the **Organization** menu and skip to [Part 2](#part-2-connect-an-ai-gateway).
2. On first sign-in, enter a name for your organization, accept the Privacy Policy and Terms of Use, and click **Create**.

For more information, see [Sign in and organizations](../getting-started/sign-in-and-organizations.md).

### Step 2: Choose what to build

1. When asked to select a region, keep the default and click **Get Started**.
2. On **What do you want to build?**, select **AI Service**, and then click **Next**.

API Platform Cloud provisions a **Default** project with **Development** and **Production** environments, and then opens AI Workspace in a new tab. AI Workspace opens on a guided setup page. Click **Skip and go to Console** to follow this guide's steps directly.

## Part 2: Connect an AI Gateway

An AI Gateway is the runtime that enforces authentication, rate limits, and guardrails while it routes requests to LLM providers and MCP servers. AI Workspace configures it, and you run it yourself as a set of containers. You need at least one connected and active gateway before you can send a request. This part registers a gateway in AI Workspace, and then installs and starts its runtime so that it shows a status of **Active**.

### Step 3: Register the gateway

1. Navigate to **AI Gateways** in the left navigation menu.
2. Click **Add AI Gateway**.
3. Enter the gateway details:
    - **Name**: a unique name, for example `dev-ai-gateway`.
    - **Description**: optional.
    - **URL**: keep the pre-filled `https://localhost:8443`. This is the address the gateway is reachable at once it's running. AI Workspace uses it to build the Invoke URL and MCP Proxy URL that you call from your own terminal later in this guide. Use an address that your terminal can reach, not `host.docker.internal`, which resolves only from inside a container.
    - **Associated Environment**: select **Development**.
4. Click **Add Gateway**.

!!! note "Environment list empty?"
    The **AI Service** onboarding in Part 1 didn't finish. Complete it, and then come back to this step.

AI Workspace creates the gateway with a status of **Inactive** and opens a **Get Started** section with the commands to start the runtime, under four tabs: **Quick Start**, **Virtual Machine**, **Docker**, and **Kubernetes**. This guide uses **Quick Start**. For the other methods, see [Set up an AI Gateway](ai-gateways/setting-up.md). Each command has a **Copy** button that fills in your gateway's registration token.

!!! danger "The registration token is shown once"
    If you need a new token, click **Reconfigure** on the gateway's page, which revokes the old token.

### Step 4: Install and start the gateway

Run these commands on the machine where the gateway runs. Copy each command from the gateway's **Quick Start** tab so that the values are filled in for you.

1. Download the gateway:

    ```bash
    curl -sLO https://github.com/wso2/api-platform/releases/download/ai-gateway/v1.1.0/wso2apip-ai-gateway-1.1.0.zip && \
    unzip wso2apip-ai-gateway-1.1.0.zip
    ```

2. Configure the gateway. Create `wso2apip-ai-gateway-1.1.0/configs/keys.env`. Copying from the **Quick Start** tab fills in the control plane host, the registration token, and the analytics key:

    ```bash
    MOESIF_KEY=<filled in for you>
    GATEWAY_CONTROLPLANE_HOST=<control-plane-host>
    GATEWAY_REGISTRATION_TOKEN=<filled in for you>
    ```

    `MOESIF_KEY` is optional and enables usage analytics. On Windows, create this file in a text editor, or run these commands from Git Bash or Windows Subsystem for Linux (WSL).

3. Start the gateway. It runs in the foreground, so use a second terminal for the rest of this guide:

    ```bash
    cd wso2apip-ai-gateway-1.1.0
    docker compose --env-file configs/keys.env up
    ```

The gateway connects to the control plane, and its logs show `Control plane connection established`. In AI Workspace, the gateway's status changes from **Inactive** to **Active**, and the page shows **Your gateway is connected successfully**.

Keep this gateway running for the rest of this guide.

## Part 3: Configure an LLM provider

An LLM provider connects AI Workspace to an AI service platform, such as OpenAI, Anthropic, or Mistral AI. You give AI Workspace your provider credentials once, and the clients that call your gateway never see them. LLM providers belong to the organization, not a single project, so every project in your organization can use the provider you create here. For background, see [LLM providers](llm-providers/overview.md). This part creates a provider, allows a model, deploys the provider to your gateway, and generates an API key.

### Step 5: Configure an LLM provider

This section configures Mistral AI as an example. The same steps apply to every built-in provider.

1. Navigate to **LLM Providers** in the left navigation menu, and then click **Create Provider**.
2. Select a provider tile. The built-in options are **Anthropic**, **Azure AI Foundry**, **Azure OpenAI**, **Gemini**, **Mistral**, and **OpenAI**. Select **Mistral**.

    !!! tip "Using a different provider?"
        The steps below are the same for every provider. Azure OpenAI and Azure AI Foundry also need the **Upstream URL** from your Azure resource.

3. Enter the provider details:
    - **Name**: for example, `Mistral Provider`.
    - **Version**: pre-filled, for example `v1.0`.
    - **Description**: optional.
    - **Context**: the URL path segment that this provider is reachable under, for example `/mistral`.
    - **API Key**: your Mistral AI API key. Mistral's endpoint URL is pre-configured.

    The **Guardrails & Policies** panel pre-selects a suggested `llm-cost` guardrail. Keep it, remove it, or add more later from the provider's **Guardrails & Policies** tab. See [Policies overview](policies/overview.md).

4. Click **Add Provider**.

AI Workspace encrypts the API key before it stores it, and never saves the plaintext value. AI Workspace also imports the provider's OpenAPI specification and shows a progress tracker with three remaining steps: **Add Guardrails**, **Deploy to Gateway**, and **Consume LLM Provider**. For other providers, including the Azure OpenAI and Azure AI Foundry fields, see [Configure an LLM provider](llm-providers/configure-provider.md).

### Step 6: Add a model

The provider's **Models** tab lists the models available through it.

1. On the provider's page, click the **Models** tab.
2. Confirm that `mistral-small-latest` is listed. Mistral ships with a few common models available by default. To add a different model, type its ID into the input field and press <kbd>Enter</kbd>.
3. Click **Save**.

### Step 7: Deploy the provider

A provider isn't reachable until you deploy it to a running gateway.

1. On the provider's page, click **Deploy to Gateway**. This opens a deployment page that lists your gateways.
2. Confirm that the gateway from [Part 2](#part-2-connect-an-ai-gateway) shows a status of **Active**, and then click **Deploy** next to it.

The deployment status changes to **Active** within a few seconds, and the running gateway logs `Configuration deployed successfully`.

### Step 8: Generate an API key

The **API Keys** section on the provider's **Overview** tab appears only after the provider is deployed to at least one gateway.

1. Go back to the provider's **Overview** tab. After you deploy the provider, an **Invoke URL** section and an **API Keys** section appear.
2. Under **Invoke URL**, select your gateway from the **Gateways** list and copy the URL, for example `https://localhost:8443/mistral`.
3. Under **API Keys**, click **Generate API Key**.
4. Enter a **Key Name**, for example `quickstart-test-key`, and click **Generate**.

!!! danger "Copy the key"
    An API key is displayed only once, in a dialog that also shows a ready-to-run `curl` command for one of the provider's models. Store the key securely right away. You can't retrieve it again, but you can generate a new one. This key is different from the Mistral API key that you added earlier: the Mistral key authenticates AI Workspace to Mistral, and this key authenticates your own callers to the gateway.

## Part 4: Run your first prompt

This part sends a chat completion request through your deployed provider and confirms the response.

By default, this provider authenticates requests with the `X-API-Key` header, the header named on the provider's **Security** tab. Mistral AI exposes an OpenAI-compatible API at `/v1`, so append that to the Invoke URL to reach the chat completions resource.

The following example assumes the Mistral AI provider from Part 3. If you configured a different provider, this request path and body don't apply. Anthropic and Gemini each use their own request format. Azure OpenAI and Azure AI Foundry use the same OpenAI-compatible format as this example, but need your Azure deployment name instead of a model ID. See [Invoke providers and proxies via SDKs](using-sdks.md) for the equivalent call.

```bash
curl -k -X POST "<INVOKE_URL>/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: <YOUR_GENERATED_API_KEY>" \
  -d '{
    "model": "mistral-small-latest",
    "messages": [
      { "role": "user", "content": "Say hello in exactly five words." }
    ]
  }'
```

!!! tip "Certificate warning?"
    The `-k` flag accepts the gateway's self-signed local certificate, which is expected for a local gateway.

A successful response returns `200 OK` with a chat completion:

```json
{
  "id": "7e22aefb0dac4c3ba1080d34ad8a3da5",
  "object": "chat.completion",
  "created": 1786112464,
  "model": "mistral-small-latest",
  "choices": [
    {
      "index": 0,
      "finish_reason": "stop",
      "message": {
        "role": "assistant",
        "content": "Hello there, how are you?"
      }
    }
  ],
  "usage": { "prompt_tokens": 10, "completion_tokens": 9, "total_tokens": 19 }
}
```

Your `id`, `created` timestamp, and `content` differ. A `200` status with a `choices` array confirms that the request reached Mistral through your gateway. If you see `504 upstream request timeout` instead, see [Troubleshooting](#troubleshooting).

You now have an AI Gateway connected through AI Workspace to Mistral AI, and you sent a chat completion through that gateway with a key that you generated.

## Part 5: Configure an MCP proxy

An MCP proxy exposes an MCP server through AI Workspace, so that any MCP client can discover the server's tools, resources, and prompts through the gateway, with the same authentication and governance as your LLM traffic. Unlike an LLM provider, an MCP proxy belongs to a single project, so make sure you're in the right project before you create one. For background, see [MCP proxies](mcp-proxies/overview.md). This part creates a proxy from a hosted sample MCP server, and then deploys it to your gateway.

### Step 9: Create an MCP proxy

AI Workspace includes a hosted sample MCP server, so you don't need to run one yourself.

1. Navigate to **MCP Proxies** in the left navigation menu, and then click **Create MCP Proxy**.
2. Click **Try with Sample URL**, and then click **Fetch Server Info**.

    AI Workspace fetches the server's capabilities and lists them: 4 tools (including `echo` and `add`), 10 resources, and 3 prompts.

    !!! note "Using your own MCP server?"
        Paste its URL instead of using the sample. AI Workspace must be able to reach it over the internet, because it fetches the server's capabilities from the hosted side, so a `localhost` URL doesn't work. Add credentials under **Advanced Configurations** if the server needs them. See [Configure an MCP proxy](mcp-proxies/configure-proxy.md) for details on connecting a protected server.

3. Click **Next**.
4. Enter the proxy details:
    - **Name**: a unique name, for example `sample-mcp-everything`.
    - **Version**: pre-filled, for example `v1.0`.
    - **Description**: optional.
    - **Context**: pre-filled from the name and prefixed with your project's name, for example `/default/sample-mcp-everything` for a proxy in the **Default** project from Part 1.
    - **Target**: pre-filled with the server URL from step 2.
5. Click **Create**.

The proxy page opens with a **Capabilities** tab that lists its tools, resources, and prompts, and a progress tracker with the remaining steps: **Configure Policies**, **Deploy to Gateway & Test**, and **Publish to MCP Hub**. See [MCP proxies overview](mcp-proxies/overview.md) for what each capability type means.

### Step 10: Deploy the proxy

1. On the proxy's page, click **Deploy to Gateway**. This opens a deployment page that lists your gateways.
2. Confirm that the gateway from [Part 2](#part-2-connect-an-ai-gateway) shows a status of **Active**, and then click **Deploy** next to it.

The deployment status changes to **Active** within a few seconds, and the running gateway logs `Configuration deployed successfully` with `kind=Mcp`.

## Part 6: Call your first MCP tool

This part sends a tool call through your deployed MCP proxy and confirms the response.

Go back to the proxy's **Overview** tab. Under **MCP Proxy URL**, select your gateway from the **Gateways** list and copy the URL. It ends in `/mcp`, for example `https://localhost:8443/default/sample-mcp-everything/mcp`.

Every MCP client starts a session with an `initialize` request before it can call a tool. Replace `<MCP_PROXY_URL>` with the URL that you copied, and then run the following command:

```bash
curl -ki -X POST "<MCP_PROXY_URL>" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "initialize",
    "params": {
      "protocolVersion": "2025-06-18",
      "capabilities": {},
      "clientInfo": { "name": "getting-started", "version": "1.0.0" }
    }
  }'
```

The `-i` flag prints the response headers. Copy the `Mcp-Session-Id` value, which you need for the next command.

Call the sample `add` tool. Replace `<MCP_PROXY_URL>` and `<SESSION_ID>` with your values:

```bash
curl -k -X POST "<MCP_PROXY_URL>" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "Mcp-Session-Id: <SESSION_ID>" \
  -d '{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "tools/call",
    "params": { "name": "add", "arguments": { "a": 4, "b": 5 } }
  }'
```

A successful response returns `200 OK` with the tool's output:

```text
event: message
data: {"result":{"content":[{"type":"text","text":"The sum of 4 and 5 is 9."}]},"jsonrpc":"2.0","id":2}
```

That result means your request reached the sample server's `add` tool and came back through the gateway. To explore the other tools interactively, point an MCP client such as [MCP Inspector](https://github.com/modelcontextprotocol/inspector) at the same URL.

The sample proxy has no authentication policy, so these calls need no key. Use this sample only while the gateway listens on `localhost`. Add the [MCP Authentication policy](mcp-proxies/apply-policies.md) before you deploy the proxy to a gateway that's reachable from anywhere else.

Your AI Gateway now routes governed traffic to an MCP server alongside the LLM provider from Part 3, and AI Workspace configures both from one place.

## Verify everything works end to end

To confirm that every piece is in place:

- [ ] You can sign in to AI Workspace and see your organization.
- [ ] An AI Gateway is registered and shows a status of **Active**.
- [ ] An LLM provider is configured with at least one model on its **Models** tab.
- [ ] The provider is deployed to your gateway, with a deployment status of **Active**.
- [ ] A generated API key authenticates a chat completion request through the gateway.
- [ ] An MCP proxy is configured and deployed to your gateway, with a deployment status of **Active**.
- [ ] An `initialize` request and a `tools/call` request both succeed against the MCP proxy's URL.

From here, every change that you make in AI Workspace (a guardrail, a rate limit, another model, another back end) is pushed to the gateway without changes to client code. Callers keep using the same URLs and keys.

## Troubleshooting

If something doesn't work as expected, check the following:

| Symptom | Likely cause | Fix |
|---|---|---|
| Gateway stays **Inactive** | The gateway can't reach the control plane host, or the token in `keys.env` is incorrect. | Check the `docker compose` logs. Click **Reconfigure** on the gateway's page for a new token, update `keys.env`, and restart. See [Set up an AI Gateway](ai-gateways/setting-up.md). |
| First LLM request returns `504 upstream request timeout` | The gateway hasn't received the latest configuration yet. | Wait about a minute and retry. |
| LLM request returns `401` | The `X-API-Key` header is missing or incorrect. | Use the key from [Part 3](#part-3-configure-an-llm-provider), exactly as generated. |
| MCP `initialize` request fails or times out | The gateway isn't running, or the URL is wrong. | Confirm that `docker compose` is still running and that you copied the full **MCP Proxy URL**. |
| Creating an MCP proxy from your own server fails to fetch server info | AI Workspace can't reach that URL from its hosted side. | Use a publicly reachable URL, or click **Try with Sample URL** instead. |

## Next steps

- [Manage an LLM provider](llm-providers/manage-provider.md): configure connection, access control, security, rate limiting, and guardrails for the provider that you created.
- [App LLM proxies](llm-proxies/overview.md): give one application its own endpoint, key, and policies on top of a shared provider.
- [Configure an App LLM proxy](llm-proxies/configure-proxy.md): add an application-specific endpoint on top of a provider, with its own guardrails and access rules.
- [Manage an App LLM proxy](llm-proxies/manage-proxy.md): configure provider settings, resources, security, and guardrails for an existing proxy.
- [Invoke providers and proxies via SDKs](using-sdks.md): call your deployed endpoint from the OpenAI, Anthropic, Gemini, Mistral, Azure OpenAI (including Azure AI Foundry), or LangChain SDKs.
- [Guardrails](policies/guardrails/overview.md): apply content safety, personally identifiable information (PII) masking, or prompt checks.
- [Apply MCP policies](mcp-proxies/apply-policies.md): add authentication, authorization, and access control to the MCP proxy that you created.
- [LLM cost](policies/rate-limit/llm-cost.md): cap spend and requests per key.
- [GenAI applications](genai-applications.md): group API keys under a named application for usage visibility and governance.
- [Configure inbound authentication](configure-inbound-auth.md): change the header name that your applications use to call a provider or proxy.
- [Set up an AI Gateway](ai-gateways/setting-up.md): run the gateway on a virtual machine or Kubernetes instead of locally, and manage or reconfigure it.
