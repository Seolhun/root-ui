import React from 'react';

import { storiesScaleOptions, storiesIntentOptions, StorybookDescriptor } from '../../../stories';
import { Radio, RadioProps } from './Radio';

export default {
  title: 'Form/Radio',
  component: Radio,
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

const Radios: React.FC<RadioProps> = ({ children, ...rests }) => {
  return (
    <section>
      <div>
        <Radio {...rests}>{children}</Radio>
      </div>
      <div>
        <Radio {...rests} checked>
          {children}
        </Radio>
      </div>
      <div>
        <Radio {...rests} disabled>
          {children}
        </Radio>
      </div>
      <div>
        <Radio {...rests} checked disabled>
          {children}
        </Radio>
      </div>
    </section>
  );
};

export const RadiosStories = Radios.bind({});
RadiosStories.args = {
  children: 'Radio',
};

const ScaleRadios: React.FC<RadioProps> = ({ children, ...rests }) => {
  return (
    <section>
      {storiesScaleOptions.map((scale) => (
        <StorybookDescriptor key={scale} title={scale}>
          <Radio {...rests} scale={scale}>
            {children}
          </Radio>
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const ScaleRadiosStories = ScaleRadios.bind({});
ScaleRadiosStories.args = {
  children: 'Radio',
  disabled: false,
};

const IntentRadios: React.FC<RadioProps> = ({ children, ...rests }) => {
  return (
    <section>
      {storiesIntentOptions.map((intent) => (
        <StorybookDescriptor key={intent} title={intent}>
          <Radio {...rests} intent={intent}>
            {children}
          </Radio>
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const IntentRadiosStories = IntentRadios.bind({});
IntentRadiosStories.args = {
  children: 'Radio',
  disabled: false,
  checked: true,
};
