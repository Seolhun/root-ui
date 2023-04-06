import * as React from 'react';

import { Loader, LoaderProps } from './Loader';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';

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

const BaseTemplate = ({ children, ...others }: LoaderProps) => {
  return <Loader {...others}>{children}</Loader>;
};

const ScaleLoaderStories = ({ ...rests }: LoaderProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...rests} key={scale} scale={scale} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark>
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...rests} key={scale} scale={scale} />
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const ScaleLoader = ScaleLoaderStories.bind({});
ScaleLoader.args = {};

const IntentLoadersStories = ({ children, ...rests }: LoaderProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...rests} key={intent} intent={intent} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark>
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...rests} key={intent} intent={intent} />
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentLoaders = IntentLoadersStories.bind({});
IntentLoaders.args = {};
