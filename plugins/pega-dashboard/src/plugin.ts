import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const pegaDashboardPlugin = createPlugin({
  id: 'pega-dashboard',
  routes: {
    root: rootRouteRef,
  },
});

export const PegaDashboardPage = pegaDashboardPlugin.provide(
  createRoutableExtension({
    name: 'PegaDashboardPage',
    component: () =>
      import('./components/DashboardComponent').then(m => m.DashboardPage),
    mountPoint: rootRouteRef,
  }),
);
