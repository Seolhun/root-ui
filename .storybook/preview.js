import React from 'react';
import { addDecorator } from '@storybook/react';
import '../src/assets/app.scss';

export const parameters = {
  layout: 'fullscreen',
  actions: {
    argTypesRegex: '^on[A-Z].*'
  },
  controls: {
    expanded: true
  },
};

const AppDecorator = (storyFn) => (
  <div>{storyFn()}</div>
);

addDecorator(AppDecorator);
