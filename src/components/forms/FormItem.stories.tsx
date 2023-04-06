import * as React from 'react';

import { FormItem, FormItemProps } from './FormItem';
import { Input } from './input';

import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '../../stories';

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
  label: 'Name',
  help: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
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
  label: 'Name',
  help: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};
