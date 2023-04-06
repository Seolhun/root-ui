import * as React from 'react';

import { Icon, IconProps } from './Icon';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../stories';

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

const Icons = ({ children, ...others }: IconProps) => {
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

export const IconsStories = Icons.bind({});
IconsStories.args = {
  icon: 'RocketLaunchIcon',
};

const InheritIcons = ({ children, color, ...others }: IconProps) => {
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

export const InheritIconsStories = InheritIcons.bind({});
InheritIconsStories.args = {
  icon: 'RocketLaunchIcon',
  color: 'blue',
};

const IntentIcons = ({ children, ...others }: IconProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent} outlined>
            {children}-{intent}
          </BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent} outlined>
            {children}-{intent}
          </BaseTemplate>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentIconsStories = IntentIcons.bind({});
IntentIconsStories.args = {
  children: 'Icon',
  icon: 'RocketLaunchIcon',
};

const OutlinedIconsStories = ({ children, ...others }: IconProps) => {
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

export const OutlinedIcons = OutlinedIconsStories.bind({});
OutlinedIcons.args = {
  children: 'Icon',
  icon: 'RocketLaunchIcon',
};
