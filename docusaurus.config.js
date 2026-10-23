// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'API Platform Cloud Documentation',
  tagline: 'Documentation for WSO2 API Platform Cloud',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://wso2.com',
  // The path the site is served under. Override with BASE_URL to build for
  // another environment, e.g. BASE_URL=/api-platform/docs-staging/saas/
  baseUrl: process.env.BASE_URL || '/api-platform/docs/saas/',

  organizationName: 'wso2',
  projectName: 'docs-api-platform',

  // Warn for now: some Bijira pages link to pages that don't exist.
  onBrokenLinks: 'warn',

  markdown: {
    // .md pages are CommonMark, so Bijira's text needs no MDX escaping; only
    // .mdx pages (the ones using Tabs) are parsed as MDX.
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Code font, as in the MkDocs docs.
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Docs-only site: pages are served from the site root.
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/wso2/docs-api-platform/tree/api-platform-cloud/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'API Platform Documentation',
        logo: {
          alt: 'WSO2 API Platform',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          // Cloud / Self-managed toggle (src/components/DeploymentToggle).
          {
            type: 'custom-deploymentToggle',
            position: 'left',
          },
          {
            href: 'https://github.com/wso2/docs-api-platform',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'API Platform documentation',
                href: 'https://wso2.com/api-platform/docs/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/wso2/docs-api-platform',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WSO2 LLC.`,
      },
      // Dark code blocks in both colour modes, as in the MkDocs docs.
      prism: {
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.vsDark,
      },
    }),
};

export default config;
