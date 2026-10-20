---
title: "Semantic cache"
description: "Cache LLM responses in AI Workspace using vector embeddings and cosine similarity, and serve similar requests without calling the upstream LLM."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/other-policies/semantic-cache/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/other-policies/semantic-cache.md
tags:
  - cloud
  - ai-workspace
  - semantic-cache
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# Semantic cache

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/policies/other-policies/semantic-cache.md. Verify against API Platform Cloud before publishing:
     - Who configures the embedding provider and vector database. The page keeps Bijira's config.toml instructions, which apply to a gateway you run yourself (hybrid); confirm what applies on WSO2-managed gateways and rewrite "Gateway configuration" and step 1 accordingly.
     - The AI Workspace navigation and labels: LLM Providers, App LLM Proxies, the Guardrails tab, + Add Guardrail, Semantic Cache, Advanced Settings, Add / Submit.
     - The supported embedding providers and vector databases, and the performance figures. -->

The semantic cache policy caches LLM responses and serves them for semantically similar future requests, without calling the upstream LLM. Unlike exact-match caching, it uses vector embeddings and cosine similarity to recognize requests that ask the same question with different wording.

!!! info "Prerequisites"
    Before using this policy, configure the embedding provider and vector database in the gateway's `config.toml`. The policy settings in AI Workspace only cover the similarity threshold and JSON path; all embedding and database connection details are system-level settings.

    See [Gateway configuration](#gateway-configuration) for the required `config.toml` settings.

## How it works

1. An incoming request arrives. The policy extracts the relevant text (the full payload or a field selected by JSONPath).
2. The embedding provider converts the text into a vector.
3. The vector database is searched for a cached entry with a cosine similarity score at or above the configured **Similarity Threshold**.
4. **Cache hit**: the cached response is returned immediately with an `X-Cache-Status: HIT` header. The upstream LLM is not called.
5. **Cache miss**: the request is forwarded to the upstream LLM. A successful (`200`) response is stored in the vector database for future reuse.

If the embedding service or vector database is unreachable, the policy fails open: the request proceeds to the upstream LLM as normal.

## Configuration parameters

These are the parameters you can set when you add the policy:

| Parameter | Required | Description |
|-----------|----------|-------------|
| **Similarity Threshold** | Yes | Cosine similarity score (0.0–1.0) above which a cached response is returned. Recommended starting value: `0.85`. |
| **JSON Path** | No | A JSONPath expression to extract the text to embed from the request body (e.g., `$.messages[0].content`). If not set, the entire request payload is embedded. |

## Gateway configuration

The embedding provider and vector database are configured in the gateway's `config.toml` file. These settings apply as defaults to all semantic cache policy instances.

```toml
embedding_provider = "OPENAI"            # Supported: OPENAI, MISTRAL, AZURE_OPENAI
embedding_provider_endpoint = "https://api.openai.com/v1/embeddings"
embedding_provider_model = "text-embedding-3-small"
embedding_provider_dimension = 1536
embedding_provider_api_key = ""

vector_db_provider = "REDIS"             # Supported: REDIS, MILVUS
vector_db_provider_host = "redis"
vector_db_provider_port = 6379
vector_db_provider_database = "0"
vector_db_provider_username = "default"
vector_db_provider_password = "default"
vector_db_provider_ttl = 3600
```

### Supported embedding providers

| Provider | `embedding_provider` value | Example endpoint | Dimension |
|----------|---------------------------|-----------------|-----------|
| OpenAI | `OPENAI` | `https://api.openai.com/v1/embeddings` | `1536` (`text-embedding-3-small`) |
| Mistral AI | `MISTRAL` | `https://api.mistral.ai/v1/embeddings` | `1024` (`mistral-embed`) |
| Azure OpenAI | `AZURE_OPENAI` | Your Azure OpenAI endpoint URL | Depends on deployment |

### Supported vector databases

| Provider | `vector_db_provider` value | Notes |
|----------|---------------------------|-------|
| Redis | `REDIS` | Requires the [Redis Search](https://redis.io/docs/latest/develop/ai/search-and-query/) module |
| Milvus | `MILVUS` | Better suited for large-scale deployments (>1M vectors) |

## Add this policy

1. Configure the embedding provider and vector database in `config.toml` and restart the gateway.
2. In AI Workspace, go to **LLM Providers** or **App LLM Proxies**.
3. Click the provider or proxy name.
4. Go to the **Guardrails** tab.
5. Click **+ Add Guardrail** and select **Semantic Cache**.
6. Set the **Similarity Threshold**.
7. Optionally, set a **JSON Path** under **Advanced Settings**.
8. Click **Add** (for providers) or **Submit** (for proxies).
9. Deploy the provider or proxy to apply the changes.

## Choose a similarity threshold

| Threshold | Effect |
|-----------|--------|
| **0.95–1.0** | Very strict: only near-identical questions return cached responses |
| **0.85–0.94** | Recommended for most use cases: catches semantically equivalent questions with some wording variation |
| **0.75–0.84** | More flexible: useful for broader conceptual similarity |
| **Below 0.75** | Not recommended: risk of returning cached responses for unrelated questions |

Start at `0.85` and adjust based on observed cache hit rates and response relevance.

## Performance notes

- Embedding generation adds approximately 100–500 ms to each request. This is typically offset by the 1–5 second savings on cache hits.
- Redis (with RediSearch) suits smaller datasets (under 1M cached vectors). Milvus is optimized for larger-scale deployments.
- Only `200` responses from the upstream LLM are cached.
- Cache entries are scoped per route to prevent cross-contamination between different APIs.

## Related

- [Policies overview](../overview.md)
- [Policy Hub](../../../../../../policy-hub/overview/): full policy specification and latest version.
