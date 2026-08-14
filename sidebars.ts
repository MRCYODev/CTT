import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  technicianSidebar: [
    // ============================================================
    // GETTING STARTED
    // ============================================================

    'getting-started',

    // ============================================================
    // TOOLS
    // ============================================================

    {
      type: 'category',
      label: 'Tools',
      collapsible: true,
      collapsed: true,

      items: [
        {
          type: 'category',
          label: 'Utilities',
          description:
            'Utilities for system maintenance, recovery, conversion, and other technician tasks.',
          collapsible: true,
          collapsed: true,

          link: {
            type: 'doc',
            id: 'tools/utilities/index',
          },

          items: [],
        },

        {
          type: 'category',
          label: 'Diagnostics',
          description:
            'Hardware, software, system, and troubleshooting diagnostic tools.',
          collapsible: true,
          collapsed: true,

          link: {
            type: 'doc',
            id: 'tools/diagnostics/index',
          },

          items: [],
        },

        {
          type: 'category',
          label: 'Security',
          collapsible: true,
          collapsed: true,

          link: {
            type: 'doc',
            id: 'tools/security/index',
          },

          items: [],
        },

        {
          type: 'category',
          label: 'Performance & Reference',
          collapsible: true,
          collapsed: true,

          link: {
            type: 'doc',
            id: 'tools/benchmark/index',
          },

          items: [],
        },

        {
          type: 'doc',
          id: 'tools/guides/index',
        },
      ],
    },

    // ============================================================
    // OPTICAL DEVICES
    // ============================================================

    {
      type: 'category',
      label: 'Optical Devices',
      collapsible: true,
      collapsed: true,

      items: [
        {
          type: 'doc',
          id: 'optical-media/index',
        },
      ],
    },

    // ============================================================
    // PLATFORMS
    // ============================================================

    {
      type: 'category',
      label: 'Platforms',
      collapsible: true,
      collapsed: true,

      items: [
        {
          type: 'category',
          label: 'Windows',
          collapsible: true,
          collapsed: true,

          items: [
            'platforms/windows/index',
            'platforms/windows/commands',
            'platforms/windows/repair',
            'platforms/windows/networking',
            'platforms/windows/troubleshooting',
          ],
        },

        {
          type: 'category',
          label: 'Linux',
          collapsible: true,
          collapsed: true,

          items: [
            'platforms/linux/index',
            'platforms/linux/commands',
            'platforms/linux/repair',
            'platforms/linux/networking',
            'platforms/linux/troubleshooting',
          ],
        },

        {
          type: 'category',
          label: 'Browser',
          collapsible: true,
          collapsed: true,

          items: [
            'platforms/browser/extensions',
            'platforms/browser/settings',
          ],
        },

        {
          type: 'category',
          label: 'Emulators',
          collapsible: true,
          collapsed: true,

          items: [
            {
              type: 'doc',
              id: 'platforms/emulators/index',
            },
          ],
        },

        {
          type: 'category',
          label: 'Android',
          description: 'Android phone and carrier reference material.',
          collapsible: true,
          collapsed: true,

          items: [
            'platforms/android/index',
            'platforms/android/diagnostics',
            'platforms/android/android-mmi',
            'platforms/android/gsm-ussd',
            'platforms/android/repair',
            'platforms/android/troubleshooting',
          ],
        },
      ],
    },
  ],
};

export default sidebars;