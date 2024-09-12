import { useFloating, useInteractions } from '@floating-ui/react';

import { CommonFloatingOptions } from '../types';

export type TogglerDelay = {
  close: number;
  open: number;
};

export interface TogglerOptions extends CommonFloatingOptions {}

export type TogglerIntersectionReturns = ReturnType<typeof useInteractions>;

export type TogglerFloatingReturns = ReturnType<typeof useFloating>;
