import { useVirtualizer, Virtualizer } from '@tanstack/react-virtual';
import * as React from 'react';

import { useMergeRefs } from '~/hooks';

import {
  VirtualImperativeHandler,
  VirtualOptions,
  VirtualScrollRenderer,
  VirtualWindowSize,
} from './VirtualScroll.types';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DynamicVirtualScrollProps {
  children: VirtualScrollRenderer<ElementType>;
  virtualOptions: VirtualOptions<ElementType>;
  /**
   * Scroll container size
   */
  windowSize: VirtualWindowSize;
}

const DEFAULT_OPTIONS: Required<Pick<VirtualOptions<ElementType>, 'estimateSize' | 'overscan'>> = {
  estimateSize: () => 30,
  overscan: 5,
};

export type DynamicVirtualScrollImperativeHandler = VirtualImperativeHandler;

export const DynamicVirtualScroll = React.forwardRef<
  DynamicVirtualScrollImperativeHandler,
  Omit<ElementProps, 'children'> & DynamicVirtualScrollProps
>(({ children, virtualOptions, windowSize, ...others }, ref) => {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const mergedParentRef = useMergeRefs(parentRef, ref);

  const virtualizer = useVirtualizer({
    ...DEFAULT_OPTIONS,
    ...virtualOptions,
    getScrollElement: () => parentRef.current,
  });

  React.useImperativeHandle<DynamicVirtualScrollImperativeHandler, DynamicVirtualScrollImperativeHandler>(ref, () => {
    return {
      calculateRange: virtualizer.calculateRange,
      scrollToIndex: virtualizer.scrollToIndex,
      scrollToOffset: virtualizer.scrollToOffset,
    };
  });

  const windowHeight = typeof windowSize !== 'object' ? windowSize : windowSize.height;
  const windowWidth = typeof windowSize !== 'object' ? windowSize : windowSize.width;

  const { horizontal } = virtualizer.options;
  return (
    <div
      {...others}
      style={{
        height: windowHeight,
        overflow: 'auto',
        width: windowWidth,
      }}
      ref={mergedParentRef}
    >
      {horizontal ? (
        <DynamicColumnVirtualScroll virtualizer={virtualizer}>{children}</DynamicColumnVirtualScroll>
      ) : (
        <DynamicRowVirtualScroll virtualizer={virtualizer}>{children}</DynamicRowVirtualScroll>
      )}
    </div>
  );
});

interface DynamicRowVirtualScrollProps {
  children: VirtualScrollRenderer<ElementType>;
  virtualizer: Virtualizer<HTMLDivElement, HTMLElement>;
}

const DynamicRowVirtualScroll = ({ children, virtualizer }: DynamicRowVirtualScrollProps) => {
  const items = virtualizer.getVirtualItems();
  return (
    <div
      style={{
        height: `${virtualizer.getTotalSize()}px`,
        position: 'relative',
        width: '100%',
      }}
    >
      <div
        style={{
          left: 0,
          position: 'absolute',
          top: 0,
          transform: `translate3d(0, ${items[0]?.start ?? 0}px, 0)`,
          width: '100%',
        }}
      >
        {items.map((item) => (
          <div data-index={item.index} key={item.key} ref={virtualizer.measureElement}>
            {children({ item, virtualizer })}
          </div>
        ))}
      </div>
    </div>
  );
};

interface DynamicColumnVirtualScrollProps {
  children: VirtualScrollRenderer<ElementType>;
  virtualizer: Virtualizer<HTMLDivElement, HTMLElement>;
}

const DynamicColumnVirtualScroll = ({ children, virtualizer }: DynamicColumnVirtualScrollProps) => {
  const items = virtualizer.getVirtualItems();
  return (
    <div
      style={{
        height: '100%',
        position: 'relative',
        width: `${virtualizer.getTotalSize()}px`,
      }}
    >
      {items.map((item) => (
        <div
          style={{
            height: '100%',
            left: 0,
            position: 'absolute',
            top: 0,
            transform: `translateX(${item.start}px)`,
          }}
          data-index={item.index}
          key={item.key}
          ref={virtualizer.measureElement}
        >
          {children({ item, virtualizer })}
        </div>
      ))}
    </div>
  );
};
