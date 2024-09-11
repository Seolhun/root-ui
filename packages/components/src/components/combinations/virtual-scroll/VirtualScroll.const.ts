import { VirtualOptions } from './VirtualScroll.types';

export const DEFAULT_OPTIONS: Required<Pick<VirtualOptions<HTMLElement>, 'estimateSize' | 'overscan'>> = {
  estimateSize: () => 30,
  overscan: 5,
};
