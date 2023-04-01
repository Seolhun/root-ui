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

const ScaleButtons = ({ children, ...rests }: ButtonProps) => {
  return (
    <StorybookContent>
      {storiesScaleOptions.map((scale) => (
        <Button {...rests} key={scale} scale={scale}>
          {children}
        </Button>
      ))}
    </StorybookContent>
  );
};

export const ScaleButtonsStories = ScaleButtons.bind({});
ScaleButtonsStories.args = {
  children: 'Button',
  disabled: false,
};

const IntentButtons = ({ children, ...rests }: ButtonProps) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <Button {...rests} key={intent} intent={intent}>
          {children}-{intent}
        </Button>
      ))}
    </StorybookContent>
  );
};

export const IntentButtonsStories = IntentButtons.bind({});
IntentButtonsStories.args = {
  children: 'Button',
  disabled: false,
};

const IntentOutlinedButtons = ({ children, ...rests }: ButtonProps) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <Button {...rests} key={intent} intent={intent} outlined>
          {children}-{intent}
        </Button>
      ))}
    </StorybookContent>
  );
};

export const IntentOutlinedButtonsStories = IntentOutlinedButtons.bind({});
IntentOutlinedButtonsStories.args = {
  children: 'Button',
  disabled: false,
};

const DisabledButtons = ({ children, ...rests }: ButtonProps) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <Button {...rests} key={intent} intent={intent}>
          {children}-{intent}
        </Button>
      ))}
      {storiesIntentOptions.map((intent) => (
        <Button {...rests} key={intent} intent={intent} outlined>
          {children}-{intent}
        </Button>
      ))}
    </StorybookContent>
  );
};

export const DisabledButtonsStories = DisabledButtons.bind({});
DisabledButtonsStories.args = {
  children: 'Button',
  disabled: true,
};
