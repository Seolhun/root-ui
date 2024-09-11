import { useVirtualizer } from '@tanstack/react-virtual';
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

export interface FixedVirtualScrollProps {
  children: VirtualScrollRenderer<ElementType>;
  virtualOptions: VirtualOptions<ElementType>;
  windowSize: VirtualWindowSize;
}

const DEFAULT_OPTIONS: Required<Pick<VirtualOptions<ElementType>, 'estimateSize' | 'overscan'>> = {
  estimateSize: () => 30,
  overscan: 5,
};

export type FixedVirtualScrollImperativeHandler = VirtualImperativeHandler;

export const FixedVirtualScroll = React.forwardRef<
  FixedVirtualScrollImperativeHandler,
  Omit<ElementProps, 'children'> & FixedVirtualScrollProps
>(({ children, virtualOptions, windowSize, ...others }, ref) => {
  const parentRef = React.useRef(null);
  const mergedParentRef = useMergeRefs(parentRef, ref);

  const virtualizer = useVirtualizer({
    ...DEFAULT_OPTIONS,
    ...virtualOptions,
    getScrollElement: () => parentRef.current,
  });

  React.useImperativeHandle<FixedVirtualScrollImperativeHandler, FixedVirtualScrollImperativeHandler>(ref, () => {
    return {
      calculateRange: virtualizer.calculateRange,
      scrollToIndex: virtualizer.scrollToIndex,
      scrollToOffset: virtualizer.scrollToOffset,
    };
  });

  const windowHeight = typeof windowSize !== 'object' ? windowSize : windowSize.height;
  const windowWidth = typeof windowSize !== 'object' ? windowSize : windowSize.width;

  const { horizontal } = virtualizer.options;
  const items = virtualizer.getVirtualItems();
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
      <div
        style={{
          height: horizontal ? '100%' : `${virtualizer.getTotalSize()}px`,
          position: 'relative',
          width: horizontal ? `${virtualizer.getTotalSize()}px` : '100%',
        }}
      >
        {items.map((item) => {
          return (
            <div
              style={{
                height: horizontal ? '100%' : `${item.size}px`,
                left: 0,
                position: 'absolute',
                top: 0,
                transform: horizontal ? `translate3d(${item.start}px, 0, 0)` : `translate3d(0, ${item.start}px, 0)`,
                width: horizontal ? `${item.size}px` : '100%',
              }}
              key={item.index}
            >
              {children({ item, virtualizer })}
            </div>
          );
        })}
      </div>
    </div>
  );
});
