// Navigation for the API Portal documentation (next), generated
// from the "API Portal > next" section of the MkDocs nav.

const doc = (id, label) => ({type: 'doc', id, label});
const group = (label, items) => ({type: 'category', label, items});

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    doc("overview", "Overview"),
    doc("about-this-release", "About this Release"),
    doc("concepts", "Concepts"),
    doc("quickstart-guide", "Quick Start Guide"),
    group("Setting Up", [
      doc("setting-up/configuration", "Configuration & Interpolation"),
      doc("setting-up/resource-requirement", "Minimum resource requirements"),
      doc("setting-up/ports", "Ports"),
      doc("setting-up/database", "Database"),
      group("Authentication", [
        doc("setting-up/authentication/overview", "Overview"),
        doc("setting-up/authentication/connect-an-identity-provider", "Connect an Identity Provider"),
        doc("setting-up/authentication/asgardeo-as-idp", "Set up Asgardeo"),
        doc("setting-up/authentication/multi-organization", "Serve Multiple Organizations"),
        doc("setting-up/authentication/wso2-is-as-idp", "Set up WSO2 Identity Server"),
      ]),
      doc("setting-up/artifact-types", "Artifact Types"),
    ]),
    group("Discover APIs", [
      doc("discover-apis/overview", "Overview"),
      doc("discover-apis/browse-apis", "Browse APIs"),
    ]),
    group("Discover MCP Servers", [
      doc("mcp-servers/overview", "Overview"),
      doc("mcp-servers/browse-mcp-servers", "Browse MCP Servers"),
      doc("mcp-servers/connect-to-an-mcp-server", "Connect to an MCP Server"),
    ]),
    doc("api-workflows", "API Workflows"),
    doc("ai-agent-discovery", "AI Agent Discovery"),
    doc("mcp-registry", "MCP Registry API"),
    group("Applications and Credentials", [
      doc("consume-an-api/overview", "Which Credentials You Need"),
      doc("consume-an-api/manage-applications", "Manage Applications"),
      doc("consume-an-api/manage-subscriptions", "Manage Subscriptions"),
      doc("consume-an-api/manage-api-keys", "Manage API Keys"),
      doc("consume-an-api/oauth2", "Call an OAuth2-Secured API"),
      doc("consume-an-api/api-key", "Call an API-Key-Secured API"),
    ]),
    group("Admin Settings", [
      group("Organization", [
        doc("admin-settings/organization-settings", "Organization Settings"),
        doc("admin-settings/manage-views", "Manage Views"),
        doc("admin-settings/manage-labels", "Manage Labels"),
        doc("admin-settings/subscription-plans", "Subscription Plans"),
      ]),
      group("Content", [
        doc("admin-settings/manage-apis", "Manage APIs"),
        doc("admin-settings/manage-mcp-servers", "Manage MCP Servers"),
        doc("admin-settings/manage-api-workflows", "Manage API Workflows"),
        doc("admin-settings/api-content", "API Content"),
        doc("admin-settings/llm-instructions", "LLM Instructions"),
      ]),
      group("Integrations", [
        group("Key Manager Integration", [
          doc("admin-settings/key-manager-integration", "Key Managers"),
          doc("admin-settings/key-manager-thunder", "Set Up ThunderID as a Key Manager"),
          doc("admin-settings/key-manager-custom-dcr", "Set Up Any DCR-Compatible Key Manager"),
        ]),
        doc("admin-settings/webhook-integration", "Webhook Integration"),
      ]),
      group("Appearance", [
        doc("admin-settings/theming", "Theming"),
        doc("admin-settings/apply-a-theme", "Apply a Theme to a View"),
        doc("admin-settings/design-mode", "Design Mode"),
      ]),
    ]),
    group("Deployment", [
      doc("deployment/overview", "Overview"),
      group("Production Readiness", [
        doc("deployment/security-hardening", "Security Hardening"),
        doc("deployment/database-configuration", "Database Configuration"),
        doc("deployment/resources-and-scaling", "Resources & Scaling"),
        doc("deployment/control-plane-connection", "Control Plane Connection"),
        doc("deployment/deploy-and-verify", "Verify & Upgrade"),
      ]),
      doc("deployment/deploy-on-vms", "Deploy on VMs"),
      group("Deploy on Kubernetes", [
        doc("deployment/deploy-on-kubernetes", "Kubernetes"),
        doc("deployment/openshift", "OpenShift"),
      ]),
    ]),
    group("Tutorials", [
      doc("tutorials/secured-api-end-to-end", "Secured API End to End"),
    ]),
    group("References", [
      group("Management API", [
        doc("rest-api/overview", "Overview"),
        doc("rest-api/authentication", "Authentication"),
        doc("rest-api/organizations", "Organizations"),
        doc("rest-api/organization-content", "Organization Content"),
        doc("rest-api/views", "Views"),
        doc("rest-api/labels", "Labels"),
        doc("rest-api/subscription-plans", "Subscription Plans"),
        doc("rest-api/key-managers", "Key Managers"),
        doc("rest-api/apis", "APIs"),
        doc("rest-api/api-content", "API Content"),
        doc("rest-api/api-keys", "API Keys"),
        doc("rest-api/mcp-servers", "MCP Servers"),
        doc("rest-api/mcp-server-content", "MCP Server Content"),
        doc("rest-api/mcp-server-keys", "MCP Server Keys"),
        doc("rest-api/applications", "Applications"),
        doc("rest-api/application-keys", "Application Keys"),
        doc("rest-api/subscriptions", "Subscriptions"),
        doc("rest-api/api-workflows", "API Workflows"),
        doc("rest-api/webhook-subscribers", "Webhook Subscribers"),
        doc("rest-api/webhook-events", "Webhook Events"),
        doc("rest-api/schemas", "Schemas"),
      ]),
      doc("references/webhook-event-catalog", "Webhook Event Catalog"),
      doc("references/get-a-bearer-token-via-curl", "Get a Bearer Token via curl"),
      doc("references/configurations", "Configurations"),
    ]),
  ],
};

export default sidebars;
