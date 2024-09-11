import { StoryObj } from '@storybook/react';
import { Meta } from '@storybook/react';
import * as React from 'react';

import { VirtualScrollRendererArgs } from './VirtualScroll.types';
import { WindowDynamicVirtualScroll, WindowDynamicVirtualScrollProps } from './WindowDynamicVirtualScroll';

const meta: Meta<typeof WindowDynamicVirtualScroll> = {
  component: WindowDynamicVirtualScroll,
  parameters: {},
  title: 'VirtualScroll/WindowDynamicVirtualScroll',
};

function children({ item }: VirtualScrollRendererArgs<Window, HTMLDivElement>) {
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
}

export const Primary: StoryObj<WindowDynamicVirtualScrollProps> = {
  args: {
    children,
    virtualOptions: {
      count: 1000,
      overscan: 5,
    },
  },
  render: (args) => {
    return (
      <div>
        <div>
          <h1>WindowDynamicVirtualScroll</h1>
          <p>This component is a virtual scroll component that uses the window as the scroll element.</p>
          <p>
            {
              "This component is useful when you want to render a large list of items and you don't want to render all of them at once."
            }
          </p>
          <p>
            {
              "This component is useful when you want to render a large list of items and you don't want to render all of them at once."
            }
          </p>
          <p>
            {
              "This component is useful when you want to render a large list of items and you don't want to render all of them at once."
            }
          </p>
          <p>
            {
              "This component is useful when you want to render a large list of items and you don't want to render all of them at once."
            }
          </p>
        </div>
        <WindowDynamicVirtualScroll {...args} />
      </div>
    );
  },
};

export default meta;
