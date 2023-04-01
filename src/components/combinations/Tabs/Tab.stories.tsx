import * as React from 'react';

import { Tabs } from './Tabs';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '../../../stories';

export default {
  title: 'Combination/Tabs',
  component: Tabs,
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
    onClick: {
      action: 'clicked',
    },
  },
};

// ----------------------------------------------------------------
const TabTemplate = ({ onClick, ...args }) => {
  return (
    <StorybookContent noAlign noGap>
      <Tabs {...args}>
        <Tabs.List>
          <Tabs.Tab onClick={onClick}>Show 1</Tabs.Tab>
          <Tabs.Tab onClick={onClick}>Show 2</Tabs.Tab>
          <Tabs.Tab onClick={onClick}>Show 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.PanelList>
          <Tabs.Panel>First Item</Tabs.Panel>
          <Tabs.Panel>Second Item</Tabs.Panel>
          <Tabs.Panel>Third Item</Tabs.Panel>
        </Tabs.PanelList>
      </Tabs>
    </StorybookContent>
  );
};
export const DefaultTab = TabTemplate.bind({});

// ----------------------------------------------------------------
const ScaleTabTemplate = ({ onClick, ...args }) => {
  return (
    <StorybookContent>
      {storiesScaleOptions.map((scale) => (
        <Tabs {...args} key={scale} scale={scale}>
          <Tabs.List>
            <Tabs.Tab onClick={onClick}>Show 1</Tabs.Tab>
            <Tabs.Tab onClick={onClick}>Show 2</Tabs.Tab>
            <Tabs.Tab onClick={onClick}>Show 3</Tabs.Tab>
          </Tabs.List>

          <Tabs.PanelList>
            <Tabs.Panel>First Item</Tabs.Panel>
            <Tabs.Panel>Second Item</Tabs.Panel>
            <Tabs.Panel>Third Item</Tabs.Panel>
          </Tabs.PanelList>
        </Tabs>
      ))}
    </StorybookContent>
  );
};
export const ScaleTab = ScaleTabTemplate.bind({});

// ----------------------------------------------------------------
const IntentTabTemplate = ({ onClick, ...args }) => {
  return (
    <StorybookContent>
      {storiesIntentOptions.map((intent) => (
        <Tabs {...args} key={intent} intent={intent}>
          <Tabs.List>
            <Tabs.Tab onClick={onClick}>Show 1</Tabs.Tab>
            <Tabs.Tab onClick={onClick}>Show 2</Tabs.Tab>
            <Tabs.Tab onClick={onClick}>Show 3</Tabs.Tab>
          </Tabs.List>

          <Tabs.PanelList>
            <Tabs.Panel>First Item</Tabs.Panel>
            <Tabs.Panel>Second Item</Tabs.Panel>
            <Tabs.Panel>Third Item</Tabs.Panel>
          </Tabs.PanelList>
        </Tabs>
      ))}
    </StorybookContent>
  );
};
export const IntentTab = IntentTabTemplate.bind({});
