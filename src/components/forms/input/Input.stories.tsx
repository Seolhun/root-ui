import React from 'react';

import { storiesScaleOptions, storiesIntentOptions, StorybookDescriptor } from '../../../stories';
import { Input, InputProps } from './Input';

export default {
  title: 'Form/Input',
  component: Input,
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
};

const ScaleInputs: React.FC<InputProps> = ({ ...rests }) => {
  return (
    <section>
      {storiesScaleOptions.map((scale) => (
        <StorybookDescriptor key={scale} title={scale}>
          <Input {...rests} scale={scale} />
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const ScaleInputsStories = ScaleInputs.bind({});
ScaleInputsStories.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};

const IntentInputs: React.FC<InputProps> = ({ ...rests }) => {
  return (
    <section>
      {storiesIntentOptions.map((intent) => (
        <StorybookDescriptor key={intent} title={intent}>
          <Input {...rests} intent={intent} />
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const IntentInputsStories = IntentInputs.bind({});
IntentInputsStories.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};
