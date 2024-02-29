import {
  createPlugin,
  createRoutableExtension
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const rwPegaConsolePlugin = createPlugin({
  id: 'rw-pega-console',
  routes: {
    root: rootRouteRef,
  },
});

export const RWPegaConsolePage = rwPegaConsolePlugin.provide(
  createRoutableExtension({
    name: 'RWPegaConsolePage',
    component: () =>
      import('./components/RWPegaConsolePage').then(m => m.RWPegaConsolePage),
    mountPoint: rootRouteRef,
  }),
);