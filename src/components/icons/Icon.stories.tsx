import { StoryFn } from '@storybook/react';
import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '~/stories';

import { Icon, IconProps } from './Icon';

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
  component: Icon,
  title: 'Atomic/Icon',
};

const BaseTemplate = ({ children, ...others }: IconProps) => {
  return <Icon {...others}>{children}</Icon>;
};

const IconsStories = ({ children, ...others }: IconProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col text-white">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Icons: StoryFn<IconProps> = IconsStories.bind({});
Icons.args = {
  icon: 'RocketLaunchIcon',
};

const InheritIconsStories = ({ children, color, ...others }: IconProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>
        <div className="flex flex-col items-center space-y-2" style={{ color }}>
          {storiesScaleOptions.map((scale) => (
            <BaseTemplate {...others} key={scale} scale={scale}>
              {children}-{scale}
            </BaseTemplate>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-2" style={{ color }}>
          {storiesScaleOptions.map((scale) => (
            <BaseTemplate {...others} key={scale} outlined scale={scale}>
              {children}-{scale}
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Light>
      <StorybookContent.Dark>
        <div className="flex flex-col items-center space-y-2" style={{ color }}>
          {storiesScaleOptions.map((scale) => (
            <BaseTemplate {...others} key={scale} scale={scale}>
              {children}-{scale}
            </BaseTemplate>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-2" style={{ color }}>
          {storiesScaleOptions.map((scale) => (
            <BaseTemplate {...others} key={scale} outlined scale={scale}>
              {children}-{scale}
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const InheritIcons: StoryFn<IconProps> = InheritIconsStories.bind({});
InheritIcons.args = {
  color: 'blue',
  icon: 'RocketLaunchIcon',
};

const IntentIconsStories = ({ children, ...others }: IconProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>
        <div className="flex flex-col items-center space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent}>
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent} outlined>
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Light>
      <StorybookContent.Dark>
        <div className="flex flex-col items-center space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent}>
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent} outlined>
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentIcons: StoryFn<IconProps> = IntentIconsStories.bind({});
IntentIcons.args = {
  children: 'Icon',
  icon: 'RocketLaunchIcon',
};
