// Navigation for the common API Platform documentation, generated from the
// Overview, Get Started, Analytics, Monetization, Policy Hub, Guides, Tools,
// FAQ and Glossary entries of the MkDocs nav.

const doc = (id, label) => ({type: 'doc', id, label});
const group = (label, items) => ({type: 'category', label, items});

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    doc("index", "Overview"),
    doc("get-started", "Get Started"),
    group("Analytics", [
      doc("analytics/overview", "Overview"),
    ]),
    group("Monetization", [
      doc("monetization/overview", "Overview"),
      group("Monetizing APIs", [
        doc("monetization/getting-started", "Connect Stripe"),
        doc("monetization/manage-paid-subscription-plans", "Manage Paid Subscription Plans"),
      ]),
      group("Consume Monetized APIs", [
        doc("monetization/subscribe-to-paid-plan", "Subscribe to a Paid Plan"),
        doc("monetization/view-billing-and-usage", "View Billing and Usage"),
      ]),
    ]),
    group("Policy Hub", [
      doc("policy-hub/overview", "Overview"),
    ]),
    group("Guides", [
      doc("guides/overview", "Overview"),
      group("By Use Case", [
        group("Govern LLM Traffic", [
          doc("guides/ai-and-mcp/set-up-a-governed-multi-model-llm-proxy-with-cost-controls-and-failover", "Set up a Governed Multi-Model LLM Proxy with Cost Controls and Failover"),
          doc("guides/ai-and-mcp/enforce-token-based-rate-limiting-on-an-llm-proxy", "Enforce Token-Based Rate Limiting on an LLM Proxy"),
          doc("guides/ai-and-mcp/block-prompt-injection-and-unsafe-requests-with-llm-proxy-guardrails", "Block Prompt Injection and Unsafe Requests with LLM Proxy Guardrails"),
          doc("guides/ai-and-mcp/using-prompt-decorator-policy", "Enforce a Consistent AI Persona with the Prompt Decorator Policy"),
          doc("guides/ai-and-mcp/observe-llm-traffic", "Observe LLM Traffic on the AI Gateway"),
        ]),
        group("Configure AI Coding Assistants with AI Gateway", [
          group("Claude Code", [
            doc("guides/ai-and-mcp/ai-coding-assistants/claude-code-configuration-with-ai-gateway", "Configure Claude Code with AI Gateway"),
            doc("guides/ai-and-mcp/ai-coding-assistants/claude-code-subscription-configuration-with-ai-gateway", "Configure Claude Code with a Claude Subscription"),
          ]),
          doc("guides/ai-and-mcp/ai-coding-assistants/gemini-cli-configuration-with-ai-gateway", "Configure Google Gemini CLI with AI Gateway"),
          doc("guides/ai-and-mcp/ai-coding-assistants/codex-configuration-with-ai-gateway", "Configure OpenAI Codex CLI with AI Gateway"),
          doc("guides/ai-and-mcp/ai-coding-assistants/github-copilot-configuration-with-ai-gateway", "Configure GitHub Copilot with AI Gateway"),
        ]),
        group("Manage and Govern APIs", [
          doc("guides/ai-and-mcp/build-ai-app-with-claude-code", "Build an AI App with Claude Code that Calls Governed Backend APIs"),
        ]),
        group("Expose and Govern MCP Servers", [
          doc("guides/ai-and-mcp/convert-rest-api-to-mcp-server", "Convert a REST API into an MCP Tool and Use It in Claude Desktop"),
          doc("guides/ai-and-mcp/expose-a-multi-step-api-workflow-as-an-mcp-tool", "Expose a Multi-Step API Workflow as an MCP Tool"),
          doc("guides/ai-and-mcp/build-ai-agent-with-multiple-mcp-servers", "Build an AI Agent That Uses Aggregated MCP Tools from Multiple APIs"),
          doc("guides/ai-and-mcp/publish-mcp-servers-to-a-governed-catalog", "Publish MCP servers to a governed catalog using AI Workspace and API Portal and MCP Hub"),
          doc("guides/ai-and-mcp/block-mcp-tool-poisoning-with-the-mcp-access-control-policy", "Reduce MCP Tool Poisoning Risk with the MCP Access Control Policy"),
          doc("guides/ai-and-mcp/observe-mcp-traffic", "Observe MCP Traffic on the AI Gateway"),
        ]),
        group("Discover APIs and MCP Servers", [
          doc("guides/developer-portal/api-discovery-and-tryout", "Go from Zero to a Working API Call Using the Developer Portal"),
          doc("guides/ai-and-mcp/find-and-connect-to-an-enterprise-mcp-server-from-the-mcp-hub", "Find and Connect to an Enterprise MCP Server from the MCP Hub"),
        ]),
        group("Monetize APIs and MCP Tools", [
          doc("guides/monetization/api-monetization", "API Monetization"),
          doc("guides/monetization/mcp-tool-monetization", "MCP Tool Monetization"),
        ]),
        group("Connect Third-Party Gateways", [
          doc("guides/gateway-federation/discover-apis-from-aws-api-gateway", "Discover APIs from Amazon API Gateway"),
        ]),
        group("Expose Real-Time APIs", [
          doc("guides/websocket/build-a-websocket-notification-system", "Build a WebSocket-Based Real-Time Notification System"),
          doc("guides/websocket/build-an-ai-agent-for-websocket-notifications", "Build an AI Agent that Reacts to WebSocket Notifications"),
        ]),
      ]),
      group("By Service Provider", [
        doc("guides/service-providers/aws", "AWS"),
        doc("guides/service-providers/azure", "Azure"),
        doc("guides/service-providers/anthropic", "Anthropic"),
        doc("guides/service-providers/openai", "OpenAI"),
        doc("guides/service-providers/google", "Google"),
        doc("guides/service-providers/mistral", "Mistral"),
        doc("guides/service-providers/github", "GitHub"),
        doc("guides/service-providers/stripe", "Stripe"),
      ]),
    ]),
    group("Tools", [
      group("API Platform CLI", [
        doc("tools/cli/quick-start-guide", "Quick Start Guide"),
        doc("tools/cli/customizing-gateway-policies", "Customizing Gateway Policies"),
        doc("tools/cli/reference", "Reference"),
      ]),
      group("VS Code for API Design", [
        doc("tools/vscode-api-design/getting-started", "Quick Start Guide"),
        doc("tools/vscode-api-design/design-apis", "Design APIs"),
        doc("tools/vscode-api-design/govern-apis", "Govern APIs"),
        doc("tools/vscode-api-design/end-to-end-tutorial", "End-to-End Tutorial"),
      ]),
      group("Arazzo MCP Generator CLI", [
        doc("tools/arazzo-mcp-gen-cli/quick-start-guide", "Quick Start Guide"),
        doc("tools/arazzo-mcp-gen-cli/reference", "Reference"),
      ]),
      group("VS Code Arazzo Visualizer", [
        doc("tools/vscode-arazzo-visualizer/getting-started", "Overview"),
        doc("tools/vscode-arazzo-visualizer/quick-start-guide", "Quick Start Guide"),
      ]),
    ]),
    doc("faq", "FAQ"),
    doc("glossary", "Glossary"),
  ],
};

export default sidebars;
