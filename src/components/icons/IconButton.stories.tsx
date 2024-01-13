import { RocketLaunchIcon as OutlineRocketLaunchIcon } from '@heroicons/react/24/outline';
import { RocketLaunchIcon as SolidRocketLaunchIcon } from '@heroicons/react/24/solid';
import { StoryFn } from '@storybook/react';
import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '~/stories';

import { IconButton, IconButtonProps } from './IconButton';

export default {
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    intent: {
      control: {
        options: storiesIntentOptions,
        type: 'select',
      },
    },
    scale: {
      control: {
        options: storiesScaleOptions,
        type: 'select',
      },
    },
  },
  component: IconButton,
  title: 'Atomic/Icon',
};

const BaseTemplate = ({ children, ...others }: IconButtonProps) => {
  return <IconButton {...others}>{children}</IconButton>;
};

const IconsStories = ({ children, ...others }: IconButtonProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>
        <div className="flex flex-col items-center space-y-2">
          {storiesScaleOptions.map((scale) => (
            <BaseTemplate {...others} key={scale} scale={scale}>
              <OutlineRocketLaunchIcon />
            </BaseTemplate>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-2">
          {storiesScaleOptions.map((scale) => (
            <BaseTemplate {...others} key={scale} scale={scale}>
              <SolidRocketLaunchIcon />
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Light>
      <StorybookContent.Dark>
        <div className="flex flex-col items-center space-y-2">
          {storiesScaleOptions.map((scale) => (
            <BaseTemplate {...others} key={scale} scale={scale}>
              <OutlineRocketLaunchIcon />
            </BaseTemplate>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-2">
          {storiesScaleOptions.map((scale) => (
            <BaseTemplate {...others} key={scale} scale={scale}>
              <SolidRocketLaunchIcon />
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Icons: StoryFn<IconButtonProps> = IconsStories.bind({});
Icons.args = {};

const IntentIconsStories = ({ children, ...others }: IconButtonProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>
        <div className="flex flex-col items-center space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent} variant="outline">
              <OutlineRocketLaunchIcon />
            </BaseTemplate>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent}>
              <SolidRocketLaunchIcon />
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Light>
      <StorybookContent.Dark>
        <div className="flex flex-col items-center space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent} variant="outline">
              <OutlineRocketLaunchIcon />
            </BaseTemplate>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent}>
              <SolidRocketLaunchIcon />
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentIcons: StoryFn<IconButtonProps> = IntentIconsStories.bind({});
IntentIcons.args = {};
