import { PartialKeys, VirtualItem, Virtualizer, VirtualizerOptions } from '@tanstack/react-virtual';

import { OmitBy } from '~/types';

export type VirtualizerScrollOptions<
  ScrollElement extends Element | Window,
  ItemElement extends HTMLElement = HTMLElement,
> = PartialKeys<
  VirtualizerOptions<ScrollElement, ItemElement>,
  'estimateSize' | 'getScrollElement' | 'observeElementOffset' | 'observeElementRect' | 'scrollToFn'
>;

export type VirtualOptions<
  ScrollElement extends Element | Window,
  ItemElement extends HTMLElement = HTMLElement,
> = OmitBy<VirtualizerScrollOptions<ScrollElement, ItemElement>, 'getScrollElement'>;

export type VirtualScrollRendererArgs<
  ScrollElement extends Element | Window,
  ItemElement extends HTMLElement = HTMLElement,
> = {
  item: VirtualItem<ItemElement>;
  virtualizer: Virtualizer<ScrollElement, ItemElement>;
};
export type VirtualScrollRenderer<
  ScrollElement extends Element | Window,
  ItemElement extends HTMLElement = HTMLElement,
> = (args: VirtualScrollRendererArgs<ScrollElement, ItemElement>) => React.ReactNode;
