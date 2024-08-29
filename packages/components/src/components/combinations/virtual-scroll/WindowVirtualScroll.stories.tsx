import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import * as React from 'react';

import { VirtualScrollRendererArgs } from './VirtualScroll.types';
import { WindowVirtualScroll, WindowVirtualScrollProps } from './WindowVirtualScroll';

const children = ({ item }: VirtualScrollRendererArgs<Window, HTMLDivElement>) => {
  const text = `Item ${item.key}`;
  return (
    <div
      style={{
        border: '1px solid black',
        height: '100%',
      }}
    >
      {text}
    </div>
  );
};

const WindowVirtualScrollTemplate = (args: WindowVirtualScrollProps) => {
  return (
    <div>
      <div
        style={{
          height: '300px',
        }}
      >
        Hello
      </div>
      <WindowVirtualScroll {...args}>{children}</WindowVirtualScroll>
    </div>
  );
};

export const Primary: StoryObj<WindowVirtualScrollProps> = {
  args: {
    children,
    height: 600,
    virtualOptions: {
      count: 1000,
      overscan: 5,
    },
  },
};

const meta: Meta<typeof WindowVirtualScroll> = {
  component: WindowVirtualScrollTemplate,
  title: 'Combination/WindowVirtualScroll',
};

export default meta;
