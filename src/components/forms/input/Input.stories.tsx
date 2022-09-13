import React from 'react';

import { storiesScaleOptions, storiesIntentOptions, StorybookDescriptor } from '../../../stories';
import { Input, InputProps } from './Input';

export default {
  title: 'Form/Input',
  component: Input,
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
};

const Inputs = ({ children, ...rests }: InputProps) => {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <Input {...rests} />
      </div>
      <div>
        <Input {...rests} value={'is not empty'} />
      </div>
      <div>
        <Input {...rests} disabled />
      </div>
    </section>
  );
};

export const InputsStories = Inputs.bind({});
InputsStories.args = {
  placeholder: 'placeholder',
};

const ScaleInputs = ({ ...rests }: InputProps) => {
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

const IntentInputs = ({ ...rests }: InputProps) => {
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
