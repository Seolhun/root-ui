import * as React from 'react';

import { storiesScaleOptions, StorybookContent } from '../../../stories';
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

const ScaleAvatar = ({ ...rests }: AvatarProps) => {
  return (
    <StorybookContent>
      {storiesScaleOptions.map((scale) => (
        <Avatar {...rests} key={scale} scale={scale} src="https://avatars.githubusercontent.com/u/16330024?v=4" />
      ))}
    </StorybookContent>
  );
};

export const ScaleAvatarStories = ScaleAvatar.bind({});
ScaleAvatarStories.args = {};
