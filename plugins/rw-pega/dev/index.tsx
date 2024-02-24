import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { rwPegaPlugin, RwPegaPage, RwPegaPage2 } from '../src/plugin';

createDevApp()
  .registerPlugin(rwPegaPlugin)
  .addPage({
    element: <RwPegaPage />,
    title: 'Root Page',
    path: '/rw-pega'
  })
  .addPage({
    element: <RwPegaPage2 />,
    title: 'Root Page two',
    path: '/rw-pega2'
  })
  .render();
