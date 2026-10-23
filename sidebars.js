// Bijira's sidebar (from the cloud branch mkdocs.yml nav), regrouped into the
// API Platform Cloud structure: API Control Plane, AI Workspace, Devportal,
// and Hybrid gateways. The pages themselves are unchanged.
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  cloudSidebar: [
    {
      "type": "category",
      "label": "Introduction",
      "items": [
        {
          "type": "doc",
          "id": "introduction/what-is-api-platform-cloud",
          "label": "What is API Platform Cloud?"
        },
        {
          "type": "category",
          "label": "Quick Start Guide",
          "items": [
            {
              "type": "doc",
              "id": "introduction/quick-start-guide",
              "label": "API Proxy"
            },
            {
              "type": "doc",
              "id": "introduction/quick-start-guide-mcp",
              "label": "MCP Server"
            }
          ]
        },
        {
          "type": "category",
          "label": "Concepts",
          "items": [
            {
              "type": "doc",
              "id": "bijira-concepts/organization",
              "label": "Organization"
            },
            {
              "type": "doc",
              "id": "bijira-concepts/project",
              "label": "Project"
            },
            {
              "type": "doc",
              "id": "bijira-concepts/data-planes",
              "label": "Data Planes"
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "API Control Plane",
      "items": [
        {
          "type": "category",
          "label": "Create API Proxy",
          "items": [
            {
              "type": "doc",
              "id": "create-api-proxy/overview",
              "label": "Overview"
            },
            {
              "type": "category",
              "label": "My APIs (Ingress)",
              "items": [
                {
                  "type": "category",
                  "label": "REST APIs",
                  "items": [
                    {
                      "type": "doc",
                      "id": "create-api-proxy/my-apis/http/create-with-genai",
                      "label": "Create with GenAI"
                    },
                    {
                      "type": "doc",
                      "id": "create-api-proxy/my-apis/http/import-api-contract",
                      "label": "Import API Contract"
                    },
                    {
                      "type": "doc",
                      "id": "create-api-proxy/my-apis/http/import-api-from-github",
                      "label": "Import API Contract from GitHub"
                    },
                    {
                      "type": "doc",
                      "id": "create-api-proxy/my-apis/http/start-with-endpoint",
                      "label": "Start with Endpoint"
                    },
                    {
                      "type": "doc",
                      "id": "create-api-proxy/my-apis/http/start-from-scratch",
                      "label": "Start from Scratch"
                    }
                  ]
                },
                {
                  "type": "category",
                  "label": "WebSocket APIs",
                  "items": [
                    {
                      "type": "doc",
                      "id": "create-api-proxy/my-apis/websocket/create-with-genai",
                      "label": "Create with GenAI"
                    },
                    {
                      "type": "doc",
                      "id": "create-api-proxy/my-apis/websocket/import-api-contract",
                      "label": "Import API Contract"
                    },
                    {
                      "type": "doc",
                      "id": "create-api-proxy/my-apis/websocket/start-with-endpoint",
                      "label": "Start with Endpoint"
                    },
                    {
                      "type": "doc",
                      "id": "create-api-proxy/my-apis/websocket/start-from-scratch",
                      "label": "Start from Scratch"
                    },
                    {
                      "type": "doc",
                      "id": "create-api-proxy/my-apis/websocket/quotas-and-limitations",
                      "label": "Limitations"
                    }
                  ]
                },
                {
                  "type": "category",
                  "label": "GraphQL APIs",
                  "items": [
                    {
                      "type": "doc",
                      "id": "create-api-proxy/my-apis/graphql/import-api-contract",
                      "label": "Import API Contract"
                    },
                    {
                      "type": "doc",
                      "id": "create-api-proxy/my-apis/graphql/start-with-endpoint",
                      "label": "Start with Endpoint"
                    }
                  ]
                }
              ]
            },
            {
              "type": "category",
              "label": "Third Party APIs (Egress)",
              "items": [
                {
                  "type": "category",
                  "label": "AI APIs",
                  "items": [
                    {
                      "type": "doc",
                      "id": "create-api-proxy/third-party-apis/ai-apis",
                      "label": "Overview"
                    },
                    {
                      "type": "category",
                      "label": "Providers",
                      "items": [
                        {
                          "type": "doc",
                          "id": "create-api-proxy/third-party-apis/open-ai",
                          "label": "OpenAI"
                        },
                        {
                          "type": "doc",
                          "id": "create-api-proxy/third-party-apis/azure-ai",
                          "label": "Azure OpenAI"
                        },
                        {
                          "type": "doc",
                          "id": "create-api-proxy/third-party-apis/mistral",
                          "label": "Mistral"
                        },
                        {
                          "type": "doc",
                          "id": "create-api-proxy/third-party-apis/awsbedrock",
                          "label": "AWS Bedrock"
                        },
                        {
                          "type": "doc",
                          "id": "create-api-proxy/third-party-apis/claude",
                          "label": "Anthropic"
                        }
                      ]
                    },
                    {
                      "type": "category",
                      "label": "Policies",
                      "items": [
                        {
                          "type": "doc",
                          "id": "create-api-proxy/third-party-apis/token-ratelimit",
                          "label": "Token-Based Rate Limit"
                        },
                        {
                          "type": "category",
                          "label": "Guardrails",
                          "items": [
                            {
                              "type": "doc",
                              "id": "create-api-proxy/third-party-apis/guardrails",
                              "label": "Overview"
                            },
                            {
                              "type": "doc",
                              "id": "create-api-proxy/third-party-apis/guardrails/basic-guardrails/regex-guardrail",
                              "label": "Regex Guardrail"
                            },
                            {
                              "type": "doc",
                              "id": "create-api-proxy/third-party-apis/guardrails/basic-guardrails/word-count-guardrail",
                              "label": "Word Count Guardrail"
                            },
                            {
                              "type": "doc",
                              "id": "create-api-proxy/third-party-apis/guardrails/basic-guardrails/sentence-count-guardrail",
                              "label": "Sentence Count Guardrail"
                            },
                            {
                              "type": "doc",
                              "id": "create-api-proxy/third-party-apis/guardrails/basic-guardrails/content-length-guardrail",
                              "label": "Content Length Guardrail"
                            },
                            {
                              "type": "doc",
                              "id": "create-api-proxy/third-party-apis/guardrails/basic-guardrails/url-guardrail",
                              "label": "URL Guardrail"
                            },
                            {
                              "type": "doc",
                              "id": "create-api-proxy/third-party-apis/guardrails/basic-guardrails/regex-pii-masking",
                              "label": "Regex PII Masking"
                            },
                            {
                              "type": "doc",
                              "id": "create-api-proxy/third-party-apis/guardrails/advanced-guardrails/pii-masking",
                              "label": "PII Masking"
                            },
                            {
                              "type": "doc",
                              "id": "create-api-proxy/third-party-apis/guardrails/third-party-guardrail-integrations/azure-content-safety-content-moderation",
                              "label": "Azure Content Safety Content Moderation"
                            },
                            {
                              "type": "doc",
                              "id": "create-api-proxy/third-party-apis/guardrails/third-party-guardrail-integrations/aws-bedrock-guardrail",
                              "label": "AWS Bedrock Guardrail"
                            }
                          ]
                        },
                        {
                          "type": "doc",
                          "id": "create-api-proxy/third-party-apis/semantic-cache",
                          "label": "Semantic Cache"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "doc",
                  "id": "create-api-proxy/third-party-apis/get-from-marketplace",
                  "label": "Get from Marketplace"
                },
                {
                  "type": "doc",
                  "id": "create-api-proxy/third-party-apis/import-api-contract",
                  "label": "Import API Contract"
                }
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "Develop API Proxy",
          "items": [
            {
              "type": "category",
              "label": "Authentication and Authorization",
              "items": [
                {
                  "type": "doc",
                  "id": "develop-api-proxy/authentication-and-authorization/secure-api-access-with-asgardeo",
                  "label": "Secure API Access with Asgardeo"
                },
                {
                  "type": "doc",
                  "id": "develop-api-proxy/authentication-and-authorization/secure-api-access-with-bijira-sts",
                  "label": "Secure API Access with API Platform STS"
                },
                {
                  "type": "doc",
                  "id": "develop-api-proxy/authentication-and-authorization/secure-api-access-with-azure-ad",
                  "label": "Secure API Access with Azure AD"
                },
                {
                  "type": "doc",
                  "id": "develop-api-proxy/authentication-and-authorization/secure-api-access-with-external-idp",
                  "label": "Secure API Access with an External Key Manager"
                },
                {
                  "type": "doc",
                  "id": "develop-api-proxy/authentication-and-authorization/secure-communication-between-bijira-gateway-and-backend-with-oauth2",
                  "label": "Secure Communication Between the API Platform Gateway and Your Backend with OAuth2"
                },
                {
                  "type": "doc",
                  "id": "develop-api-proxy/authentication-and-authorization/secure-communication-between-the-bijira-gateway-and-your-backend-with-mutual-tls",
                  "label": "Secure Communication Between the API Platform Gateway and Your Backend with Mutual TLS"
                }
              ]
            },
            {
              "type": "category",
              "label": "Policy",
              "items": [
                {
                  "type": "doc",
                  "id": "develop-api-proxy/policy/overview",
                  "label": "Overview"
                },
                {
                  "type": "doc",
                  "id": "develop-api-proxy/policy/policies",
                  "label": "Policies"
                },
                {
                  "type": "doc",
                  "id": "develop-api-proxy/policy/attach-and-manage-policies",
                  "label": "Attach and Manage Policies"
                }
              ]
            },
            {
              "type": "doc",
              "id": "develop-api-proxy/documents",
              "label": "Documents"
            },
            {
              "type": "doc",
              "id": "develop-api-proxy/make-api-ai-ready",
              "label": "Make an API AI-Ready"
            },
            {
              "type": "doc",
              "id": "develop-api-proxy/lifecycle-management",
              "label": "Lifecycle"
            },
            {
              "type": "doc",
              "id": "develop-api-proxy/subscription-plans",
              "label": "Subscription Plans"
            }
          ]
        },
        {
          "type": "category",
          "label": "Test API Proxy",
          "items": [
            {
              "type": "doc",
              "id": "test-api-proxy/openapi-console",
              "label": "OpenAPI Console"
            },
            {
              "type": "doc",
              "id": "test-api-proxy/ws-test-console",
              "label": "WebSocket Console"
            },
            {
              "type": "doc",
              "id": "test-api-proxy/graphql-console",
              "label": "GraphQL Console"
            },
            {
              "type": "doc",
              "id": "test-api-proxy/curl",
              "label": "cURL"
            },
            {
              "type": "doc",
              "id": "test-api-proxy/api-chat",
              "label": "API Chat"
            }
          ]
        },
        {
          "type": "category",
          "label": "MCP Servers",
          "items": [
            {
              "type": "doc",
              "id": "mcp-servers/get-started-with-mcp",
              "label": "Overview"
            },
            {
              "type": "doc",
              "id": "mcp-servers/design-mcp-servers",
              "label": "Design MCP Servers"
            },
            {
              "type": "doc",
              "id": "mcp-servers/proxy-remote-servers",
              "label": "Proxy Remote MCP Servers"
            },
            {
              "type": "doc",
              "id": "mcp-servers/devportal-mcp-hub",
              "label": "Customize Developer Portal as an MCP Hub"
            }
          ]
        },
        {
          "type": "category",
          "label": "API Governance",
          "items": [
            {
              "type": "doc",
              "id": "governance/overview",
              "label": "API Governance Overview"
            },
            {
              "type": "doc",
              "id": "governance/govern-api-proxy",
              "label": "Govern API Proxy"
            }
          ]
        },
        {
          "type": "category",
          "label": "Monitor and Insights",
          "items": [
            {
              "type": "category",
              "label": "Logs",
              "items": [
                {
                  "type": "doc",
                  "id": "monitoring-and-insights/logs/overview",
                  "label": "Overview"
                },
                {
                  "type": "doc",
                  "id": "monitoring-and-insights/logs/runtime-logs",
                  "label": "Runtime Logs"
                },
                {
                  "type": "doc",
                  "id": "monitoring-and-insights/logs/audit-logs",
                  "label": "Audit Logs"
                }
              ]
            },
            {
              "type": "doc",
              "id": "monitoring-and-insights/insights",
              "label": "Insights"
            },
            {
              "type": "doc",
              "id": "monitoring-and-insights/compliance",
              "label": "Compliance Dashboard"
            },
            {
              "type": "doc",
              "id": "monitoring-and-insights/integrate-bijira-with-moesif",
              "label": "Integrate API Platform with Moesif"
            },
            {
              "type": "doc",
              "id": "monitoring-and-insights/status-page",
              "label": "API Platform Status Page"
            }
          ]
        },
        {
          "type": "category",
          "label": "Administer",
          "items": [
            {
              "type": "doc",
              "id": "administer/settings/create-api-subscription-plans",
              "label": "Create API Subscription Plans"
            },
            {
              "type": "doc",
              "id": "administer/settings/configure-a-custom-domain-for-your-organization",
              "label": "Configure a Custom Domain for Your Organization"
            },
            {
              "type": "doc",
              "id": "administer/manage-environments/manage-environments",
              "label": "Manage Environments"
            },
            {
              "type": "doc",
              "id": "administer/manage-cd-pipelines/manage-cd-pipelines",
              "label": "Manage CD pipelines"
            },
            {
              "type": "category",
              "label": "Configure External Key Manager",
              "items": [
                {
                  "type": "doc",
                  "id": "administer/configure-an-external-idp/configure-asgardeo-as-an-external-idp",
                  "label": "Configure Asgardeo as an External Key Manager"
                },
                {
                  "type": "doc",
                  "id": "administer/configure-an-external-idp/configure-azure-ad-as-an-external-idp",
                  "label": "Configure Azure as an External Key Manager"
                },
                {
                  "type": "doc",
                  "id": "administer/configure-an-external-idp/configure-custom-external-idp",
                  "label": "Configure Custom External Key Manager"
                }
              ]
            },
            {
              "type": "doc",
              "id": "administer/configure-enterprise-login/configure-enterprise-login",
              "label": "Configure Enterprise Login"
            },
            {
              "type": "doc",
              "id": "administer/configure-vpns/configure-vpns",
              "label": "Configure VPNs on API Platform Cloud Data Plane"
            }
          ]
        },
        {
          "type": "category",
          "label": "Workflows",
          "items": [
            {
              "type": "doc",
              "id": "workflows/configure-workflow-approvals",
              "label": "Configure Workflow Approvals"
            },
            {
              "type": "doc",
              "id": "workflows/submit-workflow-requests",
              "label": "Submit Workflow Approval Requests"
            },
            {
              "type": "doc",
              "id": "workflows/review-workflows-requests",
              "label": "Review Workflow Approval Requests"
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "AI Workspace",
      "items": [
        {
          "type": "doc",
          "id": "ai-workspace/overview",
          "label": "Overview"
        },
        {
          "type": "doc",
          "id": "ai-workspace/quickstart",
          "label": "Quickstart"
        },
        {
          "type": "doc",
          "id": "ai-workspace/getting-started",
          "label": "Getting Started"
        },
        {
          "type": "category",
          "label": "AI Gateways",
          "items": [
            {
              "type": "doc",
              "id": "ai-workspace/ai-gateways/setting-up",
              "label": "Setting Up"
            }
          ]
        },
        {
          "type": "category",
          "label": "LLM Providers",
          "items": [
            {
              "type": "doc",
              "id": "ai-workspace/llm-providers/overview",
              "label": "Overview"
            },
            {
              "type": "doc",
              "id": "ai-workspace/llm-providers/configure-provider",
              "label": "Configure Provider"
            },
            {
              "type": "doc",
              "id": "ai-workspace/llm-providers/manage-provider",
              "label": "Manage Provider"
            }
          ]
        },
        {
          "type": "category",
          "label": "App LLM Proxies",
          "items": [
            {
              "type": "doc",
              "id": "ai-workspace/llm-proxies/overview",
              "label": "Overview"
            },
            {
              "type": "doc",
              "id": "ai-workspace/llm-proxies/configure-proxy",
              "label": "Configure App LLM Proxy"
            },
            {
              "type": "doc",
              "id": "ai-workspace/llm-proxies/manage-proxy",
              "label": "Manage App LLM Proxy"
            }
          ]
        },
        {
          "type": "category",
          "label": "MCP Proxies",
          "items": [
            {
              "type": "doc",
              "id": "ai-workspace/mcp-proxies/overview",
              "label": "Overview"
            },
            {
              "type": "doc",
              "id": "ai-workspace/mcp-proxies/configure-proxy",
              "label": "Configure Proxy"
            },
            {
              "type": "doc",
              "id": "ai-workspace/mcp-proxies/apply-policies",
              "label": "Apply Policies"
            }
          ]
        },
        {
          "type": "category",
          "label": "MCP Registry",
          "items": [
            {
              "type": "doc",
              "id": "mcp-servers/mcp-registry",
              "label": "What is an MCP Registry?"
            },
            {
              "type": "doc",
              "id": "mcp-servers/publish-mcp-proxies",
              "label": "Publish MCP Proxies"
            },
            {
              "type": "doc",
              "id": "mcp-servers/browse-mcp-hub",
              "label": "Browse the MCP Hub"
            },
            {
              "type": "doc",
              "id": "mcp-servers/mcp-registry-api",
              "label": "Use the MCP Registry API"
            }
          ]
        },
        {
          "type": "doc",
          "id": "ai-workspace/genai-applications",
          "label": "GenAI Applications"
        },
        {
          "type": "doc",
          "id": "ai-workspace/configure-inbound-auth",
          "label": "Configure Inbound Auth"
        },
        {
          "type": "doc",
          "id": "ai-workspace/using-sdks",
          "label": "Invoke via SDKs"
        },
        {
          "type": "category",
          "label": "Policies",
          "items": [
            {
              "type": "doc",
              "id": "ai-workspace/policies/overview",
              "label": "Overview"
            },
            {
              "type": "category",
              "label": "Guardrails",
              "items": [
                {
                  "type": "doc",
                  "id": "ai-workspace/policies/guardrails/overview",
                  "label": "Overview"
                },
                {
                  "type": "doc",
                  "id": "ai-workspace/policies/guardrails/regex-pii-masking",
                  "label": "PII Masking Regex"
                },
                {
                  "type": "doc",
                  "id": "ai-workspace/policies/guardrails/azure-content-safety",
                  "label": "Azure Content Safety"
                },
                {
                  "type": "doc",
                  "id": "ai-workspace/policies/guardrails/word-count-guardrail",
                  "label": "Word Count"
                },
                {
                  "type": "doc",
                  "id": "ai-workspace/policies/guardrails/sentence-count-guardrail",
                  "label": "Sentence Count"
                }
              ]
            },
            {
              "type": "category",
              "label": "Rate Limit",
              "items": [
                {
                  "type": "doc",
                  "id": "ai-workspace/policies/rate-limit/llm-cost",
                  "label": "LLM Cost"
                },
                {
                  "type": "doc",
                  "id": "ai-workspace/policies/rate-limit/token-based-rate-limit",
                  "label": "Token-Based Rate Limit"
                },
                {
                  "type": "doc",
                  "id": "ai-workspace/policies/rate-limit/llm-cost-based-rate-limit",
                  "label": "LLM Cost-Based Rate Limit"
                }
              ]
            },
            {
              "type": "category",
              "label": "Other Policies",
              "items": [
                {
                  "type": "doc",
                  "id": "ai-workspace/policies/other-policies/model-round-robin",
                  "label": "Model Round Robin"
                },
                {
                  "type": "doc",
                  "id": "ai-workspace/policies/other-policies/prompt-decorator",
                  "label": "Prompt Decorator"
                },
                {
                  "type": "doc",
                  "id": "ai-workspace/policies/other-policies/prompt-template",
                  "label": "Prompt Template"
                },
                {
                  "type": "doc",
                  "id": "ai-workspace/policies/other-policies/semantic-cache",
                  "label": "Semantic Cache"
                }
              ]
            },
            {
              "type": "doc",
              "id": "ai-workspace/policies/writing-an-ai-policy",
              "label": "Writing an AI Policy"
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "Devportal",
      "items": [
        {
          "type": "category",
          "label": "Theming Developer Portal",
          "items": [
            {
              "type": "doc",
              "id": "devportal/theming-devportal-with-ai",
              "label": "Theming with AI"
            },
            {
              "type": "category",
              "label": "Theming Manually",
              "items": [
                {
                  "type": "doc",
                  "id": "devportal/theming-devportal-org-level",
                  "label": "Theme in Organizational Level"
                },
                {
                  "type": "doc",
                  "id": "devportal/theming-devportal-api-level",
                  "label": "Theme in API Level"
                }
              ]
            },
            {
              "type": "doc",
              "id": "devportal/developer-portal-mode",
              "label": "Devportal Mode"
            }
          ]
        },
        {
          "type": "doc",
          "id": "devportal/discover-apis/ai-agent-discovery",
          "label": "AI Agent Discovery"
        },
        {
          "type": "category",
          "label": "Discover APIs",
          "items": [
            {
              "type": "doc",
              "id": "devportal/discover-apis/api-search",
              "label": "Search APIs"
            },
            {
              "type": "doc",
              "id": "devportal/discover-apis/api-documentations",
              "label": "Documentations"
            }
          ]
        },
        {
          "type": "category",
          "label": "API Workflows",
          "items": [
            {
              "type": "doc",
              "id": "devportal/api-workflows/consuming-api-workflows",
              "label": "Consuming API Workflows"
            }
          ]
        },
        {
          "type": "category",
          "label": "Consume an API",
          "items": [
            {
              "type": "doc",
              "id": "devportal/consuming-services/consume-an-api-secured-with-oauth2",
              "label": "Consume an API Secured with OAuth2"
            },
            {
              "type": "doc",
              "id": "devportal/consuming-services/consume-an-api-secured-with-api-key",
              "label": "Consume an API Secured with API Key"
            }
          ]
        },
        {
          "type": "category",
          "label": "Manage Applications",
          "items": [
            {
              "type": "doc",
              "id": "devportal/manage-applications/create-an-application",
              "label": "Create an Application"
            }
          ]
        },
        {
          "type": "category",
          "label": "Manage Subscriptions",
          "items": [
            {
              "type": "doc",
              "id": "devportal/manage-subscriptions/subscribe-to-an-api",
              "label": "Subscribe to an API"
            }
          ]
        },
        {
          "type": "category",
          "label": "SDK Generation",
          "items": [
            {
              "type": "doc",
              "id": "devportal/sdk-generation/ai-assisted-sdk-generation",
              "label": "AI Assisted SDK Generation"
            }
          ]
        },
        {
          "type": "category",
          "label": "Admin Settings",
          "items": [
            {
              "type": "doc",
              "id": "devportal/admin-settings/llm-instructions",
              "label": "LLM Instructions"
            },
            {
              "type": "doc",
              "id": "devportal/admin-settings/managing-api-workflows",
              "label": "Managing API Workflows"
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "Hybrid gateways",
      "items": [
        {
          "type": "category",
          "label": "API Gateway",
          "items": [
            {
              "type": "category",
              "label": "Self-Hosted Gateway",
              "items": [
                {
                  "type": "doc",
                  "id": "api-platform-gateway/architecture",
                  "label": "Architecture"
                },
                {
                  "type": "doc",
                  "id": "api-platform-gateway/getting-started",
                  "label": "Getting Started"
                },
                {
                  "type": "doc",
                  "id": "api-platform-gateway/setting-up",
                  "label": "Setting Up"
                },
                {
                  "type": "doc",
                  "id": "api-platform-gateway/manage-policies",
                  "label": "Adding and Managing Policies"
                },
                {
                  "type": "category",
                  "label": "Custom Policies",
                  "items": [
                    {
                      "type": "doc",
                      "id": "api-platform-gateway/writing-a-custom-policy",
                      "label": "Writing a Custom Policy"
                    },
                    {
                      "type": "doc",
                      "id": "api-platform-gateway/build-gateway-with-custom-policies",
                      "label": "Building the Gateway with Custom Policies"
                    },
                    {
                      "type": "doc",
                      "id": "api-platform-gateway/apply-custom-policies-to-apis",
                      "label": "Apply Custom Policies to APIs"
                    }
                  ]
                },
                {
                  "type": "category",
                  "label": "Publish APIs",
                  "items": [
                    {
                      "type": "doc",
                      "id": "api-platform-gateway/publish-apis/overview",
                      "label": "Overview"
                    },
                    {
                      "type": "doc",
                      "id": "api-platform-gateway/publish-apis/subscription-based-apis",
                      "label": "Subscription Based APIs"
                    },
                    {
                      "type": "doc",
                      "id": "api-platform-gateway/publish-apis/subscription-less-apis",
                      "label": "Subscription Less APIs"
                    },
                    {
                      "type": "doc",
                      "id": "api-platform-gateway/publish-apis/lifecycle-management",
                      "label": "Lifecycle Management"
                    }
                  ]
                },
                {
                  "type": "doc",
                  "id": "api-platform-gateway/high-availability",
                  "label": "High Availability"
                }
              ]
            },
            {
              "type": "category",
              "label": "Third-Party Gateways",
              "items": [
                {
                  "type": "doc",
                  "id": "federation/overview",
                  "label": "Overview"
                },
                {
                  "type": "doc",
                  "id": "federation/api-discovery-aws",
                  "label": "Discover APIs from AWS API Gateway"
                }
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "AI Gateway",
          "items": [
            {
              "type": "doc",
              "id": "ai-gateway/overview",
              "label": "Overview"
            },
            {
              "type": "category",
              "label": "LLM",
              "items": [
                {
                  "type": "doc",
                  "id": "ai-gateway/llm/quick-start-guide",
                  "label": "Quick Start Guide"
                },
                {
                  "type": "doc",
                  "id": "ai-gateway/llm/llm-templates",
                  "label": "LLM Provider Templates"
                },
                {
                  "type": "category",
                  "label": "Guardrails",
                  "items": [
                    {
                      "type": "doc",
                      "id": "ai-gateway/llm/guardrails/aws-bedrock-guardrail",
                      "label": "AWS Bedrock Guardrail"
                    },
                    {
                      "type": "doc",
                      "id": "ai-gateway/llm/guardrails/azure-content-safety",
                      "label": "Azure Content Safety"
                    },
                    {
                      "type": "doc",
                      "id": "ai-gateway/llm/guardrails/content-length",
                      "label": "Content Length Guardrail"
                    },
                    {
                      "type": "doc",
                      "id": "ai-gateway/llm/guardrails/json-schema",
                      "label": "JSON Schema Guardrail"
                    },
                    {
                      "type": "doc",
                      "id": "ai-gateway/llm/guardrails/pii-masking-regex",
                      "label": "PII Masking Regex Guardrail"
                    },
                    {
                      "type": "doc",
                      "id": "ai-gateway/llm/guardrails/regex",
                      "label": "Regex Guardrail"
                    },
                    {
                      "type": "doc",
                      "id": "ai-gateway/llm/guardrails/semantic-prompt-guard",
                      "label": "Semantic Prompt Guardrail"
                    },
                    {
                      "type": "doc",
                      "id": "ai-gateway/llm/guardrails/semantic-tool-filtering",
                      "label": "Semantic Tool Filtering"
                    },
                    {
                      "type": "doc",
                      "id": "ai-gateway/llm/guardrails/sentence-count",
                      "label": "Sentence Count Guardrail"
                    },
                    {
                      "type": "doc",
                      "id": "ai-gateway/llm/guardrails/url",
                      "label": "URL Guardrail"
                    },
                    {
                      "type": "doc",
                      "id": "ai-gateway/llm/guardrails/word-count",
                      "label": "Word Count Guardrail"
                    }
                  ]
                },
                {
                  "type": "category",
                  "label": "Load Balancing",
                  "items": [
                    {
                      "type": "doc",
                      "id": "ai-gateway/llm/load-balancing/model-round-robin",
                      "label": "Model Round Robin"
                    },
                    {
                      "type": "doc",
                      "id": "ai-gateway/llm/load-balancing/model-weighted-round-robin",
                      "label": "Model Weighted Round Robin"
                    }
                  ]
                },
                {
                  "type": "category",
                  "label": "Prompt Management",
                  "items": [
                    {
                      "type": "doc",
                      "id": "ai-gateway/llm/prompt-management/prompt-decorator",
                      "label": "Prompt Decorator"
                    },
                    {
                      "type": "doc",
                      "id": "ai-gateway/llm/prompt-management/prompt-template",
                      "label": "Prompt Template"
                    }
                  ]
                },
                {
                  "type": "doc",
                  "id": "ai-gateway/llm/semantic-caching",
                  "label": "Semantic Caching"
                }
              ]
            },
            {
              "type": "category",
              "label": "MCP",
              "items": [
                {
                  "type": "doc",
                  "id": "ai-gateway/mcp/quick-start-guide",
                  "label": "Quick Start Guide"
                },
                {
                  "type": "category",
                  "label": "Policies",
                  "items": [
                    {
                      "type": "doc",
                      "id": "ai-gateway/mcp/policies/mcp-acl-list",
                      "label": "MCP Access Control List"
                    },
                    {
                      "type": "doc",
                      "id": "ai-gateway/mcp/policies/mcp-authentication",
                      "label": "MCP Authentication"
                    },
                    {
                      "type": "doc",
                      "id": "ai-gateway/mcp/policies/mcp-authorization",
                      "label": "MCP Authorization"
                    },
                    {
                      "type": "doc",
                      "id": "ai-gateway/mcp/policies/mcp-rewrite",
                      "label": "MCP Rewrite"
                    }
                  ]
                }
              ]
            },
            {
              "type": "category",
              "label": "Observability",
              "items": [
                {
                  "type": "doc",
                  "id": "ai-gateway/observability/logging",
                  "label": "Logging"
                },
                {
                  "type": "doc",
                  "id": "ai-gateway/observability/tracing",
                  "label": "Tracing"
                }
              ]
            },
            {
              "type": "category",
              "label": "Analytics",
              "items": [
                {
                  "type": "doc",
                  "id": "ai-gateway/analytics/moesif-analytics",
                  "label": "Moesif Analytics"
                },
                {
                  "type": "doc",
                  "id": "ai-gateway/analytics/analytics-header-filter",
                  "label": "Analytics Header Filter"
                }
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "Event Gateway",
          "items": [
            {
              "type": "doc",
              "id": "event-gateway/overview",
              "label": "Overview"
            },
            {
              "type": "doc",
              "id": "event-gateway/getting-started",
              "label": "Getting Started"
            },
            {
              "type": "doc",
              "id": "event-gateway/setting-up",
              "label": "Setting Up"
            },
            {
              "type": "category",
              "label": "Publish APIs",
              "items": [
                {
                  "type": "doc",
                  "id": "event-gateway/publish-apis/overview",
                  "label": "Overview"
                },
                {
                  "type": "doc",
                  "id": "event-gateway/publish-apis/subscription-based-apis",
                  "label": "Subscription Based APIs"
                },
                {
                  "type": "doc",
                  "id": "event-gateway/publish-apis/subscription-less-apis",
                  "label": "Subscription Less APIs"
                },
                {
                  "type": "doc",
                  "id": "event-gateway/publish-apis/lifecycle-management",
                  "label": "Lifecycle Management"
                }
              ]
            },
            {
              "type": "doc",
              "id": "event-gateway/troubleshooting",
              "label": "Troubleshooting"
            }
          ]
        }
      ],
      "collapsible": false,
      "className": "sidebar-section-divided"
    },
    {
      "type": "category",
      "label": "Tutorials",
      "items": [
        {
          "type": "doc",
          "id": "tutorials/expose-a-service-as-a-managed-api",
          "label": "Expose a Service as a Managed API"
        },
        {
          "type": "doc",
          "id": "tutorials/secure-an-api-with-role-based-access-control",
          "label": "Secure an API with RBAC"
        }
      ]
    },
    {
      "type": "category",
      "label": "API Platform Samples",
      "items": [
        {
          "type": "doc",
          "id": "samples/samples-overview",
          "label": "Samples Overview"
        }
      ]
    }
  ],
};

export default sidebars;
