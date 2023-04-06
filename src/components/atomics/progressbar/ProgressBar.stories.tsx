import * as React from 'react';

import { ProgressBar, ProgressBarProps } from './ProgressBar';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';

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

const BaseTemplate = ({ children, ...others }: ProgressBarProps) => {
  return <ProgressBar {...others}>{children}</ProgressBar>;
};

const ScaleProgressBar = ({ children, ...rests }: ProgressBarProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...rests} key={scale} scale={scale}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...rests} key={scale} scale={scale}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Dark>
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
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...rests} key={intent} intent={intent} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...rests} key={intent} intent={intent} />
        ))}
      </StorybookContent.Dark>
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
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...rests} key={intent} intent={intent} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...rests} key={intent} intent={intent} />
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const BadgeProgressBarsStories = BadgeProgressBars.bind({});
BadgeProgressBarsStories.args = {
  children: 'ProgressBar',
  badge: 'Badge',
};
