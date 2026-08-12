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
        // ==========================================================
        // DIAGNOSTICS
        // ==========================================================

        {
          type: 'category',
          label: 'Diagnostics',
          description: 'Hardware and software diagnostic tools.',
          collapsible: true,
          collapsed: true,

          link: {
            type: 'generated-index',
            title: 'Diagnostics',
            description: 'Tools for identifying hardware and software issues.',
          },

          items: [
            'tools/hardware-software-diagnostics',
          ],
        },

        // ==========================================================
        // UTILITIES & RECOVERY
        // ==========================================================

        {
          type: 'category',
          label: 'Utilities & Recovery',
          description:
            'Utilities for system maintenance, recovery, conversion, and other technician tasks.',
          collapsible: true,
          collapsed: true,

          link: {
            type: 'doc',
            id: 'tools/utilities/index',
          },

          items: [
            'tools/utilities/bootable-usb',
            'tools/utilities/convert',
            'tools/utilities/file-recovery',
          ],
        },

        // ==========================================================
        // SECURITY
        // ==========================================================

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

        // ==========================================================
        // PERFORMANCE & REFERENCE
        // ==========================================================

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

        // ==========================================================
        // GUIDES
        // ==========================================================

        'tools/guides',
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
        // ==========================================================
        // WINDOWS
        // ==========================================================

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

        // ==========================================================
        // LINUX
        // ==========================================================

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

        // ==========================================================
        // ANDROID
        // ==========================================================

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