// Navigation for the API Platform Gateway documentation (next), generated
// from the "API Gateway > next" section of the MkDocs nav.

const doc = (id, label) => ({type: 'doc', id, label});
const group = (label, items) => ({type: 'category', label, items});

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    doc("overview", "Overview"),
    doc("quick-start-guide", "Quick Start Guide"),
    group("Setup", [
      doc("setup/configuration", "Configuration & Interpolation"),
      doc("setup/resource-requirement", "Minimum resource requirements"),
      doc("setup/database-setup", "Setting Up the Database"),
      doc("setup/artifact-templating", "Artifact Templating"),
      doc("setup/health-checks", "Health Checks"),
      doc("setup/signing-keys-and-jwks", "Signing Keys and JWKS"),
    ]),
    group("Resiliency", [
      doc("resiliency/timeouts", "Timeouts"),
    ]),
    group("Policies", [
      doc("policies/overview", "Overview"),
      doc("policies/policy-execution-order", "Policy execution order"),
      doc("policies/fault-policies", "Fault Policies"),
      doc("policies/add-or-update-policies", "Add or Update Policies"),
      group("Custom Policies", [
        doc("policies/custom-policies/writing-a-custom-policy", "Writing a Custom Policy"),
        doc("policies/custom-policies/building-gateway-with-custom-policies", "Building Gateway with Custom Policies"),
      ]),
    ]),
    group("Deployment", [
      group("Deployment Modes", [
        doc("deployment/deployment-modes/immutable-gateway", "Immutable Gateway"),
        group("Kubernetes", [
          doc("deployment/deployment-modes/kubernetes/overview", "Overview"),
          doc("deployment/deployment-modes/kubernetes/kubernetes-standalone", "Standalone Mode"),
          doc("deployment/deployment-modes/kubernetes/gateway-operator", "Kubernetes Operator Mode"),
          doc("deployment/deployment-modes/kubernetes/gateway-operator-management-crds", "Management CRDs"),
        ]),
        group("OpenShift", [
          doc("deployment/deployment-modes/openshift/openshift-standalone", "Standalone Mode"),
          doc("deployment/deployment-modes/openshift/gateway-operator", "Gateway Operator Mode"),
        ]),
      ]),
      group("High-Availability Production Deployment", [
        doc("deployment/high-availability-production-deployment", "Overview"),
        doc("deployment/production-deployment/security-hardening", "Security Hardening"),
        doc("deployment/production-deployment/database-configuration", "Database Configuration"),
        doc("deployment/production-deployment/resources-and-scaling", "Resources & Scaling"),
        doc("deployment/production-deployment/deploy-and-verify", "Deploy & Verify"),
        doc("deployment/production-deployment/control-plane-connection", "Control Plane Connection"),
      ]),
      group("Deploying APIs", [
        doc("deployment/deploying-apis/bottom-up-api-deployment", "Bottom-Up Deployment"),
        doc("deployment/deploying-apis/graphql-api-deployment", "GraphQL API Deployment"),
      ]),
    ]),
    group("Observability", [
      group("Logging", [
        doc("observability/logging", "Centralized Logging"),
        group("Traffic Logging", [
          doc("observability/traffic-logging", "Overview"),
          doc("observability/custom-traffic-log-format", "Custom Log Format"),
        ]),
      ]),
      group("Tracing", [
        doc("observability/tracing/overview", "Overview"),
        doc("observability/tracing/enabling-tracing", "Enabling and Disabling Tracing"),
        doc("observability/tracing/viewing-traces-in-jaeger", "Viewing Traces in Jaeger"),
        doc("observability/tracing/configuration", "Tracing Configuration"),
        doc("observability/tracing/alternative-backends", "Alternative Tracing Backends"),
        doc("observability/tracing/best-practices-and-troubleshooting", "Best Practices and Troubleshooting"),
      ]),
      group("Metrics", [
        doc("observability/metrics/overview", "Overview"),
        doc("observability/metrics/enabling-metrics", "Enabling and Disabling Metrics"),
        doc("observability/metrics/viewing-metrics-in-grafana", "Viewing Metrics in Grafana"),
        doc("observability/metrics/prometheus-queries", "Prometheus Queries"),
        doc("observability/metrics/configuration", "Configuration Options"),
        doc("observability/metrics/alternative-backends", "Alternative Metrics Backends"),
        doc("observability/metrics/metric-reference", "Metric Reference"),
        doc("observability/metrics/best-practices-and-troubleshooting", "Best Practices and Troubleshooting"),
      ]),
    ]),
    group("Analytics", [
      doc("analytics/analytics-header-filter", "Analytics Header Filter"),
      doc("analytics/moesif-analytics", "Moesif Analytics"),
      doc("analytics/opentelemetry-analytics", "OpenTelemetry Analytics"),
    ]),
    group("Management API", [
      doc("gateway-controller-management-api/overview", "Overview"),
      doc("gateway-controller-management-api/authentication", "Authentication"),
      doc("gateway-controller-management-api/rest-api-management", "Rest API Management"),
      doc("gateway-controller-management-api/graphql-api-management", "GraphQL API Management"),
      doc("gateway-controller-management-api/mcp-proxy-management", "MCP Proxy Management"),
      doc("gateway-controller-management-api/certificate-management", "Certificate Management"),
      doc("gateway-controller-management-api/llm-provider-template-management", "LLM Provider Template Management"),
      doc("gateway-controller-management-api/llm-provider-management", "LLM Provider Management"),
      doc("gateway-controller-management-api/llm-proxy-management", "LLM Proxy Management"),
      doc("gateway-controller-management-api/secrets-management", "Secrets Management"),
      doc("gateway-controller-management-api/schemas", "Schemas"),
    ]),
    group("Performance", [
      doc("performance/overview", "Overview"),
      doc("performance/gateway-runtime-with-two-cpus", "Gateway runtime with two CPUs"),
      doc("performance/gateway-runtime-with-four-cpus", "Gateway runtime with four CPUs"),
    ]),
    doc("about-this-release", "About this release"),
  ],
};

export default sidebars;
