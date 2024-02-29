import { createRouteRef } from '@backstage/core-plugin-api';

export const rootRouteRef = createRouteRef({
  id: 'pega-console',
});

export const pegaConsoleApplicationLandingRouteRef = createRouteRef({
  id: 'pega-console:application-landing',
});
