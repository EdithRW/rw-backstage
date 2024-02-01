import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { testOnePlugin, TestOnePage } from '../src/plugin';

createDevApp()
  .registerPlugin(testOnePlugin)
  .addPage({
    element: <TestOnePage />,
    title: 'Root Page',
    path: '/test-one'
  })
  .render();
