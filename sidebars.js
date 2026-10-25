// Navigation for AI Workspace (API Platform Cloud).

const doc = (id, label) => ({type: 'doc', id, label});
const group = (label, items) => ({type: 'category', label, items});

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    doc("overview", "Overview"),
    doc("getting-started", "Getting Started"),
    group("AI Gateway", [
      doc("ai-gateway/setting-up", "Setting Up"),
    ]),
    group("LLM Providers", [
      doc("llm-providers/overview", "Overview"),
    ]),
    group("App LLM Proxies", [
      doc("app-llm-proxies/overview", "Overview"),
    ]),
    group("MCP Proxies", [
      doc("mcp-proxies/overview", "Overview"),
    ]),
    group("MCP Registry", [
      doc("mcp-registry/overview", "Overview"),
    ]),
    group("Policies", [
      doc("policies/overview", "Overview"),
      doc("policies/policy-hub", "Policy Hub"),
    ]),
    doc("secret-management", "Secret Management"),
    doc("gen-ai-applications", "Gen AI Applications"),
    doc("configure-inbound-auth", "Configure Inbound Auth"),
    doc("invoke-via-sdk", "Invoke via SDK"),
    doc("monetization", "Monetization"),
    doc("monitoring-and-analytics", "Monitoring and Analytics"),
  ],
};

export default sidebars;
