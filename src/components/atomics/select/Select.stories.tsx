import * as React from 'react';

import { Select, SelectProps } from './Select';

import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '../../../stories';

export default {
  title: 'Form/Select',
  component: Select,
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
};

const Selects = ({ children, ...rests }: SelectProps) => {
  return (
    <StorybookContent>
      <Select {...rests}>
        {[10, 20, 30, 40, 50].map((num) => (
          <option key={num} value={num}>
            Show {num}
          </option>
        ))}
      </Select>
      <Select {...rests} value={'is not empty'}>
        {[10, 20, 30, 40, 50].map((num) => (
          <option key={num} value={num}>
            Show {num}
          </option>
        ))}
      </Select>
      <Select {...rests} disabled>
        {[10, 20, 30, 40, 50].map((num) => (
          <option key={num} value={num}>
            Show {num}
          </option>
        ))}
      </Select>
    </StorybookContent>
  );
};

export const SelectsStories = Selects.bind({});
SelectsStories.args = {
  placeholder: 'placeholder',
};

const ScaleSelects = ({ ...rests }: SelectProps) => {
  return (
    <StorybookContent>
      {storiesScaleOptions.map((scale) => (
        <Select {...rests} key={scale} scale={scale}>
          {[10, 20, 30, 40, 50].map((num) => (
            <option key={num} value={num}>
              Show {num}
            </option>
          ))}
        </Select>
      ))}
    </StorybookContent>
  );
};

export const ScaleSelectsStories = ScaleSelects.bind({});
ScaleSelectsStories.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};

const IntentSelects = ({ ...rests }: SelectProps) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <Select {...rests} key={intent} intent={intent}>
          {[10, 20, 30, 40, 50].map((num) => (
            <option key={num} value={num}>
              Show {num}
            </option>
          ))}
        </Select>
      ))}
    </StorybookContent>
  );
};

export const IntentSelectsStories = IntentSelects.bind({});
IntentSelectsStories.args = {
  value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  disabled: false,
};
