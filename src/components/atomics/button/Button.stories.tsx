import React from 'react';

import { storiesScaleOptions, storiesIntentOptions } from '../../../stories';
import { H6 } from '../../typography';
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
    <div className="grid grid-cols-1">
      {storiesScaleOptions.map((scale) => (
        <div key={scale} className="col-span-1">
          <H6>{scale}</H6>
          <Button {...rests} scale={scale}>
            {children}
          </Button>
        </div>
      ))}
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
    <div className="grid grid-cols-3">
      {storiesIntentOptions.map((intent) => (
        <div key={intent} className="col-span-1">
          <H6>{intent}</H6>
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
