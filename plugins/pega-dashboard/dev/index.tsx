import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { pegaDashboardPlugin, PegaDashboardPage } from '../src/plugin';

createDevApp()
  .registerPlugin(pegaDashboardPlugin)
  .addPage({
    element: <PegaDashboardPage />,
    title: 'Root Page',
    path: '/pega-dashboard'
  })
  .render();
