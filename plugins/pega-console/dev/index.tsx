import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { pegaConsolePlugin, PegaConsolePage } from '../src/plugin';

createDevApp()
  .registerPlugin(pegaConsolePlugin)
  .addPage({
    element: <PegaConsolePage />,
    title: 'Root Page',
    path: '/pega-console'
  })
  .render();
