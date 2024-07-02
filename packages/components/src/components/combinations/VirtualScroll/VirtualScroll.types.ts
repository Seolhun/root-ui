import { PartialKeys, VirtualItem, Virtualizer, VirtualizerOptions } from '@tanstack/react-virtual';

export type OmitByKey<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

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
> = OmitByKey<VirtualizerScrollOptions<ScrollElement, ItemElement>, 'getScrollElement'>;

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
