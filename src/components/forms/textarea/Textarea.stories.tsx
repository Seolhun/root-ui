import React from 'react';

import { storiesScaleOptions, storiesIntentOptions, StorybookDescriptor } from '../../../stories';
import { Textarea, TextareaProps } from './Textarea';

export default {
  title: 'Form/Textarea',
  component: Textarea,
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

const Textareas = ({ children, ...rests }: TextareaProps) => {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <Textarea {...rests} />
      </div>
      <div>
        <Textarea {...rests} value={'is not empty'} />
      </div>
      <div>
        <Textarea {...rests} disabled />
      </div>
    </section>
  );
};

export const TextareasStories = Textareas.bind({});
TextareasStories.args = {
  placeholder: 'placeholder',
};

const ScaleTextareas: React.FC<TextareaProps> = ({ ...rests }) => {
  return (
    <section>
      {storiesScaleOptions.map((scale) => (
        <StorybookDescriptor key={scale} title={scale}>
          <Textarea {...rests} scale={scale} />
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const ScaleTextareasStories = ScaleTextareas.bind({});
ScaleTextareasStories.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};

const IntentTextareas: React.FC<TextareaProps> = ({ ...rests }) => {
  return (
    <section>
      {storiesIntentOptions.map((intent) => (
        <StorybookDescriptor key={intent} title={intent}>
          <Textarea {...rests} intent={intent} />
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const IntentTextareasStories = IntentTextareas.bind({});
IntentTextareasStories.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};
