import { useWindowVirtualizer, VirtualizerOptions } from '@tanstack/react-virtual';
import * as React from 'react';

import { useMergeRefs } from '~/hooks';

import { VirtualizerScrollOptions, VirtualScrollRenderer } from './VirtualScroll.types';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface WindowVirtualScrollProps {
  children: VirtualScrollRenderer<Window, ElementType>;
  height: number;
  virtualOptions: VirtualizerScrollOptions<Window, ElementType>;
}

const DEFAULT_OPTIONS: Required<Pick<VirtualizerOptions<Window, ElementType>, 'estimateSize' | 'overscan'>> = {
  estimateSize: () => 36,
  overscan: 5,
};

export const WindowVirtualScroll = React.forwardRef<
  ElementType,
  Omit<ElementProps, 'children'> & WindowVirtualScrollProps
>(({ children, height, virtualOptions, ...others }, ref) => {
  const parentRef = React.useRef<HTMLDivElement | null>(null);
  const mergedRefs = useMergeRefs(parentRef, ref);

  const virtualizer = useWindowVirtualizer({
    ...DEFAULT_OPTIONS,
    ...virtualOptions,
    scrollMargin: parentRef.current?.offsetTop ?? 0,
  });

  const items = virtualizer.getVirtualItems();
  return (
    <div
      {...others}
      style={{
        height: `${virtualizer.getTotalSize()}px`,
        position: 'relative',
        width: '100%',
      }}
      ref={mergedRefs}
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
          key={item.key}
        >
          {children({ item, virtualizer })}
        </div>
      ))}
    </div>
  );
});
