---
title: "Promote APIs between environments"
description: "Promote an API from one environment to the next in API Platform Cloud."
canonical_url: https://wso2.com/api-platform/docs/cloud/platform/deploy/promote-apis-between-environments/
md_url: https://wso2.com/api-platform/docs/cloud/platform/deploy/promote-apis-between-environments.md
tags:
  - cloud
  - deploy
  - environments
author: WSO2 API Platform Documentation Team
last_updated: 2026-10-18
content_type: "how-to"
---

# Promote APIs between environments

<!-- TODO: Adapted from the Bijira page(s) on the cloud branch, en/docs/cloud/administer/manage-cd-pipelines/manage-cd-pipelines.md.
     Verify against API Platform Cloud before publishing:
     - Confirm whether API Platform Cloud uses the term CD pipelines (continuous deployment pipelines) for the environment promotion order.
     - Whether organizations still get a default pipeline, and whether a project inherits the organization default.
     - The Management Portal navigation (Admin > CD Pipelines at organization and project level) and all button names.
     - The "Promote an API" steps (Deploy page, Promote, Configuration Types) are taken from the Bijira quick start, not from this source page.
     - Add screenshots of the new UI. -->

When you deploy an API, it is first deployed to the first environment in the promotion order. After you verify it, you promote it to the next environment, for example from development to production.

The promotion order is defined by a continuous deployment (CD) pipeline: an ordered list of environments. Every organization has a default pipeline, and each new project uses the organization's default pipeline. You can create more pipelines to change the order in which environments are applied to a project.

## Promote an API

1. Sign in to the API Platform Cloud Management Portal and open the API.
2. In the left navigation menu, click **Deploy**.
3. In the card of the environment where the API is deployed, click **Promote**.
4. In the **Configuration Types** pane, choose whether to reuse the endpoint configuration of the current environment or specify a different one, and click **Next**.

When the promotion completes, the card of the next environment shows the **Deployment Status** as **Active**. For more information about environments, see [Environments](environments.md).

## Manage the promotion order

### Create a pipeline

1. Sign in to the API Platform Cloud Management Portal.
2. In the top navigation menu, click **Organization** and select your organization.
3. In the left navigation menu, click **Admin** and then click **CD Pipelines**.
4. Click **+ Create Pipeline** and enter the following details:

    - **Name**: A display name for the pipeline.
    - **Mark as Default**: Select this option to make this pipeline the default for all new projects.

5. Click **+ Add Environment** and add the environments in the order you want APIs to be promoted.
6. Click **Create**.

### Edit a pipeline

1. In the organization's left navigation menu, click **Admin** and then click **CD Pipelines**.
2. Click the edit icon for the pipeline you want to edit.
3. Update the name, the default setting, or the order of environments.
4. Click **Update**.

### Delete a pipeline

!!! warning
    Deleting a pipeline is permanent and cannot be undone.

!!! note
    You cannot delete the organization's default pipeline, or a pipeline that a project uses. Remove the pipeline from every project that uses it before you delete it.

1. In the organization's left navigation menu, click **Admin** and then click **CD Pipelines**.
2. Click the delete icon for the pipeline you want to delete. A confirmation dialog describes the impact of the deletion.
3. Review the details and type the pipeline name to confirm.
4. Click **Delete**.

## Manage the pipelines of a project

The default pipeline is set separately for the organization and for each project. A new project inherits the organization's default pipeline. The project's default pipeline then sets the default promotion order for its APIs on the **Deploy** page.

### Add a pipeline to a project

1. Sign in to the API Platform Cloud Management Portal and select your organization.
2. Open the project.
3. In the left navigation menu, click **Admin** and then click **CD Pipelines**.
4. Click **+ Add**, select the pipelines to add, and click **Add**.

### Remove a pipeline from a project

1. Open the project.
2. In the left navigation menu, click **Admin** and then click **CD Pipelines**.
3. Click **Remove** for the pipeline you want to remove. A confirmation dialog describes the impact of the change.
4. Review the details, type the pipeline name to confirm, and click **Remove**.

### Change the default pipeline of a project

1. Open the project.
2. In the left navigation menu, click **Admin** and then click **CD Pipelines**.
3. Click **Set as Default** for the pipeline you want to use as the project default. A confirmation dialog describes the impact of the change.
4. Click **Confirm**.
