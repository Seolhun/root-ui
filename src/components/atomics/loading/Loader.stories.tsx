import React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';
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
    <StorybookContent>
      {storiesScaleOptions.map((scale) => (
        <Loader {...rests} key={scale} scale={scale}>
          {children}
        </Loader>
      ))}
    </StorybookContent>
  );
};

export const ScaleLoaderStories = ScaleLoader.bind({});
ScaleLoaderStories.args = {
  children: 'Loader',
};

const IntentLoaders = ({ children, ...rests }: LoaderProps) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <Loader {...rests} key={intent} intent={intent} />
      ))}
    </StorybookContent>
  );
};

export const IntentLoadersStories = IntentLoaders.bind({});
IntentLoadersStories.args = {
  children: 'Loader',
};
