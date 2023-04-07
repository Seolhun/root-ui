import { Story } from '@storybook/react';
import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '~/stories';

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
    color: {
      control: {
        type: 'color',
      },
    },
  },
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

export const Icons: Story<IconProps> = IconsStories.bind({});
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
            <BaseTemplate {...others} key={scale} scale={scale} outlined>
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
            <BaseTemplate {...others} key={scale} scale={scale} outlined>
              {children}-{scale}
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const InheritIcons: Story<IconProps> = InheritIconsStories.bind({});
InheritIcons.args = {
  icon: 'RocketLaunchIcon',
  color: 'blue',
};

const IntentIconsStories = ({ children, ...others }: IconProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>
        <div className="flex flex-col items-center space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} key={intent} intent={intent}>
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} key={intent} intent={intent} outlined>
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Light>
      <StorybookContent.Dark>
        <div className="flex flex-col items-center space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} key={intent} intent={intent}>
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} key={intent} intent={intent} outlined>
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentIcons: Story<IconProps> = IntentIconsStories.bind({});
IntentIcons.args = {
  children: 'Icon',
  icon: 'RocketLaunchIcon',
};
