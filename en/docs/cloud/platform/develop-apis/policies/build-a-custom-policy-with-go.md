---
title: "Build a custom policy with Go"
description: "Write a custom gateway policy in Go and use it with your APIs in API Platform Cloud."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/develop-apis/policies/build-a-custom-policy-with-go/
md_url: https://wso2.com/api-platform/docs/cloud/platform/develop-apis/policies/build-a-custom-policy-with-go.md
tags:
  - cloud
  - develop-apis
  - policies
  - custom-policies
  - go
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-18
content_type: "tutorial"
---

# Build a custom policy with Go

<!-- TODO: SHIP THIS PAGE ONLY IF GO EXTENSIBILITY SHIPS FOR API PLATFORM CLOUD. If it doesn't, remove the page from the nav.
     Adapted from the Bijira page(s) on the cloud branch, en/docs/cloud/api-platform-gateway/writing-a-custom-policy.md, en/docs/cloud/api-platform-gateway/build-gateway-with-custom-policies.md. Verify against API Platform Cloud before publishing:
     - The policy SDK version (v1alpha2) and the Go code samples, which are kept as in Bijira.
     - "Build a gateway that includes your policy" applies only if custom policies reach API Platform Cloud through a gateway that you build and run (hybrid). Confirm this path, and whether there is a way to use a custom policy on WSO2-managed gateways.
     - The ap CLI version (v0.7.0), its download link, and the gateway version in build.yaml.
     - Dropped from Bijira: step-by-step ap CLI installation for macOS, Linux, and Windows; updating docker-compose.yaml with the built images and starting the gateway (now a link to the API Gateway docs); the link to writing AI policies. -->

In this tutorial, you write a custom policy in Go with the API Platform gateway policy SDK, and build a gateway that includes it. You can then sync the policy to your API Platform Cloud organization and apply it to your APIs.

For the full SDK reference, see the [gateway custom policy SDK documentation](https://pkg.go.dev/github.com/wso2/api-platform/sdk/core/policy/v1alpha2).

## How policies run

Every request and response that passes through the gateway goes through a policy chain. A policy chain is the ordered list of policies that the gateway runs for an API or an API operation. Each policy sees the changes that the policies before it made.

Each policy declares the phases it takes part in, and the gateway calls the matching function for each phase:

```text
Incoming Request
       │
       ▼
  Request Headers  ──► OnRequestHeaders()
       │
       ▼
  Request Body     ──► OnRequestBody()  (or OnRequestBodyChunk() for streaming)
       │
       ▼
     Upstream
       │
       ▼
  Response Headers ──► OnResponseHeaders()
       │
       ▼
  Response Body    ──► OnResponseBody() (or OnResponseBodyChunk() for streaming)
       │
       ▼
  Downstream Client
```

A policy takes part only in the phases it implements. For example, a policy that inspects only request headers does not implement the response functions.

## Step 1: Create the policy module

Each policy is a separate Go module. Create a directory for the policy:

```text
/policies/my-policy/
 ├── go.mod
 ├── my_policy.go
 └── policy-definition.yaml
```

## Step 2: Implement the base policy interface

```go
package mypolicy

import (
    "context"

    policy "github.com/wso2/api-platform/sdk/core/policy/v1alpha2"
)

type MyPolicy struct {
    // your config fields
}

// Mode declares which phases this policy participates in and how bodies
// are handled. The kernel reads this once at startup — there is no
// per-request overhead.
func (p *MyPolicy) Mode() policy.ProcessingMode {
    return policy.ProcessingMode{
        RequestHeaderMode:  policy.HeaderModeProcess,
        RequestBodyMode:    policy.BodyModeSkip,
        ResponseHeaderMode: policy.HeaderModeSkip,
        ResponseBodyMode:   policy.BodyModeSkip,
    }
}
```

Choose a mode for each phase:

| Setting | When to use |
|---------|-------------|
| `policy.HeaderModeProcess`, `policy.BodyModeBuffer`, or `policy.BodyModeStream` | The policy needs to inspect or modify that part of the request or response. |
| `policy.HeaderModeSkip` or `policy.BodyModeSkip` | The policy does not need to run in that phase. |

!!! tip
    Set a phase to `Skip` explicitly if the policy must not process it.

## Step 3: Implement the phase functions

Implement only the functions for the phases you declared in `Mode()`.

### Request header phase

The gateway calls `OnRequestHeaders` before it reads the request body. Use this phase for authentication, routing decisions, and adding or removing headers.

```go
func (p *MyPolicy) OnRequestHeaders(
    ctx context.Context,
    reqCtx *policy.RequestHeaderContext,
    params map[string]interface{},
) policy.RequestHeaderAction {
    token := reqCtx.Headers.Get("Authorization")
    if len(token) == 0 {
        return &policy.ImmediateResponse{
            StatusCode: 401,
            Body: []byte(`{"error":"missing authorization"}`),
        }
    }
    return policy.UpstreamRequestHeaderModifications{} // pass through
}
```

### Request body phase

The gateway calls `OnRequestBody` only when the request body is fully buffered.

```go
func (p *MyPolicy) OnRequestBody(
    ctx context.Context,
    reqCtx *policy.RequestContext,
    params map[string]interface{},
) policy.RequestAction {
    // Inspect or modify the request body
    return &policy.UpstreamRequestModifications{
        Body: modifiedBody,
    }
}
```

!!! note
    Implement `OnRequestBody` even if the policy is designed for streaming. The gateway uses it when the policy chain does not run in streaming mode.

### Response header phase

The gateway calls `OnResponseHeaders` after the upstream responds and before it reads the response body.

```go
func (p *MyPolicy) OnResponseHeaders(
    ctx context.Context,
    respCtx *policy.ResponseHeaderContext,
    params map[string]interface{},
) policy.ResponseHeaderAction {
    return &policy.DownstreamResponseHeaderModifications{
        HeadersToSet: map[string]string{
            "X-Policy-Applied": "true",
        },
    }
}
```

### Response body phase

The gateway calls `OnResponseBody` only when the response body is fully buffered.

```go
func (p *MyPolicy) OnResponseBody(
    ctx context.Context,
    respCtx *policy.ResponseContext,
    params map[string]interface{},
) policy.ResponseAction {
    if isInvalidContent(respCtx.ResponseBody.Content) {
        return &policy.ImmediateResponse{
            StatusCode: 403,
            Body: []byte(`{"error":"policy violation"}`),
        }
    }
    return policy.DownstreamResponseModifications{}
}
```

!!! note
    Implement `OnResponseBody` even if the policy is designed for streaming. The gateway uses it when the policy chain does not run in streaming mode.

## Step 4: Enable streaming (optional)

Use streaming for Server-Sent Events (SSE) responses or large chunked transfers that you can't or shouldn't buffer. Set `RequestBodyMode`, `ResponseBodyMode`, or both to `policy.BodyModeStream` in `Mode()`, and then implement the streaming functions.

### Streaming request

Implement `StreamingRequestPolicy` to process the request chunk by chunk:

```go
func (p *MyPolicy) Mode() policy.ProcessingMode {
    return policy.ProcessingMode{
        RequestHeaderMode:  policy.HeaderModeProcess,
        RequestBodyMode:   policy.BodyModeStream,
    }
}

func (p *MyPolicy) NeedsMoreRequestData(accumulated []byte) bool {
    return false // forward every chunk immediately
}

func (p *MyPolicy) OnRequestBodyChunk(
    ctx context.Context,
    reqCtx *policy.RequestStreamContext,
    chunk *policy.StreamBody,
    params map[string]interface{},
) policy.StreamingRequestAction {

    return &policy.ForwardRequestChunk{
        Body: chunk.Chunk, // nil = pass through
    }
}

// Fallback for non-streaming chains
func (p *MyPolicy) OnRequestBody(
    ctx context.Context,
    reqCtx *policy.RequestContext,
    params map[string]interface{},
) policy.RequestAction {
    return nil
}
```

### Streaming response

Implement `StreamingResponsePolicy` to process the response chunk by chunk:

```go
func (p *MyPolicy) Mode() policy.ProcessingMode {
    return policy.ProcessingMode{
        RequestHeaderMode:  policy.HeaderModeProcess,
        ResponseBodyMode:   policy.BodyModeStream,
    }
}

// NeedsMoreResponseData controls when to start forwarding chunks.
// Return true to keep buffering; false to start forwarding immediately.
// The kernel calls this before each chunk is sent downstream.
func (p *MyPolicy) NeedsMoreResponseData(accumulated []byte) bool {
    // Buffer until we have at least 512 bytes to inspect
    return len(accumulated) < 512
}

// OnResponseBodyChunk is called for each chunk of the response body.
func (p *MyPolicy) OnResponseBodyChunk(
    ctx context.Context,
    respCtx *policy.ResponseStreamContext,
    chunk *policy.StreamBody,
    params map[string]interface{},
) policy.StreamingResponseAction {

    // Inspect the chunk content
    if containsViolation(chunk.Chunk) {
        // Terminate the stream with a final error frame
        return &policy.TerminateResponseChunk{
            Body: []byte("data: {\"error\": \"content violation\"}\n\n"),
        }
    }

    // Forward the chunk as-is
    return &policy.ForwardResponseChunk{
        Body: chunk.Chunk, // nil = pass through unchanged
    }
}

// Fallback for non-streaming chains: required by StreamingResponsePolicy
func (p *MyPolicy) OnResponseBody(
    ctx context.Context,
    respCtx *policy.ResponseContext,
    params map[string]interface{},
) policy.ResponseAction {
    return nil
}
```

### Gate-then-stream pattern

Guardrail policies often buffer chunks until they have enough data to make a decision, and then pass the rest of the stream through:

```go
// Buffer until we can check for a violation, then stream freely
func (p *MyPolicy) NeedsMoreResponseData(accumulated []byte) bool {
    // Keep buffering until we have a complete first SSE event
    return !bytes.Contains(accumulated, []byte("\n\n"))
}
```

## Step 5: Add a factory function

The factory function creates the policy and validates its parameters:

```go
func GetPolicy(
    metadata policy.PolicyMetadata,
    params map[string]interface{},
) (policy.Policy, error) {

    maxSize, ok := params["maxBodySize"].(float64)
    if !ok {
        return nil, fmt.Errorf("invalid maxBodySize")
    }

    return &MyPolicy{maxBodySize: int(maxSize)}, nil
}
```

## Step 6: Define the parameters

Create a `policy-definition.yaml` file in the policy directory:

```yaml
name: my-policy
displayName: my policy
version: v1.0.0

parameters:
  type: object
  properties:
    maxBodySize:
      type: integer
      default: 1048576
```

## Step 7: Share data between phases

Use the `Metadata` map to pass data from the request phases to the response phases:

```go
// In request phase
reqCtx.Metadata["clientID"] = clientID

// In response phase
clientID := respCtx.Metadata["clientID"]
```

## Step 8: Build a gateway that includes your policy

Use the `ap` CLI to build a gateway image that includes your policy.

1. Download the `ap` CLI binary for your platform from the [AP CLI releases page](https://github.com/wso2/api-platform/releases/tag/ap%2Fv0.7.0), add it to your `PATH`, and verify the installation:

    ```bash
    ap --version
    ```

2. Add the policy to the `build.yaml` file in the gateway package. The file declares the gateway version and the policies to include:

    ```yaml
    version: v1
    gateway:
      version: 1.0.0
    policies:
      - name: <policy-name>
        gomodule: <go-module-path>@<version>   # for policy hub managed policies
      - name: my-policy
        filePath: ./policies/my-policy         # for custom policies
    ```

    | Field | Description |
    |---|---|
    | `gomodule` | The Go module reference of a Policy Hub policy, for example, `github.com/wso2/gateway-controllers/policies/cors@v1`. Use this for a published custom policy too, for example, `github.com/abc/policy-repo/policies/my-policy@v1`. |
    | `filePath` | The path from `build.yaml` to a local custom policy directory. |

    !!! note
        The `filePath` is always relative to the location of `build.yaml`, not to the directory where you run the `ap` command.

3. From the directory that contains `build.yaml`, build the gateway image:

    ```bash
    ap gateway image build
    ```

    The output lists the gateway images that include your policy. For example:

    ```text
    ✓ Built gateway images with 1 policies:
      • ghcr.io/wso2/api-platform/gateway-v1.0.0-gateway-runtime:1.0.0
      • ghcr.io/wso2/api-platform/gateway-v1.0.0-gateway-controller:1.0.0
    ```

    The command also writes a `build-manifest.yaml` file next to `build.yaml` with the resolved versions of all the policies in the build.

!!! tip "Sample custom policies"
    For working examples, see the [sample policies in the api-platform repository](https://github.com/wso2/api-platform/tree/main/gateway/sample-policies).

To run the gateway with the new images, see the [API Gateway documentation](../../../../../api-gateway/).

## What's next

- [Custom policies](custom-policies.md): Sync your custom policy to your organization and apply it to APIs.
- [Apply policies](apply-policies.md): Attach and configure policies on an API.
