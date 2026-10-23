import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import DeploymentToggle from '@site/src/components/DeploymentToggle';

// Adds the Cloud / Self-managed toggle as a navbar item type.
export default {
  ...ComponentTypes,
  'custom-deploymentToggle': DeploymentToggle,
};
