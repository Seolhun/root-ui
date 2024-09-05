import { Meta, StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '~/stories';

import { FormItem } from '../form-item';
import { Radio, RadioGroupProps, RadioInputProps } from './Radio';

const RadioTemplate = () => {
  const [selected, setSelected] = React.useState('1');

  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        <Radio aria-label="test" onChange={setSelected} value={selected}>
          <FormItem className={'flex space-x-4'}>
            <Radio.Input value="1" />
            <FormItem.Label>1</FormItem.Label>
          </FormItem>
          <FormItem className={'flex space-x-4'}>
            <Radio.Input value="2" />
            <FormItem.Label>2</FormItem.Label>
          </FormItem>
          <FormItem className={'flex space-x-4'}>
            <Radio.Input value="3" />
            <FormItem.Label>3</FormItem.Label>
          </FormItem>
          <FormItem className={'flex space-x-4'}>
            <Radio.Input disabled value="4" />
            <FormItem.Label>4 Disabled</FormItem.Label>
          </FormItem>
        </Radio>
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        <Radio>
          <FormItem className={'flex space-x-4'}>
            <FormItem.Label>2</FormItem.Label>
            <Radio.Input value="1" />
          </FormItem>
          <FormItem className={'flex space-x-4'}>
            <FormItem.Label>2</FormItem.Label>
            <Radio.Input value="2" />
          </FormItem>
        </Radio>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Radios: StoryObj<RadioInputProps> = {
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
    scale: {
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
  },
  render: RadioTemplate,
};

const ScaleRadioTemplate = ({ ...args }) => {
  const [selected, setSelected] = React.useState('1');

  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col space-y-4">
        {storiesScaleOptions.map((scale) => (
          <Radio {...args} aria-label="test" key={scale} onChange={setSelected} value={selected}>
            <FormItem className={'flex space-x-4'}>
              <Radio.Input scale={scale} value="1" />
              <FormItem.Label>1 - {scale}</FormItem.Label>
            </FormItem>

            <FormItem className={'flex space-x-4'}>
              <Radio.Input scale={scale} value="2" />
              <FormItem.Label>2 - {scale}</FormItem.Label>
            </FormItem>

            <FormItem className={'flex space-x-4'}>
              <Radio.Input disabled scale={scale} value="3" />
              <FormItem.Label>3 Disabled - {scale}</FormItem.Label>
            </FormItem>
          </Radio>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col space-y-4">
        {storiesScaleOptions.map((scale) => (
          <Radio {...args} aria-label="test" key={scale} onChange={setSelected} value={selected}>
            <FormItem className={'flex space-x-4'}>
              <Radio.Input scale={scale} value="1" />
              <FormItem.Label>1 - {scale}</FormItem.Label>
            </FormItem>

            <FormItem className={'flex space-x-4'}>
              <Radio.Input scale={scale} value="2" />
              <FormItem.Label>2 - {scale}</FormItem.Label>
            </FormItem>

            <FormItem className={'flex space-x-4'}>
              <Radio.Input disabled scale={scale} value="3" />
              <FormItem.Label>3 Disabled - {scale}</FormItem.Label>
            </FormItem>
          </Radio>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const ScaleRadios: StoryObj<RadioInputProps> = {
  args: {
    disabled: false,
  },
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
    scale: {
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
  },
  render: ScaleRadioTemplate,
};

const IntentRadioTemplate = ({ ...args }) => {
  const [selected, setSelected] = React.useState('1');

  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <Radio {...args} aria-label="test" key={intent} onChange={setSelected} value={selected}>
            <FormItem className={'flex space-x-4'}>
              <Radio.Input intent={intent} value="1" />
              <FormItem.Label>1 - {intent}</FormItem.Label>
            </FormItem>
            <FormItem className={'flex space-x-4'}>
              <Radio.Input intent={intent} value="2" />
              <FormItem.Label>2 - {intent}</FormItem.Label>
            </FormItem>

            <FormItem className={'flex space-x-4'}>
              <Radio.Input disabled intent={intent} value="3" />
              <FormItem.Label>3 Disabled - {intent}</FormItem.Label>
            </FormItem>
          </Radio>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <Radio {...args} aria-label="test" key={intent} onChange={setSelected} value={selected}>
            <FormItem className={'flex space-x-4'}>
              <Radio.Input intent={intent} value="1" />
              <FormItem.Label>1 - {intent}</FormItem.Label>
            </FormItem>
            <FormItem className={'flex space-x-4'}>
              <Radio.Input intent={intent} value="2" />
              <FormItem.Label>2 - {intent}</FormItem.Label>
            </FormItem>

            <FormItem className={'flex space-x-4'}>
              <Radio.Input disabled intent={intent} value="3" />
              <FormItem.Label>3 Disabled - {intent}</FormItem.Label>
            </FormItem>
          </Radio>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentRadios: StoryObj<RadioInputProps> = {
  args: {
    disabled: false,
  },
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
    scale: {
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
  },
  render: IntentRadioTemplate,
};

const meta: Meta<RadioGroupProps> = {
  component: Radio,
  title: 'Form/Radio',
};

export default meta;
