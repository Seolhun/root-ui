import * as React from 'react';
import { StorybookContent } from '../../../stories';

import { Tabs } from './Tabs';

export default {
  title: 'Combination/Tabs',
  component: Tabs,
  argTypes: { onClick: { action: 'clicked' } },
};

// ----------------------------------------------------------------
const TabTemplate = ({ onClick }) => {
  return (
    <StorybookContent noAlign noGap>
      <Tabs>
        <Tabs.List>
          <Tabs.Tab onClick={onClick}>Show 1</Tabs.Tab>
          <Tabs.Tab onClick={onClick}>Show 2</Tabs.Tab>
          <Tabs.Tab onClick={onClick}>Show 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.PanelList>
          <Tabs.Panel>
            <p>First Item</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Second Item</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Third Item</p>
          </Tabs.Panel>
        </Tabs.PanelList>
      </Tabs>
    </StorybookContent>
  );
};
export const DefaultTab = TabTemplate.bind({});

// ----------------------------------------------------------------
const ScaleTabTemplate = ({ onClick }) => {
  return (
    <StorybookContent>
      <Tabs>
        <Tabs.List>
          <Tabs.Tab onClick={onClick}>Show 1</Tabs.Tab>
          <Tabs.Tab onClick={onClick}>Show 2</Tabs.Tab>
          <Tabs.Tab onClick={onClick}>Show 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.PanelList>
          <Tabs.Panel>
            <p>First Item</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Second Item</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Third Item</p>
          </Tabs.Panel>
        </Tabs.PanelList>
      </Tabs>
    </StorybookContent>
  );
};
export const ScaleTab = ScaleTabTemplate.bind({});

// ----------------------------------------------------------------
const IntentTabTemplate = ({ onClick }) => {
  return (
    <StorybookContent>
      <Tabs>
        <Tabs.List className="flex gap-2">
          <Tabs.Tab onClick={onClick}>Show 1</Tabs.Tab>
          <Tabs.Tab onClick={onClick}>Show 2</Tabs.Tab>
          <Tabs.Tab onClick={onClick}>Show 3</Tabs.Tab>
        </Tabs.List>

        <Tabs.PanelList>
          <Tabs.Panel>
            <p>First Item</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Second Item</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Third Item</p>
          </Tabs.Panel>
        </Tabs.PanelList>
      </Tabs>
    </StorybookContent>
  );
};
export const IntentTab = IntentTabTemplate.bind({});
