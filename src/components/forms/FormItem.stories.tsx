import React from 'react';

import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '../../stories';
import { FormItem, FormItemProps } from './FormItem';
import { Input } from './input';

export default {
  title: 'Form/FormItem',
  component: FormItem,
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

const FormItemsTemplate = ({ children, ...rests }: FormItemProps) => {
  return (
    <StorybookContent noAlign>
      <FormItem {...rests}>
        <Input />
      </FormItem>
    </StorybookContent>
  );
};

export const FormItems = FormItemsTemplate.bind({});
FormItems.args = {
  label: 'Name',
  help: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};

const ScaleFormItemTemplate = ({ ...rests }: FormItemProps) => {
  return (
    <StorybookContent noAlign>
      {storiesScaleOptions.map((scale) => (
        <FormItem {...rests} key={scale} scale={scale}>
          <Input />
        </FormItem>
      ))}
    </StorybookContent>
  );
};

export const ScaleFormItems = ScaleFormItemTemplate.bind({});
ScaleFormItems.args = {
  label: 'Name',
  help: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};

const IntentFormItemTemplate = ({ ...rests }: FormItemProps) => {
  return (
    <StorybookContent noAlign>
      {storiesIntentOptions.map((intent) => (
        <FormItem {...rests} key={intent} intent={intent}>
          <Input />
        </FormItem>
      ))}
    </StorybookContent>
  );
};

export const IntentFormItems = IntentFormItemTemplate.bind({});
IntentFormItems.args = {
  label: 'Name',
  help: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};
