import { StoryObj } from '@storybook/react';
import { Meta } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import { FixedVirtualScroll, FixedVirtualScrollProps } from './FixedVirtualScroll';
import { VirtualScrollRendererArgs } from './VirtualScroll.types';

const meta: Meta<typeof FixedVirtualScroll> = {
  component: FixedVirtualScroll,
  parameters: {},
  title: 'VirtualScroll/FixedVirtualScroll',
};

const RowChildren = ({ item }: VirtualScrollRendererArgs<HTMLDivElement>) => {
  return <Row>{item.index}</Row>;
};

export const Vertical: StoryObj<FixedVirtualScrollProps> = {
  args: {
    children: RowChildren,
    virtualOptions: {
      count: 1000,
      overscan: 5,
    },
    windowSize: '600px',
  },
};

const ColumnChildren = ({ item }: VirtualScrollRendererArgs<HTMLDivElement>) => {
  return <Column>{item.index}</Column>;
};

export const Horizontal: StoryObj<FixedVirtualScrollProps> = {
  args: {
    children: ColumnChildren,
    virtualOptions: {
      count: 1000,
      horizontal: true,
      overscan: 5,
    },
    windowSize: {
      height: '50px',
      width: '600px',
    },
  },
};

const Row = styled.div`
  width: 100%;
`;

const Column = styled.div`
  width: 300px;
  height: 100%;
`;

export default meta;
