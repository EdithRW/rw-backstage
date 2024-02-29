import { createRouteRef } from '@backstage/core-plugin-api';


export const rootRouteRef = createRouteRef({
  id: 'rw-pega-console',
});

export const newPegaRouteRef = createRouteRef({
  id: 'rw-pega-console:new',
});

export const pegaProjectsRouteRef = createRouteRef({
  id: 'rw-pega-console:projects',
});

export const pegaProjectDetailsRouteRef = createRouteRef({
  id: 'rw-pega-console:project-details',
});