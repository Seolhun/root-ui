import React from 'react';

import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '../../../stories';
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

const Checkboxs: React.FC<CheckboxProps> = ({ children, ...rests }) => {
  return (
    <StorybookContent>
      <Checkbox {...rests}>{children}</Checkbox>
      <Checkbox {...rests} checked>
        {children}
      </Checkbox>
      <Checkbox {...rests} disabled>
        {children}
      </Checkbox>
      <Checkbox {...rests} checked disabled>
        {children}
      </Checkbox>
    </StorybookContent>
  );
};

export const CheckboxsStories = Checkboxs.bind({});
CheckboxsStories.args = {
  children: 'Checkbox',
};

const ScaleCheckboxs: React.FC<CheckboxProps> = ({ children, ...rests }) => {
  return (
    <StorybookContent>
      {storiesScaleOptions.map((scale) => (
        <Checkbox {...rests} key={scale} scale={scale}>
          {children}
        </Checkbox>
      ))}
    </StorybookContent>
  );
};

export const ScaleCheckboxsStories = ScaleCheckboxs.bind({});
ScaleCheckboxsStories.args = {
  children: 'Checkbox',
  disabled: false,
};

const IntentCheckboxs: React.FC<CheckboxProps> = ({ children, ...rests }) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <Checkbox {...rests} key={intent} intent={intent}>
          {children}
        </Checkbox>
      ))}
    </StorybookContent>
  );
};

export const IntentCheckboxsStories = IntentCheckboxs.bind({});
IntentCheckboxsStories.args = {
  children: 'Checkbox',
  checked: true,
  disabled: false,
};
