import { Meta, StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';
import { Checkbox, CheckboxProps } from './Checkbox';

const BaseTemplate = ({ checked, children, ...others }: CheckboxProps) => {
  const [isChecked, setChecked] = React.useState(checked);

  React.useEffect(() => {
    setChecked(checked);
  }, [checked]);

  return (
    <Checkbox checked={isChecked} onChange={setChecked} {...others}>
      {children}
    </Checkbox>
  );
};

const CheckboxTemplate = ({ children, ...others }: CheckboxProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        <BaseTemplate {...others}>{children}</BaseTemplate>
        <BaseTemplate {...others} checked>
          {children}
        </BaseTemplate>
        <BaseTemplate {...others} disabled>
          {children}
        </BaseTemplate>
        <BaseTemplate {...others} checked disabled>
          {children}
        </BaseTemplate>
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        <BaseTemplate {...others}>{children}</BaseTemplate>
        <BaseTemplate {...others} checked>
          {children}
        </BaseTemplate>
        <BaseTemplate {...others} disabled>
          {children}
        </BaseTemplate>
        <BaseTemplate {...others} checked disabled>
          {children}
        </BaseTemplate>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Checkboxs: StoryObj<CheckboxProps> = {
  args: {
    children: 'Checkbox',
  },
  render: CheckboxTemplate,
};

const ScaleCheckboxTemplate = ({ children, ...others }: CheckboxProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const ScaleCheckbox: StoryObj<CheckboxProps> = {
  args: {
    children: 'Checkbox',
    disabled: false,
  },
  render: ScaleCheckboxTemplate,
};

const IntentCheckboxTemplate = ({ children, ...others }: CheckboxProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} intent={intent} key={intent}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} intent={intent} key={intent}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentCheckbox: StoryObj<CheckboxProps> = {
  args: {
    checked: true,
    children: 'Checkbox',
    disabled: false,
  },
  render: IntentCheckboxTemplate,
};

const meta: Meta<typeof Checkbox> = {
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
  component: Checkbox,
  title: 'Form/Checkbox',
};

export default meta;
