import { StoryObj } from '@storybook/react';
import { Meta } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';

import { DynamicVirtualScroll, DynamicVirtualScrollProps } from './DynamicVirtualScroll';
import { VirtualScrollRendererArgs } from './VirtualScroll.types';

const meta: Meta<typeof DynamicVirtualScroll> = {
  component: DynamicVirtualScroll,
  parameters: {},
  title: 'VirtualScroll/DynamicVirtualScroll',
};

const RowChildren = ({ item }: VirtualScrollRendererArgs<HTMLDivElement>) => {
  const longText = Array.from({ length: item.index }, (_, i) => i).join(' ');
  return (
    <Row>
      {item.index} = {longText}
    </Row>
  );
};

export const Vertical: StoryObj<DynamicVirtualScrollProps> = {
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
  const longText = Array.from({ length: item.index }, (_, i) => i).join(' ');
  return (
    <Column>
      {item.index} = {longText}
    </Column>
  );
};

export const Horizontal: StoryObj<DynamicVirtualScrollProps> = {
  args: {
    children: ColumnChildren,
    virtualOptions: {
      count: 1000,
      horizontal: true,
      overscan: 5,
    },
    windowSize: {
      height: '200px',
      width: '100%',
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
