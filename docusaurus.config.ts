import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...).

const config: Config = {
  // ============================================================
  // SITE INFORMATION
  // ============================================================

  title: 'Computer Technician Tools',

  tagline:
    'The Open Source Knowledge base for fixing, configuring, securing, understanding technology and much more...',

  favicon: 'img/documenation/favicon.ico',

  // ============================================================
  // FUTURE FLAGS
  // ============================================================

  future: {
    v4: true,
    faster: true,
  },

  // ============================================================
  // URL / DEPLOYMENT
  // ============================================================

  url: 'https://ctt.mrcyo.com',

  baseUrl: '/',

  organizationName: 'MRCYODev',
  projectName: 'CTT',

  // ============================================================
  // BUILD VALIDATION
  // ============================================================

  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',

  // ============================================================
  // INTERNATIONALIZATION
  // ============================================================

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Apply the saved CTT theme before React mounts to prevent a light/default flash.
  scripts: [
    {
      src: '/js/theme-init.js',
    },
  ],

  // ============================================================
  // PRESETS
  // ============================================================

  presets: [
    [
      'classic',
      {
        // --------------------------------------------------------
        // DOCUMENTATION
        // --------------------------------------------------------

        docs: {
          sidebarPath: './sidebars.ts',

          showLastUpdateTime: true,
          showLastUpdateAuthor: true,

          breadcrumbs: true,
        },

        // --------------------------------------------------------
        // BLOG
        // --------------------------------------------------------

        blog: false,

        // --------------------------------------------------------
        // THEME
        // --------------------------------------------------------

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // ============================================================
  // LOCAL SEARCH
  // ============================================================

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),

      {
        // Generate a hashed search index.
        hashed: true,

        // Search language.
        language: ['en'],

        // Index documentation.
        indexDocs: true,

        // Blog is disabled.
        indexBlog: false,

        // Index normal Docusaurus pages.
        indexPages: true,

        // Highlight matching search terms on the target page.
        highlightSearchTermsOnTargetPage: true,

        // Use the dedicated search results page.
        explicitSearchResultPath: true,
      },
    ],
  ],

  // ============================================================
  // THEME CONFIGURATION
  // ============================================================

    themeConfig: {

    // ----------------------------------------------------------
    // COLOR MODE
    // ----------------------------------------------------------

    
    colorMode: {
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },

    // ----------------------------------------------------------
    // NAVBAR
    // ----------------------------------------------------------

    navbar: {
      title: 'CTT',

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'technicianSidebar',
          position: 'left',
          label: 'Knowledge Base',
        },

        // Local search
        {
          type: 'search',
          position: 'right',
        },
      ],
    },

    // ----------------------------------------------------------
    // FOOTER
    // ----------------------------------------------------------

    footer: {
      style: 'dark',

      links: [
        {
          title: 'Docs',

          items: [
            {
              label: 'Start here',
              to: '/docs/getting-started',
            },
          ],
        },

        {
          title: 'Reference',

          items: [
            {
              label: 'Hardware & Software Diagnostics',
              to: '/docs/tools/hardware-software-diagnostics',
            },

            {
              label: 'Utilities',
              to: '/docs/tools/utilities',
            },

            {
              label: 'Guides',
              to: '/docs/tools/guides',
            },
          ],
        },

        {
          title: 'Platforms',

          items: [
            {
              label: 'Windows commands',
              to: '/docs/platforms/windows/commands',
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Computer Technician Tools. Built with Docusaurus.`,
    },

    // ----------------------------------------------------------
    // CODE BLOCKS
    // ----------------------------------------------------------

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;