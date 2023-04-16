import { StoryFn } from '@storybook/react';
import * as React from 'react';

import { Button, FormHelp, FormItem, FormLabel, H6, Input, Select } from '~/components';
import { storiesIntentOptions, storiesScaleOptions, StorybookContent } from '~/stories';

import { RootIntent, RootScale } from './RootTheme.types';
import { RootUIProvider, RootUIProviderProps } from './RootUI.Context';
import { RootUIGroupProvider } from './RootUIGroup.Context';

export default {
  title: 'System/RootUI',
};

const GroupContextTemplate = () => {
  const [localScale, setLocalScale] = React.useState<RootScale>('md');
  const [groupScale, setGroupScale] = React.useState<RootScale>('md');
  const [globalScale, setGlobalScale] = React.useState<RootScale>('md');
  const [localIntent, setLocalIntent] = React.useState<RootIntent>('primary');
  const [groupIntent, setGroupIntent] = React.useState<RootIntent>('primary');
  const [globalIntent, setGlobalIntent] = React.useState<RootIntent>('primary');

  return (
    <div className="flex flex-col space-y-12">
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-4">
          <FormItem label="1. Local scale">
            <Select className="px-4" onChange={(e) => setLocalScale(e.target.value as RootScale)} value={localScale}>
              {storiesScaleOptions.map((scale) => (
                <option key={scale} value={scale}>
                  {scale}
                </option>
              ))}
            </Select>
          </FormItem>
          <FormItem label="2. Group scale">
            <Select className="px-4" onChange={(e) => setGroupScale(e.target.value as RootScale)} value={groupScale}>
              {storiesScaleOptions.map((scale) => (
                <option key={scale} value={scale}>
                  {scale}
                </option>
              ))}
            </Select>
          </FormItem>
          <FormItem label="3. Global scale">
            <Select className="px-4" onChange={(e) => setGlobalScale(e.target.value as RootScale)} value={globalScale}>
              {storiesScaleOptions.map((scale) => (
                <option key={scale} value={scale}>
                  {scale}
                </option>
              ))}
            </Select>
          </FormItem>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <FormItem label="1. Local intent">
              <Select
                className="px-4"
                onChange={(e) => setLocalIntent(e.target.value as RootIntent)}
                value={localIntent}
              >
                {storiesIntentOptions.map((intent) => (
                  <option key={intent} value={intent}>
                    {intent}
                  </option>
                ))}
              </Select>
            </FormItem>
            <FormItem label="2. Group intent">
              <Select
                className="px-4"
                onChange={(e) => setGroupIntent(e.target.value as RootIntent)}
                value={groupIntent}
              >
                {storiesIntentOptions.map((intent) => (
                  <option key={intent} value={intent}>
                    {intent}
                  </option>
                ))}
              </Select>
            </FormItem>
            <FormItem label="3. Global intent">
              <Select
                className="px-4"
                onChange={(e) => setGlobalIntent(e.target.value as RootIntent)}
                value={globalIntent}
              >
                {storiesIntentOptions.map((intent) => (
                  <option key={intent} value={intent}>
                    {intent}
                  </option>
                ))}
              </Select>
            </FormItem>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <RootUIProvider intent={globalIntent} scale={globalScale}>
          <RootUIGroupProvider intent={groupIntent} scale={groupScale}>
            <div>
              <H6>Each props</H6>
              <div>
                <FormLabel scale={localScale}>FormLabel</FormLabel>
                <Input intent={localIntent} scale={localScale} placeholder="Input" />
                <FormHelp scale={localScale}>FormHelp</FormHelp>
                <Button intent={localIntent} scale={localScale}>
                  Button
                </Button>
              </div>
            </div>

            <div>
              <H6>Group Context</H6>
              <div>
                <FormLabel scale={localScale}>FormLabel</FormLabel>
                <Input intent={localIntent} scale={localScale} placeholder="Input" />
                <FormHelp scale={localScale}>FormHelp</FormHelp>
                <Button intent={localIntent} scale={localScale}>
                  Button
                </Button>
              </div>
            </div>
          </RootUIGroupProvider>
        </RootUIProvider>
      </div>
    </div>
  );
};

const _RootUIContext = () => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col" noAlign noGap>
        <GroupContextTemplate></GroupContextTemplate>
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col" noAlign noGap>
        <GroupContextTemplate></GroupContextTemplate>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const RootUIContext: StoryFn<RootUIProviderProps> = _RootUIContext.bind({});
RootUIContext.args = {};
