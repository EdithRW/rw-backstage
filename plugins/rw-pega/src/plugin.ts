import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';



export const rwPegaPlugin = createPlugin({
  id: 'rw-pega',
  routes: {
    root: rootRouteRef, 
  },
});

export const RwPegaPage = rwPegaPlugin.provide(
  createRoutableExtension({
    name: 'RwPegaPage',
    component: () =>
      import('./components/ExampleComponentTwo').then(m => m.DeveloperDashboard),
    mountPoint: rootRouteRef,
  }),
);

export const RwPegaPage2 = rwPegaPlugin.provide(
  createRoutableExtension({
    name: 'RwPegaPage2',
    component: () =>
      import('./components/ExampleComponentTwo').then(m => m.DeveloperDashboard),
    mountPoint: rootRouteRef,
  }),
);

