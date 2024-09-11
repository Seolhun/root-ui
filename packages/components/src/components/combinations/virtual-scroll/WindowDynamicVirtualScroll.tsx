import { useWindowVirtualizer } from '@tanstack/react-virtual';
import * as React from 'react';

import type { VirtualImperativeHandler, VirtualOptions, VirtualScrollRenderer } from './VirtualScroll.types';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface WindowDynamicVirtualScrollProps {
  children: VirtualScrollRenderer<Window, ElementType>;
  /**
   * The space between each item.
   * @default 12
   */
  spaceY?: number;
  virtualOptions: VirtualOptions<Window, ElementType>;
}

const DEFAULT_OPTIONS: Required<Pick<VirtualOptions<ElementType>, 'estimateSize' | 'overscan'>> = {
  estimateSize: () => 30,
  overscan: 5,
};

export type WindowDynamicVirtualScrollImperativeHandler = VirtualImperativeHandler;

/**
 * Must use data-index={item.index} and ref={virtualizer.measureElement} as a props to calculate the size of the item.s
 */
export const WindowDynamicVirtualScroll = React.forwardRef<
  WindowDynamicVirtualScrollImperativeHandler,
  Omit<ElementProps, 'children'> & WindowDynamicVirtualScrollProps
>(({ children, spaceY = 12, virtualOptions, ...others }, ref) => {
  const parentRef = React.useRef<ElementType>(null);

  const virtualizer = useWindowVirtualizer({
    ...DEFAULT_OPTIONS,
    ...virtualOptions,
    scrollMargin: parentRef.current?.offsetTop ?? 0,
  });

  React.useImperativeHandle<WindowDynamicVirtualScrollImperativeHandler, WindowDynamicVirtualScrollImperativeHandler>(
    ref,
    () => {
      return {
        calculateRange: virtualizer.calculateRange,
        scrollToIndex: virtualizer.scrollToIndex,
        scrollToOffset: virtualizer.scrollToOffset,
      };
    },
  );

  const items = virtualizer.getVirtualItems();
  const totalHeight = virtualizer.getTotalSize() + items.length * spaceY;
  return (
    <div
      {...others}
      style={{
        height: `${totalHeight}px`,
        position: 'relative',
        width: '100%',
      }}
      ref={parentRef}
    >
      {items.map((item) => {
        const y = item.start - virtualizer.options.scrollMargin;
        const marginTop = spaceY * item.index;
        return (
          <div
            style={{
              height: `${item.size}px`,
              left: 0,
              position: 'absolute',
              top: 0,
              transform: `translate3d(0, ${y + marginTop}px, 0)`,
              width: '100%',
            }}
            key={item.key}
          >
            {children({ item, virtualizer })}
          </div>
        );
      })}
    </div>
  );
});
