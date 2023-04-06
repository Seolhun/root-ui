import * as React from 'react';

import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '~/stories';

import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
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
  },
};

const BaseTemplate = ({ children, checked, ...others }: CheckboxProps) => {
  const [isChecked, setChecked] = React.useState(checked);

  React.useEffect(() => {
    setChecked(checked);
  }, [checked]);

  return (
    <Checkbox checked={isChecked} onChange={(e) => setChecked(e.target.checked)} {...others}>
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

export const Checkboxs = CheckboxTemplate.bind({});
Checkboxs.args = {
  children: 'Checkbox',
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

export const ScaleCheckboxs = ScaleCheckboxTemplate.bind({});
ScaleCheckboxs.args = {
  children: 'Checkbox',
  disabled: false,
};

const IntentCheckboxTemplate = ({ children, ...others }: CheckboxProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent}>
            {children}
          </BaseTemplate>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentCheckbox = IntentCheckboxTemplate.bind({});
IntentCheckbox.args = {
  children: 'Checkbox',
  checked: true,
  disabled: false,
};
