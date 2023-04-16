import { StoryFn } from '@storybook/react';
import * as React from 'react';

import { storiesScaleOptions, StorybookContent } from '~/stories';

import { Avatar, AvatarProps } from './Avatar';

export default {
  title: 'Atomic/Avatar',
  component: Avatar,
  argTypes: {
    scale: {
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
  },
};

const BaseTemplate = ({ ...others }: AvatarProps) => {
  return <Avatar {...others} src="https://avatars.githubusercontent.com/u/16330024?v=4" />;
};

const ScaleAvatarStories = ({ ...others }: AvatarProps) => {
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

export const ScaleAvatar: StoryFn<AvatarProps> = ScaleAvatarStories.bind({});
ScaleAvatar.args = {};
