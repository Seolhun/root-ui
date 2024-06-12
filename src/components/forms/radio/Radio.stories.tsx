import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';
import { Radio, RadioProps } from './Radio';

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
  component: Radio,
  title: 'Form/Radio',
};

const BaseTemplate = ({ checked, children, ...others }: RadioProps) => {
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

export const IntentRadio = IntentRadioTemplate.bind({});
IntentRadio.args = {
  checked: true,
  children: 'Radio',
  disabled: false,
};
