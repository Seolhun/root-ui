import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';
import { Loader, LoaderProps } from './Loader';

export default {
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
    scale: {
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
  },
  component: Loader,
  title: 'Atomic/Loader',
};

const BaseTemplate = ({ children, ...others }: LoaderProps) => {
  return <Loader {...others}>{children}</Loader>;
};

const ScaleLoaderStories = ({ ...others }: LoaderProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale} />
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const ScaleLoader = ScaleLoaderStories.bind({});
ScaleLoader.args = {};

const IntentLoadersStories = ({ children, ...others }: LoaderProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} intent={intent} key={intent} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} intent={intent} key={intent} />
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentLoaders = IntentLoadersStories.bind({});
IntentLoaders.args = {};
