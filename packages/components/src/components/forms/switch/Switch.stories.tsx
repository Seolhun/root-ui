import { StoryObj } from '@storybook/react';
import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';
import { Switch, SwitchProps } from './Switch';

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
  component: Switch,
  title: 'Form/Switch',
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

export const Switches: StoryObj<SwitchProps> = {
  render: ({ ...others }) => {
    return (
      <StorybookContent>
        <StorybookContent.Light className="flex-col">
          <BaseTemplate {...others}></BaseTemplate>
          <BaseTemplate {...others} disabled></BaseTemplate>
          <BaseTemplate {...others}>
            <img className="rounded-full" src="https://avatars.githubusercontent.com/u/16330024?v=4" />
          </BaseTemplate>
        </StorybookContent.Light>
        <StorybookContent.Dark className="flex-col">
          <BaseTemplate {...others}></BaseTemplate>
          <BaseTemplate {...others} disabled></BaseTemplate>
          <BaseTemplate {...others}>
            <img className="rounded-full" src="https://avatars.githubusercontent.com/u/16330024?v=4" />
          </BaseTemplate>
        </StorybookContent.Dark>
      </StorybookContent>
    );
  },
};

export const ScaleSwitch: StoryObj<SwitchProps> = {
  args: {
    disabled: false,
  },
  render: ({ ...others }) => {
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
  },
};

export const IntentSwitches: StoryObj<SwitchProps> = {
  args: {
    checked: true,
    disabled: false,
  },
  render: ({ ...others }) => {
    return (
      <StorybookContent>
        <StorybookContent.Light className="flex-col">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent}></BaseTemplate>
          ))}
        </StorybookContent.Light>
        <StorybookContent.Dark className="flex-col">
          {storiesIntentOptions.map((intent) => (
            <BaseTemplate {...others} intent={intent} key={intent}></BaseTemplate>
          ))}
        </StorybookContent.Dark>
      </StorybookContent>
    );
  },
};
