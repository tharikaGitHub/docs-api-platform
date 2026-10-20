---
title: "Custom gateway domains"
description: "Configure a custom domain for a gateway in API Platform Cloud."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/deploy/gateways/custom-gateway-domains/
md_url: https://wso2.com/api-platform/docs/cloud/platform/deploy/gateways/custom-gateway-domains.md
tags:
  - cloud
  - deploy
  - gateways
  - custom-domains
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-18
content_type: "how-to"
---

# Custom gateway domains

<!-- TODO: Adapted from the Bijira page(s) on the cloud branch, en/docs/cloud/administer/settings/configure-a-custom-domain-for-your-organization.md.
     Bijira configured custom domains per organization (Admin > Settings > URL Settings > Active Domains); API Platform Cloud configures them per gateway.
     Verify against API Platform Cloud before publishing:
     - The per-gateway flow: where a gateway's domain settings are in the Management Portal, and every button and field name used below.
     - Whether a domain is still selected per environment, and whether the "entity type" selection still exists.
     - Who can add a domain (Bijira required organization administrator privileges).
     - The certificate options: Let's Encrypt (managed) and imported certificates, and the import fields
       (TLS Certificate, TLS Key File, Certificate Chain File).
     - Whether per-API custom URLs (Bijira's API-level URL Settings with Edit URL Mapping, Path, and the Approved state) still exist. Left out for now.
     - Add screenshots of the new UI. -->

You can expose the APIs on a gateway through your own domain, such as `apis.example.com`, instead of the default domain that API Platform Cloud assigns. A custom domain is configured per gateway, so you can use different domains for your internal and external gateways. For more information about gateways, see [Internal and external gateways](internal-and-external-gateways.md).

To add a custom domain, you create a DNS record that points your domain to the gateway, verify it, and then choose how the TLS certificate for the domain is provided.

## Add a custom domain to a gateway

!!! info "Before you begin"
    - You need administrator permissions in the organization.
    - You need access to the DNS settings of your domain.

1. Sign in to the API Platform Cloud Management Portal and select your organization.
2. Open the settings of the gateway you want to add the domain to.
3. Click **+ Add Domains**.
4. In the **Add a Custom Domain** pane, enter your domain name and select the environment that the domain applies to.
5. Copy the CNAME target value shown in the pane. With your DNS provider, create a CNAME record that maps your domain name to this target value.
6. After you create the CNAME record, click **Verify**.

    !!! note
        Verification succeeds when the CNAME record resolves correctly. A new DNS record can take some time to become available globally.

7. When verification succeeds, click **Next**.
8. Choose how to provide the TLS certificate for the domain:

    - **Let's Encrypt**: API Platform Cloud generates and renews the certificate for you.
    - **Import certificate**: Upload a certificate you already have. It must meet the [certificate requirements](#certificate-requirements).

9. Click **Add**.

The domain is listed in the gateway's active domains. APIs deployed to that gateway in the selected environment can be invoked through the custom domain as well as the default domain.

## Certificate requirements

If you import your own certificate instead of using Let's Encrypt, the files must meet the following requirements.

**TLS certificate**

- It is issued by a certificate authority (CA) and contains the domain's public key, the domain name, the owner of the domain, the expiration date, and the digital signature of the issuing CA.
- It is an X.509 certificate in PEM format.
- It is issued for the exact domain or through a wildcard entry that covers it. For example, a certificate for `apis.example.com` covers only that domain, and a wildcard certificate for `*.example.com` covers every subdomain of `example.com`.

**TLS key file**

- It is in PEM format.
- It uses RSA encryption.

**Certificate chain file**

- It contains one or more intermediate certificates in order, leading back to a root certificate. Some clients need the chain to verify the server certificate. It can also contain your domain's certificate, which is optional because you upload that certificate separately.
- Every certificate in the chain is an X.509 certificate in PEM format.

??? info "Construct a certificate chain"
    A certificate chain contains the following certificates, in this order:

    1. **Leaf certificate** (optional): The certificate that the CA issued for your domain.
    2. **Intermediate certificates**, if any: Certificates that the root CA issued to subordinate CAs. Get these from your CA and keep them in hierarchical order.
    3. **Root certificate**: The trusted, self-signed certificate of the CA.

    To construct the chain:

    1. Concatenate the certificates into one file in the order above, for example `certificate_chain.pem`. Make sure each `BEGIN CERTIFICATE` and `END CERTIFICATE` marker is on its own line:

        ```text
        -----BEGIN CERTIFICATE-----
        <Leaf certificate content>
        -----END CERTIFICATE-----
        -----BEGIN CERTIFICATE-----
        <Intermediate certificate content>
        -----END CERTIFICATE-----
        -----BEGIN CERTIFICATE-----
        <Root certificate content>
        -----END CERTIFICATE-----
        ```

    2. Verify the chain:

        ```bash
        openssl verify -CAfile <root_or_bundle_cert>.pem certificate_chain.pem
        ```

        Replace `<root_or_bundle_cert>.pem` with the path to your root certificate, or to a bundle that contains the root and intermediate certificates.

    3. Upload the files when you import the certificate:

        - If the chain includes the leaf certificate, upload the chain in the **TLS Certificate** field and the private key in the **TLS Key File** field. Leave the **Certificate Chain File** field empty.
        - If the chain does not include the leaf certificate, upload the leaf certificate in the **TLS Certificate** field, the private key in the **TLS Key File** field, and the chain in the **Certificate Chain File** field.
