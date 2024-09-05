import { intentMap, scaleMap } from '@seolhun/root-ui-tailwind';
import { StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';
import { Button, ButtonProps } from './Button';

export default {
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: intentMap,
      },
    },
    scale: {
      control: {
        type: 'select',
        options: scaleMap,
      },
    },
  },
  component: Button,
  title: 'Atomic/Button',
};

const BaseTemplate = ({ children, ...others }: ButtonProps) => {
  return <Button {...others}>{children}</Button>;
};

const ScaleButtonsStories = ({ children, ...others }: ButtonProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale}>
            {children}-{scale}
          </BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale}>
            {children}-{scale}
          </BaseTemplate>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const ScaleButtons: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    disabled: false,
  },
  render: ScaleButtonsStories,
};

const IntentButtonsStories = ({ children, ...others }: ButtonProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} intent={intent} key={intent}>
            {children}-{intent}
          </BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} intent={intent} key={intent}>
            {children}-{intent}
          </BaseTemplate>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentButtons: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    disabled: false,
  },
  render: IntentButtonsStories,
};

const IntentOutlinedButtonsStories = ({ children, ...others }: ButtonProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} intent={intent} key={intent} variant="outlined">
            {children}-{intent}
          </BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} intent={intent} key={intent} variant="outlined">
            {children}-{intent}
          </BaseTemplate>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentOutlinedButtons: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    disabled: false,
  },
  render: IntentOutlinedButtonsStories,
};

const DisabledButtonsStories = ({ children, ...others }: ButtonProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>
        <div className="flex flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent}>
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent} variant="outlined">
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Light>
      <StorybookContent.Dark>
        <div className="flex flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent}>
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent} variant="outlined">
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const DisabledButtons: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    disabled: false,
  },
  render: DisabledButtonsStories,
};
