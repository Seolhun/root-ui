import { useWindowVirtualizer } from '@tanstack/react-virtual';
import * as React from 'react';

import type { VirtualImperativeHandler, VirtualOptions, VirtualScrollRenderer } from './VirtualScroll.types';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface WindowFixedVirtualScrollProps {
  children: VirtualScrollRenderer<Window, ElementType>;
  virtualOptions: VirtualOptions<Window, ElementType>;
}

const DEFAULT_OPTIONS: Required<Pick<VirtualOptions<ElementType>, 'estimateSize' | 'overscan'>> = {
  estimateSize: () => 30,
  overscan: 5,
};

export type WindowFixedVirtualScrollImperativeHandler = VirtualImperativeHandler;

export const WindowFixedVirtualScroll = React.forwardRef<
  WindowFixedVirtualScrollImperativeHandler,
  Omit<ElementProps, 'children'> & WindowFixedVirtualScrollProps
>(({ children, virtualOptions, ...others }, ref) => {
  const parentRef = React.useRef<ElementType>(null);

  const virtualizer = useWindowVirtualizer({
    ...DEFAULT_OPTIONS,
    ...virtualOptions,
    scrollMargin: parentRef.current?.offsetTop ?? 0,
  });

  React.useImperativeHandle<WindowFixedVirtualScrollImperativeHandler, WindowFixedVirtualScrollImperativeHandler>(
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
  return (
    <div
      {...others}
      style={{
        height: `${virtualizer.getTotalSize()}px`,
        position: 'relative',
        width: '100%',
      }}
      ref={parentRef}
    >
      {items.map((item) => (
        <div
          style={{
            height: `${item.size}px`,
            left: 0,
            position: 'absolute',
            top: 0,
            transform: `translate3d(0, ${item.start - virtualizer.options.scrollMargin}px, 0)`,
            width: '100%',
          }}
          data-index={item.index}
          key={item.key}
        >
          {children({ item, virtualizer })}
        </div>
      ))}
    </div>
  );
});
