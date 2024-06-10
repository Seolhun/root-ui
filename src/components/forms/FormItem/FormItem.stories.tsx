import { Meta, StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { storiesScaleOptions, StorybookContent } from '../../../stories';
import { Input } from '../input';
import { FormItem } from './FormItem';
import { FormItemProps } from './FormItemRoot';

interface FormItemTemplateProps extends FormItemProps {
  help?: React.ReactNode;
  label?: React.ReactNode;
}

const FormItemsTemplate = ({ help, label, ...others }: FormItemTemplateProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col" noAlign>
        <FormItem {...others}>
          <FormItem.Label>{label}</FormItem.Label>
          <Input />
          <FormItem.Help>{help}</FormItem.Help>
        </FormItem>
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col" noAlign>
        <FormItem {...others}>
          <FormItem.Label>{label}</FormItem.Label>
          <Input />
          <FormItem.Help>{help}</FormItem.Help>
        </FormItem>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const FormItems: StoryObj<FormItemTemplateProps> = {
  args: {
    help: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    label: 'Name',
    scale: 'md',
  },
  render: (args) => <FormItemsTemplate {...args} />,
};

const ScaleFormItemTemplate = ({ help, label, scale, ...others }: FormItemTemplateProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col" noAlign>
        {storiesScaleOptions.map((scale) => (
          <FormItem {...others} key={scale} scale={scale}>
            <FormItem.Label>{label}</FormItem.Label>
            <Input />
            <FormItem.Help>{help}</FormItem.Help>
          </FormItem>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col" noAlign>
        {storiesScaleOptions.map((scale) => (
          <FormItem {...others} key={scale} scale={scale}>
            <FormItem.Label>{label}</FormItem.Label>
            <Input />
            <FormItem.Help>{help}</FormItem.Help>
          </FormItem>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const ScaleFormItem: StoryObj<FormItemTemplateProps> = {
  args: {
    help: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    label: 'Name',
    scale: 'md',
  },
  render: (args) => <ScaleFormItemTemplate {...args} />,
};

const meta: Meta<typeof FormItem> = {
  component: FormItem,
  title: 'Form/FormItem',
};

export default meta;
