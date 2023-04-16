import { Story } from '@storybook/react';
import * as React from 'react';

import { FormHelp, FormItem, FormLabel, H6, Input } from '~/components';
import { storiesScaleOptions, storiesIntentOptions, StorybookContent } from '~/stories';

import { RootUIContextValues, RootUIProvider, RootUIProviderProps } from './RootUI.Context';
import { RootUIGroupContextValues, RootUIGroupProvider } from './RootUIGroup.Context';

export default {
  title: 'System/RootUI',
  component: RootUIGroupProvider,
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

const GroupContextTemplate = ({ ...others }: RootUIGroupContextValues) => {
  return (
    <RootUIGroupProvider {...others}>
      <div className="space-y-4">
        <H6>Each props</H6>
        <div>
          <FormLabel scale="sm">FormLabel - sm</FormLabel>
          <Input scale="lg" placeholder="Input - lg" />
          <FormHelp scale="xs">FormHelp - xs</FormHelp>
        </div>

        <div>
          <H6>Group Context</H6>
          <div>
            <FormLabel>FormLabel</FormLabel>
            <Input />
            <FormHelp>FormHelp</FormHelp>
          </div>
        </div>
      </div>
    </RootUIGroupProvider>
  );
};

const _GroupContext = ({ children, ...others }: RootUIProviderProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col" noAlign noGap>
        <GroupContextTemplate {...others}></GroupContextTemplate>
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col" noAlign noGap>
        <GroupContextTemplate {...others}></GroupContextTemplate>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const GroupContext: Story<RootUIProviderProps> = _GroupContext.bind({});
GroupContext.args = {};

const GlobalContextTemplate = ({ ...others }: RootUIContextValues) => {
  return (
    <RootUIProvider {...others}>
      <div className="space-y-4">
        <div>
          <H6>Group Context</H6>
          <div>
            <FormItem label="FormLabel" help="FormHelp">
              <Input />
            </FormItem>
          </div>
        </div>

        <div>
          <H6>Global Context</H6>
          <div>
            <FormLabel>FormLabel</FormLabel>
            <Input />
            <FormHelp>FormHelp</FormHelp>
          </div>
        </div>
      </div>
    </RootUIProvider>
  );
};

const _GlobalContext = ({ children, ...others }: RootUIProviderProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col" noAlign noGap>
        <GlobalContextTemplate {...others} />
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col" noAlign noGap>
        <GlobalContextTemplate {...others} />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const GlobalContext: Story<RootUIProviderProps> = _GlobalContext.bind({});
GlobalContext.args = {};
