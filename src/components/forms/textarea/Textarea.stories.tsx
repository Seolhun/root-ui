import * as React from 'react';

import { Textarea, TextareaProps } from './Textarea';

import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '../../../stories';

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

const BaseTemplate = ({ children, ...others }: TextareaProps) => {
  return <Textarea {...others}>{children}</Textarea>;
};

const TextareaTemplate = ({ children, ...rests }: TextareaProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        <BaseTemplate {...rests} />
        <BaseTemplate {...rests} value={'is not empty'} />
        <BaseTemplate {...rests} disabled />
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        <BaseTemplate {...rests} />
        <BaseTemplate {...rests} value={'is not empty'} />
        <BaseTemplate {...rests} disabled />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Textareas = TextareaTemplate.bind({});
Textareas.args = {
  placeholder: 'placeholder',
};

const ScaleTextareaTemplate = ({ ...rests }: TextareaProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...rests} key={scale} scale={scale} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...rests} key={scale} scale={scale} />
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const ScaleTextareas = ScaleTextareaTemplate.bind({});
ScaleTextareas.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};

const IntentTextareaTemplate = ({ ...rests }: TextareaProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <Textarea {...rests} key={intent} intent={intent} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <Textarea {...rests} key={intent} intent={intent} />
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentTextareas = IntentTextareaTemplate.bind({});
IntentTextareas.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};
