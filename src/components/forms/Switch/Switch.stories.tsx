import * as React from 'react';

import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '../../../stories';
import { Avatar } from '../../atomics';
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

const Switchs: React.FC<SwitchProps> = ({ ...rests }) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <StorybookContent>
      <Switch checked={checked} onChange={setChecked} {...rests}></Switch>
      <Switch checked={checked} onChange={setChecked} {...rests} disabled></Switch>
      <Switch checked={checked} onChange={setChecked} {...rests}>
        <Avatar src="https://avatars.githubusercontent.com/u/16330024?v=4" />
      </Switch>
    </StorybookContent>
  );
};

export const SwitchsStories = Switchs.bind({});
SwitchsStories.args = {};

const ScaleSwitchs = ({ ...rests }: SwitchProps) => {
  return (
    <StorybookContent>
      {storiesScaleOptions.map((scale) => (
        <Switch {...rests} key={scale} scale={scale}></Switch>
      ))}
    </StorybookContent>
  );
};

export const ScaleSwitchsStories = ScaleSwitchs.bind({});
ScaleSwitchsStories.args = {
  disabled: false,
};

const IntentSwitchs = ({ ...rests }: SwitchProps) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <Switch {...rests} key={intent} intent={intent}></Switch>
      ))}
    </StorybookContent>
  );
};

export const IntentSwitchsStories = IntentSwitchs.bind({});
IntentSwitchsStories.args = {
  checked: true,
  disabled: false,
};
