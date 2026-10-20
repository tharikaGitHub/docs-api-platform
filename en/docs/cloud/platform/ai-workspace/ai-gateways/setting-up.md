---
title: "Set up an AI Gateway"
description: "Register an AI Gateway in AI Workspace, connect the gateway runtime with a registration token, and edit or delete existing gateways."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/ai-gateways/setting-up/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/ai-gateways/setting-up.md
tags:
  - cloud
  - ai-workspace
  - ai-gateways
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# Set up an AI Gateway

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/ai-gateways/setting-up.md. Verify against API Platform Cloud before publishing:
     - The role needed to manage AI Gateways (Bijira: Admin role in the API Platform Console).
     - Menu, button, column, and field names (AI Gateways, + Add AI Gateway, Get Started, Reconfigure, the Quick Start / Virtual Machine / Docker / Kubernetes tabs).
     - The control plane host for GATEWAY_CONTROLPLANE_HOST (Bijira: connect.bijira.dev; shown here as <control-plane-host>).
     - The AI Gateway versions in each tab. Bijira's Quick Start tab used v1.0.0 while the other tabs used v1.1.0; confirm the version API Platform Cloud supports in hybrid mode and use it everywhere.
     - The Virtual Machine and Docker tabs: Bijira's Step 2 had no configuration command, only the token note. Confirm the configuration step for these methods.
     - The Kubernetes Helm values (Bijira used host.docker.internal and port 8443 for the control plane), and the chart version.
     - Add screenshots of the new UI. -->

AI Gateways are the runtimes that process and route requests between your applications and LLM providers. You create and manage AI Gateways in AI Workspace, and deploy your LLM providers and proxies to them.

## Prerequisites

- Access to AI Workspace with the **Admin** role.

## View AI Gateways

1. Navigate to **AI Gateways** in the left navigation menu.

The AI Gateways page lists all configured gateways with the following details:

| Column | Description |
|--------|-------------|
| **Name** | The gateway name. |
| **Description** | A brief description of the gateway. |
| **Status** | The current status (Active or Not Active). |
| **Last Updated** | The timestamp of the most recent change. |
| **Actions** | Edit and delete options. |

## Add an AI Gateway

1. Navigate to **AI Gateways** in the left navigation menu.
2. Click **+ Add AI Gateway**.
3. Enter the gateway details:
    1. **Name** (required): a unique name for the gateway, for example `production-gateway` or `dev-gateway`.
    2. **Description** (optional): a brief description of the gateway's purpose.
    3. **URL** (required): the gateway URL, for example `https://localhost:8443`. This is the endpoint where the gateway runtime is reachable.
    4. **Associated Environment** (required): the environment, for example `Development` or `Production`.
4. Click **Add Gateway**.

The gateway's page opens, showing the gateway name, status (**Inactive** at first), virtual host, and creation time.

## Set up the gateway runtime

After you create an AI Gateway, set up its runtime. The gateway's page has a **Get Started** section with setup instructions.

### Gateway registration token

A **Gateway Registration Token** appears at the top of the **Get Started** section. The gateway runtime uses this token to connect to the control plane.

!!! danger "Important"
    This token is shown only once. Save it securely before you leave the page.

!!! tip "Lost your token?"
    The registration token is single-use. To reconfigure the gateway, click **Reconfigure** to generate a new token. This revokes the old token and disconnects the gateway from the control plane.

### Installation methods

The **Get Started** section has setup instructions for several deployment options:

=== "Quick Start"
    **Prerequisites:**

    - cURL
    - unzip
    - Docker, installed and running

    **Step 1: Download the gateway**

    Run this command to download the gateway:

    ```bash
    curl -sLO https://github.com/wso2/api-platform/releases/download/ai-gateway/v1.1.0/wso2apip-ai-gateway-1.1.0.zip && \
    unzip wso2apip-ai-gateway-1.1.0.zip
    ```

    **Step 2: Configure the gateway**

    Run this command to create the environment file with the required variables:

    ```bash
    cat > wso2apip-ai-gateway-1.1.0/configs/keys.env << 'ENVFILE'
    MOESIF_KEY=<your-moesif-key>
    GATEWAY_CONTROLPLANE_HOST=<control-plane-host>
    GATEWAY_REGISTRATION_TOKEN=<your-gateway-token>
    ENVFILE
    ```

    Replace `<your-gateway-token>` with the token from the **Get Started** section.

    **Step 3: Start the gateway**

    1. Go to the gateway folder:

        ```bash
        cd wso2apip-ai-gateway-1.1.0
        ```

    2. Start the gateway with the environment file from Step 2:

        ```bash
        docker compose --env-file configs/keys.env up
        ```

=== "Virtual Machine"
    **Prerequisites:**

    - cURL
    - unzip
    - A Docker-compatible container runtime, such as:
        - Docker Desktop (Windows or macOS)
        - Rancher Desktop (Windows or macOS)
        - Colima (macOS)
        - Docker Engine with the Compose plugin (Linux)

    Make sure the `docker` and `docker compose` commands are available:

    ```bash
    docker --version
    docker compose version
    ```

    **Step 1: Download the gateway**

    ```bash
    curl -sLO https://github.com/wso2/api-platform/releases/download/ai-gateway/v1.1.0/wso2apip-ai-gateway-1.1.0.zip && \
    unzip wso2apip-ai-gateway-1.1.0.zip
    ```

    **Step 2: Configure the gateway**

    The registration token is single-use. To reconfigure the gateway, click **Reconfigure** to generate a new token. This revokes the old token and disconnects the gateway from the control plane.

    **Step 3: Start the gateway**

    1. Go to the gateway folder:

        ```bash
        cd wso2apip-ai-gateway-1.1.0
        ```

    2. Start the gateway with the environment file from Step 2:

        ```bash
        docker compose --env-file configs/keys.env up
        ```

=== "Docker"
    **Prerequisites:**

    - cURL
    - unzip

    **Step 1: Download the gateway**

    ```bash
    curl -sLO https://github.com/wso2/api-platform/releases/download/ai-gateway/v1.1.0/wso2apip-ai-gateway-1.1.0.zip && \
    unzip wso2apip-ai-gateway-1.1.0.zip
    ```

    **Step 2: Configure the gateway**

    The registration token is single-use. To reconfigure the gateway, click **Reconfigure** to generate a new token. This revokes the old token and disconnects the gateway from the control plane.

    **Step 3: Start the gateway**

    1. Go to the gateway folder:

        ```bash
        cd wso2apip-ai-gateway-1.1.0
        ```

    2. Start the gateway with the environment file from Step 2:

        ```bash
        docker compose --env-file configs/keys.env up
        ```

=== "Kubernetes"
    **Prerequisites:**

    - cURL
    - unzip
    - Kubernetes 1.32 or later
    - Helm 3.18 or later

    The registration token is generated once for this gateway. To install or update the gateway chart again, first reconfigure the gateway to generate a new registration token. Reconfiguring revokes the previous token.

    **Install the chart**

    Run this command to install the gateway chart with the control plane configuration:

    ```bash
    helm install gateway oci://ghcr.io/wso2/api-platform/helm-charts/gateway --version 1.0.0 \
    --set gateway.controller.controlPlane.host="<control-plane-host>" \
    --set gateway.controller.controlPlane.port=8443 \
    --set gateway.controller.controlPlane.token.value="<your-gateway-token>"
    ```

    Replace `<your-gateway-token>` with the token from the **Get Started** section.

When the gateway runtime is running and connected, the gateway status changes from **Inactive** to **Active**.

## Manage AI Gateways

### Edit a gateway

1. In the AI Gateways list, click the **edit** icon next to the gateway that you want to change.
2. Update the gateway details.
3. Click **Save**.

### Delete a gateway

1. In the AI Gateways list, click the **delete** icon next to the gateway that you want to remove.
2. Confirm the deletion.

!!! danger "Irreversible action"
    Deleting a gateway is permanent. All providers and proxies deployed to the gateway are undeployed immediately.

## Next steps

- [Configure an LLM provider](../llm-providers/configure-provider.md): set up an LLM provider and deploy it to your gateway.
- [Configure an App LLM proxy](../llm-proxies/configure-proxy.md): create an LLM proxy for a GenAI application or agent and deploy it to your gateway.
