import * as React from 'react';

import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '~/stories';

import { TabGroupProps } from './Tab.Group';
import { Tabs } from './Tabs';

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

const BaseTemplate = ({ onClick, ...others }: TabGroupProps) => {
  return (
    <Tabs {...others}>
      <Tabs.List>
        <Tabs.Tab onClick={onClick as any}>Show 1</Tabs.Tab>
        <Tabs.Tab onClick={onClick as any}>Show 2</Tabs.Tab>
        <Tabs.Tab onClick={onClick as any}>Show 3</Tabs.Tab>
      </Tabs.List>

      <Tabs.PanelList>
        <Tabs.Panel>First Item</Tabs.Panel>
        <Tabs.Panel>Second Item</Tabs.Panel>
        <Tabs.Panel>Third Item</Tabs.Panel>
      </Tabs.PanelList>
    </Tabs>
  );
};

const TabTemplate = ({ onClick, ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex flex-col" noAlign noGap>
        <BaseTemplate {...others} />
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex flex-col" noAlign noGap>
        <BaseTemplate {...others} />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};
export const DefaultTab = TabTemplate.bind({});

const ScaleTabTemplate = ({ onClick, ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex flex-col" noAlign noGap>
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex flex-col" noAlign noGap>
        {storiesScaleOptions.map((scale) => (
          <BaseTemplate {...others} key={scale} scale={scale} />
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};
export const ScaleTab = ScaleTabTemplate.bind({});

const IntentTabTemplate = ({ onClick, ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex flex-col" noAlign noGap>
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent} />
        ))}
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex flex-col" noAlign noGap>
        {storiesIntentOptions.map((intent) => (
          <BaseTemplate {...others} key={intent} intent={intent} />
        ))}
      </StorybookContent.Dark>
    </StorybookContent>
  );
};
export const IntentTab = IntentTabTemplate.bind({});
