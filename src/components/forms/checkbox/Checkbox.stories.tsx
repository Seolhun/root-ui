import React from 'react';

import { storiesScaleOptions, storiesIntentOptions, StorybookDescriptor } from '@/stories';
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    scale: {
      defaultValue: 'md',
      control: {
        type: 'select',
        options: storiesScaleOptions,
      },
    },
    intent: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
  },
};

const Checkboxs: React.FC<CheckboxProps> = ({ children, ...rests }) => {
  return (
    <section>
      <div>
        <Checkbox {...rests}>{children}</Checkbox>
      </div>
      <div>
        <Checkbox {...rests} checked>
          {children}
        </Checkbox>
      </div>
      <div>
        <Checkbox {...rests} disabled>
          {children}
        </Checkbox>
      </div>
      <div>
        <Checkbox {...rests} checked disabled>
          {children}
        </Checkbox>
      </div>
    </section>
  );
};

export const CheckboxsStories = Checkboxs.bind({});
CheckboxsStories.args = {
  children: 'Checkbox',
};

const ScaleCheckboxs: React.FC<CheckboxProps> = ({ children, ...rests }) => {
  return (
    <section>
      {storiesScaleOptions.map((scale) => (
        <StorybookDescriptor key={scale} title={scale}>
          <Checkbox {...rests} scale={scale}>
            {children}
          </Checkbox>
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const ScaleCheckboxsStories = ScaleCheckboxs.bind({});
ScaleCheckboxsStories.args = {
  children: 'Checkbox',
  disabled: false,
};

const IntentCheckboxs: React.FC<CheckboxProps> = ({ children, ...rests }) => {
  return (
    <section>
      {storiesIntentOptions.map((intent) => (
        <StorybookDescriptor key={intent} title={intent}>
          <Checkbox {...rests} intent={intent}>
            {children}
          </Checkbox>
        </StorybookDescriptor>
      ))}
    </section>
  );
};

export const IntentCheckboxsStories = IntentCheckboxs.bind({});
IntentCheckboxsStories.args = {
  children: 'Checkbox',
  checked: true,
  disabled: false,
};
