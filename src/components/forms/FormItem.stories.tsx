import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '~/stories';

import { FormItem, FormItemProps } from './FormItem';
import { Input } from './input';

export default {
  component: FormItem,
  intent: {
    control: {
      options: storiesIntentOptions,
      type: 'select',
    },
  },
  scale: {
    control: {
      options: storiesScaleOptions,
      type: 'select',
    },
  },
  title: 'Form/FormItem',
};

const FormItemsTemplate = ({ children, ...others }: FormItemProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col" noAlign>
        <FormItem {...others}>
          <Input />
        </FormItem>
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col" noAlign>
        <FormItem {...others}>
          <Input />
        </FormItem>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const FormItems = FormItemsTemplate.bind({});
FormItems.args = {
  help: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  label: 'Name',
};

const ScaleFormItemTemplate = ({ ...others }: FormItemProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col" noAlign>
        {storiesScaleOptions.map((scale) => (
          <FormItem {...others} key={scale} scale={scale}>
            <Input />
          </FormItem>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col" noAlign>
        {storiesScaleOptions.map((scale) => (
          <FormItem {...others} key={scale} scale={scale}>
            <Input />
          </FormItem>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const ScaleFormItems = ScaleFormItemTemplate.bind({});
ScaleFormItems.args = {
  help: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  label: 'Name',
};
