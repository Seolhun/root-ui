import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../stories';
import { toIntentMatch } from '../../system';
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

export const IconsStories = Icons.bind({});
IconsStories.args = {
  icon: 'AcademicCapIcon',
};

const InheritIcons = ({ children, ...rests }: IconProps) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <div
          key={intent}
          className={toIntentMatch({
            default: () => 'text-default',
            neutral: () => 'text-neutral',
            light: () => 'text-light',
            dark: () => 'text-dark',
            primary: () => 'text-primary',
            info: () => 'text-info',
            success: () => 'text-success',
            warning: () => 'text-warning',
            danger: () => 'text-danger',
          })(intent)}
        >
          <Icon {...rests}>{children}</Icon>
        </div>
      ))}
    </StorybookContent>
  );
};

export const InheritIconsStories = InheritIcons.bind({});
InheritIconsStories.args = {
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
