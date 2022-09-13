import React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookDescriptor } from '../../stories';
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

const Icons = ({ ...rests }: IconProps) => {
  return (
    <section>
      <Icon {...rests} />
    </section>
  );
};

export const IconStories = Icons.bind({});
IconStories.args = {
  icon: 'AcademicCapIcon',
};

const IntentIcons = ({ children, ...rests }: IconProps) => {
  return (
    <section>
      {storiesIntentOptions.map((intent) => (
        <StorybookDescriptor key={intent} title={intent}>
          <Icon {...rests} />
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const IntentIconsStories = IntentIcons.bind({});
IntentIconsStories.args = {
  children: 'Button',
  icon: 'AcademicCapIcon',
};
