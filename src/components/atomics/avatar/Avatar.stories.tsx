import { StoryObj } from '@storybook/react';
import * as React from 'react';

import { storiesScaleOptions, StorybookContent } from '../../../stories';

import { Avatar, AvatarProps } from './Avatar';

export default {
  argTypes: {
    scale: {
      control: {
        options: storiesScaleOptions,
        type: 'select',
      },
    },
  },
  component: Avatar,
  title: 'Atomic/Avatar',
};

const BaseTemplate = ({ ...others }: AvatarProps) => {
  return <Avatar {...others} src="https://avatars.githubusercontent.com/u/16330024?v=4" />;
};

export const ScaleAvatar: StoryObj<AvatarProps> = {
  args: {},
  render: ({ ...others }) => {
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
  },
};
