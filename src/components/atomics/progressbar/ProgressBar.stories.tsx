import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '~/stories';

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

const BaseTemplate = ({ children, ...others }: ProgressBarProps) => {
  return <ProgressBar {...others}>{children}</ProgressBar>;
};

const ScaleProgressBarStories = ({ children, ...others }: ProgressBarProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const ScaleProgressBar = ScaleProgressBarStories.bind({});
ScaleProgressBar.args = {
  children: 'ProgressBar',
  badge: '',
};

const IntentProgressBarsStories = ({ children, ...others }: ProgressBarProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent} />
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentProgressBars = IntentProgressBarsStories.bind({});
IntentProgressBars.args = {
  children: 'ProgressBar',
  badge: '',
};

const BadgeProgressBarsStories = ({ children, ...others }: ProgressBarProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent} />
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const BadgeProgressBars = BadgeProgressBarsStories.bind({});
BadgeProgressBars.args = {
  children: 'ProgressBar',
  badge: 'Badge',
};
