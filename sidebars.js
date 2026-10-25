// Navigation for API Portal and MCP Hub (API Platform Cloud).

const doc = (id, label) => ({type: 'doc', id, label});
const group = (label, items) => ({type: 'category', label, items});

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    doc("overview", "Overview"),
    doc("getting-started", "Getting Started"),
    group("Discover APIs", [
      doc("discover-apis/searching", "Searching"),
      doc("discover-apis/documentation", "Documentation"),
    ]),
    doc("discover-mcp-servers", "Discover MCP Servers"),
    doc("ai-agent-discovery", "AI Agent Discovery"),
    doc("consume-an-api", "Consume an API"),
    doc("manage-applications", "Manage Applications"),
    doc("manage-subscriptions", "Manage Subscriptions"),
    doc("sdk-generation", "SDK Generation"),
    doc("api-workflows", "API Workflows"),
    doc("theming-developer-portal", "Theming Developer Portal"),
    doc("admin-settings", "Admin Settings"),
  ],
};

export default sidebars;
