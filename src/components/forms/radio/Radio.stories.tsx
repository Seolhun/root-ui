import * as React from 'react';

import { Radio, RadioProps } from './Radio';

import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '../../../stories';

export default {
  title: 'Form/Radio',
  component: Radio,
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

const BaseTemplate = ({ children, checked, ...others }: RadioProps) => {
  const [isChecked, setChecked] = React.useState(checked);

  React.useEffect(() => {
    setChecked(checked);
  }, [checked]);

  return (
    <Radio checked={isChecked} onChange={(e) => setChecked(e.target.checked)} {...others}>
      {children}
    </Radio>
  );
};

const RadioTemplate = ({ children, ...others }: RadioProps) => {
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

export const Radios = RadioTemplate.bind({});
Radios.args = {
  children: 'Radio',
};

const ScaleRadioTemplate = ({ children, ...others }: RadioProps) => {
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

export const ScaleRadios = ScaleRadioTemplate.bind({});
ScaleRadios.args = {
  children: 'Radio',
  disabled: false,
};

const IntentRadioTemplate = ({ children, ...others }: RadioProps) => {
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

export const IntentRadio = IntentRadioTemplate.bind({});
IntentRadio.args = {
  children: 'Radio',
  checked: true,
  disabled: false,
};
