import type {
  PartialKeys,
  ScrollToOptions,
  VirtualItem,
  Virtualizer,
  VirtualizerOptions,
} from '@tanstack/react-virtual';

type VirtualizerScrollOptions<
  ScrollElement extends HTMLElement | Window,
  ItemElement extends HTMLElement = HTMLElement,
> = PartialKeys<
  VirtualizerOptions<ScrollElement, ItemElement>,
  'estimateSize' | 'observeElementOffset' | 'observeElementRect' | 'scrollToFn'
>;

export type VirtualOptions<
  ScrollElement extends HTMLElement | Window,
  ItemElement extends HTMLElement = HTMLElement,
> = OmitBy<VirtualizerScrollOptions<ScrollElement, ItemElement>, 'getScrollElement'>;

export type VirtualScrollRendererArgs<
  ScrollElement extends HTMLElement | Window,
  ItemElement extends HTMLElement = HTMLElement,
> = {
  item: VirtualItem<ItemElement>;
  virtualizer: Virtualizer<ScrollElement, ItemElement>;
};

export type VirtualScrollRenderer<
  ScrollElement extends HTMLElement | Window,
  ItemElement extends HTMLElement = HTMLElement,
> = (args: VirtualScrollRendererArgs<ScrollElement, ItemElement>) => React.ReactNode;

export type VirtualImperativeHandler = {
  calculateRange: () => {
    endIndex: number;
    startIndex: number;
  } | null;
  scrollToIndex: (index: number, options?: ScrollToOptions) => void;
  scrollToOffset: (toOffset: number, options?: ScrollToOptions) => void;
};

type SizeValue = string;
export type VirtualWindowSize =
  | {
      height: SizeValue;
      width: SizeValue;
    }
  | SizeValue;
