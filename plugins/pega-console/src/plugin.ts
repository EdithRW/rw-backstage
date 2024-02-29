import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const pegaConsolePlugin = createPlugin({
  id: 'pega-console',
  routes: {
    root: rootRouteRef, 
  },
});

export const PegaConsolePage = pegaConsolePlugin.provide(
  createRoutableExtension({
    name: 'PegaConsolePage',
    component: () =>
      import('./components/PegaConsoleApp').then(m => m.PegaConsoleApp),
    mountPoint: rootRouteRef,
  }),
);


  