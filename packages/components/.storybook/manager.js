import { addons } from '@storybook/manager-api';

/**
 * @see https://storybook.js.org/docs/react/configure/features-and-behavior
 */
addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  enableShortcuts: true,
  isToolshown: true,
  theme: undefined,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: {
      hidden: false,
    },
    zoom: {
      hidden: false,
    },
    eject: {
      hidden: false,
    },
    copy: {
      hidden: false,
    },
    fullscreen: {
      hidden: false,
    },
  },
});
