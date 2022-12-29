import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../stories';
import { Icon, IconProps } from './Icon';

export default {
  title: 'Atomic/Icon',
  component: Icon,
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

const Icons = ({ children, ...rests }: IconProps) => {
  return (
    <StorybookContent>
      {storiesScaleOptions.map((scale) => (
        <Icon {...rests} key={scale} scale={scale}>
          {children}
        </Icon>
      ))}
    </StorybookContent>
  );
};

export const IconStories = Icons.bind({});
IconStories.args = {
  icon: 'AcademicCapIcon',
};

const IntentIcons = ({ children, ...rests }: IconProps) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <Icon {...rests} key={intent} intent={intent} />
      ))}
    </StorybookContent>
  );
};

export const IntentIconsStories = IntentIcons.bind({});
IntentIconsStories.args = {
  children: 'Icon',
  icon: 'AcademicCapIcon',
};
