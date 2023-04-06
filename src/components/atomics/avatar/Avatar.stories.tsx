import * as React from 'react';

import { Avatar, AvatarProps } from './Avatar';

import { storiesScaleOptions, StorybookContent } from '../../../stories';

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
      <StorybookContent.Light>
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark>
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale} />
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const ScaleAvatar = ScaleAvatarStories.bind({});
ScaleAvatar.args = {};
