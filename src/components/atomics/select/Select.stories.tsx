import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '~/stories';

import { Select, SelectProps } from './Select';

export default {
  component: Select,
  intent: {
    control: {
      options: storiesIntentOptions,
      type: 'select',
    },
  },
  scale: {
    control: {
      options: storiesScaleOptions,
      type: 'select',
    },
  },
  title: 'Form/Select',
};

const BaseTemplate = ({ children, ...others }: SelectProps) => {
  const [value, setValue] = React.useState(others.value);
  return (
    <Select onChange={(e) => setValue(e.target.value)} value={value} {...others}>
      {[10, 20, 30, 40, 50].map((num) => (
        <option key={num} value={num}>
          Show {num}
        </option>
      ))}
    </Select>
  );
};

const SelectsStories = ({ children, ...others }: SelectProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        <BaseTemplate {...others}>{children}</BaseTemplate>
        <BaseTemplate {...others} disabled>
          {children}
        </BaseTemplate>
      </StorybookContent.Light>

      <StorybookContent.Dark className="flex-col">
        <BaseTemplate {...others}>{children}</BaseTemplate>
        <BaseTemplate {...others} disabled>
          {children}
        </BaseTemplate>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Selects = SelectsStories.bind({});
Selects.args = {
  placeholder: 'placeholder',
};

const ScaleSelectsStories = ({ children, ...others }: SelectProps) => {
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

export const ScaleSelects = ScaleSelectsStories.bind({});
ScaleSelects.args = {
  disabled: false,
};

const IntentSelectsStories = ({ children, ...others }: SelectProps) => {
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

export const IntentSelects = IntentSelectsStories.bind({});
IntentSelects.args = {
  disabled: false,
};
