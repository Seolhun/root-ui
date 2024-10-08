import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';
import { ProgressBar, ProgressBarProps } from './ProgressBar';

export default {
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
    scale: {
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
  },
  component: ProgressBar,
  title: 'Atomic/ProgressBar',
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
          <BaseTemplate {...others} intent={intent} key={intent} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} intent={intent} key={intent} />
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
          <BaseTemplate {...others} intent={intent} key={intent} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} intent={intent} key={intent} />
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
