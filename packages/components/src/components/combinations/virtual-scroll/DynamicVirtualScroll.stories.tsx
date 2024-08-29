import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import * as React from 'react';

import { DynamicVirtualScroll, DynamicVirtualScrollProps } from './DynamicVirtualScroll';
import { VirtualScrollRendererArgs } from './VirtualScroll.types';

const children = ({ item }: VirtualScrollRendererArgs<HTMLDivElement>) => {
  const longText = Array.from({ length: item.index }, (_, i) => i).join(' ');
  return (
    <div
      style={{
        border: '1px solid black',
      }}
    >
      {item.index} = {longText}
    </div>
  );
};

export const Primary: StoryObj<DynamicVirtualScrollProps> = {
  args: {
    children,
    height: 600,
    virtualOptions: {
      count: 1000,
      overscan: 5,
    },
  },
};

const meta: Meta<typeof DynamicVirtualScroll> = {
  component: DynamicVirtualScroll,
  title: 'Combination/DynamicVirtualScroll',
};

export default meta;
