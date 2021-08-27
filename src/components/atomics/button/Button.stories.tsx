import React from 'react';

import { storiesScaleOptions, storiesIntentOptions } from '@/stories';
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
    <div className="gird gird-col-3">
      <div className="col-span-1">
        <h2>xl</h2>
        <Button {...rests} scale="xl">
          {children}
        </Button>
      </div>
      <div className="col-span-1">
        <h2>lg</h2>
        <Button {...rests} scale="lg">
          {children}
        </Button>
      </div>
      <div className="col-span-1">
        <h2>md</h2>
        <Button {...rests} scale="md">
          {children}
        </Button>
      </div>
      <div className="col-span-1">
        <h2>sm</h2>
        <Button {...rests} scale="sm">
          {children}
        </Button>
      </div>
      <div className="col-span-1">
        <h2>xs</h2>
        <Button {...rests} scale="xs">
          {children}
        </Button>
      </div>
    </div>
  );
};

export const ScaleButtonsStories = ScaleButtons.bind({});
ScaleButtonsStories.args = {
  children: 'Button',
  disabled: false,
};

const IntentButtons: React.FC<ButtonProps> = ({ children, ...rests }) => {
  return (
    <div className="gird gird-col-3">
      {storiesIntentOptions.map((intent) => (
        <div key={intent} className="col-span-1">
          <h2>{intent}</h2>
          <Button {...rests} intent={intent}>
            {children}
          </Button>
        </div>
      ))}
    </div>
  );
};

export const IntentButtonsStories = IntentButtons.bind({});
IntentButtonsStories.args = {
  children: 'Button',
  disabled: false,
};
