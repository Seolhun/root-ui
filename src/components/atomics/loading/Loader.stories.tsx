import React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookDescriptor } from '../../../stories';
import { Loader, LoaderProps } from './Loader';

export default {
  title: 'Atomic/Loader',
  component: Loader,
  argTypes: {
    scale: {
      defaultValue: 'md',
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
    intent: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
  },
};

const Loaders = ({ ...rests }: LoaderProps) => {
  return (
    <section>
      <Loader {...rests} />
    </section>
  );
};

export const LoaderStories = Loaders.bind({});
LoaderStories.args = {
  loading: true,
};

const IntentLoaders = ({ children, ...rests }: LoaderProps) => {
  return (
    <section>
      {storiesIntentOptions.map((intent) => (
        <StorybookDescriptor key={intent} title={intent}>
          <Loader {...rests} intent={intent} />
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const IntentLoadersStories = IntentLoaders.bind({});
IntentLoadersStories.args = {
  children: 'Button',
  disabled: false,
};
