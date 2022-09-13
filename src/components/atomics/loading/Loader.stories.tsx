import React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookDescriptor } from '../../../stories';
import { Loader, LoaderProps } from './Loader';

export default {
  title: 'Atomic/Loader',
  component: Loader,
  argTypes: {
    scale: {
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
    intent: {
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
  },
};

const ScaleLoader = ({ children, ...rests }: LoaderProps) => {
  return (
    <section>
      {storiesScaleOptions.map((scale) => (
        <StorybookDescriptor key={scale} title={scale}>
          <Loader {...rests} scale={scale}>
            {children}
          </Loader>
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const ScaleLoaderStories = ScaleLoader.bind({});
ScaleLoaderStories.args = {
  children: 'Tag',
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
};
