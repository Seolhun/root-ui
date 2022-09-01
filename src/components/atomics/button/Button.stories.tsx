import React from 'react';

import { storiesScaleOptions, storiesIntentOptions, StorybookDescriptor } from '@/stories';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Atomic/Button',
  component: Button,
  argTypes: {
    scale: {
      defaultValue: 'md',
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
    intent: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
  },
};

const ScaleButtons: React.FC<ButtonProps> = ({ children, ...rests }) => {
  return (
    <section>
      {storiesScaleOptions.map((scale) => (
        <StorybookDescriptor key={scale} title={scale}>
          <Button {...rests} scale={scale}>
            {children}
          </Button>
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const ScaleButtonsStories = ScaleButtons.bind({});
ScaleButtonsStories.args = {
  children: 'Button',
  disabled: false,
};

const IntentButtons: React.FC<ButtonProps> = ({ children, ...rests }) => {
  return (
    <section>
      {storiesIntentOptions.map((intent) => (
        <StorybookDescriptor key={intent} title={intent}>
          <Button {...rests} intent={intent}>
            {children}
          </Button>
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const IntentButtonsStories = IntentButtons.bind({});
IntentButtonsStories.args = {
  children: 'Button',
  disabled: false,
};
