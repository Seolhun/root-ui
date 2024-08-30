import { StoryObj } from '@storybook/react';
import * as React from 'react';

import { storiesIntentOptions, StorybookContent } from '../../../stories';
import { Callout, CalloutProps } from './Callout';

export default {
  argTypes: {
    scale: {
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
  },
  component: Callout,
  title: 'Atomic/Callout',
};

const BaseTemplate = ({ ...others }: CalloutProps) => {
  return <Callout {...others} />;
};

export const ScaleCallout: StoryObj<CalloutProps> = {
  args: {
    children: 'lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  render: ({ ...others }) => {
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
  },
};
