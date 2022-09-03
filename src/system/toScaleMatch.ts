import { curry } from '@fxts/core';

import { RootScale } from './RootTheme.types';
import { match } from './match';

export const toScaleMatch = curry((lookup: Record<RootScale, () => string>, key: RootScale) => {
  return match(lookup, key);
});
