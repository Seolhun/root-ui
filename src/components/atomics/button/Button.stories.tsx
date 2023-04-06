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

export const ScaleButtons = ScaleButtonsStories.bind({});
ScaleButtons.args = {
  children: 'Button',
  disabled: false,
};

const IntentButtonsStories = ({ children, ...others }: ButtonProps) => {
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

export const IntentButtons = IntentButtonsStories.bind({});
IntentButtons.args = {
  children: 'Button',
  disabled: false,
};

const IntentOutlinedButtonsStories = ({ children, ...others }: ButtonProps) => {
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

export const IntentOutlinedButtons = IntentOutlinedButtonsStories.bind({});
IntentOutlinedButtons.args = {
  children: 'Button',
  disabled: false,
};

const DisabledButtonsStories = ({ children, ...others }: ButtonProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light>
        <div className="flex flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} key={intent} intent={intent}>
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} key={intent} intent={intent} outlined>
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
      </StorybookContent.Light>
      <StorybookContent.Dark>
        <div className="flex flex-col space-y-2">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} key={intent} intent={intent}>
              {children}-{intent}
            </BaseTemplate>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
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

export const DisabledButtons = DisabledButtonsStories.bind({});
DisabledButtons.args = {
  children: 'Button',
  disabled: true,
};
