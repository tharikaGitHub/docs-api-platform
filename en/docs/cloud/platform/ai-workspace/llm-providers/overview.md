---
title: "LLM providers overview"
description: "Learn how LLM providers connect AI services such as OpenAI, Anthropic, and Azure OpenAI to AI Workspace in API Platform Cloud."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/llm-providers/overview/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/llm-providers/overview.md
tags:
  - cloud
  - ai-workspace
  - llm-providers
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "concept"
---

# LLM providers overview

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/llm-providers/overview.md. Verify against API Platform Cloud before publishing:
     - The list of supported providers, and whether AWS Bedrock is available at launch (Bijira listed it as coming soon).
     - The provider icons were dropped (they were hot-linked from third-party GitHub repositories); add icons hosted in this repo if wanted. -->

An LLM provider connects AI Workspace to an AI service platform that offers language models. When you configure a provider in AI Workspace, you can:

- **Manage credentials in one place:** Store API keys and authentication details securely.
- **Connect multiple providers:** Integrate with several LLM services side by side.
- **Monitor provider status:** Track the availability and health of connected services.
- **Reuse configuration:** Use a provider directly or through several App LLM proxies without duplicating credentials.

## Supported providers

AI Workspace in API Platform Cloud supports the following LLM providers:

| Provider | Description | Learn more |
| :--- | :--- | :--- |
| **OpenAI** | Access GPT-4, GPT-3.5, and other OpenAI models. | [OpenAI documentation](https://developers.openai.com/api/docs) |
| **Anthropic** | Use Claude models. | [Anthropic documentation](https://docs.anthropic.com/) |
| **Azure OpenAI** | Use OpenAI models hosted on Microsoft Azure. | [Azure OpenAI documentation](https://azure.microsoft.com/products/ai-services/openai-service) |
| **Azure AI Foundry** | Access models through the Azure AI Foundry platform. | [Azure AI Foundry documentation](https://azure.microsoft.com/products/ai-studio) |
| **Gemini** | Use Google's Gemini language models. | [Gemini documentation](https://ai.google.dev/gemini-api) |
| **Mistral AI** | Access Mistral's open and commercial models. | [Mistral AI documentation](https://mistral.ai/) |
| **AWS Bedrock** (coming soon) | Connect to Amazon Bedrock's managed AI service. | |

## What's next

- [Configure an LLM provider](configure-provider.md): Set up your first provider and deploy it to an AI gateway.
- [Manage an LLM provider](manage-provider.md): Change a deployed provider's connection, security, rate limits, guardrails, and models.
