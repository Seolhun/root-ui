import * as React from 'react';

import { Radio, RadioProps } from './Radio';

import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '../../../stories';

export default {
  title: 'Form/Radio',
  component: Radio,
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

const Radios: React.FC<RadioProps> = ({ children, ...rests }) => {
  return (
    <StorybookContent>
      <Radio {...rests}>{children}</Radio>
      <Radio {...rests} checked>
        {children}
      </Radio>
      <Radio {...rests} disabled>
        {children}
      </Radio>
      <Radio {...rests} checked disabled>
        {children}
      </Radio>
    </StorybookContent>
  );
};

export const RadiosStories = Radios.bind({});
RadiosStories.args = {
  children: 'Radio',
};

const ScaleRadios: React.FC<RadioProps> = ({ children, ...rests }) => {
  return (
    <StorybookContent>
      {storiesScaleOptions.map((scale) => (
        <Radio {...rests} key={scale} scale={scale}>
          {children}
        </Radio>
      ))}
    </StorybookContent>
  );
};

export const ScaleRadiosStories = ScaleRadios.bind({});
ScaleRadiosStories.args = {
  children: 'Radio',
  disabled: false,
};

const IntentRadios: React.FC<RadioProps> = ({ children, ...rests }) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <Radio {...rests} key={intent} intent={intent}>
          {children}
        </Radio>
      ))}
    </StorybookContent>
  );
};

export const IntentRadiosStories = IntentRadios.bind({});
IntentRadiosStories.args = {
  children: 'Radio',
  checked: true,
  disabled: false,
};
