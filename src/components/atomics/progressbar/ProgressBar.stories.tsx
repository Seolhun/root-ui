import React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';
import { ProgressBar, ProgressBarProps } from './ProgressBar';

export default {
  title: 'Atomic/ProgressBar',
  component: ProgressBar,
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

const ScaleProgressBar = ({ children, ...rests }: ProgressBarProps) => {
  return (
    <StorybookContent>
      {storiesScaleOptions.map((scale) => (
        <ProgressBar {...rests} key={scale} scale={scale}>
          {children}
        </ProgressBar>
      ))}
    </StorybookContent>
  );
};

export const ScaleProgressBarStories = ScaleProgressBar.bind({});
ScaleProgressBarStories.args = {
  children: 'ProgressBar',
  badge: '',
};

const IntentProgressBars = ({ children, ...rests }: ProgressBarProps) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <ProgressBar {...rests} key={intent} intent={intent} />
      ))}
    </StorybookContent>
  );
};

export const IntentProgressBarsStories = IntentProgressBars.bind({});
IntentProgressBarsStories.args = {
  children: 'ProgressBar',
  badge: '',
};

const BadgeProgressBars = ({ children, ...rests }: ProgressBarProps) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <ProgressBar {...rests} key={intent} intent={intent} />
      ))}
    </StorybookContent>
  );
};

export const BadgeProgressBarsStories = BadgeProgressBars.bind({});
BadgeProgressBarsStories.args = {
  children: 'ProgressBar',
  badge: 'Badge',
};
