import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
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

const BaseTemplate = ({ checked, children, ...others }: CheckboxProps) => {
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

export const IntentCheckbox = IntentCheckboxTemplate.bind({});
IntentCheckbox.args = {
  checked: true,
  children: 'Checkbox',
  disabled: false,
};
