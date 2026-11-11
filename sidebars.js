// Navigation for the API Control Plane documentation, taken from the
// "API Control Plane" section of the cloud-docusaurus sidebar.

const doc = (id, label) => ({type: 'doc', id, label});
const group = (label, items) => ({type: 'category', label, items});

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    doc("overview", "Overview"),
    doc("quickstart-guide", "Quick Start Guide"),
    group("Create", [
      doc("create-api-proxy/overview", "Overview"),
      group("REST APIs", [
        doc("create-api-proxy/rest-apis/start-from-scratch", "Start from Scratch"),
        doc("create-api-proxy/rest-apis/start-with-a-contract", "Start with a Contract"),
      ]),
      group("GraphQL APIs", [
        doc("create-api-proxy/graphql-apis/start-from-scratch", "Start from Scratch"),
        doc("create-api-proxy/graphql-apis/start-with-a-schema", "Start with a Schema"),
      ]),
    ]),
    group("Develop", [
      group("Security", [
        doc("develop-api-proxy/security/overview", "Overview"),
        doc("develop-api-proxy/security/api-key-authentication", "API Key Authentication"),
        doc("develop-api-proxy/security/oauth2-authentication", "OAuth2 Authentication"),
      ]),
      group("Policies", [
        doc("develop-api-proxy/policy/overview", "Overview"),
        doc("develop-api-proxy/policy/attach-and-manage-policies", "Attach and Manage Policies"),
      ]),
      doc("develop-api-proxy/documents", "Documents"),
    ]),
    group("Deploy", [
      doc("deploy-api-proxy/overview", "Overview"),
    ]),
    group("Test", [
      doc("test-api-proxy/api-console", "API Console"),
      doc("test-api-proxy/graphql-console", "GraphQL Console"),
      doc("test-api-proxy/curl", "cURL"),
    ]),
    group("Publish", [
      doc("publish-api-proxy/publish-an-api", "Publish an API"),
      doc("publish-api-proxy/customize-portal-listing", "Customize the Portal Listing"),
      doc("publish-api-proxy/subscription-plans-and-billing", "Subscription Plans"),
      doc("publish-api-proxy/deprecate-or-unpublish", "Deprecate or Unpublish an API"),
      doc("publish-api-proxy/make-an-api-ai-ready", "Make an API AI-Ready"),
    ]),
    group("Observability", [
      doc("observability/logs", "Logs"),
    ]),
    // group("Insights", [
    //   doc("insights/api-insights", "Overview"),
    // ]),
    group("Administer", [
      doc("administer/managing-environments", "Manage Environments"),
      doc("administer/managing-pipelines", "Manage Pipelines"),
      doc("administer/managing-gateways", "Manage Gateways"),
      doc("administer/managing-portals", "Manage Portals"),
      // doc("administer/customizing-portal-theme", "Customize the Portal Theme"),
      doc("administer/creating-subscription-plans", "Manage Subscription Plans"),
    ]),
  ],
};

export default sidebars;
