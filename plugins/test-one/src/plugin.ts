import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const testOnePlugin = createPlugin({
  id: 'test-one',
  routes: {
    root: rootRouteRef,
  },
});

export const TestOnePage = testOnePlugin.provide(
  createRoutableExtension({
    name: 'TestOnePage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
