import * as React from 'react';

import { Button, ButtonProps } from './Button';

import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '../../../stories';

export default {
  title: 'Atomic/Button',
  component: Button,
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

const BaseTemplate = ({ children, ...others }: ButtonProps) => {
  return <Button {...others}>{children}</Button>;
};

const ScaleButtons = ({ children, ...others }: ButtonProps) => {
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

export const ScaleButtonsStories = ScaleButtons.bind({});
ScaleButtonsStories.args = {
  children: 'Button',
  disabled: false,
};

const IntentButtons = ({ children, ...others }: ButtonProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent}>
            {children}-{intent}
          </BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent}>
            {children}-{intent}
          </BaseTemplate>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentButtonsStories = IntentButtons.bind({});
IntentButtonsStories.args = {
  children: 'Button',
  disabled: false,
};

const IntentOutlinedButtons = ({ children, ...others }: ButtonProps) => {
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

export const IntentOutlinedButtonsStories = IntentOutlinedButtons.bind({});
IntentOutlinedButtonsStories.args = {
  children: 'Button',
  disabled: false,
};

const DisabledButtons = ({ children, ...others }: ButtonProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>
        <div className="flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} key={intent} intent={intent}>
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
        <div className="flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} key={intent} intent={intent} outlined>
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Light>
      <StorybookContent.Dark>
        <div className="flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} key={intent} intent={intent}>
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
        <div className="flex-col space-y-2">
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

export const DisabledButtonsStories = DisabledButtons.bind({});
DisabledButtonsStories.args = {
  children: 'Button',
  disabled: true,
};
