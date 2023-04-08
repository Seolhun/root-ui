import { Story } from '@storybook/react';
import * as React from 'react';

import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '~/stories';

import { Switch, SwitchProps } from './Switch';

export default {
  title: 'Form/Switch',
  component: Switch,
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

const BaseTemplate = ({ children, checked, ...others }: SwitchProps) => {
  const [isChecked, setChecked] = React.useState(checked);

  React.useEffect(() => {
    setChecked(checked);
  }, [checked]);

  return (
    <Switch checked={isChecked} onChange={setChecked} {...others}>
      {children}
    </Switch>
  );
};

const SwitchTemplate: Story<SwitchProps> = ({ ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        <BaseTemplate {...others}></BaseTemplate>
        <BaseTemplate {...others} disabled></BaseTemplate>
        <BaseTemplate {...others}>
          <img src="https://avatars.githubusercontent.com/u/16330024?v=4" className="rounded-full" />
        </BaseTemplate>
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        <BaseTemplate {...others}></BaseTemplate>
        <BaseTemplate {...others} disabled></BaseTemplate>
        <BaseTemplate {...others}>
          <img src="https://avatars.githubusercontent.com/u/16330024?v=4" className="rounded-full" />
        </BaseTemplate>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Switches = SwitchTemplate.bind({});
Switches.args = {};

const ScaleSwitchTemplate: Story<SwitchProps> = ({ ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale}></BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale}></BaseTemplate>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const ScaleSwitch = ScaleSwitchTemplate.bind({});
ScaleSwitch.args = {
  disabled: false,
};

const IntentSwitchTemplate: Story<SwitchProps> = ({ ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent}></BaseTemplate>
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent}></BaseTemplate>
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const IntentSwitches = IntentSwitchTemplate.bind({});
IntentSwitches.args = {
  disabled: false,
  checked: true,
};
