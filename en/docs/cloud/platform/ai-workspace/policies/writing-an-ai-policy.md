---
title: "Writing an AI policy"
description: "Write a custom AI policy in Go that inspects and modifies LLM traffic and handles both streaming (SSE) and non-streaming responses."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/writing-an-ai-policy/
md_url: https://wso2.com/api-platform/docs/cloud/platform/ai-workspace/policies/writing-an-ai-policy.md
tags:
  - cloud
  - ai-workspace
  - custom-policies
  - go
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-20
content_type: "how-to"
---

# Writing an AI policy

<!-- TODO: Adapted from the Bijira page on the cloud branch, en/docs/cloud/ai-workspace/policies/writing-an-ai-policy.md. Verify against API Platform Cloud before publishing:
     - SHIP THIS PAGE ONLY IF GO EXTENSIBILITY SHIPS FOR API PLATFORM CLOUD, the same condition as Build a custom policy with Go. Bijira wrote it for the self-hosted gateway: confirm whether custom AI policies run only on gateways you run yourself (hybrid) or also on WSO2-managed gateways, and reword the introduction to match.
     - The SDK version (v1alpha2), the interface names (RequestPolicy, RequestHeaderPolicy, ResponsePolicy, StreamingResponsePolicy), the mode settings, and the code sample, all kept as in Bijira.
     - The fallback rule: OnResponseBodyChunk only when the whole policy chain supports streaming, otherwise OnResponseBody. -->

AI policies let you inspect, control, and modify traffic to and from large language models (LLMs), such as OpenAI, Anthropic, or other providers. You build them into a gateway that you run yourself and connect to API Platform Cloud.

AI policies use the same `Policy` interface as standard gateway policies. For the full API, see the [SDK documentation](https://pkg.go.dev/github.com/wso2/api-platform/sdk/core/policy/v1alpha2).

The key difference is how you handle LLM request and response bodies, in particular:

- JSON responses
- Streaming responses (SSE)

## Key idea

LLM responses come in two formats:

| Mode | Format |
|------|--------|
| Non-streaming | Single JSON object |
| Streaming | SSE events (`data: {...}`) |

Your policy must handle **both formats**.

## Which interfaces to implement

Choose the interfaces based on what your policy needs to do:

| Goal | Interface | Mode setting |
|------|-----------|-------------|
| Inspect the prompt or model | `RequestPolicy` | `RequestBodyMode: BodyModeBuffer` |
| Inspect headers (auth, routing) | `RequestHeaderPolicy` | `RequestHeaderMode: HeaderModeProcess` |
| Inspect or modify a buffered (in-memory) response | `ResponsePolicy` | `ResponseBodyMode: BodyModeBuffer` |
| Inspect or modify a streaming response | `StreamingResponsePolicy` (embeds `ResponsePolicy`) | `ResponseBodyMode: BodyModeStream` |

## Recommended pattern

For most AI policies, implement both of these:

- **`ResponsePolicy`:** Handles buffered responses, where the entire response is available at once. This can be a non-streaming JSON response or concatenated SSE events.
- **`StreamingResponsePolicy`:** Handles streaming responses, which can be JSON or SSE events.

!!! tip
    The gateway chooses which handler to call. `OnResponseBodyChunk` is called only if the entire policy chain supports streaming. If any policy in the chain doesn't support streaming, the gateway falls back to `OnResponseBody`.

## Minimal AI policy example

```go
package myaipolicy

import (
    "context"

    policy "github.com/wso2/api-platform/sdk/core/policy/v1alpha2"
)

type MyAIPolicy struct{}

func (p *MyAIPolicy) Mode() policy.ProcessingMode {
    return policy.ProcessingMode{
        RequestBodyMode:  policy.BodyModeBuffer,
        ResponseBodyMode: policy.BodyModeStream,
    }
}

// Request Inspection
func (p *MyAIPolicy) OnRequestBody(
    ctx context.Context,
    reqCtx *policy.RequestContext,
    params map[string]interface{},
) policy.RequestAction {
    // Inspect model + messages
    return nil
}

// Streaming Response Handling
func (p *MyAIPolicy) OnResponseBodyChunk(
    ctx context.Context,
    respCtx *policy.ResponseStreamContext,
    chunk *policy.StreamBody,
    params map[string]interface{},
) policy.StreamingResponseAction {
    // Accumulate + process
    return policy.ForwardResponseChunk{}
}

// Gating response chunks before processing response
func (p *MyAIPolicy) NeedsMoreResponseData(_ []byte) bool {
    return false
}

// Buffered Fallback
func (p *MyAIPolicy) OnResponseBody(
    ctx context.Context,
    respCtx *policy.ResponseContext,
    params map[string]interface{},
) policy.ResponseAction {
    // Same logic as streaming, applied to the full body
    return nil
}
```

## Best practices

- **Handle both streaming and non-streaming responses:** The gateway may fall back to buffered mode if any policy in the chain doesn't support streaming.
- **Use metadata to share state:** Pass data between the request and response phases using the `Metadata` map.
- **Implement streaming with a buffered fallback:** Make sure your policy works correctly whether the chain runs in streaming or buffered mode.

## Learn more

- [Build a custom policy with Go](../../develop-apis/policies/build-a-custom-policy-with-go.md): Write a policy, build a gateway that includes it, and run it.
- [AI Workspace policies overview](overview.md)
