import { useVirtualizer, VirtualizerOptions } from '@tanstack/react-virtual';
import * as React from 'react';

import { useMergeRefs } from '~/hooks';

import { VirtualizerScrollOptions, VirtualScrollRenderer } from './VirtualScroll.types';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DynamicVirtualScrollProps {
  children: VirtualScrollRenderer<ElementType>;
  height: number;
  virtualOptions: VirtualizerScrollOptions<ElementType, HTMLElement>;
}

const DEFAULT_OPTIONS: Required<Pick<VirtualizerOptions<ElementType, HTMLElement>, 'estimateSize' | 'overscan'>> = {
  estimateSize: () => 36,
  overscan: 5,
};

export const DynamicVirtualScroll = React.forwardRef<
  ElementType,
  Omit<ElementProps, 'children'> & DynamicVirtualScrollProps
>(({ children, height, virtualOptions, ...others }, ref) => {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const mergedRefs = useMergeRefs(parentRef, ref);

  const virtualizer = useVirtualizer({
    ...DEFAULT_OPTIONS,
    ...virtualOptions,
    getScrollElement: () => parentRef.current,
  });

  const items = virtualizer.getVirtualItems();
  return (
    <div
      {...others}
      style={{
        contain: 'strict',
        height: `${height}px`,
        overflowY: 'auto',
        width: '100%',
      }}
      ref={mergedRefs}
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          position: 'relative',
          width: '100%',
        }}
      >
        {items.map((item) => (
          <div
            style={{
              left: 0,
              position: 'absolute',
              top: 0,
              transform: `translate3d(0, ${item.start - virtualizer.options.scrollMargin}px, 0)`,
              width: '100%',
            }}
            data-index={item.index}
            key={item.key}
            ref={virtualizer.measureElement}
          >
            {children({ item, virtualizer })}
          </div>
        ))}
      </div>
    </div>
  );
});
